# Screenshot-led portfolio upgrade

## Architecture and baseline

- Root: `/home/tpang/documents/websiteProfileV2`; Git had no tracked changes at start, only existing untracked `graphify-out/`. No repository/ancestor `AGENTS.md` or `CLAUDE.md` was found. README and source contracts were read before editing.
- Started with the existing code-only Graphify graph. Query `Home ProjectCard Detail Visual projects skills routeHref` located the shell/views in `src/App.tsx`, project/profile data in `src/data.ts` and `src/current-projects.ts`, and routing in `src/router.ts`. Verified against actual files, including `src/styles.css` and `public/assets/projects/`. The graph is a pre-upgrade snapshot, not an index of the new gallery files.
- Stack stays React + TypeScript + Vite; npm lockfile/runtime dependencies unchanged. Indonesian default, English, dark/light preferences, hash routes, filters, manual hero selector, linked skills and contact actions retained. Added only `#/#selected-projects` for the hero showcase CTA.
- Baseline Chromium captured 1440 and 360 px against the running Vite server. `baseline.json` records original image requests. Trading referenced a missing asset; archived image composition also prepended a path to an already absolute path. Baseline unit suite: 13 passed / 1 failed, because the test expected seven archived entries while the source held six. No project was invented to fill that stale expectation.

## Design and interaction

- Identity-first hero with a direct showcase link; quieter, unrotated screenshot preview while preserving its manual project selector.
- Large featured cover, smaller project-grid previews, and full uncropped screenshots in detail galleries. Text and scoped evidence remain visible, not hidden behind hover.
- Reusable `ProjectGallery`: manual previous/next, wraparound arrows, Home/End, visible count, desktop thumbnail selection, touch swipe, captions and restrained fade/translation. No autoplay.
- One-image projects have no carousel navigation/thumbnails. Missing screenshots use explicit text-led notes, not broken images or invented dashboards.
- Native-dialog lightbox: close button, Escape, explicit initial focus and Tab containment, focus restoration, preserved slide, original-pixel zoom with scroll/pan, and fit-to-screen mode. Body scrolling restored on close/unmount.
- Native vertical page scrolling remains; touch swipes only switch for sufficiently horizontal gestures. Reduced motion disables slide/reveal transitions. Real dimensions and a stable reserved gallery stage prevent slide-driven layout shifts; screenshots retain natural aspect ratio with contain, not cropping.
- Responsive 480/960 WebP derivatives, accurate `srcset`/`sizes`, lazy covers/thumbnails below the fold, full original-resolution image only in the enlarged view. No new runtime library.

## Asset provenance and privacy

The public project directory originally contained ten WebP images: four current-project screenshots and six older assets. Five of those older assets map to the six current archived entries; `anime-scraping.webp` has no matching entry in the current source and was not reassigned or used to invent a project. The SVGs are older illustrative assets, not authentic Proxmox diagrams. QA screenshots under docs show the portfolio itself, not additional application screens.

Inspected current screenshots at full resolution, the older asset contact sheet and Chat APP full resolution. No credentials/internal addresses were found in the selected visible source content, but VPS customer names and Proxmox identifiers required redaction. This is a visual review, not a forensic security guarantee.

- VPS Manager: solid, baked-in redaction over customer activity records. Not CSS hiding or reversible blur.
- Proxmox: solid redaction of host/VM tree, selected node name, account menu, shell identity and task records. Caption correctly calls the image a shell console, not a dashboard or proof of network isolation.
- LMS: generic admin labels, test exam titles and aggregate counts; no student names/answers visible.
- Helpdesk: queue summary/filter interface; reporter data and ticket bodies are outside this capture.
- Older selected images: landing pages, sample blog, cashier form and generic user/admin chat with test messages. No evidence claim beyond the visible interface.

