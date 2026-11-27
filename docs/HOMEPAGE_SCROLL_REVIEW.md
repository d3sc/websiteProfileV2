# Homepage — terminal editorial / horizontal work

## Scope and provenance

Root verified as `/home/tpang/documents/websiteProfileV2`. The working tree was clean at the start. No ancestor/root/src AGENTS.md or CLAUDE.md was found. README, Graphify and source contracts were inspected first.

The existing Graphify query located Home/HeroProjects/Detail in `src/App.tsx`, project data in `src/data.ts`, and route helpers in `src/router.ts`. The graph predates the reusable screenshot viewer: actual source additionally contained `src/ProjectGallery.tsx`, `src/project-media.ts` and `src/asset-dimensions.json`. Those current implementations, not the old graph, determine the integration.

Profile/project copy, screenshot pixels, captions, existing routes, preference keys and dependencies are unchanged. Archive/detail layouts retain their previous styles. No screenshot generation, unrelated asset-generator cleanup, deployment, push or graph rebuild was performed.

## Live reference observed

Reference: https://editorial-portfolio-9d8e325b.lovable.app/

Built-in browser navigation/snapshot timed out. An independent JavaScript-enabled Playwright Chromium browser then rendered the reference successfully at 1440×900 and 390×844:

- Identity/portrait hero leads into Selected Work.
- First gallery image is already entering while the section is approaching the viewport; there is no blank introductory track.
- The gallery viewport sticks while normal vertical wheel scrolling drives image positions leftward. At desktop scroll Y=1400, the sticky top was 0 and the second image was near X=11; at Y=2100 it had moved left past the viewport. The rail includes varied widths (240–560 px), gaps and vertical offsets rather than identical centered slides.
- The section releases into a Projects index. Selecting the first Northlight Studio image navigates to that project's case-study page; it does not open a lightbox.
- The reference also retains pinning on mobile. This implementation deliberately differs on mobile/reduced motion, as requested: native horizontal swipe/manual controls and a static reduced-motion layout.
- Only the interaction/composition was used as reference. No reference profile, project claims or imagery was copied.

Raw DOM/geometry observations and screenshots: `docs/verification/horizontal-home/reference-observations.json` and `reference-*.png`. Reference mobile inspection used an emulated mobile viewport and wheel scrolling, not a real mobile device.

## Implementation

- `src/home.css`: homepage-only charcoal/green-tint, warm off-white/phosphor accent; pale neutral/deep-green light theme. Tokens use `:root:has(.terminal-home)` so archive/detail palettes are unchanged. Original screenshot colors are untouched. Existing local fonts are reused. Short two-cycle punctuation animation; no fake terminal output or delayed introduction.
- `src/App.tsx`: hero, bio, skills, contact and manual hero selector remain. Hero CTA keeps `#/#selected-projects`. Gallery follows hero immediately, then a compact index with unchanged current-project summaries/status and links, including text-led Trading.
- `src/ScrollShowcase.tsx`: seven real media views from the four current projects with screenshots, sourced through `projectImages`. Overviews have wide natural-aspect frames; detail crops use narrower frames with vertical offset and retain honest crop captions.
- Desktop (at least 1000 px wide and 580 px tall): sticky viewport below the measured header, passive page-scroll listener and one requested animation frame per scroll update. Travel is `track.scrollWidth - window.clientWidth`; section height is sticky viewport height plus that travel. Reverse scrolling reverses the exact transform. No wheel listener/preventDefault, cloned slides, intro offset, auto-rotation or artificial end dwell. ResizeObserver, media changes, font readiness and resize recalculate measurements.
- Smaller/shorter viewports: native overflow-x swipe track with scroll snap, a next-image glimpse and visible 44 px previous/next controls. No touch handlers intercept the homepage thumbnail track, so vertical gestures remain native page scrolling.
- Reduced motion: unpinned static image grid; CSS independently removes pinning/transform immediately, even before JS media notifications. Every screenshot remains keyboard-reachable.
- Skip gallery uses an intercepted local anchor to focus/scroll the compact index without changing existing hash routes. Keyboard Tab reveals offscreen rail entries by moving the corresponding native vertical scroll position (or local horizontal scroll position on mobile).
- Existing `ProjectGallery` is reused, not replaced. Optional viewer-only/openAt/return-focus integration opens the exact project-local screenshot in the existing dialog. Existing count, full image, captions, arrows/Home/End, swipe, zoom and Escape remain. An optional existing case-study URL is included in the focus order. Closing restores the source thumbnail and position; a restoration guard prevents keyboard focus from repositioning the rail. Route navigation does not restore the old homepage scroll on the new case-study page.
- Original image dimensions reserve space; srcset and existing WebP derivatives are reused. Nearby frames preload, later frames remain lazy. The selected full image is available in original-size viewer mode.

