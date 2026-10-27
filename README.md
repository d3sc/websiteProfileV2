# Ikbar Rabbani — Portfolio

React + TypeScript + Vite hash-routed portfolio adapted from the user-supplied content extracted from `https://d3sc.vercel.app/`. The supplied portfolio identity, project narratives, technologies, certificates, contact details, and social links are represented bilingually. The source was treated as data and its links/content were not independently verified.

## Revision 6 source adaptation

- Added supplied Kulineran FnB Website, School Website, and Samurai Game entries with their supplied external links and technology names.
- Retained three additional entries only as clearly labeled sample engineering work so the six-card composition remains intact.
- Added bilingual hero, about, skills/tools, latest project, game, achievements, and contact copy. Certificate descriptions remain explicitly marked as source placeholders.
- Contact details are supplied by the user/source: Citizens of Earth, `+62 81413265114` (`tel:`), and `ikbar686@gmail.com` (`mailto:`), plus supplied GitHub, Instagram, LinkedIn, and YouTube links. There is no fake contact form.
- Local SVG artwork remains illustrative sample artwork. Replace each `public/assets/*.svg` mapping in `src/data.ts` with verified assets before publication; no source image assets were fabricated.

## Verification caveat and replacement instructions

Source claims, contact information, project destinations, certificate titles, and social destinations should be verified before publication. To replace content, edit the typed `raw` project records, `achievements`, `socialLinks`, and bilingual `copy` in `src/data.ts`; replace only local SVGs with assets you have permission to use. Keep external links as ordinary absolute `https://` links so they do not enter SPA routing.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm test
npx playwright install chromium
npm run test:e2e
git diff --check
```

Routes are `#/`, `#/projects`, and `#/projects/:slug`; preferences use guarded localStorage. See `src/App.tsx`, `src/data.ts`, `src/styles.css`, `public/assets/`, and `e2e/portfolio.test.ts` for implementation and coverage.

## Revision 5

- Replaced the Projects-only horizontal wheel showcase with normal vertical document scrolling. Removed its wheel hook/listeners, bounded track, instruction and progress cue; filters now sit above a responsive card grid.
- Composed Projects as a featured hero (Ruang Kerja), a clearly fictional in-progress current-work panel without percentages or fabricated metrics, and an all-project archive containing all six local illustrative cards. Added bilingual labels, category names, accessible section structure and sample disclaimers.
- Added a thin offset image frame and corner marks while preserving the monochrome palette, 16:9 image ratios, finite motion and reduced-motion behavior. Responsive CSS keeps the root and cards within 1440px, 390px and 320px viewports.
- Replaced obsolete wheel expectations with vertical-scroll/composition assertions and fresh screenshot capture under `docs/screenshots/revision-5/`.

Verification: `npm run build`, `npm run typecheck`, `npm test` (2 files, 5 tests), `npm run test:e2e` (27 Chromium tests across desktop/mobile/narrow), and `git diff --check` passed. Fresh Projects evidence is stored at `docs/screenshots/revision-5/projects-desktop.png`, `projects-mobile.png`, and `projects-narrow.png`.

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm test
npx playwright install chromium
npm run test:e2e
git diff --check
```

Routes are `#/`, `#/projects`, and `#/projects/:slug`; they support direct hash links, reload, browser history, localized titles, and a not-found view. Preferences use guarded localStorage (`portfolio-locale`, `portfolio-theme`) and default to Indonesian plus the system theme. Replace the six SVGs in `public/assets/` and the typed content in `src/data.ts` only with verified work before publication.

## Structure

- `src/App.tsx`: modular hash route shell, navigation, home/projects/detail/not-found views.
- `src/data.ts`: bilingual project and interface content.
- `public/assets/*.svg`: six distinct local 16:9 illustrative sample UI mockups.
- `src/styles.css`: neutral theme tokens, responsive grid, visible focus and reduced-motion handling.
- `src/*.test.*`: Vitest route/content checks.
- `npm run test:e2e`: 27 Playwright tests across desktop 1440px, mobile 390px, narrow 320px; all six routed details, vertical Projects composition, axe, locale/theme matrix, focus/navigation/persistence/runtime checks.

The `.invalid` sample address is plain text and cannot receive messages. No employment, clients, delivery metrics, credentials or live project URLs are claimed. No remote runtime assets or external services are used.
