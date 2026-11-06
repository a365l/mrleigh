import droneImg from '../assets/droneimg.png';
import ebikeImg from '../assets/ebikeimg.jpg';
import enduroFinalImg from '../assets/enduro-final.jpg';
import studyTrackerImg from '../assets/studytracker.jpg';
import studyTrackerTopicsImg from '../assets/studytracker-topics.jpg';
import epqPlaceholder from '../assets/epq-placeholder.svg';
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
  /** Overrides the default "Live Site" wording on the liveUrl button. */
  liveLabel?: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'quadcopter',
    title: 'Modular Quadcopter',
    tagline: 'First-Principles Engineering Design & Build',
    heroImage: droneImg,
    summary:
      'A long-term engineering project: designing a quadcopter from first-principles governing equations and trade studies, working toward CNC and carbon fibre manufacture and flight test validation - documented end-to-end, from specification through analysis, manufacture, and flight test. Paused since August 2026, and carrying on over the next two years alongside my A-levels.',
    stats: [
      { label: 'Status', value: 'Paused - resuming alongside A-levels (2026-2028)' },
      { label: 'Design Method', value: 'First-Principles' },
      { label: 'Target Manufacture', value: 'CNC Aluminium + Carbon Fibre' },
      { label: 'Discipline', value: 'Aerospace / Mechanical' },
    ],
    techStack: ['Structural Analysis', 'Propulsion Design', 'Composites Manufacturing', 'Systems Engineering', 'Embedded Software'],
    highlights: [
      'Wrote a full Product Design Specification with 15 quantified requirements (hover stability, thrust-to-weight, all-up weight, arm resonance margin) before touching CAD',
      'Scaffolded a first-principles calculation set covering propulsion momentum theory, arm resonance, bolt preload, CG/inertia, and sandwich panel bending, each to be validated experimentally as the build progresses',
      'Started trade studies on CNC-commit timing, prop-in-vs-out orientation, frame diameter vs prop size, and clamp material to de-risk decisions before committing budget',
      'Met with researchers at Imperial College London to pressure-test the project’s feasibility before scaling up scope',
    ],
    timeline: [
      { phase: '01', title: 'Concept & Requirements', description: 'Complete. PDS drafted with 15 quantified requirements, feasibility discussed with Imperial College London researchers, and a ~£700 budget set.' },
      { phase: '02', title: 'Analysis & Design', description: 'Paused. Started on propulsion momentum-theory sizing and the coupled frame-diameter vs prop-size trade study (Decision #1); picks up from here alongside A-levels.' },
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
      'Full ground-up build of a 72V electric enduro motorcycle - NBPower 72V battery, QS205 hub motor, Fardriver ND72450 controller, hand-crimped signal wiring, and three phases of iteration from proof-of-concept to a performance drivetrain.',
    stats: [
      { label: 'System Voltage', value: '72V' },
      { label: 'Motor', value: 'QS Motor QS205 Hub' },
      { label: 'Controller', value: 'Fardriver ND72450' },
      { label: 'Build Phases', value: '3 Iterations' },
    ],
    techStack: ['High Voltage Electronics', 'BLDC Motor Control', 'Fardriver ND72450', 'QS Motor QS205', 'HV & Signal Wiring', 'Battery Systems'],
    highlights: [
      'Experimented with a hand-built DIY 72V pack between builds, then sold it and went with a proper NBPower 72V 30Ah 100A pack',
      'Integrated a QS205 hub motor with a Fardriver ND72450 controller (rated 450A peak), configured to 100A battery / 300A phase to suit the pack',
      'Hand-crimped the low-voltage signal loom, including a custom Surron-to-Fardriver throttle adapter',
      'Iterated through three distinct build phases, from proof-of-concept to a performance drivetrain',
    ],
    timeline: [
      { phase: '01', title: 'Phase 0 - Proof of Concept', description: 'May-Aug 2025. Sourced a budget hub motor, generic 80A controller, and an NBPower 72V 30Ah 100A battery pack. Built the frame up from bare metal on a ceiling ratchet-strap rig, hand-soldered every connection, and got it running for the first ride.' },
      { phase: '02', title: 'Phase 1 - Donor Bikes & Repairs', description: 'Sep-Dec 2025. Bought two crashed donor ebikes to strip for parts and resell, plus a broken hub motor and battery to repair and flip, to help fund the next upgrade. Sourced a secondhand Sabvaton controller that arrived dead on arrival, and experimented with a hand-built DIY battery pack before selling it and sticking with a proper manufactured one.' },
      { phase: '03', title: 'Phase 2 - QS205 & Fardriver Upgrade', description: 'Jun 2026. Replaced the budget motor and controller with a QS Motor QS205 hub motor and a Fardriver ND72450 (rated 450A peak, configured to 100A battery / 300A phase to match the pack), switched the low-voltage signal wiring from soldered to crimped terminals, mapped the throttle to the new controller, and completed autolearn.' },
    ],
    challenges: [
      { challenge: 'The Phase 0 generic 80A controller bottlenecked the 100A-rated NBPower battery for the entire first build - the battery was never the limiting factor.', solution: 'Diagnosed the controller as the bottleneck and replaced it in Phase 2 with a Fardriver ND72450 - rated 450A peak, and configured to 100A battery / 300A phase so the pack runs at its full rating without being overdriven.' },
      { challenge: 'A secondhand Sabvaton controller arrived with a dead short across the battery terminals - shorted MOSFETs, never even connected to the bike.', solution: 'Caught the fault with a multimeter check before ever powering it up, attempted a MOSFET repair, and when that didn’t hold, wrote it off and moved straight to sourcing the Fardriver instead.' },
      { challenge: 'The Surron thumb throttle’s wire assignments didn’t match the Fardriver’s throttle input pin-for-pin.', solution: 'Mapped every wire by hand before crimping anything, then built a small adapter harness to bridge the two.' },
    ],
    outcomeImage: enduroFinalImg,
    outcomeText: 'The finished build: battery, hub motor, and controller fully integrated - bench-tested with predictions of ~55 mph and ~3.6 s 0-30 derived from first principles, ready for the first instrumented trail ride.',
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
    outcomeText: 'The Maths view in daily use, running on generated demo data here rather than my own. Every unit carries its spec reference, its topic count and its review state, so the next hour of revision is chosen by what is actually due rather than by what feels appealing. The demo below is this same app, running entirely in your browser.',
    githubUrl: 'https://github.com/a365l/study-tracker',
    liveUrl: '/study-tracker-demo/web/index.html',
    liveLabel: 'Try the live demo',
  },
  {
    slug: 'epq',
    title: 'EPQ: Propulsion Model Validation',
    tagline: 'Predicting Thrust From First Principles, Then Measuring It',
    heroImage: epqPlaceholder,
    summary:
      'My Level 3 Extended Project Qualification, started October 2026, asking how accurately a first-principles model can predict quadcopter propulsion performance when fed manufacturer data versus data I measure myself. The deliverable is a Python simulation plus a written report. Manufacturers publish thrust and current figures measured on their own bench, and builders size whole aircraft around them, so the question is how far those numbers can be trusted and which modelling assumption breaks first.',
    stats: [
      { label: 'Status', value: 'Planning complete, build starting' },
      { label: 'Qualification', value: 'Level 3 EPQ, Pearson Edexcel' },
      { label: 'Deliverable', value: 'Python simulation + written report' },
      { label: 'Validation', value: 'UIUC database + own thrust stand' },
    ],
    techStack: ['Momentum Theory', 'Blade Element Momentum Theory', 'Python', 'NumPy & SciPy', 'Experimental Validation', 'Data Analysis'],
    highlights: [
      'Framed around a question with a genuinely uncertain answer rather than a foregone conclusion: the useful result is not whether the model works, but where prediction and measurement diverge, by how much, and which assumption is responsible',
      'Split into three levels of increasing rigour so the project degrades safely. Level 1 is complete and submittable on its own, and everything above it adds depth rather than becoming a dependency if I fall behind schedule',
      'Propeller selection is constrained by the UIUC propeller database: a propeller only goes on the thrust stand if published data already exists for it, because otherwise there is nothing independent to validate the measurements against',
      'Deliberately scoped so it does not depend on my personal quadcopter build. The two share a subject area and nothing else, so no work is counted twice and each stands on its own',
    ],
    timeline: [
      { phase: '01', title: 'Origin', description: 'June 2026. A visit to the drone engineering lab at Imperial College London, where a researcher advised starting smaller than a full aircraft and building a thrust stand first, to get hands on Reynolds numbers and blade element theory. That advice is what the project is now built around.' },
      { phase: '02', title: 'Scoping', description: 'October 2026. Chose the question, then narrowed it to propulsion simulation and thrust stand measurement specifically, so the EPQ does not lean on my personal build. Settled the format as an artifact plus a written report.' },
      { phase: '03', title: 'Level 1 - Momentum Theory', description: 'The simplest defensible first-principles model: the rotor as an actuator disk adding momentum to the air, with no account of blade geometry, profile drag or tip losses. Establishes the baseline that everything else is measured against.' },
      { phase: '04', title: 'Level 2 - Resolving the Propeller', description: '2A interpolates the UIUC database for a specific propeller and cross-checks it against my own thrust stand runs. 2B goes further with Blade Element Momentum Theory, resolving twist, chord distribution and profile losses that Level 1 averages away.' },
      { phase: '05', title: 'Level 3 - Whole System', description: 'Stretch goal, only if Levels 1 and 2 finish ahead of schedule. Adds motor and battery behaviour to predict real endurance rather than instantaneous thrust.' },
    ],
    challenges: [
      {
        challenge: 'An EPQ has a fixed deadline and I had never built a validated physics model before, so a single monolithic project risked arriving at the deadline with nothing submittable.',
        solution: 'Designed it as three levels, each a complete piece of work. If the schedule slips, Level 1 alone answers the question with momentum theory. If it holds, Levels 2 and 3 add rigour. The fallback is built into the structure rather than improvised later.',
      },
      {
        challenge: 'The obvious move was to make the EPQ about the quadcopter I am already building, which would have been faster but would have made two pieces of work depend on each other and blurred what was done for which.',
        solution: 'Narrowed the EPQ to propulsion modelling and bench measurement only. It shares a subject area with the build and nothing else, so each stands alone and neither double-counts the other.',
      },
      {
        challenge: 'A model can be made to agree with measurements by tuning it, which proves nothing.',
        solution: 'Validate against a third-party reference as well as my own data. The UIUC propeller database is independent of both my model and my thrust stand, so agreement across all three means something that agreement between my own two numbers would not.',
      },
    ],
    githubUrl: 'https://github.com/a365l/epq-propulsion-model',
  },
];

export const getProjectBySlug = (slug: string) => projectDetails.find((p) => p.slug === slug);

