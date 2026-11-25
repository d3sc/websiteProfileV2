import { test, expect } from "./fixtures";
import { copy, profileName, projects } from "../src/data";

test("current positioning, linked skills, other work and honest verification copy", async ({
  page,
}, info) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Ikbar\s*Rabbani\s*Purwanto/,
  );
  await expect(page.locator(".hero-identity")).toContainText(
    "Full-Stack Developer · Linux & Self-Hosting",
  );
  await expect(page.locator("#about")).toContainText(
    "IT Programmer dan mahasiswa S1 Manajemen Informatika",
  );
  await expect(page).toHaveTitle(new RegExp(profileName));
  await expect(page.locator(".preview-stage img")).toHaveCount(0);
  await expect(page.getByRole("tab")).toHaveText([
    "01VPS Manager↗",
    "02Proxmox Home Lab↗",
    "03LMS Ujian Online↗",
  ]);
  await expect(page.locator("#selected-projects .project-card h3")).toHaveText(
    projects.id.slice(0, 3).map((p) => p.title),
  );
  await expect(page.locator("#other-projects .project-card h3")).toHaveText([
    "Helpdesk Ticketing",
    "Trading Analysis Dashboard",
  ]);
  for (const p of projects.id) {
    const section = p.id < "04" ? "#selected-projects" : "#other-projects";
    const card = page.locator(`${section} .project-card`).filter({
      has: page.getByRole("heading", { name: p.title, exact: true }),
    });
    await expect(card).toContainText(p.summary);
    await expect(card.locator(".project-status")).toHaveText(p.statusLabel!);
    await expect(card.locator('a[target="_blank"]')).toHaveCount(0);
  }
  const skillLinks = page.locator(".skill-projects a");
  const firstHref = await skillLinks.first().getAttribute("href");
  await skillLinks.first().click();
  await expect(page).toHaveURL(
    new RegExp(firstHref!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"),
  );
  await expect(page.locator(".project-problem")).toContainText(
    projects.id[0].problem!,
  );
  for (const p of projects.id) {
    await page.goto(`/#/projects/${p.slug}`);
    await expect(page.locator(".project-verification")).toContainText(
      p.status!,
    );
    await expect(page.locator('.detail a[target="_blank"]')).toHaveCount(0);
  }
  await page.goto("/");
  await page.getByRole("button", { name: "Ganti bahasa" }).click();
  await expect(page.locator("#about")).toContainText(
    "undergraduate student in Information Management",
  );
  await expect(page.locator(".hero-copy")).toHaveText(copy.en.intro);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: `docs/screenshots/field-notes/positioning/home-en-${info.project.name}.png`,
    fullPage: true,
    scale: "css",
    animations: "disabled",
  });
});
