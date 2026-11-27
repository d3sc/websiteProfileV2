import { test, expect } from "./fixtures";
import type { Page } from "@playwright/test";
const vpsShots = [
  {
    src: "/assets/projects/vps-manager.webp",
    caption:
      "Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak.",
  },
  {
    src: "/assets/projects/vps-manager-metrics.webp",
    caption:
      "Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan.",
  },
];

async function geometry(page: Page) {
  return page.evaluate(() => {
    const root = document.querySelector<HTMLElement>(".scroll-gallery")!,
      viewport = root.querySelector<HTMLElement>(".rail-viewport")!,
      windowEl = root.querySelector<HTMLElement>(".rail-window")!,
      track = root.querySelector<HTMLElement>(".rail-track")!;
    const header = document.querySelector<HTMLElement>(".site-header")!;
    return {
      mode: root.dataset.mode,
      top: root.getBoundingClientRect().top + scrollY,
      header: header.offsetHeight,
      stickyTop: viewport.getBoundingClientRect().top,
      travel: track.scrollWidth - windowEl.clientWidth,
      sectionHeight: root.offsetHeight,
      viewportHeight: viewport.offsetHeight,
      x: track.getBoundingClientRect().left,
      y: scrollY,
      left: windowEl.scrollLeft,
      first: track.children[0].getBoundingClientRect().left,
      last: track.lastElementChild!.getBoundingClientRect().right,
      width: windowEl.getBoundingClientRect().right,
    };
  });
}
async function overflow(page: Page) {
  expect(
    await page.evaluate(
      () =>
        document.documentElement.scrollWidth <=
        document.documentElement.clientWidth + 1,
    ),
  ).toBe(true);
}
async function touch(page: Page, dx: number, dy: number) {
  const box = (await page.locator(".rail-image").nth(1).boundingBox())!;
  const x = Math.max(
      35,
      Math.min(page.viewportSize()!.width - 35, box.x + box.width * 0.5),
    ),
    y = Math.max(
      140,
      Math.min(page.viewportSize()!.height - 100, box.y + box.height * 0.5),
    );
  const client = await page.context().newCDPSession(page);
  await client.send("Input.dispatchTouchEvent", {
    type: "touchStart",
    touchPoints: [{ x, y }],
  });
  for (let i = 1; i <= 8; i++) {
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: x + (dx * i) / 8, y: y + (dy * i) / 8 }],
    });
    await page.waitForTimeout(25);
  }
  await client.send("Input.dispatchTouchEvent", {
    type: "touchEnd",
    touchPoints: [],
  });
  await client.detach();
}

test("horizontal homepage: native wheel pin/reverse/release or swipe track and arrows", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const boundary = await page.evaluate(() => ({
    preview: document
      .querySelector(".project-selector")!
      .getBoundingClientRect().bottom,
    gallery: document.querySelector(".scroll-gallery")!.getBoundingClientRect()
      .top,
  }));
  expect(
    boundary.gallery,
    "hero preview/tabs must not overlap the following gallery",
  ).toBeGreaterThanOrEqual(boundary.preview + 20);
  await page.screenshot({
    // Keep a visual record before entering the gallery.
    path: `docs/verification/horizontal-home/hero-${info.project.name}.png`,
    scale: "css",
  });
  await page.getByRole("link", { name: "Lihat Proyek", exact: true }).click();
  await expect(page.locator("#selected-projects")).toBeFocused();
  const initial = await geometry(page);
  expect(initial.first).toBeGreaterThanOrEqual(0);
  expect(initial.first).toBeLessThan(initial.width / 4);
  if (initial.mode === "pinned") {
    expect(
      Math.abs(initial.sectionHeight - initial.travel - initial.viewportHeight),
    ).toBeLessThan(2);
    await page.mouse.wheel(0, 500);
    await expect
      .poll(async () => (await geometry(page)).x)
      .toBeLessThan(initial.x - 250);
    const forward = await geometry(page);
    expect(Math.abs(forward.stickyTop - forward.header)).toBeLessThan(2);
    await page.screenshot({
      path: `docs/verification/horizontal-home/gallery-${info.project.name}.png`,
      scale: "css",
    });
    await page.mouse.wheel(0, -220);
    await expect
      .poll(async () => (await geometry(page)).x)
      .toBeGreaterThan(forward.x + 100);
    await page.evaluate(
      (g) =>
        scrollTo({ top: g.top + g.travel - g.header, behavior: "instant" }),
      initial,
    );
    await expect
      .poll(async () =>
        Math.abs(
          (await geometry(page)).last -
            (await geometry(page)).width +
            parseFloat(
              await page
                .locator(".rail-track")
                .evaluate((e) => getComputedStyle(e).paddingRight),
            ),
        ),
      )
      .toBeLessThan(3);
    await page.mouse.wheel(0, 250);
    await expect
      .poll(async () => (await page.locator("#project-index").boundingBox())!.y)
      .toBeLessThan(page.viewportSize()!.height);
    await expect
      .poll(async () => (await geometry(page)).stickyTop)
      .toBeLessThan(initial.header - 50);
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect
      .poll(async () => {
        const g = await geometry(page);
        return Math.abs(g.sectionHeight - g.travel - g.viewportHeight);
      })
      .toBeLessThan(2);
  } else {
    expect(initial.mode).toBe("manual");
    await page
      .getByRole("button", { name: "Screenshot berikutnya", exact: true })
      .click();
    await expect
      .poll(async () => (await geometry(page)).left)
      .toBeGreaterThan(120);
    await expect(page.locator(".rail-arrows")).toContainText("2 / 12");
    await page
      .getByRole("button", { name: "Screenshot sebelumnya", exact: true })
      .click();
    await expect.poll(async () => (await geometry(page)).left).toBeLessThan(2);
    if (info.project.use.hasTouch) {
      await page.locator(".rail-image").nth(1).focus();
      const before = (await geometry(page)).left;
      await touch(page, -135, 0);
      await expect
        .poll(async () => (await geometry(page)).left)
        .toBeGreaterThan(before + 80);
      await page.locator(".rail-image").nth(1).focus();
      const y = await page.evaluate(() => scrollY);
      await touch(page, 0, -140);
      await expect
        .poll(() => page.evaluate(() => scrollY))
        .toBeGreaterThan(y + 30);
    }
    await page.screenshot({
      path: `docs/verification/horizontal-home/gallery-${info.project.name}.png`,
      scale: "css",
    });
  }
  await overflow(page);
  await page.locator(".rail-skip").click();
  await expect(page.locator("#project-index")).toBeFocused();
  await expect(page.locator(".home-project-row")).toHaveCount(10);
  await overflow(page);
});

