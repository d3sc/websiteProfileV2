# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: horizontal-home.test.ts >> homepage static reduced motion, both themes/locales, image dimensions and index routes
- Location: e2e/horizontal-home.test.ts:246:1

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('.scroll-gallery')
Expected: "static"
Received: "manual"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" locator('.scroll-gallery') with timeout 5000ms
  - waiting for locator('.scroll-gallery')
    13 × locator resolved to <section tabindex="-1" data-mode="manual" id="selected-projects" class="scroll-gallery" aria-label="Proyek terpilih">…</section>
       - unexpected value "manual"

```

```yaml
- region "Proyek terpilih":
  - paragraph: 01 / Proyek terpilih
  - heading "Dibuat untuk digunakan." [level=2]
  - link "Lewati galeri":
    - /url: "#project-index"
  - list
  - text: Geser untuk menjelajah →
  - button "Screenshot sebelumnya" [disabled]: ←
  - text: 1 / 7
  - button "Screenshot berikutnya": →
```

# Test source

```ts
  151 |       .click();
  152 |     await expect.poll(async () => (await geometry(page)).left).toBeLessThan(2);
  153 |     if (info.project.use.hasTouch) {
  154 |       await page.locator(".rail-image").nth(1).focus();
  155 |       const before = (await geometry(page)).left;
  156 |       await touch(page, -135, 0);
  157 |       await expect
  158 |         .poll(async () => (await geometry(page)).left)
  159 |         .toBeGreaterThan(before + 80);
  160 |       await page.locator(".rail-image").nth(1).focus();
  161 |       const y = await page.evaluate(() => scrollY);
  162 |       await touch(page, 0, -140);
  163 |       await expect
  164 |         .poll(() => page.evaluate(() => scrollY))
  165 |         .toBeGreaterThan(y + 30);
  166 |     }
  167 |     await page.screenshot({
  168 |       path: `docs/verification/horizontal-home/gallery-${info.project.name}.png`,
  169 |       scale: "css",
  170 |     });
  171 |   }
  172 |   await overflow(page);
  173 |   await page.locator(".rail-skip").click();
  174 |   await expect(page.locator("#project-index")).toBeFocused();
  175 |   await expect(page.locator(".home-project-row")).toHaveCount(5);
  176 |   await overflow(page);
  177 | });
  178 | 
  179 | test("homepage viewer opens exact second screenshot and returns focus and position", async ({
  180 |   page,
  181 | }, info) => {
  182 |   await page.goto("/");
  183 |   await page.evaluate(() => document.fonts.ready);
  184 |   const opener = page.locator(".rail-image").nth(1);
  185 |   await opener.focus();
  186 |   await expect(opener).toBeFocused();
  187 |   // Let the browser's native smooth focus-scroll finish before recording the position.
  188 |   await page.waitForTimeout(500);
  189 |   const before = await geometry(page);
  190 |   if (info.project.use.hasTouch) await opener.tap();
  191 |   else await opener.click();
  192 |   const dialog = page.getByRole("dialog");
  193 |   await expect(dialog).toBeVisible();
  194 |   await expect(dialog.locator("h2")).toContainText("VPS Manager 2 / 2");
  195 |   await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
  196 |     vpsShots[1].caption,
  197 |   );
  198 |   await expect(dialog.locator(".lightbox-image img")).toHaveAttribute(
  199 |     "src",
  200 |     vpsShots[1].src,
  201 |   );
  202 |   await expect(
  203 |     dialog.getByRole("link", { name: /Catatan proyek/ }),
  204 |   ).toHaveAttribute("href", "#/projects/vps-manager");
  205 |   await page.keyboard.press("ArrowRight");
  206 |   await expect(dialog.locator("h2")).toContainText("1 / 2");
  207 |   await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
  208 |     vpsShots[0].caption,
  209 |   );
  210 |   await dialog
  211 |     .getByRole("button", { name: "Ukuran asli", exact: true })
  212 |     .click();
  213 |   expect(
  214 |     await dialog
  215 |       .locator(".lightbox-image img")
  216 |       .evaluate((e: HTMLImageElement) =>
  217 |         Math.abs(e.getBoundingClientRect().width - e.naturalWidth),
  218 |       ),
  219 |   ).toBeLessThan(1);
  220 |   await dialog.getByRole("button", { name: "Sesuaikan layar" }).click();
  221 |   await page.screenshot({
  222 |     path: `docs/verification/horizontal-home/viewer-${info.project.name}.png`,
  223 |     scale: "css",
  224 |   });
  225 |   if (info.project.use.hasTouch)
  226 |     await dialog.getByRole("button", { name: "Tutup lightbox" }).tap();
  227 |   else await page.keyboard.press("Escape");
  228 |   await expect(dialog).not.toBeVisible();
  229 |   await expect(opener).toBeFocused();
  230 |   const after = await geometry(page);
  231 |   expect(Math.abs(after.y - before.y)).toBeLessThan(2);
  232 |   expect(Math.abs(after.left - before.left)).toBeLessThan(2);
  233 |   // Continue keyboard-only through an off-screen entry, then activate without a pointer.
  234 |   await page.keyboard.press("Tab");
  235 |   await expect(page.locator(".rail-image").nth(2)).toBeFocused();
  236 |   await page.keyboard.press("Enter");
  237 |   await expect(dialog).toBeVisible();
  238 |   await expect(dialog.locator("h2")).toContainText("Proxmox Home Lab 1 / 1");
  239 |   await expect(
  240 |     dialog.getByRole("button", { name: "Gambar berikutnya" }),
  241 |   ).toHaveCount(0);
  242 |   await page.keyboard.press("Escape");
  243 |   await overflow(page);
  244 | });
  245 | 
  246 | test("homepage static reduced motion, both themes/locales, image dimensions and index routes", async ({
  247 |   page,
  248 | }, info) => {
  249 |   await page.goto("/");
  250 |   await page.emulateMedia({ reducedMotion: "reduce" });
> 251 |   await expect(page.locator(".scroll-gallery")).toHaveAttribute(
      |                                                 ^ Error: expect(locator).toHaveAttribute(expected) failed
  252 |     "data-mode",
  253 |     "static",
  254 |   );
  255 |   const g = await geometry(page);
  256 |   expect(g.sectionHeight).toBeLessThan(g.travel + g.viewportHeight + 3);
  257 |   await expect(page.locator(".rail-viewport")).toHaveCSS("position", "static");
  258 |   await expect(page.locator(".rail-track")).toHaveCSS("transform", "none");
  259 |   const before = await page.locator(".rail-image").first().boundingBox();
  260 |   await page.locator(".rail-track img").evaluateAll(async (images) => {
  261 |     await Promise.all(
  262 |       images.map((i) => {
  263 |         i.loading = "eager";
  264 |         return i.decode();
  265 |       }),
  266 |     );
  267 |   });
  268 |   const after = await page.locator(".rail-image").first().boundingBox();
  269 |   expect(Math.abs(before!.height - after!.height)).toBeLessThan(1);
  270 |   const broken = await page
  271 |     .locator(".rail-track img")
  272 |     .evaluateAll((imgs) =>
  273 |       imgs.filter((i) => !i.naturalWidth || !i.complete).map((i) => i.src),
  274 |     );
  275 |   expect(broken).toEqual([]);
  276 |   for (const image of await page.locator(".rail-image").all()) {
  277 |     await image.focus();
  278 |     await expect(image).toBeInViewport();
  279 |   }
  280 |   await overflow(page);
  281 |   await page.getByRole("button", { name: "Ganti ke tema terang" }).click();
  282 |   await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  283 |   expect(
  284 |     (
  285 |       await page
  286 |         .locator("html")
  287 |         .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
  288 |     ).trim(),
  289 |   ).toBe("#225e3b");
  290 |   await page.getByRole("button", { name: "Ganti bahasa" }).click();
  291 |   await expect(page.locator(".hero-copy")).toContainText(
  292 |     "I build web applications",
  293 |   );
  294 |   await expect(page.locator(".rail-skip")).toHaveText("Skip gallery ↘");
  295 |   await expect(page.locator("#other-projects")).toContainText(
  296 |     "Trading Analysis Dashboard",
  297 |   );
  298 |   await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  299 |   await page.screenshot({
  300 |     path: `docs/verification/horizontal-home/reduced-light-en-${info.project.name}.png`,
  301 |     fullPage: true,
  302 |     scale: "css",
  303 |     animations: "disabled",
  304 |   });
  305 |   await page.locator(".home-project-row h3 a").first().click();
  306 |   await expect(page).toHaveURL(/#\/projects\/vps-manager$/);
  307 |   await expect(page.locator(".project-gallery")).toBeVisible();
  308 |   // The new homepage palette must not leak into the existing case-study page.
  309 |   expect(
  310 |     (
  311 |       await page
  312 |         .locator("html")
  313 |         .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
  314 |     ).trim(),
  315 |   ).toBe("#345600");
  316 |   await overflow(page);
  317 | });
  318 | 
```