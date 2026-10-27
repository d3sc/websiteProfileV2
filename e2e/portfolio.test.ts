import { test as base, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { copy, projects, categoryLabels, categories, type Locale } from "../src/data";

const test = base.extend<{ healthy: void }>({ healthy: [async ({ page }, use) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("requestfailed", (request) => errors.push(`failed: ${request.url()}`));
  page.on("response", (response) => { if (response.url().includes("127.0.0.1:4173") && response.status() >= 400) errors.push(`HTTP ${response.status()}`); });
  await use();
  expect(errors).toEqual([]);
}, { auto: true }] });

async function start(page: Page, locale: Locale = "id", theme: "light" | "dark" = "light") {
  await page.addInitScript(({ locale, theme }) => { localStorage.setItem("portfolio-locale", locale); localStorage.setItem("portfolio-theme", theme); }, { locale, theme });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", locale);
  await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
}
async function axe(page: Page) { await page.waitForTimeout(450); expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]); }
async function noOverflow(page: Page) { const [root, body] = await page.evaluate(() => [document.documentElement.scrollWidth, document.body.scrollWidth]); expect(root).toBeLessThanOrEqual(page.viewportSize()!.width + 4); expect(body).toBeLessThanOrEqual(page.viewportSize()!.width + 4); }

