# alfred-leigh.co.uk

My engineering portfolio - live at **[alfred-leigh.co.uk](https://alfred-leigh.co.uk)**.

Aspiring aerospace engineer. The site showcases my two flagship builds, each with full engineering documentation on GitHub:

- **[First-principles quadcopter](https://github.com/a365l/quadcopter-project)** - PDS, momentum-theory propulsion sizing, trade studies, heading for CNC + carbon fibre manufacture and flight test validation
- **[72V enduro e-motorcycle](https://github.com/a365l/enduro-emotorcycle-build)** - QS205 hub motor, Fardriver ND72450, custom 2.16 kWh pack, three build phases fully photo-documented

Plus an Education section: 9 GCSEs (June 2026), 8 at grade 7 or above, and the Year 12 A-levels that follow.

## Stack

React 19 + TypeScript + Vite, Emotion styled components, Framer Motion, React Router. Deployed to GitHub Pages via Actions on every push to `main` (SPA routing handled with the 404-redirect pattern).

## Development

```bash
npm ci
npm run dev      # local dev server
npm run build    # type-check + production build
npm run lint
```
