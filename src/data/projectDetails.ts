import droneImg from '../assets/droneimg.png';
import ebikeImg from '../assets/ebikeimg.jpg';
import enduroFinalImg from '../assets/enduro-final.jpg';
import studyTrackerImg from '../assets/studytracker.jpg';
import studyTrackerTopicsImg from '../assets/studytracker-topics.jpg';
import { quadcopterEngineeringLog, type LogEntry } from './engineeringLog';

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
  engineeringLog?: LogEntry[];
  challenges: ChallengeItem[];
  outcomeImage?: string;
  outcomeText?: string;
  /** Omitted for projects that are not public, e.g. ones holding personal data. */
  githubUrl?: string;
  liveUrl?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'quadcopter',
    title: 'Modular Quadcopter',
    tagline: 'First-Principles Engineering Design & Build',
    heroImage: droneImg,
    summary:
      'An in-progress engineering project: designing a quadcopter from first-principles governing equations and trade studies, working toward CNC and carbon fibre manufacture and flight test validation - documented end-to-end, from specification through analysis, manufacture, and flight test.',
    stats: [
      { label: 'Status', value: 'Analysis phase - flight test autumn 2026' },
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
    engineeringLog: quadcopterEngineeringLog,
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
  {
    slug: 'study-tracker',
    title: 'A-Level Study Tracker',
    tagline: 'Specifying and Directing an AI Build',
    heroImage: studyTrackerImg,
    summary:
      'A desktop application I specified, directed and shipped using AI as the implementation tool, then put into daily use. It tracks every topic in my Maths, Further Maths and Physics A-levels against the real exam specifications, schedules revision by spaced repetition, and keeps all of its data on my own machine. The engineering interest here is not the code volume, it is the decisions: what to build, what to refuse to build, and how to verify that what came back was actually correct.',
    stats: [
      { label: 'Status', value: 'In daily use since Sept 2026' },
      { label: 'Scope', value: '478 topics, 101 units, 3 specs' },
      { label: 'Revision Links', value: '666, every one HTTP-verified' },
      { label: 'Dependencies', value: 'Zero, Python standard library' },
    ],
    techStack: ['AI-Directed Development', 'Python (stdlib only)', 'Vanilla JavaScript', 'Spaced Repetition', 'Local-First Data', 'Canvas & SVG Visualisation'],
    highlights: [
      'Scoped the whole thing against the real specifications: 478 topics across 101 units, mapped to Edexcel 9MA0 Maths, Edexcel 9FM0 Further Maths and OCR H556 Physics, so progress is tracked against what is actually examined rather than against textbook chapters',
      'Treated AI as an implementation tool, not an oracle: I wrote the specification, chose the architecture and data model, reviewed every design decision, and corrected the output where it was wrong or over-engineered',
      'Refused to trust generated data: the 666 revision links are HTTP-checked at build time and anything not answering 200 or 206 is dropped, because a revision tool that sends you to dead pages is worse than no tool',
      'Wrote up a full hosted two-way sync design (Cloudflare Workers, D1, PWA, tombstones for deletions) and then deliberately did not build it, listing three cheaper options that solve most of the problem first',
    ],
    timeline: [
      { phase: '01', title: 'Problem & Specification', description: 'Sept 2026. Started from a real problem: hundreds of A-level topics and no reliable sense of which ones had actually gone in. Wrote the requirements before any code, including the non-negotiables, that it must work offline, hold its data locally, and never need an account.' },
      { phase: '02', title: 'Curriculum Modelling', description: 'Built the data model around courses, units and topics keyed by stable slugs, so renaming a topic does not silently wipe its progress. Encoded all three A-level specifications as JSON, 478 topics in total.' },
      { phase: '03', title: 'AI-Directed Implementation', description: 'Drove the build through AI, reviewing output rather than accepting it. Around 3,400 lines of Python and JavaScript, with a hard constraint of Python standard library only, so there is nothing to install and nothing to break on a reinstall.' },
      { phase: '04', title: 'Verification & Hardening', description: 'HTTP-checked every revision link, added a trash with undo and restore, 30 rolling daily backups, and a pointer file that moves the data folder to OneDrive. Local-only server on 127.0.0.1 behind a per-session secret token.' },
      { phase: '05', title: 'Daily Use & Restraint', description: 'Oct 2026 onward. In use every study day. Hosted phone sync is designed and documented but deliberately unbuilt, because three simpler options cover most of the need at no cost.' },
    ],
    challenges: [
      {
        challenge: 'AI will happily generate a plausible-looking list of revision links, and a large share of them are dead, redirected or point at the wrong topic. Shipping those would have made the tool actively harmful, sending me to broken pages mid-revision.',
        solution: 'Built the resource list as a verified artefact instead of generated text. A build script parses the real Maths Genie and Physics & Maths Tutor pages, HTTP-checks every candidate link concurrently, and drops anything that does not answer 200 or 206. The 666 links that survived are the ones that actually resolve.',
      },
      {
        challenge: 'The first instinct was a hosted web app with accounts and a database, which is what you reach for by default and what AI suggests readily. For a single user who studies at one desk, that is a large amount of infrastructure, cost and failure surface for very little gain.',
        solution: 'Chose a local-only architecture: a Python standard library server bound to 127.0.0.1 on a fixed port with a per-session secret token, opened in an Edge app window so it behaves like a native app. No account, no hosting bill, no outage. The sync design is written up in full for when the need is real.',
      },
      {
        challenge: 'Tracking "done" as a single checkbox is useless for revision, because having been taught something and being able to answer an unseen exam question on it cold are completely different states.',
        solution: 'Separated progress from confidence. A five-stage pipeline records how far a topic has been worked (Taught, Notes, Practised, Confident), while a red/amber/green rating drives when it comes back for review, at 2, 7 and 21 days. Rating a topic also starts a study session automatically, so the log fills itself in.',
      },
    ],
    outcomeImage: studyTrackerTopicsImg,
    outcomeText: 'The Maths view in daily use, running on generated demo data here rather than my own. Every unit carries its spec reference, its topic count and its review state, so the next hour of revision is chosen by what is actually due rather than by what feels appealing.',
  },
];

export const getProjectBySlug = (slug: string) => projectDetails.find((p) => p.slug === slug);

