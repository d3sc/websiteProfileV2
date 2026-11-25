# Developer Field Notes — current content review

## Scope and preservation

This update uses the latest owner-supplied content brief for Ikbar Rabbani Purwanto, an IT Programmer and S1 Manajemen Informatika student. Positioning: **Full-Stack Developer · Linux & Self-Hosting**. Indonesian remains the default; English remains available.

The existing uncommitted redesign was inspected and retained. A tracked-file diff snapshot was saved outside the repo before editing. The React/TypeScript/Vite stack, manual crossfading hero tabs, keyboard navigation, locale/theme preferences, contact destinations, reduced motion, hash routes, and legacy detail pages remain in place. No push, deployment, infrastructure changes, application migrations, or actual notification sends were performed for this content update.

## Composition

- Hero and selected work: VPS Manager, Proxmox Home Lab, LMS Ujian Online, in that order.
- Other work: Helpdesk Ticketing and Trading Analysis Dashboard.
- About: first-person bio, education, private Proxmox lab, backend/automation/Linux interests.
- Four skill groups link to relevant detail pages: Backend & Database, Frontend, Infrastruktur, Otomasi & Integrasi. Next.js is listed as a supplied toolkit skill, not falsely assigned to a featured project; archived Chat APP supplies the concrete React example.
- Each current project has a short card summary and scoped status, with problem, contribution, technology and longer verification limits on its existing detail route.
- Seven earlier projects and their URLs remain in the archive; they are not confused with current featured projects. Historical source-link availability notes remain visible.

## Sources and verification boundaries

The old site's HTML and JavaScript bundle were fetched again successfully. None of the five new project names or their screenshot/source/demo URLs was present in that published bundle. Existing repo images belong to older projects. No unrelated screenshot was reassigned to a new project. Current projects use labeled typographic field notes, not fake UI screenshots; no external demo/source controls are rendered without a published verified URL.

The table below describes **historical recorded evidence**, not application tests rerun during this portfolio task.

| Project                    | Evidence used                                                                                                                                                                                  | Limit retained in public copy                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VPS Manager                | `SETTINGS-CONTINUATION-STATUS.md` and `NOTIFICATION-NAVIGATION-VERIFICATION.md`: latest-request-wins frontend regression, settings mocks, isolated PostgreSQL and browser/provider-mock checks | Old responses/errors/loading cannot overwrite latest state; actual external provider submission/recipient delivery remains unconfirmed                                               |
| Proxmox Home Lab           | Owner's latest brief describes Linux VMs, bridge separation, NAT, firewall and Tailscale                                                                                                       | VM internet access with restricted private-LAN access is the **design goal**. No confirmed network-isolation test results were found; no claim that isolation passed                 |
| LMS Ujian Online           | Recorded PostgreSQL grading feature tests; existing `ExamAttemptTest.php`; historical start/resume/snapshot feature-test results                                                               | Grading form correction and maximum-score rejection are scoped claims. The reported start-exam browser journey is unresolved; complete student end-to-end acceptance is not asserted |
| Helpdesk Ticketing         | `browser-results.json` explicitly states Telegram mock; a separate `real-delivery-results.json` records one accepted real-send test                                                            | Browser acceptance uses Telegram mock. API acceptance on a test environment is not recipient read confirmation or proof of the primary deployment                                    |
| Trading Analysis Dashboard | `PHASE4_REMINDER_REGRESSION_RESULTS.json` records isolated regression passes and explicitly lists deployment and actual Telegram-delivery gaps                                                 | Support reminder remains in development. Isolated passes are not represented as target deployment acceptance or actual Telegram delivery                                             |

No private network addresses, credentials, chat identifiers, VM hostnames, raw server configuration, or unredacted infrastructure screenshots were copied into website content. Proxmox uses generic labels only. Exact project impact metrics, dates, employment and proficiency percentages were not invented.

## Portfolio checks

- New content tests were observed failing against the previous content, then passing after implementation.
- Latest completed unit run: 14 tests passed across four files.
- TypeScript check: passed.
- Latest production build: passed; 19 modules transformed.
- No lint command or ESLint configuration exists in this repo. Prettier formatting checks and TypeScript validation are reported separately.
- Final production-build smoke acceptance: `node scripts/verify-current-content.mjs` passed at desktop **1440×1000** and mobile **360×800**, with no page/console/request failures or horizontal overflow. It exercised full name/bio, four linked skill groups, current project order, hero click/keyboard focus and correct destination, all five project details, absence of fabricated external controls, archive navigation, mobile menu/Escape, contact CTA, English/light theme and reduced motion.
- Final desktop/mobile screenshots were inspected visually; no visible clipping or overlap was found. `verified-home-desktop.png`, `verified-home-mobile.png`, and `content-smoke-results.json` are the final evidence files.
- Historical status at the content update: broad Playwright runs were stopped after timeouts; the lightweight smoke acceptance was not a matrix pass. **Follow-up verification is now complete:** all 40 distinct configured Chromium cases have passing latest results across 320/360/768/1440px, obtained through sequential runs and targeted reruns. See `PLAYWRIGHT_VERIFICATION.md` and `verification/playwright/final-summary.json` for the preserved failures, fixes, latest-case mapping and remaining manual color-contrast review; this is not a single clean 40-case invocation or complete WCAG certification.
- Final Prettier formatting, TypeScript, 14 unit tests, and diff-whitespace checks passed after documentation and harness updates. Development preview returned HTTP 200 on the existing local preview port.

New screenshots are written beneath `docs/screenshots/field-notes/positioning/`. Earlier screenshot folders and past project test reports are historical, not current UI acceptance.

## Items still requiring owner/project confirmation

1. Public demo/source URLs and safely redacted screenshots for the five current projects.
2. Actual VPS notification submission/delivery evidence.
3. Proxmox VM internet and VM-to-LAN/cross-network isolation test results.
4. Resolution and browser verification of the specific LMS start-exam flow.
5. Target-deployment support-reminder regression and actual Telegram delivery for Trading.
6. Helpdesk test-environment Telegram API acceptance must not be promoted to recipient/read or primary-deployment verification.
