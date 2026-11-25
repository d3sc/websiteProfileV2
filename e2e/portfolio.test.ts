import type { Page } from "@playwright/test";
import { test, expect } from "./fixtures";
import AxeBuilder from "@axe-core/playwright";
import { projects, copy, categoryLabels, type Locale } from "../src/data";
async function start(
  page: Page,
  locale: Locale = "id",
  theme: "dark" | "light" = "dark",
) {
  await page.addInitScript(
    ({ locale, theme }) => {
      localStorage.setItem("portfolio-locale", locale);
      localStorage.setItem("portfolio-theme", theme);
    },
    { locale, theme },
  );
  await page.goto("/");
  await expect(page.getByRole("tab").first()).toBeVisible();
}
async function noOverflow(page: Page) {
  expect(
    await page.evaluate(() =>
      Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
    ),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
}
async function axe(page: Page) {
  // This portfolio has no frames. The normal runPartial/finishRun pipeline
  // creates a second renderer, which exhausted this host's memory in the trace.
  // Guard the assumption so a future embedded frame cannot silently lose coverage.
  expect(
    page.frames(),
    "single-page audit requires a frame-free document",
  ).toHaveLength(1);
  const context = page.context();
  const pageCount = context.pages().length;
  await test.step(`WCAG audit: ${new URL(page.url()).hash || "home"}`, async () => {
    const result = await new AxeBuilder({ page })
      .setLegacyMode(true)
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    await test.info().attach(`axe-${new URL(page.url()).hash || "home"}`, {
      body: JSON.stringify(
        {
          url: page.url(),
          mode: "same-page axe.run",
          frameCount: page.frames().length,
          passedRules: result.passes.length,
          violations: result.violations,
          incomplete: result.incomplete.map((rule) => ({
            id: rule.id,
            impact: rule.impact,
          })),
        },
        null,
        2,
      ),
      contentType: "application/json",
    });
    expect(result.violations).toEqual([]);
    expect(
      context.pages(),
      "audit must not allocate an auxiliary page",
    ).toHaveLength(pageCount);
  });
}
async function navigate(page: Page, label: string) {
  if (page.viewportSize()!.width <= 800)
    await page.getByRole("button", { name: /^Menu/ }).click();
  await page
    .locator("#primary-nav")
    .getByRole("link", { name: label, exact: true })
    .click();
}

test("hero selection: click, keyboard, wrap, focus, links and no autoplay", async ({
  page,
}) => {
  await start(page);
  await page.evaluate(() => document.fonts.ready);
  await noOverflow(page);
  const tabs = page.getByRole("tab");
  await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("VPS Manager");
  if (test.info().project.use.hasTouch) await tabs.nth(1).tap();
  else await tabs.nth(1).click();
  await expect(page.getByRole("tabpanel")).toContainText("Proxmox Home Lab");
  await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
    "href",
    "#/projects/proxmox-home-lab",
  );
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(2)).toBeFocused();
  await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("ArrowRight");
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press("End");
  await expect(tabs.nth(2)).toBeFocused();
  await page.keyboard.press("Home");
  await expect(tabs.first()).toBeFocused();
  await page.keyboard.press("ArrowLeft");
  await expect(tabs.nth(2)).toBeFocused();
  await page.waitForTimeout(900);
  await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  await page.getByRole("tabpanel").getByRole("link").click();
  await expect(page).toHaveURL(/lms-ujian-online$/);
  await expect(page.locator("main")).toBeFocused();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "LMS Ujian Online",
  );
  await noOverflow(page);
});
for (const locale of ["id", "en"] as const)
  for (const theme of ["dark", "light"] as const) {
    test(`${locale}/${theme}: home, archive, current details, accessibility`, async ({
      page,
    }) => {
      const t = copy[locale];
      await start(page, locale, theme);
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
      await axe(page);
      await noOverflow(page);
      await navigate(page, t.work);
      await expect(page).toHaveURL(/#\/projects$/);
      await expect(page.locator(".project-card")).toHaveCount(12);
      await expect(page.locator("#primary-nav a[aria-current]")).toContainText(
        t.work,
      );
      await page
        .getByRole("button", { name: categoryLabels[locale].Game, exact: true })
        .click();
      await expect(page.locator(".project-card")).toHaveCount(1);
      await expect(page.locator(".project-card")).toContainText("Samurai Game");
      await page.getByRole("button", { name: t.all, exact: true }).click();
      await axe(page);
      await noOverflow(page);
      for (const p of projects[locale]) {
        await page
          .locator(`.project-visual[href="#/projects/${p.slug}"]`)
          .click();
        await expect(page.getByRole("heading", { level: 1 })).toContainText(
          p.title,
        );
        await expect(page.locator(".detail-body")).toContainText(
          p.contribution,
        );
        const external = page.locator('.detail-body a[target="_blank"]');
        if (p.externalUrl)
          await expect(external).toHaveAttribute("href", p.externalUrl);
        else await expect(external).toHaveCount(0);
        if (p.image) {
          const img = page.locator(".detail-visual img");
          await expect(img).toHaveAttribute("src", p.image);
          await expect
            .poll(() =>
              img.evaluate(
                (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
              ),
            )
            .toBe(true);
        }
        await noOverflow(page);
        await page.goBack();
      }
      await page.goto("/#/projects/samurai-game");
      await axe(page);
    });
  }
test("CTAs, mobile menu Escape, anchors, history, contact and clipboard", async ({
  page,
}) => {
  await start(page);
  if (page.viewportSize()!.width <= 800) {
    const menu = page.getByRole("button", { name: /^Menu/ });
    await menu.click();
    await page.locator("#primary-nav a").first().focus();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  }
  await page.getByRole("link", { name: "Lewati ke konten" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page
    .locator(".hero-actions")
    .getByRole("link", { name: "Lihat Proyek" })
    .click();
  await expect(page).toHaveURL(/#\/projects$/);
  await page.goBack();
  await expect(page.getByRole("tab").first()).toBeVisible();
  await page
    .locator(".hero-actions")
    .getByRole("link", { name: "Hubungi Saya" })
    .click();
  await expect(page.locator("#contact")).toBeFocused();
  await expect(page.locator("#primary-nav a[aria-current]")).toContainText(
    "Kontak",
  );
  await expect(page.getByRole("link", { name: "Tulis email" })).toHaveAttribute(
    "href",
    "mailto:ikbar686@gmail.com",
  );
  await expect(page.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute(
    "href",
    "https://wa.me/6281413265114",
  );
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute(
    "href",
    "tel:+" + "6281413265114",
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: async () => undefined },
    }),
  );
  await page.getByRole("button", { name: "Salin email" }).click();
  await expect(page.locator(".copy-status")).toHaveText("Email tersalin");
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: async () => {
          throw Error("denied");
        },
      },
    }),
  );
  await page.getByRole("button", { name: "Salin email" }).click();
  await expect(page.locator(".copy-status")).toContainText("manual");
  await navigate(page, "Tentang");
  await expect(page.locator("#about")).toBeFocused();
  await page.reload();
  await expect(page.locator("#about")).toBeFocused();
  await noOverflow(page);
});
test("preferences persist, reduced motion and observer/storage failure remain usable", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Ganti bahasa" }).click();
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  await expect(page.locator(".hero-identity")).toHaveCSS(
    "animation-name",
    "none",
  );
  await expect(page.locator(".hero-panel").first()).toHaveCSS(
    "transition-duration",
    "0s",
  );
  await page.addInitScript(() => {
    Object.defineProperty(window, "IntersectionObserver", { value: undefined });
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("denied", "SecurityError");
      },
    });
  });
  await page.reload();
  await expect(page.getByRole("tab").first()).toBeVisible();
  await expect(page.locator("#selected-projects")).toHaveCSS("opacity", "1");
  await page.getByRole("tab").nth(1).click();
  await expect(page.getByRole("tabpanel")).toContainText("Proxmox Home Lab");
  await noOverflow(page);
});
test("unknown, malformed and legacy sample URLs do not crash", async ({
  page,
}) => {
  await start(page);
  for (const path of ["missing", "projects/%E0%A4%A", "projects/unknown"]) {
    await page.goto(`/#/${path}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Halaman tidak ditemukan",
    );
  }
  for (const slug of ["sample-notes", "sample-api", "sample-tooling"]) {
    await page.goto(`/#/projects/${slug}`);
    await expect(page.locator("main")).toContainText(
      "Ini bukan proyek portfolio terverifikasi",
    );
  }
});
test("capture responsive production evidence", async ({ page }, info) => {
  await start(page);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [name, path] of [
    ["home", "/"],
    ["projects", "/projects"],
    ["detail", "/projects/vps-manager"],
  ]) {
    await page.goto(`/#${path}`);
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (const img of document.images) {
        img.loading = "eager";
        await img.decode().catch(() => {});
      }
    });
    await noOverflow(page);
    await page.screenshot({
      path: `docs/screenshots/field-notes/positioning/${name}-${info.project.name}.png`,
      fullPage: true,
      scale: "css",
      animations: "disabled",
      timeout: 60000,
    });
  }
});
