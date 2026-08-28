import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

// Slim homepage banner — the tutoring entry point. Deliberately compact so it
// doesn't dilute the recruiter-facing scroll.
const Strip = styled.section`
  padding: ${theme.spacing.lg} 0;

  @media print {
    display: none;
  }
`;

const StripCard = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(246, 177, 122, 0.35);
  border-radius: 20px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};

  p {
    color: ${theme.colors.textLight};
    opacity: 0.92;
    line-height: 1.6;
    font-size: 0.98rem;

    strong {
      color: ${theme.colors.accent};
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    justify-content: center;
    text-align: center;
  }
`;

const StripLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 30px;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 600;
  white-space: nowrap;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${theme.colors.overlay.dark};
  }
`;

export const TutoringStrip = () => (
  <Strip aria-label="Tutoring">
    <div className="container">
      <StripCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>
          <strong>I also tutor.</strong> GCSE Maths, Physics &amp; Computer
          Science, online or along the eastern Central line. First session
          free.
        </p>
        <StripLink to="/tutoring">Tutoring →</StripLink>
      </StripCard>
    </div>
  </Strip>
);
