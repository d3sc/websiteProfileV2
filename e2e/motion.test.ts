import { test, expect } from "./fixtures";

test("entrance motion keeps text readable at its first frame", async ({
  page,
}) => {
  await page.goto("/");
  const firstFrame = await page
    .locator(".hero-identity")
    .evaluate((element) => {
      const animation = element.getAnimations()[0];
      if (animation) {
        animation.pause();
        animation.currentTime = 0;
      }
      return Number(getComputedStyle(element).opacity);
    });
  expect(firstFrame).toBeGreaterThanOrEqual(0.9);
  await page.locator("#selected-projects").scrollIntoViewIfNeeded();
  await expect(page.locator("#selected-projects")).toHaveClass(/revealed/);
  const reveal = await page
    .locator("#selected-projects")
    .evaluate((element) => {
      const animation = element.getAnimations()[0];
      if (animation) {
        animation.pause();
        animation.currentTime = 0;
      }
      return Number(getComputedStyle(element).opacity);
    });
  expect(reveal).toBeGreaterThanOrEqual(0.9);
});
