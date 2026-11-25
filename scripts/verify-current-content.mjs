import { chromium } from "playwright";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, extname } from "node:path";

// Low-memory acceptance against the real production build: no worker pool or Vite server.
const root = resolve("dist");
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};
const server = createServer(async (req, res) => {
  try {
    const path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    );
    if (path === "/favicon.ico") {
      res.writeHead(204).end();
      return;
    }
    const file = resolve(root, "." + (path === "/" ? "/index.html" : path));
    if (!file.startsWith(root + "/")) {
      res.writeHead(403).end();
      return;
    }
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[extname(file)] ?? "application/octet-stream",
    });
    res.end(data);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ headless: true });
const output = "docs/screenshots/field-notes/positioning";
await mkdir(output, { recursive: true });
const results = [];
const names = [
  "VPS Manager",
  "Proxmox Home Lab",
  "LMS Ujian Online",
  "Helpdesk Ticketing",
  "Trading Analysis Dashboard",
];
const slugs = [
  "vps-manager",
  "proxmox-home-lab",
  "lms-ujian-online",
  "helpdesk-ticketing",
  "trading-analysis-dashboard",
];
try {
  for (const [label, width, height] of [
    ["desktop", 1440, 1000],
    ["mobile", 360, 800],
  ]) {
    const context = await browser.newContext({
      viewport: { width, height },
      hasTouch: label === "mobile",
    });
    const page = await context.newPage();
    page.setDefaultTimeout(30000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    page.on("requestfailed", (r) =>
      errors.push(r.url().replace(origin, "[local build]")),
    );
    await page.goto(origin, { waitUntil: "load" });
    await page.getByRole("tab").first().waitFor();
    assert.match(
      await page.locator("h1").innerText(),
      /Ikbar\s*Rabbani\s*Purwanto/,
    );
    assert.match(
      await page.locator(".hero-identity").innerText(),
      /Full-Stack Developer · Linux & Self-Hosting/i,
    );
    assert.match(
      await page.locator("#about").innerText(),
      /IT Programmer dan mahasiswa S1 Manajemen Informatika/,
    );
    assert.deepEqual(await page.locator(".skills-list h3").allTextContents(), [
      "Backend & Database",
      "Frontend",
      "Infrastruktur",
      "Otomasi & Integrasi",
    ]);
    assert.deepEqual(
      await page
        .locator("#selected-projects .project-card h3")
        .allTextContents(),
      names.slice(0, 3),
    );
    assert.deepEqual(
      await page.locator("#other-projects .project-card h3").allTextContents(),
      names.slice(3),
    );
    assert.equal(await page.locator(".preview-stage img").count(), 0);
    for (let i = 0; i < 3; i++) {
      await page.getByRole("tab").nth(i).click();
      const panel = page.getByRole("tabpanel");
      await panel.waitFor();
      assert.equal(await panel.locator("h2").textContent(), names[i]);
      assert.equal(
        await panel.getByRole("link").getAttribute("href"),
        `#/projects/${slugs[i]}`,
      );
    }
    await page.keyboard.press("Home");
    assert.equal(
      await page.getByRole("tab").first().getAttribute("aria-selected"),
      "true",
    );
    await page.keyboard.press("ArrowRight");
    assert.equal(
      await page.getByRole("tab").nth(1).getAttribute("aria-selected"),
      "true",
    );
    assert.equal(
      await page
        .getByRole("tab")
        .nth(1)
        .evaluate((el) => el === document.activeElement),
      true,
    );
    await page.getByRole("tabpanel").getByRole("link").click();
    await page.locator(".project-verification").waitFor();
    assert.match(await page.locator("h1").innerText(), /Proxmox Home Lab/);
    assert.match(
      await page.locator(".project-verification").innerText(),
      /belum ditemukan|belum terkonfirmasi/,
    );
    for (let i = 0; i < slugs.length; i++) {
      await page.goto(`${origin}/#/projects/${slugs[i]}`);
      await page.locator(".project-verification").waitFor();
      assert.match(await page.locator("h1").innerText(), new RegExp(names[i]));
      assert.ok(
        (await page.locator(".project-problem").innerText()).length > 60,
      );
      assert.equal(await page.locator('.detail a[target="_blank"]').count(), 0);
      assert.equal(
        (await page.locator(".detail-body .tags li").count()) > 0,
        true,
      );
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
      );
    }
    await page.goto(origin);
    await page.getByRole("tab").first().waitFor();
    await page.locator(".hero-actions a").first().click();
    await page.locator(".archive-grid").first().waitFor();
    assert.equal(await page.locator(".project-card").count(), 12);
    await page.goBack();
    await page.getByRole("tab").first().waitFor();
    if (label === "mobile") {
      const menu = page.getByRole("button", { name: "Menu", exact: true });
      await menu.click();
      await page.locator("#primary-nav a").first().focus();
      await page.keyboard.press("Escape");
      assert.equal(await menu.getAttribute("aria-expanded"), "false");
      await menu.click();
      await page
        .locator("#primary-nav")
        .getByRole("link", { name: "Tentang", exact: true })
        .click();
      assert.equal(
        await page
          .locator("#about")
          .evaluate((el) => el === document.activeElement),
        true,
      );
    }
    const skill = page.locator(".skill-projects a").first();
    await skill.click();
    await page.locator(".project-verification").waitFor();
    assert.match(await page.locator("h1").innerText(), /VPS Manager/);
    await page.goto(origin);
    await page.getByRole("tab").first().waitFor();
    await page.locator(".hero-actions a").nth(1).click();
    assert.equal(
      await page
        .locator("#contact")
        .evaluate((el) => el === document.activeElement),
      true,
    );
    assert.equal(
      await page
        .getByRole("link", { name: "Tulis email" })
        .getAttribute("href"),
      "mailto:ikbar686@gmail.com",
    );
    await page.goto(origin);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.evaluate(() => document.fonts.ready);
    assert.equal(
      await page
        .locator("html")
        .evaluate((el) => getComputedStyle(el).scrollBehavior),
      "auto",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
    );
    const text = await page.locator("body").innerText();
    assert.doesNotMatch(
      text,
      /\b(?:192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+)\b|chat_id|bot\d+:/i,
    );
    await page.screenshot({
      path: `${output}/verified-home-${label}.png`,
      fullPage: true,
      animations: "disabled",
      timeout: 60000,
    });
    await page.getByRole("button", { name: "Ganti bahasa" }).click();
    assert.match(
      await page.locator("#about").innerText(),
      /undergraduate student in Information Management/,
    );
    await page.getByRole("button", { name: "Switch to light theme" }).click();
    assert.equal(
      await page.locator("html").getAttribute("data-theme"),
      "light",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
    );
    assert.deepEqual(errors, []);
    results.push({
      viewport: label,
      width,
      height,
      result: "pass",
      checks: [
        "name/bio/skills",
        "current project order",
        "hero click and keyboard",
        "all five details and scoped evidence",
        "no fabricated source/demo controls",
        "archive navigation",
        label === "mobile" ? "mobile menu and focus" : "desktop keyboard focus",
        "skill links",
        "contact CTA",
        "English/light theme",
        "reduced motion",
        "no overflow",
        "no console/page/network errors",
      ],
      screenshot: `${output}/verified-home-${label}.png`,
    });
    await context.close();
    console.log(`${label} ${width}px: PASS`);
  }
  await writeFile(
    `${output}/content-smoke-results.json`,
    JSON.stringify(
      {
        artifact: "production build",
        browser: "Chromium",
        scope:
          "Current-content smoke acceptance; not the full Playwright/axe matrix",
        results,
      },
      null,
      2,
    ),
  );
  console.log("Current-content acceptance: 2/2 viewports PASS.");
} finally {
  await browser.close();
  await new Promise((r) => server.close(r));
}
