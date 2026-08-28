import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { AccentButton, GhostButton, fadeUp, stagger } from './shared';

const GhostRouterLink = GhostButton.withComponent(Link);

const Hero = styled.section`
  min-height: 82vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: ${theme.spacing.xl} 0;

  .container {
    max-width: 900px;
    text-align: center;
    z-index: 2;
  }
`;

const Eyebrow = styled(motion.p)`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.md};
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.4rem, 6vw, 4rem);
  color: ${theme.colors.light};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.15;
`;

const Sub = styled(motion.p)`
  font-size: clamp(1.05rem, 2.2vw, 1.3rem);
  color: ${theme.colors.textLight};
  opacity: 0.9;
  line-height: 1.8;
  max-width: 680px;
  margin: 0 auto ${theme.spacing.lg};
`;

const Buttons = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.lg};
`;

const TrustStrip = styled(motion.ul)`
  list-style: none;
  display: flex;
  gap: ${theme.spacing.sm};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.spacing.lg};

  li {
    background: ${theme.colors.glass.card};
    border: 1px solid rgba(246, 177, 122, 0.35);
    border-radius: 20px;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    font-size: 0.9rem;
    color: ${theme.colors.textLight};
    opacity: 0.95;
  }
`;

export const TutoringHero = () => (
  <Hero id="hero" aria-label="Tutoring introduction">
    <div className="container">
      <motion.div variants={stagger} initial="hidden" animate="visible">
        <Eyebrow variants={fadeUp}>GCSE Tutoring</Eyebrow>
        <Headline variants={fadeUp}>Revision, engineered.</Headline>
        <Sub variants={fadeUp}>
          I'm Alfred, a Year 12 from Epping studying Maths, Further Maths,
          Physics and Computer Science. I sat my GCSEs in June 2026, and I
          tutor Maths, Physics and Computer Science the way I run my
          engineering projects: structured, documented, and honest about
          what's working.
        </Sub>
        <Buttons variants={fadeUp}>
          <AccentButton href="#book" whileTap={{ scale: 0.96 }}>
            Book a free first session
          </AccentButton>
          <GhostRouterLink to="/projects/quadcopter">
            See how I work
          </GhostRouterLink>
        </Buttons>
        <TrustStrip variants={fadeUp} aria-label="Key facts">
          <li>Four grade 8s: Maths, Physics, Chemistry, Computer Science</li>
          <li>Sat June 2026, current specs</li>
          <li>Online, or in person on the eastern Central line</li>
          <li>First session free</li>
        </TrustStrip>
      </motion.div>
    </div>
  </Hero>
);
