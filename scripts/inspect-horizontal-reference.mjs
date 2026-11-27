import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
const out = "docs/verification/horizontal-home";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true, timeout: 90000 });
const report = {};
try {
  for (const [name, width, height] of [
    ["desktop", 1440, 900],
    ["mobile", 390, 844],
  ]) {
    const context = await browser.newContext({
      viewport: { width, height },
      hasTouch: name === "mobile",
      isMobile: name === "mobile",
    });
    const page = await context.newPage();
    const r = { samples: [], errors: [] };
    report[name] = r;
    page.on("pageerror", (e) => r.errors.push(e.message));
    try {
      await page.goto("https://editorial-portfolio-9d8e325b.lovable.app/", {
        waitUntil: "domcontentloaded",
        timeout: 30000,
      });
      await page.waitForTimeout(1500);
      r.text = (await page.locator("body").innerText()).slice(0, 5500);
      for (let i = 0; i < 6; i++) {
        r.samples.push(
          await page.evaluate(() => ({
            y: scrollY,
            height: document.documentElement.scrollHeight,
            images: [...document.images]
              .filter(
                (i) =>
                  i.getBoundingClientRect().bottom > 0 &&
                  i.getBoundingClientRect().top < innerHeight,
              )
              .map((i) => ({
                alt: i.alt,
                x: i.getBoundingClientRect().x,
                y: i.getBoundingClientRect().y,
                w: i.width,
              })),
            sticky: [...document.querySelectorAll("*")]
              .filter((e) => getComputedStyle(e).position === "sticky")
              .slice(0, 4)
              .map((e) => ({
                tag: e.tagName,
                cls: e.className,
                top: e.getBoundingClientRect().top,
              })),
          })),
        );
        if ([0, 2, 4].includes(i))
          await page.screenshot({
            path: `${out}/reference-${name}-${i}.png`,
            timeout: 15000,
          });
        await page.mouse.wheel(0, 700);
        await page.waitForTimeout(500);
      }
      const bounds = await page.evaluate(() => {
        const sticky = [...document.querySelectorAll("div")].find(
          (e) => getComputedStyle(e).position === "sticky",
        );
        const section = sticky?.parentElement;
        return section
          ? {
              top: section.getBoundingClientRect().top + scrollY,
              height: section.offsetHeight,
            }
          : null;
      });
      r.galleryBounds = bounds;
      if (bounds) {
        await page.evaluate(
          (b) =>
            scrollTo({
              top: b.top + b.height - innerHeight + 200,
              behavior: "instant",
            }),
          bounds,
        );
        await page.waitForTimeout(500);
        await page.screenshot({
          path: `${out}/reference-${name}-exit.png`,
          timeout: 15000,
        });
        r.exit = await page
          .getByRole("heading", { name: "Projects", exact: true })
          .boundingBox();
        await page.evaluate(
          (b) => scrollTo({ top: b.top, behavior: "instant" }),
          bounds,
        );
        await page.waitForTimeout(500);
      }
      const img = page.getByAltText("Northlight Studio brand composition", {
        exact: true,
      });
      if (await img.count()) {
        await img.click({ timeout: 5000 });
        await page.waitForTimeout(400);
        r.afterClick = (await page.locator("body").innerText()).slice(-3500);
        await page.screenshot({
          path: `${out}/reference-${name}-click.png`,
          timeout: 15000,
        });
      }
    } catch (e) {
      r.error = String(e);
    }
    await context.close();
  }
} finally {
  await browser.close();
  await writeFile(
    `${out}/reference-observations.json`,
    JSON.stringify(report, null, 2),
  );
}
console.log(JSON.stringify(report, null, 2));
