import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { stations } from '../../data/tutoring';
import { Section, SectionTitle, SectionIntro, fadeUp, stagger } from './shared';

// Tube-map-style route strip: horizontal on desktop, vertical on mobile.
const RouteStrip = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 820px;
  margin: ${theme.spacing.xl} auto ${theme.spacing.lg};
  padding: 0 ${theme.spacing.sm};

  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 24px;
    right: 24px;
    height: 6px;
    border-radius: 3px;
    background: ${theme.colors.gradient.accent};
    box-shadow: 0 0 12px rgba(246, 177, 122, 0.4);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.lg};
    max-width: 280px;
    margin: ${theme.spacing.lg} auto;

    &::before {
      top: 10px;
      bottom: 10px;
      left: 7px;
      right: auto;
      width: 6px;
      height: auto;
    }
  }
`;

const Station = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  width: 20px;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    width: auto;
    gap: ${theme.spacing.md};
  }
`;

const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  border: 4px solid ${theme.colors.accent};
  flex-shrink: 0;
`;

const Label = styled.span`
  color: ${theme.colors.textLight};
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 0.95rem;
  }
`;

const Modes = styled(motion.div)`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 820px;
  margin: 0 auto;
`;

const Mode = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};

  h3 {
    color: ${theme.colors.accent};
    font-size: 1.05rem;
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.textLight};
    opacity: 0.85;
    font-size: 0.92rem;
    line-height: 1.7;
  }
`;

export const CoverageSection = () => (
  <Section id="coverage" aria-label="Where I teach">
    <div className="container">
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Where
      </SectionTitle>
      <SectionIntro
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        I live in Epping and go to school in Debden, so this stretch of the
        eastern Central line is home turf. Online works from anywhere.
      </SectionIntro>
      <RouteStrip
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="list"
        aria-label="Stations covered for in-person tutoring"
      >
        {stations.map((station) => (
          <Station key={station} role="listitem">
            <Dot aria-hidden="true" />
            <Label>{station}</Label>
          </Station>
        ))}
      </RouteStrip>
      <Modes
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Mode variants={fadeUp}>
          <h3>In person</h3>
          <p>
            Within about 15 minutes of the stations above, at the student's
            home with a parent or guardian present, or in a local library.
          </p>
        </Mode>
        <Mode variants={fadeUp}>
          <h3>Online</h3>
          <p>
            Anywhere. Video call with a shared whiteboard; everything we write
            during the session is shared with you afterwards.
          </p>
        </Mode>
      </Modes>
    </div>
  </Section>
);
