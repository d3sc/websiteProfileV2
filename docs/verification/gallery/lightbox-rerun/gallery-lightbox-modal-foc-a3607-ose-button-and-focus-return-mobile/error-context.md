# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: gallery.test.ts >> lightbox: modal focus, arrows, zoom, Escape, close button and focus return
- Location: e2e/gallery.test.ts:89:1

# Error details

```
Error: expect(locator).toBeFocused() failed

Locator:  getByRole('dialog').getByRole('button', { name: 'Gambar berikutnya' })
Expected: focused
Received: inactive
Timeout:  5000ms

Call log:
  - Expect "toBeFocused" getByRole('dialog').getByRole('button', { name: 'Gambar berikutnya' }) with timeout 5000ms
  - waiting for getByRole('dialog').getByRole('button', { name: 'Gambar berikutnya' })
    14 × locator resolved to <button aria-label="Gambar berikutnya">→</button>
       - unexpected value "inactive"

```

```yaml
- button "Gambar berikutnya": →
```

# Test source

```ts
  3   | import { allProjects } from "../src/data";
  4   | import AxeBuilder from "@axe-core/playwright";
  5   | 
  6   | async function overflow(page: Page) {
  7   |   expect(
  8   |     await page.evaluate(() =>
  9   |       Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
  10  |     ),
  11  |   ).toBeLessThanOrEqual(page.viewportSize()!.width);
  12  | }
  13  | async function swipe(page: Page, vertical = false) {
  14  |   const stage = page.locator(".gallery-stage");
  15  |   await stage.scrollIntoViewIfNeeded();
  16  |   const box = (await stage.boundingBox())!;
  17  |   const x = box.x + box.width * 0.8,
  18  |     y = box.y + box.height * 0.4;
  19  |   const cdp = await page.context().newCDPSession(page);
  20  |   await cdp.send("Input.dispatchTouchEvent", {
  21  |     type: "touchStart",
  22  |     touchPoints: [{ x, y }],
  23  |   });
  24  |   for (let step = 1; step <= 6; step++) {
  25  |     await cdp.send("Input.dispatchTouchEvent", {
  26  |       type: "touchMove",
  27  |       touchPoints: [
  28  |         {
  29  |           x: x - ((vertical ? 4 : box.width * 0.6) * step) / 6,
  30  |           y: y - ((vertical ? 110 : -4) * step) / 6,
  31  |         },
  32  |       ],
  33  |     });
  34  |   }
  35  |   await cdp.send("Input.dispatchTouchEvent", {
  36  |     type: "touchEnd",
  37  |     touchPoints: [],
  38  |   });
  39  |   await cdp.detach();
  40  | }
  41  | test("gallery: buttons, keyboard, thumbnails, stable stage and no autoplay", async ({
  42  |   page,
  43  | }, info) => {
  44  |   await page.goto("/#/projects/helpdesk-ticketing");
  45  |   const gallery = page.getByRole("region", {
  46  |     name: "Galeri: Helpdesk Ticketing",
  47  |   });
  48  |   const count = gallery.getByRole("status");
  49  |   await expect(count).toContainText("1 / 2");
  50  |   const height = (await page.locator(".gallery-stage").boundingBox())!.height;
  51  |   await gallery
  52  |     .getByRole("button", { name: "Gambar berikutnya", exact: true })
  53  |     .click();
  54  |   await expect(count).toContainText("2 / 2");
  55  |   await expect(page.locator(".gallery-caption")).toContainText(
  56  |     "Potongan screenshot yang sama",
  57  |   );
  58  |   expect(
  59  |     Math.abs(
  60  |       (await page.locator(".gallery-stage").boundingBox())!.height - height,
  61  |     ),
  62  |   ).toBeLessThan(1);
  63  |   await page.keyboard.press("ArrowRight");
  64  |   await expect(count).toContainText("1 / 2");
  65  |   await page.keyboard.press("End");
  66  |   await expect(count).toContainText("2 / 2");
  67  |   await page.keyboard.press("Home");
  68  |   await expect(count).toContainText("1 / 2");
  69  |   if (page.viewportSize()!.width > 700) {
  70  |     await page
  71  |       .getByRole("button", { name: "2. Detail filter", exact: true })
  72  |       .click();
  73  |     await expect(count).toContainText("2 / 2");
  74  |     await expect(
  75  |       page.getByRole("button", { name: "2. Detail filter", exact: true }),
  76  |     ).toHaveAttribute("aria-pressed", "true");
  77  |   }
  78  |   const before = await count.textContent();
  79  |   await page.waitForTimeout(500);
  80  |   await expect(count).toHaveText(before!);
  81  |   await overflow(page);
  82  |   await page.screenshot({
  83  |     path: `docs/verification/gallery/detail-${info.project.name}.png`,
  84  |     fullPage: true,
  85  |     scale: "css",
  86  |     animations: "disabled",
  87  |   });
  88  | });
  89  | test("lightbox: modal focus, arrows, zoom, Escape, close button and focus return", async ({
  90  |   page,
  91  | }, info) => {
  92  |   await page.goto("/#/projects/vps-manager");
  93  |   const opener = page.getByRole("button", { name: /Perbesar screenshot/ });
  94  |   await opener.click();
  95  |   const modal = page.getByRole("dialog");
  96  |   const close = modal.getByRole("button", { name: "Tutup lightbox" });
  97  |   await expect(modal).toBeVisible();
  98  |   await expect(close).toBeFocused();
  99  |   await page.keyboard.press("Shift+Tab");
  100 |   await page.keyboard.press("Shift+Tab");
  101 |   await expect(
  102 |     modal.getByRole("button", { name: "Gambar berikutnya" }),
> 103 |   ).toBeFocused();
      |     ^ Error: expect(locator).toBeFocused() failed
  104 |   await page.keyboard.press("ArrowRight");
  105 |   await expect(modal.locator("h2")).toContainText("2 / 2");
  106 |   await modal.getByRole("button", { name: "Ukuran asli" }).click();
  107 |   await expect(page.locator(".lightbox-image")).toHaveClass(/is-zoomed/);
  108 |   const natural = await modal
  109 |     .locator("img")
  110 |     .evaluate((img: HTMLImageElement) => ({
  111 |       width: img.width,
  112 |       naturalWidth: img.naturalWidth,
  113 |     }));
  114 |   expect(natural.width).toBe(natural.naturalWidth);
  115 |   await modal.getByRole("button", { name: "Sesuaikan layar" }).click();
  116 |   await page.screenshot({
  117 |     path: `docs/verification/gallery/lightbox-${info.project.name}.png`,
  118 |     scale: "css",
  119 |     animations: "disabled",
  120 |   });
  121 |   const accessibility = await new AxeBuilder({ page })
  122 |     .setLegacyMode(true)
  123 |     .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
  124 |     .analyze();
  125 |   await info.attach("lightbox-axe", {
  126 |     body: JSON.stringify({
  127 |       violations: accessibility.violations,
  128 |       incomplete: accessibility.incomplete.map((r) => r.id),
  129 |     }),
  130 |     contentType: "application/json",
  131 |   });
  132 |   expect(accessibility.violations).toEqual([]);
  133 |   await page.keyboard.press("Escape");
  134 |   await expect(modal).not.toBeVisible();
  135 |   await expect(opener).toBeFocused();
  136 |   await expect(page.locator(".gallery-count")).toContainText("2 / 2");
  137 |   expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  138 |   await opener.click();
  139 |   await close.click();
  140 |   await expect(opener).toBeFocused();
  141 |   await overflow(page);
  142 | });
  143 | test("touch swipe changes slides without hijacking vertical scroll", async ({
  144 |   page,
  145 | }, info) => {
  146 |   test.skip(!info.project.use.hasTouch, "Requires touch-enabled project");
  147 |   await page.goto("/#/projects/helpdesk-ticketing");
  148 |   await swipe(page);
  149 |   await expect(page.locator(".gallery-count")).toContainText("2 / 2");
  150 |   await expect(page.getByRole("dialog")).not.toBeVisible();
  151 |   const scroll = await page.evaluate(() => scrollY);
  152 |   await swipe(page, true);
  153 |   await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(scroll);
  154 |   await expect(page.locator(".gallery-count")).toContainText("2 / 2");
  155 | });
  156 | test("all project destinations, natural images, single-image controls and missing evidence", async ({
  157 |   page,
  158 | }) => {
  159 |   await page.goto("/#/projects");
  160 |   await expect(page.locator(".project-card")).toHaveCount(
  161 |     allProjects.id.length,
  162 |   );
  163 |   for (const project of allProjects.id) {
  164 |     await page
  165 |       .locator(`.project-visual[href="#/projects/${project.slug}"]`)
  166 |       .click();
  167 |     await expect(page.getByRole("heading", { level: 1 })).toContainText(
  168 |       project.title,
  169 |     );
  170 |     await page.locator("img").evaluateAll(async (images) => {
  171 |       await Promise.all(
  172 |         images.map((i) => {
  173 |           i.loading = "eager";
  174 |           return i.decode();
  175 |         }),
  176 |       );
  177 |     });
  178 |     const invalid = await page
  179 |       .locator("img")
  180 |       .evaluateAll((images) =>
  181 |         images.filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src),
  182 |       );
  183 |     expect(invalid).toEqual([]);
  184 |     if (
  185 |       [
  186 |         "proxmox-home-lab",
  187 |         "kulineran",
  188 |         "school-website",
  189 |         "cashier-application",
  190 |         "laravel-blog",
  191 |         "chat-app",
  192 |       ].includes(project.slug)
  193 |     ) {
  194 |       await expect(page.locator(".gallery-enlarge img")).toBeVisible();
  195 |       await expect(
  196 |         page.getByRole("button", { name: "Gambar berikutnya" }),
  197 |       ).toHaveCount(0);
  198 |       await expect(page.locator(".gallery-thumbnails")).toHaveCount(0);
  199 |     }
  200 |     if (["trading-analysis-dashboard", "samurai-game"].includes(project.slug)) {
  201 |       await expect(page.locator(".missing-screens")).toContainText(
  202 |         "Screenshot belum tersedia",
  203 |       );
```