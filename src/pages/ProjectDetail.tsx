import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Navigate, useParams } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { ProjectLayout } from '../components/layout/ProjectLayout';
import { getProjectBySlug } from '../data/projectDetails';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      ${theme.colors.primary} 0%,
      rgba(42, 45, 62, 0.6) 55%,
      rgba(42, 45, 62, 0.25) 100%
    );
  }
`;

const HeroImage = styled.div<{ imageUrl: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: ${theme.spacing.xl} 0;
`;

const HeroCard = styled.div`
  display: inline-block;
  max-width: 900px;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const Tagline = styled(motion.p)`
  color: ${theme.colors.accent};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: clamp(0.8rem, 1.6vw, 0.95rem);
  margin-bottom: ${theme.spacing.sm};
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  color: ${theme.colors.light};
  line-height: 1.1;
`;

const Section = styled.section`
  padding: ${theme.spacing.xl} 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  padding-bottom: ${theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const Summary = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.8;
  color: ${theme.colors.textLight};
  opacity: 0.9;
  max-width: 800px;
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const StatCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const StatValue = styled.div`
  font-size: clamp(1.1rem, 2.4vw, 1.4rem);
  font-weight: 700;
  color: ${theme.colors.light};
  margin-bottom: ${theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${theme.colors.textLight};
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const HighlightsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.md};
`;

const HighlightCard = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  color: ${theme.colors.textLight};
  line-height: 1.6;

  svg {
    flex-shrink: 0;
    color: ${theme.colors.accent};
    margin-top: 4px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  padding-left: ${theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, ${theme.colors.accent}, transparent);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: ${theme.spacing.lg};

  &:last-of-type {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(-${theme.spacing.xl} + 3px);
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.accent};
    box-shadow: 0 0 0 4px ${theme.colors.glass.card};
  }
`;

const TimelinePhaseLabel = styled.span`
  color: ${theme.colors.accent};
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
`;

const TimelineTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.15rem;
  margin: ${theme.spacing.xs} 0 ${theme.spacing.xs};
`;

const TimelineDescription = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.85;
  line-height: 1.6;
  max-width: 700px;
`;

const ChallengesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.md};
`;

const ChallengeCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.lg};
`;

const ChallengeLabel = styled.div`
  color: ${theme.colors.accent};
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${theme.spacing.xs};
`;

const ChallengeText = styled.p`
  color: ${theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const OutcomeFigure = styled(motion.figure)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
`;

const OutcomeImage = styled.img`
  width: auto;
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
`;

const OutcomeCaption = styled.figcaption`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  color: ${theme.colors.textLight};
  opacity: 0.9;
  font-style: italic;
  line-height: 1.6;
`;

const CTASection = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  padding-top: ${theme.spacing.lg};
`;

const CTALink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 600;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 50px;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(246, 177, 122, 0.3);
  }
`;

const CTALinkSecondary = styled(CTALink)`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.textLight};
`;

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <ProjectLayout>
      <HeroSection role="region" aria-label={`${project.title} overview`}>
        <HeroImage imageUrl={project.heroImage} role="img" aria-label={project.title} />
        <div className="container">
          <HeroContent>
            <HeroCard>
              <Tagline initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                {project.tagline}
              </Tagline>
              <Title initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                {project.title}
              </Title>
            </HeroCard>
          </HeroContent>
        </div>
      </HeroSection>

      <Section>
        <div className="container">
          <Summary initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            {project.summary}
          </Summary>

          <StatsGrid initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {project.stats.map((stat) => (
              <StatCard key={stat.label} variants={fadeUp}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Key Highlights
          </SectionTitle>
          <HighlightsGrid initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {project.highlights.map((highlight) => (
              <HighlightCard key={highlight} variants={fadeUp}>
                <FaCheckCircle aria-hidden="true" />
                <span>{highlight}</span>
              </HighlightCard>
            ))}
          </HighlightsGrid>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Technology & Disciplines
          </SectionTitle>
          <TechStack>
            {project.techStack.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </TechStack>
        </div>
      </Section>

      {project.timeline.length > 0 && (
        <Section>
          <div className="container">
            <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Build Timeline
            </SectionTitle>
            <Timeline initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {project.timeline.map((phase) => (
                <TimelineItem key={phase.phase} variants={fadeUp}>
                  <TimelinePhaseLabel>Phase {phase.phase}</TimelinePhaseLabel>
                  <TimelineTitle>{phase.title}</TimelineTitle>
                  <TimelineDescription>{phase.description}</TimelineDescription>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Section>
      )}

      {project.challenges.length > 0 && (
        <Section>
          <div className="container">
            <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Challenges & Solutions
            </SectionTitle>
            <ChallengesGrid initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              {project.challenges.map((item) => (
                <ChallengeCard key={item.challenge} variants={fadeUp}>
                  <ChallengeLabel>Challenge</ChallengeLabel>
                  <ChallengeText>{item.challenge}</ChallengeText>
                  <ChallengeLabel>Solution</ChallengeLabel>
                  <ChallengeText>{item.solution}</ChallengeText>
                </ChallengeCard>
              ))}
            </ChallengesGrid>
          </div>
        </Section>
      )}

      {project.outcomeImage && (
        <Section>
          <div className="container">
            <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              The Outcome
            </SectionTitle>
            <OutcomeFigure initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <OutcomeImage src={project.outcomeImage} alt={`Completed ${project.title}`} />
              {project.outcomeText && <OutcomeCaption>{project.outcomeText}</OutcomeCaption>}
            </OutcomeFigure>
          </div>
        </Section>
      )}

      <Section>
        <div className="container">
          <CTASection initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <CTALink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" />
              View Source on GitHub
            </CTALink>
            {project.liveUrl && (
              <CTALinkSecondary href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt aria-hidden="true" />
                Live Site
              </CTALinkSecondary>
            )}
          </CTASection>
        </div>
      </Section>
    </ProjectLayout>
  );
};

export default ProjectDetail;
