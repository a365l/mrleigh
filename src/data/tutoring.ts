// Single source of truth for everything on /tutoring.
// Edit prices, subjects, FAQ answers and stations here — not in the components.

export const tutoringConfig = {
  // TODO: paste your Web3Forms access key (web3forms.com — free, unlimited,
  // emails every enquiry to the address you register). While this is empty the
  // form falls back to opening the visitor's email client instead.
  web3formsAccessKey: 'f7d45ec1-6d2a-4d65-ae8f-a4cf0a890406',
  email: 'alfie@alfred-leigh.co.uk',
  // TODO: the GCSE boards you actually sat, e.g. ['AQA', 'Edexcel'].
  // Leave empty for a board-agnostic FAQ answer.
  examBoards: ['AQA', 'Edexcel', 'OCR'],
  // Set to e.g. 'Two weekly slots left this term' to show an urgency banner
  // above the pricing tiers. Empty string hides it.
  slotsBanner: '',
};

// In-person coverage: Central line, Epping branch down to Woodford.
export const stations = [
  'Epping',
  'Theydon Bois',
  'Debden',
  'Loughton',
  'Buckhurst Hill',
  'Woodford',
];

export interface Subject {
  name: string;
  grade: number;
  lead?: boolean;
}

export const subjects: Subject[] = [
  { name: 'Maths', grade: 8, lead: true },
  { name: 'Physics', grade: 8, lead: true },
  { name: 'Computer Science', grade: 8, lead: true },
  { name: 'Chemistry', grade: 8 },
  { name: 'Biology', grade: 7 },
  { name: 'Geography', grade: 7 },
];

export const primaryNote =
  'Primary and KS3 maths and science are also available. Just mention it in the form.';

export interface Tier {
  id: string;
  name: string;
  price: string | null; // null renders as £TBD until you set it
  unit: string;
  tagline: string;
  includes: string[];
  highlight?: boolean;
}

export const tiers: Tier[] = [
  {
    id: 'sessions',
    name: 'Sessions',
    price: null,
    unit: 'per hour',
    tagline: 'Pay as you go. Bring what is confusing; I teach it until it is not.',
    includes: [
      'One-hour sessions, online or in person',
      'No commitment, book one at a time',
      'Short written recap after every session',
    ],
  },
  {
    id: 'structured',
    name: 'Structured',
    price: null,
    unit: 'per month',
    tagline: 'Weekly sessions plus the full revision scaffold, built for the student.',
    includes: [
      'Four weekly sessions',
      'Spec-mapped topic breakdown: what to fix, in what order',
      'A flashcard deck built for the student',
      'Work set between sessions',
      'Progress tracked against the plan',
    ],
    highlight: true,
  },
  {
    id: 'exam-programme',
    name: 'Exam programme',
    price: null,
    unit: 'per term',
    tagline: 'Everything in Structured, aimed squarely at the exam run-in.',
    includes: [
      'Everything in Structured',
      'Past papers marked with written feedback',
      'Week-by-week timeline into the exams',
      'Short progress reports to parents',
    ],
  },
];

export interface Faq {
  q: string;
  a: string;
}

// 'AQA, Edexcel and OCR' rather than 'AQA and Edexcel and OCR'
const boardList =
  tutoringConfig.examBoards.length > 1
    ? `${tutoringConfig.examBoards.slice(0, -1).join(', ')} and ${tutoringConfig.examBoards.slice(-1)}`
    : tutoringConfig.examBoards[0];

const boardsAnswer = tutoringConfig.examBoards.length
  ? `I sat ${boardList} papers myself in June 2026, and I teach to whichever specification your school uses. Just name the board in the enquiry form.`
  : 'Whichever your school uses. Name the board in the enquiry form and I will teach to that exact specification. I sat my own GCSEs in June 2026, so the current courses are fresh.';

export const faqs: Faq[] = [
  {
    q: 'Who does the teaching?',
    a: 'Me. I am Alfred, a Year 12 taking Maths, Further Maths, Physics and Computer Science at sixth form in Debden. Not an agency, no middleman: the person you enquire with is the person who turns up.',
  },
  {
    q: 'What happens in the free first session?',
    a: 'It is a diagnostic, not a taster. We go through where the student is against the spec, and you leave with a one-page plan: the weak topics, the order to fix them, and what I would do about each. You keep the plan whether or not you book anything else.',
  },
  {
    q: 'Which exam boards do you cover?',
    a: boardsAnswer,
  },
  {
    q: 'How does safeguarding work?',
    a: 'I am a sixth-form student, so I keep this simple and non-negotiable: in-person sessions happen at the student’s home with a parent or guardian present, or in a public space such as a library. A parent is copied on all arrangements, and I am happy to speak with a parent before anything is booked.',
  },
  {
    q: 'How do online sessions work?',
    a: 'Video call with a shared whiteboard. The student needs a laptop or tablet and a quiet spot. Anything we write or build during the session is shared afterwards, along with the recap.',
  },
  {
    q: 'What does it cost, and how do I pay?',
    a: 'The first session is always free. After that, the prices above are confirmed with you before anything is booked, so there are no surprises. Payment is per session or monthly by bank transfer, and sessions cancelled with 24 hours’ notice are never charged.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail?: string;
}

// Renders nothing while empty. When the first parent says something nice,
// paste it here and the section appears.
export const testimonials: Testimonial[] = [];

export const tutoringSections = [
  { id: 'hero', name: 'Top' },
  { id: 'why', name: 'Why me' },
  { id: 'subjects', name: 'Subjects' },
  { id: 'pricing', name: 'Pricing' },
  { id: 'coverage', name: 'Where' },
  { id: 'faq', name: 'FAQ' },
  { id: 'book', name: 'Book' },
];
