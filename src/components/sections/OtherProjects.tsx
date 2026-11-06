import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFan, FaLaptop, FaRobot, FaGlobe, FaBrain, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import pcBuild1Img from '../../assets/journey-pc-build-1.jpg';
import pcBuild2Img from '../../assets/journey-pc-build-2.jpg';
import repair1Img from '../../assets/journey-repair-1.jpg';
import repair2Img from '../../assets/journey-repair-2.jpg';
import repair3Img from '../../assets/journey-hardware-repair-3.jpg';
import cryptoBotImg from '../../assets/journey-crypto-bot.jpg';
import webAppImg from '../../assets/journey-webapp.jpg';
import studyTrackerImg from '../../assets/studytracker.jpg';
import studyTrackerTopicsImg from '../../assets/studytracker-topics.jpg';

interface EvidencePhoto {
  src: string;
  caption: string;
}

interface SideProjectLink {
  label: string;
  href: string;
  /** Internal routes use the router; everything else opens in a new tab. */
  internal?: boolean;
}

interface SideProject {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  photos: EvidencePhoto[];
  links?: SideProjectLink[];
}

const sideProjects: SideProject[] = [
  {
    id: 'study-tracker',
    title: 'A-Level Study Tracker',
    description:
      'A desktop app I specified and directed through AI, then put into daily use. 478 topics across three A-level specs, revision scheduled by spaced repetition, and every one of its 666 revision links verified rather than trusted.',
    icon: <FaBrain aria-hidden="true" />,
    photos: [
      { src: studyTrackerImg, caption: 'The overview, with progress across all three subjects.' },
      { src: studyTrackerTopicsImg, caption: 'Maths topics, each with its stage, confidence rating and next review.' },
    ],
    links: [
      { label: 'Read the case study', href: '/projects/study-tracker', internal: true },
      { label: 'Try the demo', href: '/study-tracker-demo/web/index.html' },
    ],
  },
  {
    id: 'pc-building',
    title: 'PC Building',
    description: 'Locating and repairing faulty parts in PCs, then upgrading them with fresh internals - building and watercooling full rigs from bare frames to finished RGB builds.',
    icon: <FaFan aria-hidden="true" />,
    photos: [
      { src: pcBuild1Img, caption: 'Mid-build: radiator, fans, and cable management.' },
      { src: pcBuild2Img, caption: 'Finished RGB tower on the desk.' },
    ],
  },
  {
    id: 'hardware-repair',
    title: 'Hardware Repair',
    description: 'Diagnosing and repairing laptops down to the motherboard level.',
    icon: <FaLaptop aria-hidden="true" />,
    photos: [
      { src: repair1Img, caption: 'A laptop motherboard out for inspection.' },
      { src: repair2Img, caption: 'Full teardown, down to the chassis.' },
      { src: repair3Img, caption: 'Mid-repair, magnifier goggles on.' },
    ],
  },
  {
    id: 'automation-bots',
    title: 'Automation & Bots',
    description: 'Writing Python bots for automation and algorithmic trading, including one that ran live against real market data.',
    icon: <FaRobot aria-hidden="true" />,
    photos: [{ src: cryptoBotImg, caption: 'Trading bot in development.' }],
  },
  {
    id: 'web-apps',
    title: 'Web & App Projects',
    description: 'Built small web apps and sites just to see if I could.',
    icon: <FaGlobe aria-hidden="true" />,
    photos: [{ src: webAppImg, caption: 'A small goal-tracking app I put together.' }],
  },
];
const Wrapper = styled.div`
  max-width: 900px;
  margin: calc(${theme.spacing.xl} * 1.25) auto 0;
`;

const MoreHeading = styled(motion.h3)`
  color: ${theme.colors.light};
  font-size: clamp(1.15rem, 2.5vw, 1.4rem);
  margin-bottom: ${theme.spacing.xs};
  position: relative;
  padding-top: ${theme.spacing.lg};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const MoreIntro = styled(motion.p)`
  color: ${theme.colors.textLight};
  opacity: 0.75;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 640px;
`;

const SideProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  text-align: left;
`;

const SideProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  transition: transform ${theme.transitions.default}, box-shadow ${theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.12);
  }
`;

const SideProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const SideProjectIcon = styled.div`
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

const SideProjectTitle = styled.h4`
  color: ${theme.colors.light};
  font-size: 1rem;
`;

const SideProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.75;
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: ${theme.spacing.sm};
`;

const SideProjectPhotos = styled.div`
  display: flex;
  gap: ${theme.spacing.xs};
`;

const SideProjectThumb = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const SideProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const sideLinkStyles = `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(246, 177, 122, 0.1);
  border: 1px solid rgba(246, 177, 122, 0.45);
  color: #F6B17A;
  transition: all 0.3s ease;

  svg {
    font-size: 0.65rem;
  }

  &:hover {
    background: linear-gradient(135deg, #F6B17A 0%, #f8c396 100%);
    color: #2A2D3E;
    border-color: transparent;
    transform: translateY(-1px);
  }
`;

const SideProjectRouteLink = styled(Link)`
  ${sideLinkStyles}
`;

const SideProjectExternalLink = styled.a`
  ${sideLinkStyles}`;

/**
 * The smaller builds, shown under the featured projects so the headline work
 * is read first. Lifted out of the Journey timeline, where it used to sit
 * above the featured projects.
 */
const OtherProjects = () => (
  <Wrapper>
  <MoreHeading
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    Other Things I've Built
  </MoreHeading>
  <MoreIntro
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    Smaller builds that never got their own case study. They are here because the habit
    matters more than any one of them: if something looked interesting, I took it apart
    or made one.
  </MoreIntro>

  <SideProjectsGrid
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
  >
    {sideProjects.map((project) => (
      <SideProjectCard
        key={project.id}
        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
      >
        <SideProjectHeader>
          <SideProjectIcon>{project.icon}</SideProjectIcon>
          <SideProjectTitle>{project.title}</SideProjectTitle>
        </SideProjectHeader>
        <SideProjectDescription>{project.description}</SideProjectDescription>
        <SideProjectPhotos>
          {project.photos.map((photo) => (
            <SideProjectThumb key={photo.src} src={photo.src} alt={photo.caption} title={photo.caption} loading="lazy" />
          ))}
        </SideProjectPhotos>
        {project.links && project.links.length > 0 && (
          <SideProjectLinks>
            {project.links.map((link) =>
              link.internal ? (
                <SideProjectRouteLink key={link.href} to={link.href}>
                  {link.label}
                  <FaArrowRight aria-hidden="true" />
                </SideProjectRouteLink>
              ) : (
                <SideProjectExternalLink key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <FaExternalLinkAlt aria-hidden="true" />
                </SideProjectExternalLink>
              ),
            )}
          </SideProjectLinks>
        )}
      </SideProjectCard>
    ))}
  </SideProjectsGrid>
  </Wrapper>
);

export default OtherProjects;
