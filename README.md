# Ikbar Rabbani Purwanto - Developer Field Notes

React 19 + TypeScript + Vite portfolio. Positioning: **Full-Stack Developer · Linux & Self-Hosting**. Indonesian by default, optional English; charcoal/off-white/electric-lime editorial design and an optional light theme. No added runtime dependencies.

## Current content

Hero tabs and selected work: VPS Manager → Proxmox Home Lab → LMS Ujian Online. Other work: Helpdesk Ticketing and Trading Analysis Dashboard. Six earlier projects remain in the archive with their existing detail URLs (the actual source inventory; the previous seven-entry documentation was stale).

Bio, education and four skill groups follow the latest owner brief. Skills link to the projects that use them. Current cards have concise summaries and scoped status; details explain problem, contribution, stack and verification limits. The manual hero supports click/touch, arrows, Home/End and reduced motion, without autoplay.

## Preview

```sh
npm ci
npm run dev -- --host 0.0.0.0 --port 4174 --strictPort
# Or preview the production build:
npm run build
npm run preview -- --host 0.0.0.0 --port 4174 --strictPort
```

Use one server at a time on the port. Binding to all interfaces permits access from the server's Tailscale address when network policy permits. These commands do not push or deploy.

## Checks

```sh
npm test -- --maxWorkers=1
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
# Low-memory smoke acceptance of the built artifact:
node scripts/verify-current-content.mjs
npx prettier --check src/App.tsx src/current-projects.ts src/styles.css src/data.ts src/router.ts src/App.test.tsx src/data.test.ts src/field-notes.test.tsx src/positioning.test.tsx e2e/portfolio.test.ts e2e/positioning.test.ts playwright.config.ts index.html package.json README.md docs/FIELD_NOTES_REVIEW.md
git diff --check
```

The repo has no lint script/ESLint configuration. Prettier is a formatting check, not a semantic lint result. `test:e2e` first builds, then starts production preview on port 4173. Chromium tests cover 1440/768/360/320 px, locale/theme variants, all five current details and archived link wiring, hero interaction, linked skills, mobile menu, history, contact wiring, clipboard success/failure, storage/observer fallback, reduced motion, axe accessibility and horizontal overflow. Current evidence screenshots: `docs/screenshots/field-notes/positioning/`.

## Content integrity

- Four current-project screenshots supplied in the repository are now displayed after privacy review. VPS customer identities and Proxmox host/account/VM/task details are permanently redacted in the public files and all responsive derivatives. No public demo/source URL is invented.
- VPS, LMS, and Helpdesk galleries contain one overview plus a labelled close-up crop of that same screenshot, not additional screens. Proxmox and five archived projects use a single-image viewer without carousel controls. Trading and Samurai remain text-led because screenshots are missing. The unassigned anime asset is not repurposed.
- Mock acceptance, feature tests, provider submission, recipient delivery and active deployment status are kept distinct. Reminder support remains in development. No unverified isolation or complete student-flow claim is made.
- No private IPs, credentials, chat IDs, raw server configuration, invented impact numbers, dates, employers or proficiency percentages are published.
- Old sample URLs still show explicit legacy notices. No CV file/URL was available, so there is no invented download action.
- Fonts are self-hosted WOFF2 with bundled OFL licenses.

See `docs/HOMEPAGE_SCROLL_REVIEW.md` for the current homepage-only terminal palette, native-scroll-driven horizontal showcase, viewer integration and browser verification. The screenshot-gallery implementation remains documented in `docs/GALLERY_REVIEW.md`.

See `docs/GALLERY_REVIEW.md` for the screenshot/gallery upgrade, privacy review, current verification and per-project missing assets. `docs/FIELD_NOTES_REVIEW.md` and `docs/PLAYWRIGHT_VERIFICATION.md` preserve earlier evidence and are historical rather than acceptance of this upgrade.

For an instrumented one-worker rerun (use a fresh run name to retain older evidence):

```sh
npm run build
python3 scripts/run-playwright-qa.py recheck --max-failures=1 --global-timeout=900000
python3 scripts/summarize-playwright-qa.py recheck
```

The diagnostic config writes traces/screenshots, JSON results, console/page/network errors and host resource samples under `docs/verification/playwright/<run>/`. Axe runs in the same page with a no-iframe guard and unchanged WCAG tags. Full-page screenshots use CSS-pixel scale without changing device emulation. Earlier revision docs and screenshots are historical records, not current acceptance.

## Main files

- `src/current-projects.ts`: five current project narratives and verification limits.
- `src/data.ts`: profile, bilingual copy, linked skill groups, archived work and contact data.
- `src/App.tsx`: shared shell, hero selector, current/other work, archive and detail views.
- `src/styles.css`: existing editorial design tokens and responsive base.
- `src/gallery.css`: image-led covers, responsive gallery, lightbox and reduced-motion styles.
- `src/ProjectGallery.tsx`: reusable manual gallery, touch/keyboard controls and accessible native-dialog lightbox.
- `src/project-media.ts`, `src/asset-dimensions.json`: bilingual captions, honest asset mapping and responsive dimensions.
- `scripts/prepare-gallery-assets.py`: reproducible redactions, labelled detail crops and responsive WebP generation (Pillow required).
- `src/router.ts`: existing hash routes and malformed-URL protection.
- `src/*.test.*`, `e2e/*.test.ts`: unit/content and browser regressions.

Routes: `#/`, `#/projects`, `#/projects/:slug`, `#/#about`, `#/#contact`, plus the additive `#/#selected-projects` showcase anchor. Preference keys remain `portfolio-locale` and `portfolio-theme`.
