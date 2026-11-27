import { test, expect } from "./fixtures";
test.beforeEach(({}, info) => {
  test.skip(
    info.project.name !== "desktop",
    "Desktop-specific viewport and keyboard regression",
  );
});

test("desktop pinned frame and full captions fit shorter viewports", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  for (const height of [900, 768, 600]) {
    await page.setViewportSize({ width: 1440, height });
    await page.evaluate(() => {
      const s = document.querySelector(".scroll-gallery")!;
      const h =
        document.querySelector<HTMLElement>(".site-header")!.offsetHeight;
      scrollTo({
        top: s.getBoundingClientRect().top + scrollY - h,
        behavior: "instant",
      });
    });
    await expect(page.locator(".scroll-gallery")).toHaveAttribute(
      "data-mode",
      "pinned",
    );
    await expect
      .poll(
        () =>
          page.evaluate(() => {
            const bottom = document
              .querySelector(".rail-window")!
              .getBoundingClientRect().bottom;
            return (
              Math.max(
                ...[...document.querySelectorAll(".rail-frame")].map(
                  (e) => e.getBoundingClientRect().bottom,
                ),
              ) - bottom
            );
          }),
        { message: `all captions fit at ${height}px height` },
      )
      .toBeLessThanOrEqual(1);
  }
});

test("native PageDown/PageUp and partially visible screenshot return position", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole("link", { name: "Lihat Proyek", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#selected-projects")).toBeFocused();
  const x = () =>
    page.locator(".rail-track").evaluate((e) => e.getBoundingClientRect().x);
  const initial = await x();
  await page.keyboard.press("PageDown");
  await expect.poll(x).toBeLessThan(initial - 200);
  const down = await x();
  await page.keyboard.press("PageUp");
  await expect.poll(x).toBeGreaterThan(down + 100);
  await page.evaluate(() => {
    const s = document.querySelector(".scroll-gallery")!,
      h = document.querySelector<HTMLElement>(".site-header")!.offsetHeight,
      t = document.querySelector<HTMLElement>(".rail-track")!,
      second = t.children[1] as HTMLElement;
    scrollTo({
      top:
        s.getBoundingClientRect().top + scrollY - h + second.offsetLeft + 100,
      behavior: "instant",
    });
  });
  const second = page.locator(".rail-image").nth(1);
  await expect
    .poll(async () => (await second.boundingBox())!.x)
    .toBeLessThan(-50);
  const before = { y: await page.evaluate(() => scrollY), x: await x() };
  const box = (await second.boundingBox())!;
  await page.mouse.click(100, box.y + 20);
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("h2")).toContainText("2 / 2");
  await page.keyboard.press("ArrowRight");
  await expect(dialog.locator("h2")).toContainText("1 / 2");
  await page.keyboard.press("Escape");
  await expect(second).toBeFocused();
  expect(
    Math.abs((await page.evaluate(() => scrollY)) - before.y),
  ).toBeLessThan(2);
  expect(Math.abs((await x()) - before.x)).toBeLessThan(2);
  await page.screenshot({
    path: "docs/verification/horizontal-home/partial-frame-return.png",
    scale: "css",
  });
});
