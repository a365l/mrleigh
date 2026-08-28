import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { Section, SectionTitle, GlassCard, fadeUp, stagger } from './shared';

const Steps = styled.ol`
  list-style: none;
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  counter-reset: step;
  margin-bottom: ${theme.spacing.lg};
`;

const Step = styled(motion.li)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  position: relative;
  counter-increment: step;

  &::before {
    content: counter(step);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    font-weight: 700;
    font-family: ${theme.fonts.heading};
    margin-bottom: ${theme.spacing.md};
  }

  h3 {
    color: ${theme.colors.light};
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

const DiagnosticCard = styled(GlassCard)`
  border: 1px solid rgba(246, 177, 122, 0.5);
  text-align: center;
  max-width: 760px;
  margin: 0 auto;

  h3 {
    color: ${theme.colors.accent};
    font-size: 1.25rem;
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.textLight};
    opacity: 0.9;
    line-height: 1.75;
  }
`;

const steps = [
  {
    title: 'Send an enquiry',
    text: 'Fill in the form below. It takes about two minutes, and there is no commitment at this stage.',
  },
  {
    title: 'Free diagnostic session',
    text: 'One hour, online or in person. We find out exactly where the student stands against the spec.',
  },
  {
    title: 'Get the plan',
    text: 'You receive a one-page plan: weak topics, the order to fix them, and what I would do about each.',
  },
  {
    title: 'Regular sessions',
    text: 'Same slot each week. Progress is tracked against the plan, so everyone can see it moving.',
  },
];

export const HowItWorks = () => (
  <Section id="how" aria-label="How it works">
    <div className="container">
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        How it works
      </SectionTitle>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Steps>
          {steps.map((step) => (
            <Step key={step.title} variants={fadeUp}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Step>
          ))}
        </Steps>
        <DiagnosticCard variants={fadeUp}>
          <h3>The first session is free, and it's a diagnostic, not a taster</h3>
          <p>
            You leave with the one-page plan either way: weak topics, the order
            to fix them, and what I'd do about each. Keep it, use it yourself,
            or book more sessions. Your call.
          </p>
        </DiagnosticCard>
      </motion.div>
    </div>
  </Section>
);
