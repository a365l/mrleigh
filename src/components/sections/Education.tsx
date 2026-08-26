import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGraduationCap, FaFlask, FaBookOpen } from 'react-icons/fa';

interface Result {
  subject: string;
  grade: number;
  note?: string;
}

const stemResults: Result[] = [
  { subject: 'Mathematics', grade: 8 },
  { subject: 'Physics', grade: 8 },
  { subject: 'Chemistry', grade: 8 },
  { subject: 'Computer Science', grade: 8 },
  { subject: 'Biology', grade: 7 },
];

const otherResults: Result[] = [
  { subject: 'Geography', grade: 7 },
  { subject: 'English Literature', grade: 7 },
  { subject: 'English Language', grade: 7, note: 'Spoken Language: Merit' },
  { subject: 'Physical Education', grade: 6 },
];

const allResults = [...stemResults, ...otherResults];
const gradeSevenPlus = allResults.filter((result) => result.grade >= 7).length;
const gradeEights = allResults.filter((result) => result.grade === 8).length;

const EducationSection = styled.section`
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 640px;
  margin: calc(${theme.spacing.md} + ${theme.spacing.sm}) auto ${theme.spacing.xl};
  color: ${theme.colors.textLight};
  opacity: 0.8;
  line-height: 1.7;
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const Stat = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.md};
  text-align: center;
`;

const StatValue = styled.span`
  display: block;
  font-family: ${theme.fonts.heading};
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 1.2;
`;

const StatLabel = styled.span`
  display: block;
  margin-top: ${theme.spacing.xs};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.colors.textLight};
  opacity: 0.75;
`;

const Card = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.md};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
`;

const CardIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.1rem;
`;

const ResultList = styled.ul`
  list-style: none;
  display: grid;
  gap: ${theme.spacing.xs};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${theme.spacing.lg};
  }
`;

const ResultRow = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.xs} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Subject = styled.span`
  color: ${theme.colors.textLight};
  opacity: 0.9;
  font-size: 0.95rem;
`;

const Note = styled.span`
  display: block;
  font-size: 0.75rem;
  font-style: italic;
  opacity: 0.65;
`;

const Grade = styled.span<{ top: boolean }>`
  flex-shrink: 0;
  min-width: 32px;
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  padding: 2px 8px;
  background: ${(props) => (props.top ? theme.colors.gradient.accent : theme.colors.glass.card)};
  color: ${(props) => (props.top ? theme.colors.textDark : theme.colors.textLight)};
`;

const NextStep = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Footnote = styled.p`
  text-align: center;
  margin-top: ${theme.spacing.md};
  font-size: 0.8rem;
  color: ${theme.colors.textLight};
  opacity: 0.6;
`;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ResultGroup = ({
  title,
  icon,
  results,
}: {
  title: string;
  icon: React.ReactNode;
  results: Result[];
}) => (
  <Card initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
    <CardHeader>
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <ResultList>
      {results.map((result) => (
        <ResultRow key={result.subject}>
          <Subject>
            {result.subject}
            {result.note && <Note>{result.note}</Note>}
          </Subject>
          <Grade top={result.grade >= 8}>{result.grade}</Grade>
        </ResultRow>
      ))}
    </ResultList>
  </Card>
);

const Education = () => {
  return (
    <EducationSection id="education" role="region" aria-label="Education">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Education
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          GCSEs sat June 2026 at Debden Park High School - grade 8s in maths, physics, chemistry
          and computer science, the four subjects the rest of this site is built on.
        </SectionSubtitle>

        <Inner>
          <StatRow>
            <Stat initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <StatValue>{allResults.length}</StatValue>
              <StatLabel>GCSEs</StatLabel>
            </Stat>
            <Stat initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <StatValue>{gradeEights}</StatValue>
              <StatLabel>Grade 8s</StatLabel>
            </Stat>
            <Stat initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <StatValue>
                {gradeSevenPlus}/{allResults.length}
              </StatValue>
              <StatLabel>Grade 7+</StatLabel>
            </Stat>
          </StatRow>

          <ResultGroup title="STEM" icon={<FaFlask aria-hidden="true" />} results={stemResults} />
          <ResultGroup
            title="Humanities & Other"
            icon={<FaBookOpen aria-hidden="true" />}
            results={otherResults}
          />

          <Card initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <CardHeader>
              <CardIcon>
                <FaGraduationCap aria-hidden="true" />
              </CardIcon>
              <CardTitle>Now: A-levels, Year 12 (2026-2028)</CardTitle>
            </CardHeader>
            <NextStep>
              Maths, Further Maths, Physics and Computer Science - chosen to line up with an
              aerospace engineering degree, and to feed straight back into the builds on this page.
            </NextStep>
          </Card>

          <Footnote>Grades as issued on my statement of results, 20 August 2026.</Footnote>
        </Inner>
      </div>
    </EducationSection>
  );
};

export default Education;
