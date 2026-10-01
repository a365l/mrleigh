# Slovak version of the site (`/sk`)

A note for whoever works on this repo next, human or agent.

## What this is

`alfred-leigh.co.uk/sk` is an unlisted Slovak version of the portfolio. Alfred
had it built on 1 October 2026 so his grandmother in Slovakia can read the
site. It is a family link, not a public feature: he asked for no side effects
on the English site, its SEO, or how recruiters see it.

It is the real site (same `Layout`, navbar, sections and project pages) with
Slovak text swapped in. It is not a separate design. An earlier attempt as a
standalone simplified page was rejected for looking different, so keep the two
languages visually identical.

Pages: `/sk`, `/sk/projects/quadcopter`, `/sk/projects/enduro-motorcycle`.

Not translated, on purpose: the tutoring page and the quadcopter engineering
log. The Slovak pages link to the English ones for those.

## How it works

- `src/i18n/sk.ts` holds all the Slovak text. It is a hand translation.
- `src/i18n/lang.ts` exports `LangContext` and `useSk()`. `useSk()` returns the
  Slovak dictionary under `/sk` and `null` everywhere else.
- `src/pages/SkSite.tsx` wraps the normal pages for the `/sk` routes. It
  provides the dictionary and sets `lang="sk"`, the Slovak title and
  `noindex, nofollow` while mounted, restoring them on unmount.
- Components keep their English text inline and only switch when `useSk()` is
  not null, in the form `{sk ? sk.hero.title : "Hi, I'm Alfred"}`. Lists
  (milestones, projects, skills, exam results) are overlaid by id, slug or
  index in small `local...` helpers at the top of each component.
- `scripts/postbuild-sk.mjs` runs at the end of `npm run build` and writes
  `dist/sk/**/index.html` copies marked `noindex`, with no canonical link, so
  GitHub Pages serves the Slovak URLs directly.

Files that contain Slovak wiring (everything else is untouched):

```
package.json                              build script calls postbuild-sk.mjs
scripts/postbuild-sk.mjs                  Slovak only
src/i18n/                                 Slovak only
src/pages/SkSite.tsx                      Slovak only
src/App.tsx                               two /sk routes, loading text in Home
src/pages/ProjectDetail.tsx
src/components/layout/Layout.tsx
src/components/layout/ProjectLayout.tsx
src/components/sections/Hero.tsx
src/components/sections/Journey.tsx
src/components/sections/Projects.tsx
src/components/sections/Skills.tsx
src/components/sections/Education.tsx
src/components/sections/Contact.tsx
src/components/sections/TutoringStrip.tsx
```

## Rules while it exists

1. English must not change. With `useSk()` returning `null`, every component
   has to render exactly what it rendered before. Keep English strings inline
   as the default branch.
2. Keep it unlisted. Do not add `/sk` to `public/sitemap.xml`, do not link to
   it from any English page, and do not remove the `noindex` tags. Do not add
   a `Disallow` for it in `robots.txt` either: that would stop crawlers seeing
   the `noindex`.
3. Do not import `sk.ts` from anything except `SkSite.tsx`. That keeps the
   Slovak text in its own lazy chunk, so English visitors never download it.
4. The translation does not update itself. When English copy changes, make
   the matching change in `sk.ts`. A new project needs an entry under
   `projects.items` and `projectDetail.projects` in `sk.ts`, and its slug in
   the `pages` list in `scripts/postbuild-sk.mjs`.
5. One line exists only in Slovak: the education section explains that GCSE
   grade 9 is the best mark, because Slovak school marks run the other way
   (1 is best). Keep it.

## How to remove it

The last commit before any Slovak work is `ea63a0c`. Use it as the reference:
`git diff ea63a0c -- <file>` shows exactly what the Slovak work added to a
file, alongside any unrelated changes made since.

### Option A: revert the commits

The Slovak work is two commits, `3ca34ec` and `2eb3ad8`, plus whichever
commits added or changed this README. Revert them newest first:

```bash
git log --oneline -- src/i18n/README.md   # the README commits, newest first
git revert --no-edit <README commits, newest first> 2eb3ad8 3ca34ec
```

Reverting `2eb3ad8` then `3ca34ec` was tested when this was written and gave
a tree identical to `ea63a0c`. If later commits have edited the same lines in
the component files, the revert will stop on conflicts. Either resolve them by
keeping the English branch of each `sk ? ... : ...`, or use option B.

### Option B: remove it by hand

1. Delete `src/i18n/`, `src/pages/SkSite.tsx` and `scripts/postbuild-sk.mjs`.
2. In `package.json`, drop ` && node scripts/postbuild-sk.mjs` from the
   `build` script.
3. In `src/App.tsx`, remove the `SkSite` lazy import, the `useSk` import, the
   `const sk = useSk();` line in `Home`, and both `/sk` routes. Put the five
   loading messages back to plain text (`Loading journey...` and so on).
4. In each of the ten component files listed above:
   - remove the `useSk` import and the `const sk = useSk();` line;
   - replace every `sk ? <Slovak> : <English>` with just the English branch;
   - remove the `local...` helpers and map over the original arrays again
     (`localMilestones`, `localSideProjects`, `localProjects`,
     `localCategories`, and `localise()` in `Education.tsx`);
   - `Layout.tsx`: remove the `home` constant (links go back to `/#journey`
     and so on), the `?? sk?.layout.sections` fallback, and the
     "English version" footer link;
   - `ProjectDetail.tsx`: rename `base` back to `project`, drop `&& !sk` on
     the engineering log, and delete the Slovak log note block below it.

### Option C: switch it off without removing the wiring

Remove the two `/sk` routes in `src/App.tsx` and the `postbuild-sk.mjs` step
in `package.json`. The Slovak URLs stop existing. The `useSk()` calls stay in
the components, always return `null`, and the site renders in English as
normal. This is the quickest safe option, but it leaves dead code behind.

### Check the result (options A and B)

```bash
grep -rn "useSk\|i18n\|/sk" src scripts package.json   # expect no output
npx tsc -b && npx eslint src scripts
npm run build && ls dist/sk                            # expect "No such file"
```

Then load `/`, `/projects/quadcopter`, `/projects/enduro-motorcycle` and
`/tutoring` and confirm they look and read as before. After deploying, the
`/sk` URLs should no longer load the Slovak site.
