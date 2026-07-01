import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import {
  FaDesktop,
  FaCode,
  FaTools,
  FaShieldAlt,
  FaMicrochip,
  FaBroadcastTower,
  FaDraftingCompass,
  FaFan,
  FaLaptop,
  FaRobot,
  FaCoins,
  FaGlobe,
  FaChevronDown,
} from 'react-icons/fa';
import firstSolderImg from '../../assets/journey-first-solder.jpg';
import linuxNetworkingImg from '../../assets/journey-linux-networking.jpg';
import roboscanPartsImg from '../../assets/journey-roboscan-parts.jpg';
import roboscanDeviceImg from '../../assets/journey-roboscan-device.jpg';
import pcBuild1Img from '../../assets/journey-pc-build-1.jpg';
import pcBuild2Img from '../../assets/journey-pc-build-2.jpg';
import repair1Img from '../../assets/journey-repair-1.jpg';
import repair2Img from '../../assets/journey-repair-2.jpg';
import cryptoBotImg from '../../assets/journey-crypto-bot.jpg';
import nftImg from '../../assets/journey-nft.jpg';
import webAppImg from '../../assets/journey-webapp.jpg';

interface EvidencePhoto {
  src: string;
  caption: string;
}

interface Milestone {
  id: string;
  age: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  photos?: EvidencePhoto[];
}

interface SideProject {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  photos: EvidencePhoto[];
}

const sideProjects: SideProject[] = [
  {
    id: 'pc-building',
    title: 'PC Building',
    description: 'Building and watercooling my own PCs, from bare frames to full RGB rigs.',
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
    ],
  },
  {
    id: 'automation-bots',
    title: 'Automation & Bots',
    description: 'Writing Python bots for automation and trading, including a live crypto bot.',
    icon: <FaRobot aria-hidden="true" />,
    photos: [{ src: cryptoBotImg, caption: 'Making a crypto bot.' }],
  },
  {
    id: 'crypto-web3',
    title: 'Crypto & Web3',
    description: 'Minted my first NFT and explored how wallets and smart contracts work.',
    icon: <FaCoins aria-hidden="true" />,
    photos: [{ src: nftImg, caption: 'First NFT, minted and confirmed.' }],
  },
  {
    id: 'web-apps',
    title: 'Web & App Projects',
    description: 'Built small web apps and sites just to see if I could.',
    icon: <FaGlobe aria-hidden="true" />,
    photos: [{ src: webAppImg, caption: 'A small goal-tracking app I put together.' }],
  },
];

const milestones: Milestone[] = [
  {
    id: 'first-build',
    age: 'Age 6',
    title: 'First Build',
    description: 'Built my first computer with my dad - the spark that started everything.',
    icon: <FaDesktop aria-hidden="true" />,
  },
  {
    id: 'first-code',
    age: 'Age 11',
    title: 'First Code',
    description: 'Completed a CodeAcademy C++ course and earned my first certificate. Python, HTML/CSS, and basic Kotlin followed soon after.',
    icon: <FaCode aria-hidden="true" />,
  },
  {
    id: 'first-solder',
    age: 'Age 13',
    title: 'First Solder',
    description: 'Started soldering with a cheap no-name pen, teaching myself the basics one burnt fingertip at a time.',
    icon: <FaTools aria-hidden="true" />,
    photos: [
      { src: firstSolderImg, caption: 'Cheap no-name pen, magnifying glasses, and questionable technique.' },
    ],
  },
  {
    id: 'linux-networking',
    age: 'Age 13',
    title: 'Linux & Networking',
    description: 'Taught myself Linux and cybersecurity fundamentals, with a focus on networking.',
    icon: <FaShieldAlt aria-hidden="true" />,
    photos: [
      { src: linuxNetworkingImg, caption: 'Working through a wireless auditing toolset, checking off dependencies one by one.' },
    ],
  },
  {
    id: 'real-tools',
    age: 'Age 14',
    title: 'Real Tools',
    description: 'Upgraded to a Weller WE soldering station and got comfortable with micro-soldering and microcontrollers like the ESP32 and Pi Pico.',
    icon: <FaMicrochip aria-hidden="true" />,
  },
  {
    id: 'roboscan',
    age: 'Age 14-15',
    title: 'Roboscan',
    description: 'Built my first proper project: a Sub-GHz, RF, NFC, and IR multi-tool that taught me real network and signal-security practices.',
    icon: <FaBroadcastTower aria-hidden="true" />,
    photos: [
      { src: roboscanPartsImg, caption: 'Got all the parts to build it - Pi Pico, breadboard, LCD, jumper wires.' },
      { src: roboscanDeviceImg, caption: 'Alive on the breadboard: the boot menu running on the LCD.' },
    ],
  },
  {
    id: 'first-principles',
    age: 'Present',
    title: 'First-Principles Engineering',
    description: 'Now designing and building a modular quadcopter and a 72V electric enduro motorcycle from first principles - and teaching myself professional practices like PDS documents, trade studies, and failure logs.',
    icon: <FaDraftingCompass aria-hidden="true" />,
  },
];

