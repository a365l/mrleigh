// Writes a real dist/tutoring/index.html so GitHub Pages serves /tutoring
// with HTTP 200 (the SPA 404.html fallback returns a 404 status, which stops
// Google indexing the page). Swaps in tutoring-specific meta while it's at it.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
let html = readFileSync(resolve(dist, 'index.html'), 'utf8');

const TITLE = 'GCSE Tutoring — Maths, Physics & Computer Science | Alfred Leigh';
const DESC =
  'GCSE tutoring in Maths, Physics and Computer Science from a Year 12 who sat the exams in June 2026 (four grade 8s). Online, or in person near Central line stations from Epping to Woodford. Free diagnostic first session.';
const URL = 'https://alfred-leigh.co.uk/tutoring';

const swaps = [
  [/<title>[\s\S]*?<\/title>/, `<title>${TITLE}</title>`],
  [/(<meta name="title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta name="description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta property="og:title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta property="og:description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta property="og:url" content=")[^"]*(")/, `$1${URL}$2`],
  [/(<meta property="twitter:title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta property="twitter:description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta property="twitter:url" content=")[^"]*(")/, `$1${URL}$2`],
  [/(<link rel="canonical" href=")[^"]*(")/, `$1${URL}$2`],
];

for (const [pattern, replacement] of swaps) {
  if (!pattern.test(html)) {
    console.warn(`postbuild-tutoring: no match for ${pattern}`);
  }
  html = html.replace(pattern, replacement);
}

mkdirSync(resolve(dist, 'tutoring'), { recursive: true });
writeFileSync(resolve(dist, 'tutoring', 'index.html'), html);
console.log('postbuild-tutoring: wrote dist/tutoring/index.html');
