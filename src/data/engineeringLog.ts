// Session-level engineering log entries. Every entry links to the commit or
// artefact that proves it happened - same evidence rule the repo itself uses.

export type LogEntryType =
  | 'milestone'
  | 'process'
  | 'derivation'
  | 'decision'
  | 'failure'
  | 'planned';

/** 1 = process/housekeeping, 2 = applied engineering, 3 = first-principles derivation */
export type LogDepth = 1 | 2 | 3;

export interface LogEvidence {
  label: string;
  url: string;
  kind: 'commit' | 'file';
}

export interface LogNumber {
  label: string;
  value: string;
}

export interface LogEntry {
  id: string;
  dateLabel: string;
  phase: string;
  type: LogEntryType;
  depth: LogDepth;
  title: string;
  /** Always visible, 1-2 sentences, first person. */
  summary: string;
  /** Revealed on expand. */
  detail?: string[];
  /** Rendered in maths style; supports ^{sup} and _{sub} markup. */
  equations?: string[];
  numbers?: LogNumber[];
  evidence?: LogEvidence[];
  /** Extra badge text, e.g. "Provisional" or "Logged failure". */
  flag?: string;
}

const repo = 'https://github.com/a365l/quadcopter-project';

export const quadcopterEngineeringLog: LogEntry[] = [
  {
    id: 'scaffold',
    dateLabel: '17 Jun 2026',
    phase: 'Phase 0 · Setup',
    type: 'milestone',
    depth: 1,
    title: 'Programme set up like a real engineering project',
    summary:
      'Structured the repo the way an engineering organisation files work: specification, calculations, trade studies, CAD, manufacture, testing, failure log, flight controller, final report. A decision ledger and a seven-phase plan sit behind it.',
    detail: [
      'Nine top-level folders mirror the lifecycle from PDS to final technical report - nothing gets done without a place for its evidence to live.',
      'Five headline design decisions identified up front: frame diameter vs prop size, clamp material, props-in vs props-out, CNC commit, and control-software approach.',
      'Constraints locked before any design work: ~£700 budget, PLA prototyping first with PETG/CNC later.',
    ],
    evidence: [
      { label: 'Initial scaffold commit', url: `${repo}/commit/93faaead249f71d0c86f737ab762fb9bb8aa1b0c`, kind: 'commit' },
      { label: 'Repository structure', url: repo, kind: 'file' },
    ],
  },
  {
    id: 'pds',
    dateLabel: '3 Jul 2026',
    phase: 'Phase 0 · Specification',
    type: 'milestone',
    depth: 2,
    title: 'PDS first draft - 15 quantified requirements',
    summary:
      'Wrote the Product Design Specification before touching CAD. Every requirement carries a target, a priority, and a one-line engineering rationale that traces it to a calculation or constraint.',
    detail: [
      'Requirements are coupled deliberately: frame diameter (R07) and prop diameter (R08) are locked together by the non-overlap constraint; arm resonance (R13) bounds the vibration floor that attitude stability (R03) depends on.',
      'Assumptions section names what is unconfirmed - CNC access, charger availability - instead of silently relying on it.',
      'Pressure-tested project feasibility in a discussion with researchers at Imperial College London before scaling the scope.',
    ],
    numbers: [
      { label: 'Thrust-to-weight', value: '3:1 design / 2:1 floor' },
      { label: 'All-up weight', value: '≤ 3.5 kg' },
      { label: 'Flight time', value: '10 min' },
      { label: 'Arm resonance', value: 'f₁ ≥ 1.5× motor freq' },
    ],
    evidence: [
      { label: 'PDS.md', url: `${repo}/blob/master/00-specification/PDS.md`, kind: 'file' },
      { label: 'First draft commit', url: `${repo}/commit/3041166f2c972094970c61bd72c036511b9acd4b`, kind: 'commit' },
    ],
  },
  {
    id: 'evidence-rule',
    dateLabel: '5 Jul 2026',
    phase: 'Phase 0 · Specification',
    type: 'process',
    depth: 2,
    title: 'Requirements tracking with an evidence rule',
    summary:
      'Set up live tracking of all 15 requirements under one rule: a requirement is only "Met" when there is a measurement or artefact to point at. Right now every performance requirement honestly reads "Not met" - that is the point.',
    detail: [
      'Each requirement lists the specific test that will close it: thrust-stand data, timed arm swaps, tap tests, flight logs.',
      'The same rule drives this log - every entry below links to the commit or file that proves it.',
    ],
    evidence: [
      { label: 'requirements-tracking.md', url: `${repo}/blob/master/00-specification/requirements-tracking.md`, kind: 'file' },
      { label: 'Tracking commit', url: `${repo}/commit/c1cde34ffb8257c92270e674115ac9048e582865`, kind: 'commit' },
    ],
  },
  {
    id: 'momentum-theory',
    dateLabel: '2 Aug 2026',
    phase: 'Phase 1 · Analysis',
    type: 'derivation',
    depth: 3,
    title: 'Momentum theory and disc loading, derived by hand',
    summary:
      'Worked through rotor momentum theory from first principles to understand what disc loading actually is, then computed a DJI Matrice 30 benchmark from its published weight and prop size to sanity-check the class of aircraft I am designing in.',
    detail: [
      'Four hours of handwritten working - derivation, benchmark calculation, and cross-checks - photographed and filed in the repo with an index, so the working is inspectable, not just the conclusion.',
      'Key insight from the session: disc loading sets induced velocity, and induced velocity sets hover power - so rotor area is the single biggest lever on efficiency.',
    ],
    equations: ['DL = mg / (4·πr²)', 'v_{i} = √(DL / 2ρ)'],
    numbers: [{ label: 'DJI M30 benchmark', value: '≈ 71.2 N/m²' }],
    evidence: [
      { label: 'Handwritten working (3 pages)', url: `${repo}/tree/master/01-calculations/handwritten`, kind: 'file' },
      { label: 'Session commit', url: `${repo}/commit/3b977d0f38a1ae4c83d0a43fc53081477102c450`, kind: 'commit' },
    ],
  },
  {
    id: 'prop-frame-tradeoff',
    dateLabel: '2 Aug 2026',
    phase: 'Phase 1 · Analysis',
    type: 'decision',
    depth: 3,
    flag: 'Provisional',
    title: '13″ vs 15″ props - disc loading and non-overlap geometry',
    summary:
      'Compared both prop classes at 3.5 kg all-up weight, then used the non-overlap rule to find the smallest frame that swings each. 15″ props on a 700 mm frame came out ahead on efficiency - provisionally, pending the full requirement-driven sizing calc.',
    detail: [
      'The non-overlap constraint: motor-to-motor distance is the frame diagonal over √2, and it must clear the prop diameter.',
      'A 700 mm frame swings 15″ props with 114 mm of tip clearance; 600 mm swings 13″ with 94 mm.',
      'Marked provisional deliberately - the decision is being redone from requirements rather than benchmarks (see the next entry for why).',
    ],
    equations: ['D_{frame} / √2 ≥ D_{prop}'],
    numbers: [
      { label: 'DL @ 13″', value: '100.1 N/m²' },
      { label: 'DL @ 15″', value: '75.2 N/m²' },
      { label: 'Frame', value: '700 mm' },
      { label: 'Tip clearance', value: '114 mm' },
    ],
    evidence: [
      { label: 'frame-diameter-vs-prop.md', url: `${repo}/blob/master/02-trade-studies/frame-diameter-vs-prop.md`, kind: 'file' },
      { label: 'Trade study commit', url: `${repo}/commit/54fe34759b0c3a3863989e263300e5973577359f`, kind: 'commit' },
    ],
  },
  {
    id: 'circular-reasoning',
    dateLabel: '3 Aug 2026',
    phase: 'Phase 1 · Analysis',
    type: 'failure',
    depth: 3,
    flag: 'Logged failure',
    title: 'Caught my own circular reasoning',
    summary:
      'Reviewing the trade study, I realised the disc-loading target came from copying DJI rather than from my own requirements. Disc loading is an output you sanity-check, not an input you look up - which is why my search for a "table of DL values" kept failing. Logged as the project\'s first failure instead of quietly patching it.',
    detail: [
      'Root cause: the decision was made before the hover-power calculation that should drive it. Endurance (R02) and thrust-to-weight (R04) never entered the working.',
      'The redo derives required rotor area from the 10-minute endurance requirement, checks candidate props against the full ~103 N thrust envelope, and only then cross-checks against a benchmark table.',
      'The benchmark table becomes original work: disc loading computed for ~10 real aircraft from published specs, each row cited.',
    ],
    equations: ['P_{hover} = T^{3/2} / √(2ρA)'],
    evidence: [
      { label: 'Failure log (write-up in progress)', url: `${repo}/tree/master/06-failure-log`, kind: 'file' },
    ],
  },
  {
    id: 'next-up',
    dateLabel: 'Next',
    phase: 'Phase 1 · Analysis',
    type: 'planned',
    depth: 3,
    title: 'Requirement-driven propulsion sizing',
    summary:
      'Hover power from the endurance requirement, thrust envelope from the 3:1 target, Euler-Bernoulli arm resonance for the 700 mm frame, and a completed Pugh matrix to close Decision #1 properly - with the benchmark table as validation, not justification.',
  },
];
