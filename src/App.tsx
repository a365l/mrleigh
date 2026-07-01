import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import styled from '@emotion/styled';

// Lazy load non-critical components
const Journey = lazy(() => import('./components/sections/Journey'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

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

const Home = () => (
  <Layout>
    {/* Hero section is critical for LCP, so keep it eager loaded */}
    <Hero />

    {/* Wrap non-critical sections in Suspense */}
    <Suspense fallback={<LoadingFallback>Loading journey...</LoadingFallback>}>
      <Journey />
    </Suspense>
    <Suspense fallback={<LoadingFallback>Loading projects...</LoadingFallback>}>
      <Projects />
    </Suspense>
    <Suspense fallback={<LoadingFallback>Loading skills...</LoadingFallback>}>
      <Skills />
    </Suspense>
    <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
      <Contact />
    </Suspense>
  </Layout>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={
              <Suspense fallback={<LoadingFallback>Loading project...</LoadingFallback>}>
                <ProjectDetail />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
