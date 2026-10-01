// Writes static copies of the unlisted Slovak pages (/sk), so GitHub Pages
// serves them directly instead of bouncing through the 404.html fallback.
// Each copy is marked noindex and carries no canonical link, and /sk is left
// out of sitemap.xml on purpose, so search engines never list it.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const dist = resolve(process.cwd(), 'dist');
let html = readFileSync(resolve(dist, 'index.html'), 'utf8');

const TITLE = 'Alfred Leigh, budúci letecký a kozmický inžinier';
const DESC =
  'Slovenská verzia stránky Alfreda Leigha: študent, ktorý navrhuje a stavia kvadrokoptéru a elektrickú enduro motorku od základných princípov.';
const URL = 'https://alfred-leigh.co.uk/sk';

const FALLBACK = `<div id="root">
      <div style="background:#2A2D3E;color:#F6F6F6;min-height:100vh;padding:3rem 1.5rem;font-family:system-ui,sans-serif;line-height:1.6">
        <main style="max-width:720px;margin:0 auto">
          <h1>Alfred Leigh</h1>
          <p>Stránka sa načítava…</p>
        </main>
      </div>
    </div>`;

const swaps = [
  [/<html lang="en">/, '<html lang="sk">'],
  [/<title>[\s\S]*?<\/title>/, `<title>${TITLE}</title>`],
  [/(<meta name="title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta name="description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta name="robots" content=")[^"]*(")/, '$1noindex, nofollow$2'],
  [/\s*<link rel="canonical" href="[^"]*">/, ''],
  [/(<meta property="og:title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta property="og:description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta property="og:url" content=")[^"]*(")/, `$1${URL}$2`],
  [/(<meta property="twitter:title" content=")[^"]*(")/, `$1${TITLE}$2`],
  [/(<meta property="twitter:description" content=")[^"]*(")/, `$1${DESC}$2`],
  [/(<meta property="twitter:url" content=")[^"]*(")/, `$1${URL}$2`],
  // Swap the English no-JS fallback for a neutral placeholder.
  [/<div id="root">[\s\S]*?<\/main>\s*<\/div>\s*<\/div>/, FALLBACK],
];

for (const [pattern, replacement] of swaps) {
  if (!pattern.test(html)) {
    console.warn(`postbuild-sk: no match for ${pattern}`);
  }
  html = html.replace(pattern, replacement);
}

if (!html.includes('noindex, nofollow')) {
  throw new Error('postbuild-sk: refusing to write /sk without a noindex tag');
}

// The Slovak home page plus one copy per project page (keep in step with the
// slugs in src/data/projectDetails.ts).
const pages = ['sk', 'sk/projects/quadcopter', 'sk/projects/enduro-motorcycle'];

for (const page of pages) {
  mkdirSync(resolve(dist, page), { recursive: true });
  writeFileSync(resolve(dist, page, 'index.html'), html);
  console.log(`postbuild-sk: wrote dist/${page}/index.html (noindex)`);
}
