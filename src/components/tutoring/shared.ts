import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

// Shared building blocks for the /tutoring page. Denser than the homepage
// sections (padding-based, not min-height: 100vh) — it reads as a landing
// page, not a scroll experience.

export const Section = styled.section`
  padding: ${theme.spacing.xl} 0;
  position: relative;

  .container {
    max-width: 1100px;
    z-index: 2;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg} 0;
  }
`;

export const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.light};
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

export const SectionIntro = styled(motion.p)`
  text-align: center;
  max-width: 640px;
  margin: 0 auto ${theme.spacing.lg};
  color: ${theme.colors.textLight};
  opacity: 0.85;
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.7;
`;

export const GlassCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  box-shadow: 0 8px 32px rgba(246, 177, 122, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const CardGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
`;

export const AccentButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 30px;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 600;
  transition: all ${theme.transitions.default};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px ${theme.colors.overlay.dark};
  }
`;

export const GhostButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 30px;
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  font-weight: 500;
  border: 1px solid ${theme.colors.accent};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    background: ${theme.colors.gradient.glass};
    color: ${theme.colors.light};
  }
`;

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
