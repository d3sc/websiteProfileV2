# Five-project content update verification

## Scope and completed plan

1. Read relevant Graphify graph nodes and inspect live data, hero, gallery, index, routing, media manifest and asset preparation code.
2. Visually inspect all five owner-supplied PNGs; map sources and review privacy.
3. Prepend five unique localized entries, preserve older relative ordering, feature Zentra by default, retain its detail action and add a separate website link.
4. Register real screenshots with localized captions, dimensions, full-size lossless WebP and 480/960 responsive variants.
5. Update ordering regressions and verify production desktop/mobile behavior, images, routes, language, and existing viewer/navigation.

No commit or deployment was performed. Initial checkout had only five untracked owner PNGs. Existing tracked project sources contained no matching entries or verified MIA public URLs; no MIA external links were added. Name, homepage introduction, themes, animations, horizontal gallery, viewer implementation and route format are preserved. Unknown technology stacks are not invented; empty technology headings are omitted.

## Final project content

| Project | Indonesian description | Cover | Gallery images | Route |
| --- | --- | --- | --- | --- |
| Zentra Digital Solution | Website bisnis saya untuk memperkenalkan Zentra Digital Solution dan layanan digital yang saya tawarkan. | zentra-digital-solution.webp | 1 | #/projects/zentra-digital-solution |
| MIA CRM | Aplikasi CRM untuk membantu tim MIA mengelola informasi pelanggan. | mia-crm.webp | 1 | #/projects/mia-crm |
| MIA Training | Aplikasi pelatihan internal untuk mendukung kegiatan pembelajaran tim MIA. | mia-training.webp | 1 | #/projects/mia-training |
| MIA Absensi | Aplikasi internal MIA untuk mencatat dan memantau kehadiran karyawan. | mia-absensi.webp | 1 | #/projects/mia-absensi |
| MIA Admin | Panel administrasi untuk mendukung pekerjaan operasional internal MIA. | mia-admin.webp | 1 | #/projects/mia-admin |

Equivalent English summaries, purpose/contribution text, evidence limitations, image labels and captions are implemented. Zentra's external href is exactly https://zentradigitalsolution.my.id/.

## Asset mapping and privacy

- zentradigitalsolution.png -> zentra-digital-solution.webp: actual blue business homepage with website-service hero and navigation.
- mia-CRM.png -> mia-crm.webp: empty login form, Employee/Admin tabs, Admin selected. Identity follows the supplied filename; no MIA/CRM branding is visible. Owner confirmation of this generic login image is recommended.
- mia-training.png -> mia-training.webp: branded MIA Training empty login form and learning-themed photograph.
- mia-absensi.png -> mia-absensi.webp: branded attendance empty login form.
- mia-admin.png -> mia-admin.webp: branded MIA Admin empty login form. No specific administrative workflow is visible, so none is claimed.

All MIA fields are empty. No visible customer records, employee identifiers, attendance records or credentials required redaction. Reviewed originals are therefore already public-safe. Generated full-size covers were pixel-compared to reviewed inputs and are identical; all ten responsive derivatives were decoded and dimensions verified. Existing sanitized legacy screenshots were not regenerated. Source hashes, dimensions and review notes are in ../mia-zentra-assets.json. Re-running scripts/prepare-mia-zentra-assets.py refuses changed source hashes pending renewed visual review.

## Final executed checks

- npm run test: 20 passed across 7 files.
- npm run typecheck: passed.
- npm run build: passed, production dist generated.
- npx playwright test --project=desktop --project=mobile: 45 passed, 3 intentionally skipped, no failures.
  - Desktop skips touch-only detail swipe; mobile skips two desktop-only pinned/keyboard checks.
  - Fresh contexts initially display Zentra, its correct real image, separate detail and website links, and unchanged identity/introduction.
  - All five priority entries appear in order in hero, horizontal showcase, homepage index and project archive; older projects retain relative order.
  - Actual native desktop wheel scrolling and mobile touch swipes reach each of the five entries, including MIA Admin.
  - Each new route is reached from the archive in both languages, with matching title, description, caption, decoded cover and exact viewer image.
  - Existing multi-image VPS gallery opens its non-first screenshot, cycles correctly, and restores focus/position; existing detail galleries and archived project routes remain working.
  - Light/dark themes, reduced motion, keyboard selection, history, anchors, clipboard and accessibility regressions pass.
  - Browser diagnostics assert no page, console, network or local HTTP errors.
- git diff --check: passed (only Git CRLF conversion warnings).

Screenshots are in this directory and ../horizontal-home/. Desktop hero, mobile fifth-project showcase and representative Admin detail were visually reviewed. The existing mobile Playwright profile is touch-enabled at 360x800 with isMobile=false; verification is Chromium touch/viewport emulation, not a physical-device test.

## Confirmation / further evidence

- Confirm mia-CRM.png belongs to MIA CRM; its generic login screen does not independently identify the application.
- Supply an interior workflow screenshot for MIA Admin if a more specific administrative description is desired. The current image only proves the login interface.
- All four MIA screenshots show login pages only; private application workflows have not been independently acceptance-tested.