## Tests and observed fixes

Tests were written before implementation; the initial homepage test failed because the horizontal sequence did not exist. Older layout-specific assertions were updated to check the new compact index without dropping existing content/route/locale contracts.

Initial browser acceptance caught:

1. Mobile snap padding was 4vw while the frame gutter became 5vw; previous navigation landed a few pixels from the start. Matching scroll-padding to the gutter fixed it.
2. Viewer return focus could invoke the offscreen keyboard reveal handler. A restoration guard and explicit homepage-only scroll restoration prevent that jump; the original source thumbnail remains the focus destination even after moving slides.
3. Reduced-motion layout could be overwritten by competing React/imperative data-mode writes during a media transition. Measurement now owns the DOM mode attribute; CSS also independently enforces static reduced-motion geometry.
4. The end-frame browser assertion initially compared against the document width rather than the actual rail viewport (which excludes a reserved scrollbar gutter). It now checks the correct visible viewport, without extending the section travel.

Failed traces/screenshots remain in `initial-browser/` and `fix-browser/`. No timeout was raised or accessibility rule disabled to pass these cases.

## Screenshot inventory and extension points

Add genuine, privacy-reviewed files to `public/assets/projects/`, then add the screenshot/caption mapping under the project's slug in `src/project-media.ts`. Dimensions and responsive widths are in `src/asset-dimensions.json`. The homepage sequence automatically consumes those current-project mappings; viewer indices are project-local. Follow the existing redaction/privacy process before publishing new originals or derivatives. Existing detail crops are explicitly views of the same source screenshot, not additional screens.

| Project                    | Existing media                                          | Missing / useful additional evidence                                                                                      |
| -------------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| VPS Manager                | Sanitized overview + summary crop                       | Services/customer management, payment history, notification settings/history.                                             |
| Proxmox Home Lab           | Sanitized shell console                                 | Actual metrics/VM dashboard and authentic network diagram; no suitable diagram/photo exists in the current media mapping. |
| LMS Ujian Online           | Admin overview + management crop                        | Student exam/start/resume/answer/timer flow and essay-grading feedback.                                                   |
| Helpdesk Ticketing         | Queue overview + filter crop                            | Ticket detail, retry/outbox status, sanitized Telegram notification.                                                      |
| Trading Analysis Dashboard | No image; text-led index and existing detail retained   | Watchlist, technical chart/indicators, scoring; reminder screenshot only once actually available.                         |
| FnB Website                | Existing landing screenshot, retained in archive/viewer | Recommendation listing and admin CRUD.                                                                                    |
| School Website             | Existing landing screenshot                             | No additional image required for the current presentation.                                                                |
| Cashier Application Demo   | Existing transaction form                               | Filled transaction with non-personal test data.                                                                           |
| Blog Website               | Existing article index                                  | Author/editor and admin-management views.                                                                                 |
| Chat APP                   | Existing test conversation                              | No additional image required for the current presentation.                                                                |
| Samurai Game               | No screenshot; original video link retained             | Genuine gameplay screenshot.                                                                                              |

## Verification record

Completed verification (production build, Chromium 156.0.8078.4):

