# Playwright verification — portfolio

## Scope

Local verification only, against the production `dist` build. Existing app/design/content changes and the prior Chromium smoke baseline are preserved. No push, deploy, unrelated service restart, private-server inspection, or external notification send is part of this task.

The existing matrix configures **Chromium only**, not Firefox or WebKit:

| Project | Viewport    | Device semantics                                                                               |
| ------- | ----------- | ---------------------------------------------------------------------------------------------- |
| tablet  | 768 × 1024  | Desktop Chrome emulation; responsive mobile navigation                                         |
| desktop | 1440 × 1000 | Desktop Chrome emulation                                                                       |
| mobile  | 360 × 800   | iPhone user-agent/touch preset, but existing `isMobile: false`; not real Safari/iOS acceptance |
| narrow  | 320 × 844   | Desktop Chrome emulation at a narrow responsive viewport                                       |

All jobs use one worker. Original per-test timeout stays **120 seconds**. The diagnostic config records traces and screenshots on passing as well as failing cases; JSON results and sampled host resources are saved separately for each run.

## Historical failures

`/tmp/portfolio-positioning-e2e.log` records these timeouts in the previous broad run:

- Chromium/tablet: EN/dark, home → archive → details → accessibility.
- Chromium/desktop: ID/light and EN/light, same combined scenario.
- Previous runners exited -15 because they were explicitly stopped; that is not a new test result.
- A preserved later interrupted trace also reports context-teardown timeout around desktop screenshot capture. It is distinct from a selector/assertion failure and does not establish a UI defect.

Historical traces and a parsed summary were preserved under `docs/verification/playwright/historical/` before new runs.

## Single-case reproduction, before the fix

Command:

```sh
npm run build
python3 scripts/run-playwright-qa.py repro-tablet-en-dark --project=tablet --grep='en/dark: home'
```

Result: **1 timed out**, exit 1, with the original test and timeout. Evidence directory: `docs/verification/playwright/repro-tablet-en-dark/`.

Measured boundaries:

- Vite production preview became HTTP-ready in about 6 seconds; it is not the dev server.
- Browser launch: 13.10 seconds; initial page creation: 23.21 seconds; initial navigation: 10.18 seconds in the browser trace.
- Navigation and current-project detail checks progressed to the final legacy-game accessibility audit.
- Axe's default `runPartial`/`finishRun` pipeline created an auxiliary blank page. One `BrowserContext.newPage` call took **72.98 seconds**. The trace ended with axe injection pending; teardown added further delay.
- No browser console errors were found in the recorded trace.
- Host available memory reached **196 MiB**, free swap **0 MiB**, memory PSI `some avg10` **89.41%**, and major-page-fault counter increased by **12,562** across the sampled run. These are shared-host measurements, not per-process allocation claims.

The production page was not waiting indefinitely for a mobile-menu or hero selector. The demonstrated bottleneck was browser/audit setup under memory/paging pressure. The automatic standalone failure screenshot was not emitted in this reproduction; the trace and error-context remain available.

## Minimal fix and targeted confirmation

`e2e/portfolio.test.ts` runs axe with `setLegacyMode(true)`, i.e. real `axe.run` in the existing page rather than creating an auxiliary renderer. The installed package implementation was inspected before using the option.

- WCAG tags remain `wcag2a`, `wcag2aa`, and `wcag21aa`; no rules or violations are excluded.
- A frame-count assertion requires exactly one main frame, so future iframes cannot silently lose cross-origin audit coverage.
- A page-count assertion ensures the audit allocates no auxiliary page.
- Each audit is a named trace step and attaches its pass/violation/incomplete summary.

Targeted repeat:

```sh
python3 scripts/run-playwright-qa.py fixed-tablet-en-dark --project=tablet --grep='en/dark: home'
```

Result: **1 passed**, exit 0, without increasing the test timeout. Available-memory minimum rose to **643 MiB** in this sampled repeat. Total run time remained about 240 seconds because browser launch alone took 89.70 seconds and hooks/artifact teardown were slow. This is a scoped A/B observation on a shared host, not a universal performance guarantee.

