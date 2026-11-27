import { test, expect } from "./fixtures";
import type { Page } from "@playwright/test";
import { allProjects } from "../src/data";
import AxeBuilder from "@axe-core/playwright";

async function overflow(page: Page) {
  expect(
    await page.evaluate(() =>
      Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
    ),
  ).toBeLessThanOrEqual(page.viewportSize()!.width);
}
async function swipe(page: Page, vertical = false) {
  const stage = page.locator(".gallery-stage");
  await stage.scrollIntoViewIfNeeded();
  const box = (await stage.boundingBox())!;
  const x = box.x + box.width * 0.8,
    y = box.y + box.height * 0.4;
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x, y }],
  });
  for (let step = 1; step <= 6; step++) {
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [
        {
          x: x - ((vertical ? 4 : box.width * 0.6) * step) / 6,
          y: y - ((vertical ? 110 : -4) * step) / 6,
        },
      ],
    });
  }
  await cdp.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await cdp.detach();
}
test("gallery: buttons, keyboard, thumbnails, stable stage and no autoplay", async ({
  page,
}, info) => {
  await page.goto("/#/projects/helpdesk-ticketing");
  const gallery = page.getByRole("region", {
    name: "Galeri: Helpdesk Ticketing",
  });
  const count = gallery.getByRole("status");
  await expect(count).toContainText("1 / 2");
  const height = (await page.locator(".gallery-stage").boundingBox())!.height;
  await gallery
    .getByRole("button", { name: "Gambar berikutnya", exact: true })
    .click();
  await expect(count).toContainText("2 / 2");
  await expect(page.locator(".gallery-caption")).toContainText(
    "Potongan screenshot yang sama",
  );
  expect(
    Math.abs(
      (await page.locator(".gallery-stage").boundingBox())!.height - height,
    ),
  ).toBeLessThan(1);
  await page.keyboard.press("ArrowRight");
  await expect(count).toContainText("1 / 2");
  await page.keyboard.press("End");
  await expect(count).toContainText("2 / 2");
  await page.keyboard.press("Home");
  await expect(count).toContainText("1 / 2");
  if (page.viewportSize()!.width > 700) {
    await page
      .getByRole("button", { name: "2. Detail filter", exact: true })
      .click();
    await expect(count).toContainText("2 / 2");
    await expect(
      page.getByRole("button", { name: "2. Detail filter", exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
  }
  const before = await count.textContent();
  await page.waitForTimeout(500);
  await expect(count).toHaveText(before!);
  await overflow(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `docs/verification/horizontal-home/regression-detail-${info.project.name}.png`,
    fullPage: true,
    scale: "css",
    animations: "disabled",
  });
});
test("lightbox: modal focus, arrows, zoom, Escape, close button and focus return", async ({
  page,
}, info) => {
  await page.goto("/#/projects/vps-manager");
  const opener = page.getByRole("button", { name: /Perbesar screenshot/ });
  await opener.click();
  const modal = page.getByRole("dialog");
  const close = modal.getByRole("button", { name: "Tutup lightbox" });
  await expect(modal).toBeVisible();
  await expect(close).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(
    modal.getByRole("button", { name: "Gambar berikutnya" }),
  ).toBeFocused();
  await page.keyboard.press("ArrowRight");
  await expect(modal.locator("h2")).toContainText("2 / 2");
  await modal.getByRole("button", { name: "Ukuran asli" }).click();
  await expect(page.locator(".lightbox-image")).toHaveClass(/is-zoomed/);
  const natural = await modal
    .locator("img")
    .evaluate((img: HTMLImageElement) => ({
      width: img.width,
      naturalWidth: img.naturalWidth,
    }));
  expect(natural.width).toBe(natural.naturalWidth);
  await modal.getByRole("button", { name: "Sesuaikan layar" }).click();
  await page.screenshot({
    path: `docs/verification/horizontal-home/regression-lightbox-${info.project.name}.png`,
    scale: "css",
    animations: "disabled",
  });
  const accessibility = await new AxeBuilder({ page })
    .setLegacyMode(true)
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  await info.attach("lightbox-axe", {
    body: JSON.stringify({
      violations: accessibility.violations,
      incomplete: accessibility.incomplete.map((r) => r.id),
    }),
    contentType: "application/json",
  });
  expect(accessibility.violations).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(modal).not.toBeVisible();
  await expect(opener).toBeFocused();
  await expect(page.locator(".gallery-count")).toContainText("2 / 2");
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await opener.click();
  await close.click();
  await expect(opener).toBeFocused();
  await overflow(page);
});
test("touch swipe changes slides without hijacking vertical scroll", async ({
  page,
}, info) => {
  test.skip(!info.project.use.hasTouch, "Requires touch-enabled project");
  await page.goto("/#/projects/helpdesk-ticketing");
  await swipe(page);
  await expect(page.locator(".gallery-count")).toContainText("2 / 2");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  const scroll = await page.evaluate(() => scrollY);
  await swipe(page, true);
  await expect.poll(() => page.evaluate(() => scrollY)).toBeGreaterThan(scroll);
  await expect(page.locator(".gallery-count")).toContainText("2 / 2");
});
test("all project destinations, natural images, single-image controls and missing evidence", async ({
  page,
}) => {
  await page.goto("/#/projects");
  await expect(page.locator(".project-card")).toHaveCount(
    allProjects.id.length,
  );
  for (const project of allProjects.id) {
    await page
      .locator(`.project-visual[href="#/projects/${project.slug}"]`)
      .click();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      project.title,
    );
    await page.locator("img").evaluateAll(async (images) => {
      await Promise.all(
        images.map((i) => {
          i.loading = "eager";
          return i.decode();
        }),
      );
    });
    const invalid = await page
      .locator("img")
      .evaluateAll((images) =>
        images.filter((i) => !i.complete || !i.naturalWidth).map((i) => i.src),
      );
    expect(invalid).toEqual([]);
    if (
      [
        "proxmox-home-lab",
        "kulineran",
        "school-website",
        "cashier-application",
        "laravel-blog",
        "chat-app",
      ].includes(project.slug)
    ) {
      await expect(page.locator(".gallery-enlarge img")).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Gambar berikutnya" }),
      ).toHaveCount(0);
      await expect(page.locator(".gallery-thumbnails")).toHaveCount(0);
    }
    if (["trading-analysis-dashboard", "samurai-game"].includes(project.slug)) {
      await expect(page.locator(".missing-screens")).toContainText(
        "Screenshot belum tersedia",
      );
      await expect(page.locator(".detail img")).toHaveCount(0);
    }
    await overflow(page);
    await page.getByRole("link", { name: "← Kembali ke proyek" }).click();
  }
});
test("showcase entry, mobile navigation, bilingual galleries, reduced motion and themes", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => document.fonts.ready);
  await overflow(page);
  await page.screenshot({
    path: `docs/verification/horizontal-home/regression-home-${info.project.name}.png`,
    fullPage: true,
    scale: "css",
    animations: "disabled",
  });
  await page.getByRole("link", { name: "Lihat Proyek", exact: true }).click();
  await expect(page.locator("#selected-projects")).toBeFocused();
  await expect(page.locator("#primary-nav a[aria-current]")).toContainText(
    "Proyek",
  );
  await page
    .locator("#selected-projects")
    .getByRole("button", { name: /VPS Manager — Dashboard/ })
    .first()
    .click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: /Catatan proyek/ })
    .click();
  await expect(page).toHaveURL(/vps-manager$/);
  await expect(page.locator(".gallery-slide")).toHaveCSS(
    "animation-name",
    "none",
  );
  await page.getByRole("button", { name: "Ganti bahasa" }).click();
  await expect(
    page.getByRole("region", { name: "Gallery: VPS Manager" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Next image", exact: true }).click();
  await expect(page.locator(".gallery-caption")).toContainText(
    "Crop of the same screenshot",
  );
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.screenshot({
    path: `docs/verification/horizontal-home/regression-gallery-light-en-${info.project.name}.png`,
    fullPage: true,
    scale: "css",
    animations: "disabled",
  });
  if (page.viewportSize()!.width <= 800) {
    const menu = page.getByRole("button", { name: /^Menu/ });
    await menu.click();
    await page
      .locator("#primary-nav")
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  } else
    await page
      .locator("#primary-nav")
      .getByRole("link", { name: "Contact", exact: true })
      .click();
  await expect(page.locator("#contact")).toBeFocused();
  await expect(
    page.getByRole("link", { name: "Write an email" }),
  ).toHaveAttribute("href", "mailto:ikbar686@gmail.com");
  await overflow(page);
});
