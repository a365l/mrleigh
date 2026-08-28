import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { subjects, primaryNote } from '../../data/tutoring';
import { Section, SectionTitle, SectionIntro, fadeUp, stagger } from './shared';

const LeadGrid = styled(motion.div)`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-bottom: ${theme.spacing.lg};
`;

const LeadCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border: 1px solid rgba(246, 177, 122, 0.4);
  border-radius: 16px;
  padding: ${theme.spacing.lg};
  text-align: center;

  h3 {
    color: ${theme.colors.light};
    font-size: 1.3rem;
    margin-bottom: ${theme.spacing.xs};
  }

  span {
    display: inline-block;
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    font-weight: 700;
    border-radius: 12px;
    padding: 2px 12px;
    font-size: 0.85rem;
  }
`;

const AlsoRow = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.textLight};
  opacity: 0.8;
  font-size: 0.95rem;

  strong {
    color: ${theme.colors.accent};
    font-weight: 600;
  }
`;

const PrimaryNote = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.textLight};
  opacity: 0.55;
  font-size: 0.85rem;
  margin-top: ${theme.spacing.md};
`;

export const SubjectsSection = () => {
  const lead = subjects.filter((s) => s.lead);
  const rest = subjects.filter((s) => !s.lead);

  return (
    <Section id="subjects" aria-label="Subjects offered">
      <div className="container">
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Subjects
        </SectionTitle>
        <SectionIntro
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Specialising in STEM: these are the subjects with a grade 8 and a
          real project behind them.
        </SectionIntro>
        <LeadGrid
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lead.map((s) => (
            <LeadCard key={s.name} variants={fadeUp}>
              <h3>{s.name}</h3>
              <span>Grade {s.grade}</span>
            </LeadCard>
          ))}
        </LeadGrid>
        <AlsoRow
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Also offered:{' '}
          {rest.map((s, i) => (
            <span key={s.name}>
              <strong>{s.name}</strong> ({s.grade}){i < rest.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </AlsoRow>
        <PrimaryNote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {primaryNote}
        </PrimaryNote>
      </div>
    </Section>
  );
};
