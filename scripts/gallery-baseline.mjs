import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";
const browser = await chromium.launch({ headless: true, timeout: 120000 });
try {
  const results = [];
  for (const width of [1440, 360]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("http://127.0.0.1:4184/", {
      waitUntil: "networkidle",
      timeout: 90000,
    });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `docs/verification/gallery/before-${width}.png`,
      scale: "css",
    });
    results.push({
      width,
      title: await page.title(),
      images: await page
        .locator("img")
        .evaluateAll((imgs) =>
          imgs.map((i) => ({
            src: i.getAttribute("src"),
            broken: i.complete && !i.naturalWidth,
          })),
        ),
      errors,
    });
    await page.close();
  }
  await writeFile(
    "docs/verification/gallery/baseline.json",
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
