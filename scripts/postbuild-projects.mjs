// Writes real dist/projects/<slug>/index.html files so GitHub Pages serves the
// project pages with HTTP 200 instead of bouncing through the 404.html
// fallback, and gives each page its own title, description and canonical URL.
// Keep the slugs in step with src/data/projectDetails.ts.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
const base = readFileSync(resolve(dist, 'index.html'), 'utf8');

const pages = [
  {
    slug: 'quadcopter',
    title: 'Modular Quadcopter - First-Principles Design & Build | Alfred Leigh',
    desc: 'A quadcopter designed from first principles: PDS with 15 quantified requirements, momentum-theory propulsion sizing and trade studies, heading for CNC and carbon-fibre manufacture and flight test.',
  },
  {
    slug: 'enduro-motorcycle',
    title: '72V Electric Enduro Motorcycle Build | Alfred Leigh',
    desc: 'A ground-up 72V electric enduro motorcycle: QS205 hub motor, Fardriver ND72450 controller, NBPower battery, and three photo-documented build phases.',
  },
];

for (const { slug, title, desc } of pages) {
  const url = `https://alfred-leigh.co.uk/projects/${slug}`;
  const swaps = [
    [/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`],
    [/(<meta name="title" content=")[^"]*(")/, `$1${title}$2`],
    [/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`],
    [/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`],
    [/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`],
    [/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`],
    [/(<meta property="twitter:title" content=")[^"]*(")/, `$1${title}$2`],
    [/(<meta property="twitter:description" content=")[^"]*(")/, `$1${desc}$2`],
    [/(<meta property="twitter:url" content=")[^"]*(")/, `$1${url}$2`],
    [/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`],
  ];

  let html = base;
  for (const [pattern, replacement] of swaps) {
    if (!pattern.test(html)) {
      console.warn(`postbuild-projects: no match for ${pattern}`);
    }
    html = html.replace(pattern, replacement);
  }

  mkdirSync(resolve(dist, 'projects', slug), { recursive: true });
  writeFileSync(resolve(dist, 'projects', slug, 'index.html'), html);
  console.log(`postbuild-projects: wrote dist/projects/${slug}/index.html`);
}