for (const locale of ["id", "en"] as const) for (const theme of ["light", "dark"] as const) {
  test(`${locale}/${theme}: home, project routes, details, accessibility`, async ({ page }) => {
    const t = copy[locale]; await start(page, locale, theme);
    await expect(page.locator(".hero-copy")).toHaveText(t.intro);
    await expect(page.locator(".preview .card")).toHaveCount(3);
    await expect(page.locator(".section-heading .notice").first()).toHaveText(t.previewDisclaimer);
    await expect(page.locator("nav a").filter({ hasText: t.home })).toHaveAttribute("aria-current", "page");
    await axe(page); await noOverflow(page);
    if (page.viewportSize()!.width < 800) await page.getByRole("button", { name: t.menu, exact: true }).click();
    await page.getByRole("link", { name: t.work, exact: true }).click();
    await expect(page).toHaveURL(/#\/projects$/); await expect(page.locator("main")).toBeFocused();
    await expect(page.locator(".project-grid .card")).toHaveCount(6);
    for (const category of categories) {
      const button = page.getByRole("button", { name: categoryLabels[locale][category], exact: true });
      await button.click(); await expect(button).toHaveAttribute("aria-pressed", "true");
      await expect(page.locator(".project-grid .card")).toHaveCount(projects[locale].filter((p) => p.category === category).length);
    }
    await page.getByRole("button", { name: t.all, exact: true }).click();
    for (const project of projects[locale]) {
      await page.locator(`.all-projects a[href="#/projects/${project.slug}"]`).click();
      await expect(page).toHaveURL(new RegExp(`/projects/${project.slug}$`));
      await expect(page.locator(".detail > h1")).toHaveText(project.title);
      await expect(page.locator(".detail-image")).toHaveAttribute("src", project.image);
      await expect(page.locator("time")).toHaveAttribute("datetime", project.date);
      await expect(page.locator(".detail .tags span")).toHaveText(project.stack);
      await expect(page.locator(".detail-section")).toHaveCount(4);
      await page.goBack(); await expect(page).toHaveURL(/#\/projects$/);
    }
    await axe(page); await noOverflow(page);
  });
}

test("navigation focus, sections, language dates, history and not-found", async ({ page }) => {
  await start(page);
  if (page.viewportSize()!.width < 800) { await page.getByRole("button", { name: "Menu", exact: true }).click(); }
  await page.getByRole("link", { name: "Tentang", exact: true }).click();
  await expect(page).toHaveURL(/#\/#about$/); await expect(page.locator("#about")).toBeFocused();
  if (page.viewportSize()!.width < 800) { await page.getByRole("button", { name: "Menu", exact: true }).click(); }
  await page.getByRole("link", { name: "Kontak", exact: true }).click(); await expect(page.locator("#contact")).toBeFocused();
  if (page.viewportSize()!.width < 800) { await page.getByRole("button", { name: "Menu", exact: true }).click(); }
  await page.getByRole("link", { name: "Proyek", exact: true }).click(); await page.locator('.all-projects a[href="#/projects/kulineran"]').click();
  const idDate = await page.locator("time").innerText();
  await page.getByRole("button", { name: "Ganti bahasa" }).click();
  await expect(page.locator("time")).not.toHaveText(idDate); await expect(page).toHaveTitle(/Project detail/);
  await page.goBack(); await page.goForward(); await expect(page).toHaveURL(/kulineran$/);
  await page.goto("/#/missing"); await expect(page.getByRole("heading", { name: /Page not found|Halaman tidak ditemukan/ })).toBeVisible();
});

test("revision 3 motion system covers every view and reduced motion", async ({ page }) => {
  await start(page);
  for (const path of ["/#/", "/#/projects", "/#/projects/ruang-kerja", "/#/missing"]) {
    await page.goto(path);
    await expect(page.locator("main.motion-page")).toHaveAttribute("data-motion-view");
    await expect(page.locator("main.motion-page [data-motion='section'], main.motion-page [data-motion='card']").first()).toBeVisible();
  }
  const motion = await page.locator("main.motion-page").evaluate((element) => ({ animation: getComputedStyle(element).animationName, duration: getComputedStyle(element).animationDuration, section: getComputedStyle(element.querySelector("[data-motion='section']")!).animationDuration }));
  expect(motion.animation).toBe("motion-page-enter");
  expect(motion.duration).toBe("0.32s");
  expect(motion.section).toBe("0.24s");
  await page.goto("/#/projects");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  const reduced = await page.locator(".motion-page").evaluate((element) => ({ animation: getComputedStyle(element).animationName, transform: getComputedStyle(element).transform }));
  expect(reduced.animation).toBe("none");
  expect(reduced.transform).toBe("none");
});

test("mobile menu escape, skip link, persistence, storage denial and reduced motion", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 }); await start(page);
  const menu = page.getByRole("button", { name: "Menu", exact: true }); await menu.click();
  await page.locator("#primary-nav a").first().focus(); await page.keyboard.press("Escape");
  await expect(menu).toBeFocused(); await expect(menu).toHaveAttribute("aria-expanded", "false");
  await page.keyboard.press("Tab"); await page.keyboard.press("Shift+Tab"); await page.getByRole("link", { name: "Lewati ke konten" }).focus();
  await page.keyboard.press("Enter"); await expect(page.locator("main")).toBeFocused();
  await page.getByRole("button", { name: "Ganti bahasa" }).click(); await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en"); await expect(page.locator("html")).toHaveAttribute("data-theme", "dark"); await noOverflow(page);
  await page.emulateMedia({ reducedMotion: "reduce" }); await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await page.addInitScript(() => Object.defineProperty(window, "localStorage", { get() { throw new DOMException("denied", "SecurityError"); } })); await page.reload(); await expect(page.locator("main")).toBeVisible();
});

test("revision 5 projects use vertical editorial composition and card grid", async ({ page }) => {
  await start(page, "en", "dark");
  await page.goto("/#/projects");
  await expect(page.locator(".featured-project")).toBeVisible();
  await expect(page.locator(".featured-project img")).toHaveAttribute("alt", /Illustrative sample SVG mockup/);
  await expect(page.locator(".current-work")).toContainText("Supplied portfolio project");
  await expect(page.locator(".current-work .status-dot")).toBeVisible();
  await expect(page.locator(".all-projects")).toBeVisible();
  await expect(page.locator(".all-projects .project-grid .card")).toHaveCount(6);
  await expect(page.locator(".all-projects .filters button")).toHaveCount(4);
  await page.mouse.wheel(0, 500);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await noOverflow(page);
});

test("revision 5 captures Projects evidence at desktop, mobile, and narrow widths", async ({ page }, testInfo) => {
  await start(page, "en", "dark");
  for (const [name, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844], ["narrow", 320, 844]] as const) {
    await page.setViewportSize({ width, height });
    await page.goto("/#/projects");
    await page.screenshot({ path: `docs/screenshots/revision-5/projects-${name}.png`, fullPage: true });
  }
});