Redactions are applied to the original public filenames AND responsive derivatives, so an original asset URL does not bypass them. Original VPS/Proxmox files and private baseline captures are preserved outside the project at `/tmp/websiteProfileV2-gallery-originals/`, not copied into the production build. `asset-audit.json` records mask/crop coordinates and dimensions. Existing Git history may still contain raw originals; history was not rewritten. Do not publish raw backups or assume this removes past exposure.

### Honest gallery inventory and missing screens

A crop is explicitly captioned as a crop of the same overview, not another screen or evidence of a workflow.

| Project                    | Available views                              | Screens still needed                                                                                                                                 |
| -------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| VPS Manager                | Sanitized dashboard + summary-indicator crop | Sanitized services/customer management, payment history and notification settings/history; provider/recipient delivery needs separate real evidence. |
| Proxmox Home Lab           | Sanitized shell console, one image           | Sanitized metrics/VM dashboard; authentic network diagram. No suitable infrastructure photo/diagram exists in this repo.                             |
| LMS Ujian Online           | Admin dashboard + management-shortcut crop   | Student start/resume/answer/timer screens and essay-grading score/feedback screen with non-personal test data.                                       |
| Helpdesk Ticketing         | Ticket queue + filter crop                   | Ticket detail, notification outbox/retry status, and sanitized Telegram notification. Current views do not claim that sequence is captured.          |
| Trading Analysis Dashboard | No screenshot; text-led                      | Multi-market watchlist, historical chart/technical indicators, scoring view; reminder status only when actually available.                           |
| FnB Website                | Existing landing page, one image             | Recommendation/content listing and admin CRUD view to illustrate the described contribution.                                                         |
| School Website             | Existing landing page, one image             | No additional image required for the current single-image presentation; further genuine pages may be added when supplied.                            |
| Cashier Application Demo   | Existing transaction form, one image         | Filled transaction with non-personal test data; do not imply incomplete features are implemented.                                                    |
| Blog Website               | Existing article index, one image            | Author/editor and admin-management screens to illustrate the described workflows.                                                                    |
| Chat APP                   | Existing test conversation, one image        | No additional image required for the current presentation; further genuine contact-management views may be supplied.                                 |
| Samurai Game               | No screenshot; existing video link retained  | Gameplay screenshot demonstrating the described controls/combat.                                                                                     |

## Verification

Initial new-gallery browser run: 7 passed, 2 failed, 1 touch-only test skipped on non-touch desktop. It exposed initial dialog focus and native focus-wrap behavior. The implementation now explicitly focuses Close after `showModal()` and cycles dialog controls. The focused desktop/mobile rerun passed both cases. Earlier traces remain in `playwright-artifacts/`, `lightbox-rerun/`, and `lightbox-focus-fix/`.

Final suite results are recorded in `docs/verification/gallery/final-results.json`; see the final acceptance section added after completion. All browser checks exercise the real built artifact through Vite production preview, not mocked project interfaces or fake gallery fixtures.

No lint script or ESLint configuration exists. Prettier checks formatting and is not reported as semantic linting. Tests do not establish current availability of external GitHub/demo/social destinations; link wiring is checked without external sends/deployment. WebKit, Firefox, real iOS and screen-reader speech are not covered by Chromium emulation.

## Preview and checks

```sh
npm run dev -- --host 127.0.0.1 --port 4184 --strictPort
# Or use the production build on an unused port:
npm run build
npm run preview -- --host 127.0.0.1 --port 4185 --strictPort
npm test -- --maxWorkers=1
npm run typecheck
npm run test:e2e -- --workers=1
npx prettier --check src/App.tsx src/ProjectGallery.tsx src/project-media.ts src/asset-dimensions.json src/gallery.css src/gallery.test.tsx src/current-projects.ts src/router.ts src/data.test.ts e2e/gallery.test.ts e2e/portfolio.test.ts e2e/positioning.test.ts
```

`npm run test:e2e` uses its configured port 4173. No push or deploy performed.
