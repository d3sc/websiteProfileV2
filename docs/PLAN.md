# Portfolio Ikbar Rabbani — implementation plan

## Revision 5 — Projects card composition
User requests Projects page return to a card-based layout instead of horizontal wheel showcase, with tasteful visual decoration and stronger editorial composition: one featured/hero project, a current-work/in-progress project area, then the complete project card grid. Remove the vertical-wheel-to-horizontal interaction from the Projects page and its dedicated track instructions/progress cue; preserve normal vertical scrolling everywhere. Keep existing routes, detail pages, locale/theme, monochrome palette, and restrained motion.

Projects composition: featured project spans the card grid with larger image, eyebrow/category, title, summary, stack, and detail CTA; current-work section clearly labels a fictional sample in progress, uses status/phase copy rather than fabricated metrics, and links to its detail; all-projects section uses tidy responsive cards with images. Add light decoration through numbered editorial labels, thin rules, corner markers, subtle image framing/line pattern or status dot—no gradients, blobs, fake stats, or excessive ornaments. All new copy and accessible labels bilingual.

Acceptance: Projects route has no horizontal wheel track/track instruction; featured, current-work and all-project sections render in both locales/themes; all six projects remain reachable with filters/detail links; no root or card overflow at 1440/390/320; keyboard and touch normal vertical scroll; motion remains finite/reduced-motion safe; prior build/typecheck/unit/e2e/accessibility/runtime gates pass; fresh desktop/mobile Projects screenshots reviewed. No deployment.


Revision 4's experimental wheel mapping was superseded and removed. Projects now uses ordinary vertical document scrolling with a bounded responsive card composition. Motion remains finite and reduced-motion safe; no wheel-specific acceptance criteria remain.


User requests elegant, restrained animation on every SPA view while preserving the approved monochrome layout, typography, palette, cards and routed architecture. Add purposeful page-entry, section/card reveal, image hover and control transitions; no decorative loops, parallax, blocking delays or excessive movement. Keep reduced-motion behavior and keyboard/accessibility semantics intact.

Acceptance: Home, Projects, Detail and Not-found views visibly use the motion system; animation is <=300ms and transform distance stays subtle; hover/focus states remain usable; prefers-reduced-motion removes non-essential motion; all prior unit/e2e/build/typecheck gates pass and screenshots are reviewed for desktop/mobile. Delegate implementation before coordinator review. No deployment.

## Revision 2 — current requirements (supersedes original single-page sections/dialog)
User requests richer content while preserving existing layout vocabulary and monochrome palette. Keep SPA, theme/locale preferences, but provide distinct Home, Projects and Project Detail views. Use hash-based routes (#/, #/projects, #/projects/:slug) so direct links/reload work on static hosts without rewrites; normal browser back/forward, semantic links, active nav, route focus/scroll, localized document titles and a helpful not-found view. About/contact remain home sections reachable from other routes.

Home: richer bilingual introduction, substantive capabilities grouped by frontend/backend/tooling, working-process narrative, selected-project preview, about and honest dummy contact. No invented employment or metrics. Projects: dedicated filterable six-card grid, each with local preview image, title, summary and tags. Details: no modal; dedicated shareable page with large header image, title, semantic time/date and duration, tags, overview, challenge, approach and outcome/learning content plus return-to-projects navigation. Dummy dates/outcomes/visuals explicitly labeled sample, not real accomplishments.

Images: six distinct local neutral mockup preview assets depicting each fictional application's UI, not stock unrelated photos; clear sample-image label and localized alt text, aspect ratios/dimensions reserved, no remote dependencies. Explain replacement in README.

Motion: subtle 150–300ms hover/focus transitions and short opacity/translate entry; no loops, parallax, blocking delays or flashing. Reduced-motion disables transforms/animation and smooth scrolling; content stays available.

Sequential stages: R2.1 implementation, content/assets, unit + migrated browser suite with all gates executed by executor then reviewed independently; R2.2 only if review finds issues, delegate focused corrections then rerun gates. Maximum three corrections per issue before reassessment. No publication.

Acceptance: build/typecheck/unit/e2e pass; distinct routes and six complete details including image/time/tags/title/descriptions; back/forward/direct-load/reload/not-found work; locale/theme persist across routes; richer home and every detail fully bilingual; no broken images or horizontal overflow at 1440/390/320 widths in both themes; accessible keyboard route navigation and reduced motion; desktop/mobile screenshots of Home/Projects/Detail reviewed by coordinator; README and PROGRESS updated. Old modal tests must be replaced by real route coverage, not merely removed.


## Brief and baseline
Repository inspected: empty except .git; no existing application or assets. Owner: Ikbar Rabbani, FullStack Programmer. User authorizes dummy content. Minimal monochrome SPA with neat project cards, dark/light mode, Indonesian/English toggle. No publication/deployment.

## Architecture
React + TypeScript + Vite; plain CSS custom properties; no UI framework or backend. One document with anchor navigation Home, Projects, About, Contact. Projects section is primary content. Use typed bilingual content in a central module. Six explicitly fictional example projects; no invented real employment, results, credentials, or live repositories. Project detail dialog is functional rather than fake external links. Contact clearly identifies sample contact details; do not imply delivery of messages. No remote fonts/images required. Theme defaults to system preference, language defaults Indonesian; choices persist with guarded localStorage. Update html lang and accessible toggle names.

## Sequential stages
1. Foundation and feature implementation: scaffolding, typed content, responsive full SPA, six project cards, category filtering, accessible details dialog, theme and locale controls. Executor must run build and type checks and report exact results. Coordinator reads source and independently runs gates before accepting.
2. Verification and polish: add reproducible Playwright browser tests; keyboard, filtering, dialog, persistence, locales, themes, mobile navigation; capture desktop/mobile screenshots. Executor runs all checks before return. Coordinator independently runs checks, visually reviews screenshots and fixes only via delegation.

## Definition of done
- npm install, npm run build, npm run typecheck and npm test succeed.
- Identity/role correct; all fictional content explicitly labeled in both locales.
- Projects menu navigates without reload; six neat cards; category filtering and details work; zero empty/dead href buttons.
- All interface and descriptive copy switches EN/ID, excluding proper names and technology names; document lang follows; preferences survive reload; storage denial cannot break rendering.
- Light/dark themes cover every section and modal with readable contrast.
- Desktop 1440x1000, mobile 390x844 and narrow 320px show no horizontal overflow, clipped controls or overlapping text.
- Keyboard reachable controls, visible focus, skip link, semantic landmarks; dialog Escape/close/backdrop and focus return work; mobile navigation works.
- Browser tests assert no page errors; local assets resolve; reduced motion respected.
- README explains commands, dummy replacement and limitations; docs/PROGRESS.md records evidence and gate outcomes.
- Coordinator reviews actual implementation and screenshots, not just executor report. No deployment, commits or pushes required.

## Correction policy
Sequential execution only, model inherited from delegation configuration (no override). Each handoff includes scope, paths, decisions and acceptance criteria. Maximum three corrections for the same issue; then reassess approach or request user decision. User-facing completion only after all criteria pass or an explicit decision blocker.