test("homepage viewer opens exact second screenshot and returns focus and position", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const opener = page.getByRole("button", {
    name: "VPS Manager — Detail ringkasan",
    exact: true,
  });
  await opener.focus();
  await expect(opener).toBeFocused();
  await opener.scrollIntoViewIfNeeded();
  // Let the browser's native smooth focus-scroll finish before recording the position.
  await page.waitForTimeout(500);
  const before = await geometry(page);
  if (info.project.use.hasTouch) await opener.tap();
  else await opener.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("h2")).toContainText("VPS Manager 2 / 2");
  await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
    vpsShots[1].caption,
  );
  await expect(dialog.locator(".lightbox-image img")).toHaveAttribute(
    "src",
    vpsShots[1].src,
  );
  await expect(
    dialog.getByRole("link", { name: /Catatan proyek/ }),
  ).toHaveAttribute("href", "#/projects/vps-manager");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("h2")).toContainText("1 / 2");
  await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
    vpsShots[0].caption,
  );
  await dialog
    .getByRole("button", { name: "Ukuran asli", exact: true })
    .click();
  expect(
    await dialog
      .locator(".lightbox-image img")
      .evaluate((e: HTMLImageElement) =>
        Math.abs(e.getBoundingClientRect().width - e.naturalWidth),
      ),
  ).toBeLessThan(1);
  await dialog.getByRole("button", { name: "Sesuaikan layar" }).click();
  await page.screenshot({
    path: `docs/verification/horizontal-home/viewer-${info.project.name}.png`,
    scale: "css",
  });
  if (info.project.use.hasTouch)
    await dialog.getByRole("button", { name: "Tutup lightbox" }).tap();
  else await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  const after = await geometry(page);
  expect(Math.abs(after.y - before.y)).toBeLessThan(2);
  expect(Math.abs(after.left - before.left)).toBeLessThan(2);
  // Continue keyboard-only through an off-screen entry, then activate without a pointer.
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("button", {
      name: "Proxmox Home Lab — Konsol administrasi",
      exact: true,
    }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("h2")).toContainText("Proxmox Home Lab 1 / 1");
  await expect(
    dialog.getByRole("button", { name: "Gambar berikutnya" }),
  ).toHaveCount(0);
  await page.keyboard.press("Escape");
  await overflow(page);
});

test("homepage static reduced motion, both themes/locales, image dimensions and index routes", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".scroll-gallery")).toHaveAttribute(
    "data-mode",
    "static",
  );
  const g = await geometry(page);
  expect(g.sectionHeight).toBeLessThan(g.travel + g.viewportHeight + 3);
  await expect(page.locator(".rail-viewport")).toHaveCSS("position", "static");
  await expect(page.locator(".rail-track")).toHaveCSS("transform", "none");
  const before = await page.locator(".rail-image").first().boundingBox();
  await page.locator(".rail-track img").evaluateAll(async (images) => {
    await Promise.all(
      images.map((i) => {
        i.loading = "eager";
        return i.decode();
      }),
    );
  });
  const after = await page.locator(".rail-image").first().boundingBox();
  expect(Math.abs(before!.height - after!.height)).toBeLessThan(1);
  const broken = await page
    .locator(".rail-track img")
    .evaluateAll((imgs) =>
      imgs.filter((i) => !i.naturalWidth || !i.complete).map((i) => i.src),
    );
  expect(broken).toEqual([]);
  for (const image of await page.locator(".rail-image").all()) {
    await image.focus();
    await expect(image).toBeInViewport();
  }
  await overflow(page);
  await page.getByRole("button", { name: "Ganti ke tema terang" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(
    (
      await page
        .locator("html")
        .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
    ).trim(),
  ).toBe("#225e3b");
  await page.getByRole("button", { name: "Ganti bahasa" }).click();
  await expect(page.locator(".hero-copy")).toContainText(
    "I build web applications",
  );
  await expect(page.locator(".rail-skip")).toHaveText("Skip gallery ↘");
  await expect(page.locator("#other-projects")).toContainText(
    "Trading Analysis Dashboard",
  );
  await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({
    path: `docs/verification/horizontal-home/reduced-light-en-${info.project.name}.png`,
    fullPage: true,
    scale: "css",
    animations: "disabled",
  });
  await page.locator(".home-project-row h3 a").first().click();
  await expect(page).toHaveURL(/#\/projects\/zentra-digital-solution$/);
  await expect(page.locator(".project-gallery")).toBeVisible();
  // The new homepage palette must not leak into the existing case-study page.
  expect(
    (
      await page
        .locator("html")
        .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
    ).trim(),
  ).toBe("#345600");
  await overflow(page);
});