const JourneySection = styled.section`
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

const TimelineList = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${theme.colors.accent},
      ${theme.colors.accent},
      transparent
    );

    @media (min-width: ${theme.breakpoints.md}) {
      left: 50%;
    }
  }
`;

const TimelineRow = styled(motion.div)`
  position: relative;
  display: flex;
  padding-left: 56px;
  margin-bottom: ${theme.spacing.xl};

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: 0;
    justify-content: flex-start;

    &:nth-of-type(even) {
      justify-content: flex-end;
    }
  }
`;

const Marker = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 0 0 6px ${theme.colors.glass.card};
  z-index: 1;

  @media (min-width: ${theme.breakpoints.md}) {
    left: 50%;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }

  @media (min-width: ${theme.breakpoints.md}) {
    width: calc(50% - 50px);
  }
`;

const Age = styled.span`
  display: inline-block;
  color: ${theme.colors.accent};
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: ${theme.spacing.xs};
`;

const MilestoneTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.2rem;
  margin-bottom: ${theme.spacing.xs};
`;

const MilestoneDescription = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.85;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const PhotoToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.sm};
  color: ${theme.colors.accent};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  padding: 4px 10px;
  background: ${theme.colors.glass.card};
  transition: all ${theme.transitions.default};

  &:hover,
  &[aria-expanded='true'] {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
  }
`;

const PhotoGallery = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
`;

const PhotoReveal = styled.figure`
  flex: 1 1 200px;
  border-radius: 12px;
  overflow: hidden;
  background: ${theme.colors.glass.card};
`;

const PhotoImg = styled.img`
  width: 100%;
  display: block;
`;

const PhotoCaption = styled.figcaption`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: 0.8rem;
  font-style: italic;
  color: ${theme.colors.textLight};
  opacity: 0.8;
`;

const fadeSide = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -30 : 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
});

const MoreWrapper = styled.div`
  max-width: 900px;
  margin: ${theme.spacing.xl} auto 0;
  text-align: center;
`;

const MoreToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.textLight};
  opacity: 0.8;
  font-size: 0.9rem;
  font-weight: 500;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 30px;
  background: ${theme.colors.glass.background};
  transition: all ${theme.transitions.default};

  svg {
    transition: transform ${theme.transitions.default};
  }

  &:hover {
    opacity: 1;
    background: ${theme.colors.glass.card};
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`;

const SideProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
  text-align: left;
`;

const SideProjectCard = styled.div`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  opacity: 0.9;
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

const Journey = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <JourneySection id="journey" role="region" aria-label="My Journey">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          My Journey
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Engineering hasn't been a subject I studied - it's been a hobby I never put down.
          Here's how it grew from a first computer build into the projects on this page today.
        </SectionSubtitle>

        <TimelineList role="list">
          {milestones.map((milestone, index) => {
            const isOpen = openId === milestone.id;
            return (
              <TimelineRow
                key={milestone.id}
                role="listitem"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeSide(index % 2 === 0)}
              >
                <Marker>{milestone.icon}</Marker>
                <Card>
                  <Age>{milestone.age}</Age>
                  <MilestoneTitle>{milestone.title}</MilestoneTitle>
                  <MilestoneDescription>{milestone.description}</MilestoneDescription>
                  {milestone.photos && milestone.photos.length > 0 && (
                    <>
                      <PhotoToggle
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(isOpen ? null : milestone.id)}
                      >
                        {isOpen ? 'Hide evidence' : 'Show evidence'}
                      </PhotoToggle>
                      {isOpen && (
                        <PhotoGallery
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {milestone.photos.map((photo) => (
                            <PhotoReveal key={photo.src}>
                              <PhotoImg src={photo.src} alt={photo.caption} />
                              <PhotoCaption>{photo.caption}</PhotoCaption>
                            </PhotoReveal>
                          ))}
                        </PhotoGallery>
                      )}
                    </>
                  )}
                </Card>
              </TimelineRow>
            );
          })}
        </TimelineList>

        <MoreWrapper>
          <MoreToggle
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'Hide the smaller side projects' : `A few more side projects (${sideProjects.length})`}
            <FaChevronDown aria-hidden="true" />
          </MoreToggle>

          {showMore && (
            <SideProjectsGrid
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {sideProjects.map((project) => (
                <SideProjectCard key={project.id}>
                  <SideProjectHeader>
                    <SideProjectIcon>{project.icon}</SideProjectIcon>
                    <SideProjectTitle>{project.title}</SideProjectTitle>
                  </SideProjectHeader>
                  <SideProjectDescription>{project.description}</SideProjectDescription>
                  <SideProjectPhotos>
                    {project.photos.map((photo) => (
                      <SideProjectThumb key={photo.src} src={photo.src} alt={photo.caption} title={photo.caption} />
                    ))}
                  </SideProjectPhotos>
                </SideProjectCard>
              ))}
            </SideProjectsGrid>
          )}
        </MoreWrapper>
      </div>
    </JourneySection>
  );
};

export default Journey;