| Check                                             | Actual result                                                                                                                                                           |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm test -- --maxWorkers=1`                      | 19/19 passed on the final source                                                                                                                                        |
| `npm run typecheck`                               | Passed                                                                                                                                                                  |
| `npm run build`                                   | Passed; React/TypeScript/Vite and dependencies unchanged                                                                                                                |
| Prettier / `git diff --check`                     | Passed; no semantic lint script is configured                                                                                                                           |
| Full existing + homepage browser suite            | 73 passed, 3 touch-only skips on non-touch configurations; one clean run, no retries, `acceptance-results.json`                                                         |
| Final focused checks after height/gap refinements | 14 passed, 6 intentional skips of desktop-only cases on other configurations; no failures/retries, `final-home-results.json`                                            |
| Browser diagnostics                               | No console/page/request/HTTP errors in the successful acceptance runs                                                                                                   |
| Source preservation                               | Git diff confirms profile/project data, media/captions/dimensions, screenshots, route parser, dependency manifests, SEO index, and previous global/detail CSS unchanged |

The full suite ran before the final viewport-height/mobile-gap refinements; the affected homepage, responsive and viewer checks were rerun on the final production build, rather than claiming the full suite was rerun again. The earlier `final-responsive-results.json` is an intermediate successful run, not the final source acceptance.

Checked at 320×844, 360×800 touch-enabled, 768×1024 and 1440×1000; desktop also resized to 1280×800 and 1440×900/768/600. Verified:

- Native wheel forward/reverse movement while the viewport stays pinned; exact measured travel/section height; final-image alignment, sticky release, resize recalculation and no horizontal document overflow.
- Native PageDown/PageUp, keyboard Tab/Enter across offscreen thumbnails, skip-gallery focus and existing project destinations.
- True Chromium touch events on the mobile track for horizontal swipe and a vertical gesture starting on the image; arrows, next-frame glimpse and subsequent content reachability.
- Second VPS screenshot opens with its exact full crop caption and 2/2 count; advance to 1/2; original-size zoom; close/Escape; focus and page/rail scroll restoration. Also tested closing from a partially clipped desktop thumbnail, and a single-image Proxmox view without slide controls.
- Both languages/themes, preference persistence, reduced-motion static geometry, image decoding/natural dimensions and stable frame size during image load. Archive/detail routes, menu, history, contact, clipboard, malformed URLs and storage/observer failure behavior remain covered by the broader suite.
- Extra short-desktop testing found caption clipping at 768 px height. Frame widths now account for available viewport height; all captions fit at 900/768/600 px in the final rerun. Visual review also caught percentage row-gap overflow hiding the last mobile hero tab: the mobile hero now uses a fixed 48 px gap, with an explicit hero-preview/gallery boundary regression assertion. Reduced-motion static views eagerly load every frame; normal mode preloads nearby frames and leaves later media lazy.

Automated axe checks returned no violations, but `color-contrast` remains incomplete for some elements. Screenshots were visually reviewed in dark/light and mobile/desktop layouts; this is not a claim of comprehensive manual contrast certification or screen-reader verification.

Evidence: `docs/verification/horizontal-home/verified-summary.json`, `acceptance-results.json`, `final-home-results.json`, the corresponding trace directories, and `hero-*`, `gallery-*`, `viewer-*`, `reduced-light-en-*`, `partial-frame-return.png`. Historical failed traces are retained. Earlier screenshot-gallery reports describe historical revisions, not acceptance of this homepage.

- No semantic lint script/ESLint configuration exists; formatting is checked with Prettier separately.
- Chromium desktop/mobile emulation is not Firefox/WebKit, real iOS or screen-reader speech verification. External destinations are not redeployed or sent messages during testing.
- The built-in browser tool timed out on the reference; actual reference and application rendering used the installed Playwright Chromium browser instead.

## Preview

```sh
npm run dev -- --host 127.0.0.1 --port 4184 --strictPort
# Production preview:
npm run build
npm run preview -- --host 127.0.0.1 --port 4184 --strictPort
```

Open http://127.0.0.1:4184/. These commands are instructions, not a claim that a preview server remains running.