## Final matrix

Run command:

```sh
python3 scripts/run-playwright-qa.py matrix --max-failures=1 --global-timeout=900000
```

The first matrix completed 28 cases, then stopped at a mobile full-page screenshot timeout (11 not run). This was a separate artifact-capture failure: fonts were loaded and the page was the home route, not a pending interaction. The mobile preset has device scale factor 3; the equivalent 360 × 7564 CSS-pixel baseline produces a 1080 × 22692 device-pixel raster. Captures now explicitly use `scale: "css"` while retaining the original device emulation, full-page content, and 60-second screenshot timeout. The isolated capture repeat passed in 5.6 seconds.

The resumed mobile/narrow matrix completed all 10 mobile cases, then found a real narrow-screen defect: document width 323 at a 320px viewport. A DOM bounding-box inspection identified only `.name-period` after the full surname, at right edge 323.421875px, with the title font at 72px. A targeted `max-width: 340px` title-size rule fixes the layout without masking overflow. The hero test now checks home overflow after fonts are ready, before changing routes. All 10 narrow cases then passed on the rebuilt artifact. Hero selection was also rerun on tablet, desktop, and mobile after that final build: 3 passed.

Final latest-case aggregation (not a claim of one clean 40-case invocation):

| Actual browser        | Viewport                 | Latest distinct cases | Console/page/network/HTTP errors | Axe violations |
| --------------------- | ------------------------ | --------------------- | -------------------------------- | -------------- |
| Chromium 156.0.8078.4 | 768 × 1024               | 10 / 10 passed        | 0                                | 0              |
| Chromium 156.0.8078.4 | 1440 × 1000              | 10 / 10 passed        | 0                                | 0              |
| Chromium 156.0.8078.4 | 360 × 800, touch enabled | 10 / 10 passed        | 0                                | 0              |
| Chromium 156.0.8078.4 | 320 × 844                | 10 / 10 passed        | 0                                | 0              |

All **40 distinct configured cases** have a passing latest result. No configured scenario remains blocked. The test logic and WCAG tags were not disabled; per-test timeouts were not increased. The final CSS change is restricted to ≤340px; the other three viewport branches are unaffected, and their hero/overflow checks were rerun on the final build.

Run records are intentionally retained, including failures:

- `matrix`: 28 passed, 1 failed, 11 skipped by max-failures stop.
- `fixed-mobile-capture`: 1 passed.
- `matrix-resume`: 11 passed, 1 failed, 8 skipped by max-failures stop.
- `final-narrow`: 10 passed.
- `final-hero`: 3 passed.

`docs/verification/playwright/final-summary.json` retains the latest case-to-run mapping, browser/version/viewport diagnostics and audit outcomes. Full traces, JSON reports, runner logs, resource samples, and failure screenshots where emitted remain beneath each run directory. Full-page home/archive/detail and English-home screenshots are under `docs/screenshots/field-notes/positioning/`.

Additional completed checks: production build, 14 unit tests, TypeScript, Prettier and diff-whitespace checks passed. No lint script exists in this repo.

Limitations: Firefox/WebKit and real Safari/iOS were not configured or executed. Axe reported zero violations, but returned `color-contrast` as **incomplete** on each viewport; those nodes require manual review. This is not a complete WCAG AA certification. Shared-host paging can still cause slow browser startup even though the demonstrated failures are resolved.

A shared fixture now attaches actual browser name/version, viewport/touch semantics, and console/page/request/HTTP errors for every scenario, including the positioning tests. Hero selection uses tap on the touch-enabled project and keyboard/click elsewhere. Existing mobile-menu/Escape/focus, correct project destinations, reduced-motion CSS, observer/storage fallback, contact/history, locale/theme, overflow and accessibility checks are retained.

Automated axe checks do not constitute complete manual WCAG certification. Any `incomplete` rules must remain identified as manual-review gaps.
