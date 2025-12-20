import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { theme } from '../../styles/theme';
import { 
  FaReact, 
  FaNodeJs,  
  FaDocker,
  
} from 'react-icons/fa';
import { 
  SiJavascript,
  SiPython,
  SiLinux,
  SiCplusplus,
  SiArduino, 
  SiPowers,
  SiEspressif,
  SiFlask,
  SiFigma,
  SiVim,
  SiCircleci,
  SiJest,

} from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} ${theme.spacing.lg};
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.light};
    border-radius: 2px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${theme.spacing.lg};
  width: 100%;
  max-width: 1200px;
  margin-top: ${theme.spacing.xl};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(246, 177, 122, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 1.75rem);
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.light};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-weight: 600;
  position: relative;
  padding-bottom: ${theme.spacing.md};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  svg {
    font-size: clamp(1.75rem, 3vw, 2rem);
    color: ${theme.colors.accent};
  }
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  flex: 1;
  width: 100%;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  padding: ${theme.spacing.md};
  border-radius: 12px;
  transition: all ${theme.transitions.default};
  background: ${theme.colors.glass.card};

  svg {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    color: ${theme.colors.accent};
    transition: all ${theme.transitions.default};
  }

  &:hover {
    background: ${theme.colors.gradient.glass};
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: ${theme.colors.light};
    }
  }
`;

const skillCategories = [
  {
    title: 'Software & Systems',
    icon: <FaReact />,
    skills: [
      { name: 'Python', icon: <SiPython />, description: 'Scripting, automation, data handling, rapid prototyping' },
      { name: 'C/C++', icon: <SiCplusplus />, description: 'Embedded systems, performance-critical logic' },
      { name: 'JavaScript', icon: <SiJavascript />, description: 'Application logic, tooling, interfaces' },
      { name: 'Linux', icon: <SiLinux />, description: 'Development environments, system-level debugging' },
    ],
  },
  {
    title: 'Hardware & Embedded',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Embedded Electronics', icon: <SiArduino />, description: 'Wiring, fault isolation, component integration' },
      { name: 'Power Systems', icon: <SiPowers />, description: 'Lithium batteries, BMS interaction, high-current safety' },
      { name: 'Micro\nControllers', icon: <SiEspressif />, description: 'Firmware-level thinking, I/O, real-world constraints' },
      { name: 'Diagnostics', icon: <SiFlask />, description: 'Multimeter use, systematic debugging under load' },
    ],
  },
  {
    title: 'Systems & Engineering',
    icon: <FaDocker />,
    skills: [
      { name: 'System Designs', icon: <SiFigma />, description: 'Interfaces, failure modes, maintainability' },
      { name: 'Debugging', icon: <SiVim />, description: 'Isolating faults across hardware and software' },
      { name: 'Reliability', icon: <SiCircleci />, description: 'Weather exposure, vibration, long-term use' },
      { name: 'Testing', icon: <SiJest />, description: 'Real-world validation, stress and edge cases' },
    ],
  },
];
const Skills = () => { 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SkillsSection id="skills" role="region" aria-label="Skills and Expertise">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        role="heading"
        aria-level={2}
      >
        Skills & Expertise
      </SectionTitle>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SkillsContainer role="list">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`category-title-${index}`}
            >
              <CategoryTitle id={`category-title-${index}`}>
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </CategoryTitle>
              <SkillsList role="list" aria-label={`${category.title} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <Tippy
                    key={skillIndex}
                    content={skill.description}
                    placement="top"
                    arrow={true}
                  >
                    <SkillItem 
                      variants={itemVariants}
                      role="listitem"
                    >
                      <span aria-hidden="true">{skill.icon}</span>
                      <span>{skill.name}</span>
                      <span className="sr-only">{`${skill.name} - ${category.title} skill`}</span>
                    </SkillItem>
                  </Tippy>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </motion.div>
    </SkillsSection>
  );
};

export default Skills;