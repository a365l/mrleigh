import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { FloatingNav } from '../navigation/FloatingNav';
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation';

interface LayoutProps {
  children: ReactNode;
  /** Overrides the floating-nav dots + keyboard nav (defaults to homepage sections). */
  sections?: { id: string; name: string }[];
}

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;
    
    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 70% 30%,
      ${theme.colors.accent}15 0%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${theme.colors.glass.background}, transparent);
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

const Logo = styled(motion.div)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div<{ open: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    color: ${theme.colors.textLight};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .nav-accent {
    color: ${theme.colors.accent};
    border: 1px solid ${theme.colors.accent}55;
    border-radius: 20px;

    &:hover {
      color: ${theme.colors.textDark};
      background: ${theme.colors.gradient.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    position: absolute;
    /* Escape the 90%-wide .container so the panel runs edge to edge,
       flush with the header's bottom (its md padding). */
    top: calc(100% + ${theme.spacing.md});
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    flex-direction: column;
    gap: ${theme.spacing.xs};
    padding: ${theme.spacing.md} ${theme.spacing.lg} ${theme.spacing.lg};
    background: rgba(42, 45, 62, 0.97);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);

    a {
      padding: ${theme.spacing.md};
      font-size: 1.05rem;
    }

    .nav-accent {
      text-align: center;
      margin-top: ${theme.spacing.sm};
    }
  }
`;

const MenuButton = styled.button<{ open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  border-radius: 8px;
  transition: background ${theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background: ${theme.colors.light};
    transition: transform ${theme.transitions.default}, opacity ${theme.transitions.default};
    transform-origin: center;
  }

  span:nth-of-type(1) {
    transform: ${(props) => (props.open ? 'translateY(7px) rotate(45deg)' : 'none')};
  }

  span:nth-of-type(2) {
    opacity: ${(props) => (props.open ? 0 : 1)};
  }

  span:nth-of-type(3) {
    transform: ${(props) => (props.open ? 'translateY(-7px) rotate(-45deg)' : 'none')};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, ${theme.colors.glass.background}, transparent);
  }
`;

export const Layout = ({ children, sections }: LayoutProps) => {
  const sectionIds = useMemo(() => sections?.map((s) => s.id), [sections]);
  useKeyboardNavigation(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info(
      'Keyboard Navigation:\n',
      '- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n',
      '- Home: Go to top\n',
      '- End: Go to bottom'
    );
  }, []);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>

      <Header role="banner">
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
            >
              Portfolio
            </Logo>
            <MenuButton
              open={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span />
              <span />
              <span />
            </MenuButton>
            <NavLinks id="primary-nav" role="list" open={menuOpen}>
              <a href="/#journey" role="listitem" aria-label="Journey section" onClick={closeMenu}>Journey</a>
              <a href="/#projects" role="listitem" aria-label="Projects section" onClick={closeMenu}>Projects</a>
              <a href="/#skills" role="listitem" aria-label="Skills section" onClick={closeMenu}>Skills</a>
              <a href="/#education" role="listitem" aria-label="Education section" onClick={closeMenu}>Education</a>
              <a href="/#contact" role="listitem" aria-label="Contact section" onClick={closeMenu}>Contact</a>
              <Link to="/tutoring" role="listitem" aria-label="Tutoring page" className="nav-accent" onClick={closeMenu}>Tutoring</Link>
            </NavLinks>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav sections={sections} />
      <Footer role="contentinfo">
        <div className="container">
          <p>© {new Date().getFullYear()} Alfie Leigh. All rights reserved.</p>
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
