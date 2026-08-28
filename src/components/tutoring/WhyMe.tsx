import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';
import { Section, SectionTitle, GlassCard, CardGrid, fadeUp, stagger } from './shared';

const CardTitle = styled.h3`
  color: ${theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.md};
`;

const CardText = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.88;
  line-height: 1.75;
  font-size: 0.98rem;
`;

const CardLink = styled(Link)`
  display: inline-block;
  margin-top: ${theme.spacing.md};
  color: ${theme.colors.accent};
  font-weight: 600;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateX(4px);
  }
`;

const cards = [
  {
    title: 'The grades are recent',
    text: 'Nine GCSEs in June 2026: grade 8s in Maths, Physics, Chemistry and Computer Science. Not a decade-old memory of the course. These are the current specifications and the actual papers, sat months ago.',
  },
  {
    title: 'I structure everything',
    text: 'I design and build real engineering projects, a from-scratch quadcopter and a 72V electric motorcycle, and I document every decision, equation and mistake in public. That is the skill I bring to revision: turning a messy spec into a clear, ordered plan.',
    link: { to: '/projects/quadcopter', label: 'Read the engineering log →' },
  },
  {
    title: 'Close enough to remember',
    text: 'I remember exactly which topics feel impossible, and what actually fixed them, because it was months ago, not years. Explanations from someone who just made the same climb.',
  },
];

export const WhyMe = () => (
  <Section id="why" aria-label="Why choose me">
    <div className="container">
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Why me
      </SectionTitle>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CardGrid>
          {cards.map((card) => (
            <GlassCard key={card.title} variants={fadeUp}>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
              {card.link && (
                <CardLink to={card.link.to}>{card.link.label}</CardLink>
              )}
            </GlassCard>
          ))}
        </CardGrid>
      </motion.div>
    </div>
  </Section>
);
