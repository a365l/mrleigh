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
      'An in-progress engineering project: designing a quadcopter from first-principles governing equations and trade studies, working toward CNC and carbon fibre manufacture and flight test validation - documented in full as a portfolio for elite aerospace and mechanical engineering entry. Currently in the specification and analysis phase.',
    stats: [
      { label: 'Status', value: 'Week 2 of 10 - Analysis' },
      { label: 'Design Method', value: 'First-Principles' },
      { label: 'Target Manufacture', value: 'CNC Aluminium + Carbon Fibre' },
      { label: 'Discipline', value: 'Aerospace / Mechanical' },
    ],
    techStack: ['Structural Analysis', 'Propulsion Design', 'Composites Manufacturing', 'Systems Engineering', 'Embedded Software'],
    highlights: [
      'Wrote a full Product Design Specification with 15 quantified requirements (hover stability, thrust-to-weight, all-up weight, arm resonance margin) before touching CAD',
      'Scaffolded a first-principles calculation set covering propulsion momentum theory, arm resonance, bolt preload, CG/inertia, and sandwich panel bending, each to be validated experimentally as the build progresses',
      'Running early trade studies on CNC-commit timing, prop-in-vs-out orientation, frame diameter vs prop size, and clamp material to de-risk decisions before committing budget',
      'Met with researchers at Imperial College London to pressure-test the project’s feasibility before scaling up scope',
    ],
    timeline: [
      { phase: '01', title: 'Concept & Requirements', description: 'Complete. PDS drafted with 15 quantified requirements, feasibility discussed with Imperial College London researchers, budget (~£700) and 10-week timeline constraints set.' },
      { phase: '02', title: 'Analysis & Design', description: 'In progress. Starting with propulsion momentum-theory sizing and the coupled frame-diameter vs prop-size trade study (Decision #1).' },
      { phase: '03', title: 'Manufacture', description: 'Not yet started. CNC machining and composite layup planned for later in the build.' },
      { phase: '04', title: 'Assembly & Bench Test', description: 'Not yet started.' },
      { phase: '05', title: 'Flight Test & Iteration', description: 'Not yet started.' },
    ],
    challenges: [],
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
      { phase: '01', title: 'Phase 0 - Proof of Concept', description: 'May-Aug 2025. Sourced a budget hub motor, generic 80A controller, and a custom NBPower 72V 30Ah 100A battery pack. Built the frame up from bare metal on a ceiling ratchet-strap rig, hand-soldered every connection, and got it running for the first ride.' },
      { phase: '02', title: 'Phase 1 - Donor Bikes & Repairs', description: 'Sep-Dec 2025. Bought two crashed donor ebikes to strip for parts and resell, plus a broken hub motor and battery to repair and flip, to help fund the next upgrade. Sourced a secondhand Sabvaton controller that arrived dead on arrival.' },
      { phase: '03', title: 'Phase 2 - QS205 & Fardriver Upgrade', description: 'Jun 2026. Replaced the budget motor and controller with a QS Motor QS205 hub motor and a Fardriver ND72450 (200A cont / 450A peak), switched all wiring from soldered to crimped terminals, mapped the throttle to the new controller, and completed autolearn.' },
    ],
    challenges: [
      { challenge: 'The Phase 0 generic 80A controller bottlenecked the 100A-rated NBPower battery for the entire first build - the battery was never the limiting factor.', solution: 'Diagnosed the controller as the bottleneck and replaced it in Phase 2 with a Fardriver ND72450 (200A cont / 450A peak), finally letting the existing battery pack breathe.' },
      { challenge: 'A secondhand Sabvaton controller arrived with a dead short across the battery terminals - shorted MOSFETs, never even connected to the bike.', solution: 'Caught the fault with a multimeter check before ever powering it up, attempted a MOSFET repair, and when that didn’t hold, wrote it off and moved straight to sourcing the Fardriver instead.' },
      { challenge: 'The Surron thumb throttle’s wire assignments didn’t match the Fardriver’s throttle input pin-for-pin.', solution: 'Mapped every wire by hand before crimping anything, then built a small adapter harness to bridge the two.' },
    ],
    outcomeImage: enduroFinalImg,
    outcomeText: 'The finished build: custom battery, hub motor, and controller fully integrated - bench-tested with predictions of ~55 mph and ~3.6 s 0-30 derived from first principles, ready for the first instrumented trail ride.',
    githubUrl: 'https://github.com/a365l/enduro-emotorcycle-build',
  },
];

export const getProjectBySlug = (slug: string) => projectDetails.find((p) => p.slug === slug);
