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
  FaChevronDown,
  FaLightbulb,
  FaTractor,
  FaGraduationCap,
} from 'react-icons/fa';
import firstSparkImg from '../../assets/journey-first-spark.jpg';
import firstBuildImg from '../../assets/journey-first-build.jpg';
import firstSolderImg from '../../assets/journey-first-solder.jpg';
import linuxNetworkingImg from '../../assets/journey-linux-networking.jpg';
import realToolsImg from '../../assets/journey-real-tools.jpg';
import roboscanPartsImg from '../../assets/journey-roboscan-parts.jpg';
import roboscanDeviceImg from '../../assets/journey-roboscan-device.jpg';
import roboscanAliveImg from '../../assets/journey-roboscan-alive.jpg';
import familyYard1Img from '../../assets/journey-family-yard-1.jpg';
import familyYard2Img from '../../assets/journey-family-yard-2.jpg';

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

const milestones: Milestone[] = [
  {
    id: 'first-spark',
    age: 'Age 5',
    title: 'First Spark',
    description: "Pulling apart an electronics kit on the floor, years before I knew what any of it meant. Looking back, this is where it actually started.",
    icon: <FaLightbulb aria-hidden="true" />,
    photos: [
      { src: firstSparkImg, caption: 'The earliest evidence I could find - an electronics kit, fully wired up.' },
    ],
  },
  {
    id: 'first-build',
    age: 'Age 6',
    title: 'First Build',
    description: 'Built my first computer with my dad and brother - my first real hands-on engineering.',
    icon: <FaDesktop aria-hidden="true" />,
    photos: [
      { src: firstBuildImg, caption: 'The original build, with my dad and brother.' },
    ],
  },
  {
    id: 'family-business',
    age: 'Age 7',
    title: 'Learning the Trade',
    description: "Helping out at my dad's export yard - stripping down plant machinery and running industrial equipment, years before I could even drive.",
    icon: <FaTractor aria-hidden="true" />,
    photos: [
      { src: familyYard1Img, caption: 'Working on an excavator engine on the yard.' },
      { src: familyYard2Img, caption: 'Running the jet washer on-site.' },
    ],
  },
  {
    id: 'first-code',
    age: 'Age 11',
    title: 'First Code',
    description: 'Completed a Codecademy C++ course and earned my first certificate. Python, HTML/CSS, and basic Kotlin followed soon after.',
    icon: <FaCode aria-hidden="true" />,
  },
  {
    id: 'first-solder',
    age: 'Age 13',
    title: 'First Solder',
    description: 'Had just upgraded from a cheap no-name pen to a basic Weller iron, and was practising on a scrap piece of PCB - teaching myself the basics one burnt fingertip at a time.',
    icon: <FaTools aria-hidden="true" />,
    photos: [
      { src: firstSolderImg, caption: 'Practising on a scrap PCB: magnifying glasses on, questionable technique.' },
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
    photos: [
      { src: realToolsImg, caption: 'Micro-soldering a laptop motherboard under magnification.' },
    ],
  },
  {
    id: 'roboscan',
    age: 'Age 14-15',
    title: 'Roboscan',
    description: 'Built my first proper project: a sub-GHz RF, NFC and IR multi-tool that taught me real network and signal-security practices.',
    icon: <FaBroadcastTower aria-hidden="true" />,
    photos: [
      { src: roboscanPartsImg, caption: 'Got all the parts to build it - Pi Pico, breadboard, LCD, jumper wires.' },
      { src: roboscanDeviceImg, caption: 'Alive on the breadboard: the boot menu running on the LCD.' },
      { src: roboscanAliveImg, caption: 'Up and running at my desk. Family image on desk blurred for privacy reasons.' },
    ],
  },
  {
    id: 'gcse-results',
    age: 'Age 16',
    title: 'GCSE Results',
    description: 'Nine GCSEs, eight of them grade 7 or above - including grade 8s in Maths, Physics, Chemistry and Computer Science. Enough to take Maths, Further Maths and Physics at A-level.',
    icon: <FaGraduationCap aria-hidden="true" />,
  },
  {
    id: 'first-principles',
    age: 'Present',
    title: 'First-Principles Engineering',
    description: 'Building a 72V electric enduro motorcycle, with a first-principles modular quadcopter to carry on through sixth form - and teaching myself professional practices like PDS documents, trade studies, and failure logs.',
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

/**
 * The photo reveal reads as a real control rather than a quiet text link: it
 * carries thumbnails of the actual photos behind it, so it is obvious both that
 * something is there and what it is before anyone clicks.
 */
const PhotoToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  padding: 5px 14px 5px 5px;
  color: ${theme.colors.accent};
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 999px;
  background: rgba(246, 177, 122, 0.1);
  border: 1px solid rgba(246, 177, 122, 0.45);
  cursor: pointer;
  transition: all ${theme.transitions.default};

  svg {
    font-size: 0.7rem;
    transition: transform ${theme.transitions.default};
  }

  &:hover,
  &[aria-expanded='true'] {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    border-color: transparent;
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`;

const ThumbStack = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`;

const StackThumb = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.primary};

  &:not(:first-of-type) {
    margin-left: -12px;
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

const Journey = () => {
  const [openId, setOpenId] = useState<string | null>(null);

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
          Here's how it grew from a kid pulling apart an electronics kit into the projects on
          this page today. Where you see thumbnails on a card, click them to open my original
          photos from the time.
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
                        <ThumbStack aria-hidden="true">
                          {milestone.photos.slice(0, 3).map((photo) => (
                            <StackThumb key={photo.src} src={photo.src} alt="" loading="lazy" />
                          ))}
                        </ThumbStack>
                        {isOpen
                          ? 'Hide photos'
                          : milestone.photos.length === 1
                            ? 'See the photo'
                            : `See the ${milestone.photos.length} photos`}
                        <FaChevronDown aria-hidden="true" />
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

      </div>
    </JourneySection>
  );
};

export default Journey;
