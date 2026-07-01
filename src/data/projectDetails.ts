import droneImg from '../assets/droneimg.png';
import ebikeImg from '../assets/ebikeimg.jpg';
import enduroFinalImg from '../assets/enduro-final.jpg';

export interface StatItem {
  label: string;
  value: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  description: string;
}

export interface ChallengeItem {
  challenge: string;
  solution: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  summary: string;
  stats: StatItem[];
  techStack: string[];
  highlights: string[];
  timeline: TimelinePhase[];
  challenges: ChallengeItem[];
  outcomeImage?: string;
  outcomeText?: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'quadcopter',
    title: 'Modular Quadcopter',
    tagline: 'First-Principles Engineering Design & Build',
    heroImage: droneImg,
    summary:
      'A fully documented engineering project: from first-principles governing equations and trade studies through CNC and carbon fibre manufacture to flight test validation - built as a portfolio for elite aerospace and mechanical engineering entry.',
    stats: [
      { label: 'Frame', value: 'Carbon Fibre + CNC Aluminium' },
      { label: 'Design Method', value: 'First-Principles' },
      { label: 'Validation', value: 'Flight-Tested' },
      { label: 'Discipline', value: 'Aerospace / Mechanical' },
    ],
    techStack: ['Structural Analysis', 'Propulsion Design', 'Composites Manufacturing', 'Systems Engineering', 'Embedded Software'],
    highlights: [
      'Derived governing equations and trade studies from first principles rather than off-the-shelf frame kits',
      'Machined structural components in-house on CNC, then hand-laid carbon fibre for weight-critical parts',
      'Modular architecture lets arms, motor mounts, and electronics bays be swapped independently for iteration',
      'Closed the loop with real flight testing to validate the design against the original analysis',
    ],
    timeline: [
      { phase: '01', title: 'Concept & Requirements', description: 'Add real dates and a short summary of the mission requirements, trade studies, and design constraints that shaped the frame.' },
      { phase: '02', title: 'Analysis & Design', description: 'Add real dates and a short summary of the structural, propulsion, and controls analysis behind the design.' },
      { phase: '03', title: 'Manufacture', description: 'Add real dates and a short summary of the CNC machining and composite layup process.' },
      { phase: '04', title: 'Assembly & Bench Test', description: 'Add real dates and a short summary of assembly, wiring, and bench-level system checks.' },
      { phase: '05', title: 'Flight Test & Iteration', description: 'Add real dates and a short summary of flight test results and design iterations that followed.' },
    ],
    challenges: [
      { challenge: 'Replace with a real design or manufacturing obstacle you hit', solution: 'Replace with how you solved it and what you learned' },
      { challenge: 'Replace with a second obstacle, e.g. weight, vibration, or power budget', solution: 'Replace with the fix and the reasoning behind it' },
    ],
    githubUrl: 'https://github.com/a365l/quadcopter-project',
  },
  {
    slug: 'enduro-motorcycle',
    title: 'Enduro Electric Motorcycle',
    tagline: 'Ground-Up DIY Build',
    heroImage: ebikeImg,
    summary:
      'Full ground-up build of a 72V electric enduro motorcycle - custom battery, QS205 hub motor, Fardriver ND72450 controller, hand-crimped high-voltage wiring, and three phases of iteration from proof-of-concept to a performance drivetrain.',
    stats: [
      { label: 'System Voltage', value: '72V' },
      { label: 'Motor', value: 'QS Motor QS205 Hub' },
      { label: 'Controller', value: 'Fardriver ND72450' },
      { label: 'Build Phases', value: '3 Iterations' },
    ],
    techStack: ['High Voltage Electronics', 'BLDC Motor Control', 'Fardriver ND72450', 'QS Motor QS205', 'HV Wiring & Crimping', 'Battery Systems'],
    highlights: [
      'Designed and assembled a custom 72V battery pack from the cell level up',
      'Integrated a QS205 hub motor with a Fardriver ND72450 controller for enduro-grade torque delivery',
      'Hand-crimped and insulated all high-voltage wiring to a professional safety standard',
      'Iterated through three distinct build phases, from proof-of-concept to a performance-tuned drivetrain',
    ],
    timeline: [
      { phase: '01', title: 'Proof of Concept', description: 'Add real dates and a short summary of the first rolling prototype and what it proved out.' },
      { phase: '02', title: 'Battery & HV Systems', description: 'Add real dates and a short summary of the custom battery build and high-voltage wiring work.' },
      { phase: '03', title: 'Drivetrain Integration', description: 'Add real dates and a short summary of fitting the QS205 motor and Fardriver controller.' },
      { phase: '04', title: 'Performance Tuning', description: 'Add real dates and a short summary of controller tuning and on-trail testing.' },
    ],
    challenges: [
      { challenge: 'Replace with a real HV wiring, cooling, or packaging obstacle', solution: 'Replace with how you solved it and what you learned' },
      { challenge: 'Replace with a second obstacle, e.g. controller tuning or traction', solution: 'Replace with the fix and the reasoning behind it' },
    ],
    outcomeImage: enduroFinalImg,
    outcomeText: 'The finished build: custom battery, hub motor, and controller fully integrated into a running enduro platform - ready for trail testing.',
    githubUrl: 'https://github.com/a365l/enduro-emotorcycle-build',
  },
];

export const getProjectBySlug = (slug: string) => projectDetails.find((p) => p.slug === slug);
