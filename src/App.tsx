import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { TutoringStrip } from './components/sections/TutoringStrip';
import { useScrollToHash } from './hooks/useScrollToHash';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { useSk } from './i18n/lang';
import styled from '@emotion/styled';

// Lazy load non-critical components
const Journey = lazy(() => import('./components/sections/Journey'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Education = lazy(() => import('./components/sections/Education'));
const Contact = lazy(() => import('./components/sections/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Tutoring = lazy(() => import('./pages/Tutoring'));
const SkSite = lazy(() => import('./pages/SkSite'));

// Loading fallback component
const LoadingFallback = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  
  @media print {
    display: none;
  }
`;

const Home = () => {
  // Handles /#section links arriving from other pages (e.g. /tutoring).
  useScrollToHash();
  const sk = useSk();

  return (
  <Layout>
    {/* Hero section is critical for LCP, so keep it eager loaded */}
    <Hero />

    {/* Wrap non-critical sections in Suspense */}
    <Suspense fallback={<LoadingFallback>{sk ? sk.layout.loading : 'Loading journey...'}</LoadingFallback>}>
      <Journey />
    </Suspense>
    <Suspense fallback={<LoadingFallback>{sk ? sk.layout.loading : 'Loading projects...'}</LoadingFallback>}>
      <Projects />
    </Suspense>
    <Suspense fallback={<LoadingFallback>{sk ? sk.layout.loading : 'Loading skills...'}</LoadingFallback>}>
      <Skills />
    </Suspense>
    <Suspense fallback={<LoadingFallback>{sk ? sk.layout.loading : 'Loading education...'}</LoadingFallback>}>
      <Education />
    </Suspense>
    <TutoringStrip />
    <Suspense fallback={<LoadingFallback>{sk ? sk.layout.loading : 'Loading contact...'}</LoadingFallback>}>
      <Contact />
    </Suspense>
  </Layout>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tutoring"
            element={
              <Suspense fallback={<LoadingFallback>Loading tutoring...</LoadingFallback>}>
                <Tutoring />
              </Suspense>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<LoadingFallback>Loading project...</LoadingFallback>}>
                <ProjectDetail />
              </Suspense>
            }
          />
          {/* Unlisted Slovak version: the same pages with Slovak copy. Noindex,
              and nothing on the English site links to it. */}
          <Route
            path="/sk"
            element={
              <Suspense fallback={<LoadingFallback>Načítava sa...</LoadingFallback>}>
                <SkSite>
                  <Home />
                </SkSite>
              </Suspense>
            }
          />
          <Route
            path="/sk/projects/:slug"
            element={
              <Suspense fallback={<LoadingFallback>Načítava sa...</LoadingFallback>}>
                <SkSite>
                  <ProjectDetail />
                </SkSite>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
