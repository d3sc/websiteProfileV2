import { test, expect } from "./fixtures";
import { copy, projects } from "../src/data";
const captions = {
  id: [
    "Beranda Zentra Digital Solution dengan pengenalan layanan website, navigasi bisnis, dan ilustrasi infrastruktur digital.",
    "Halaman login CRM dengan tab Employee dan Admin; tab Admin dipilih dan kolom kredensial kosong.",
    "Halaman login berlogo MIA Training dengan kolom username dan password kosong serta foto ilustrasi kegiatan belajar.",
    "Halaman login Absensi dengan logo PT. Mitra Inti Antarbangsa dan kolom username serta password kosong.",
    "Halaman login berlogo MIA Admin dengan kolom username dan password kosong. Alur administrasi di dalam aplikasi tidak ditampilkan.",
  ],
  en: [
    "Zentra Digital Solution homepage with website services, business navigation, and a digital infrastructure illustration.",
    "CRM login page with Employee and Admin tabs; Admin is selected and the credential fields are empty.",
    "MIA Training branded login page with empty username and password fields and a learning-themed photograph.",
    "Attendance login page with PT. Mitra Inti Antarbangsa branding and empty username and password fields.",
    "MIA Admin branded login page with empty username and password fields. Administrative workflows inside the application are not shown.",
  ],
};

const slugs = [
  "zentra-digital-solution",
  "mia-crm",
  "mia-training",
  "mia-absensi",
  "mia-admin",
];
for (const locale of ["id", "en"] as const) {
  test(`${locale}: five projects, fresh hero, ordered surfaces and exact media`, async ({
    page,
  }, info) => {
    // Each test receives a fresh browser context with no persisted selection.
    await page.goto("/");
    if (locale === "en")
      await page.getByRole("button", { name: "Ganti bahasa" }).click();
    const firstFive = projects[locale].slice(0, 5);
    expect(firstFive.map((p) => p.slug)).toEqual(slugs);
    const panel = page.getByRole("tabpanel");
    await expect(panel.locator("h2")).toHaveText("Zentra Digital Solution");
    await expect(panel.locator("img")).toHaveAttribute(
      "src",
      "/assets/projects/zentra-digital-solution.webp",
    );
    await expect(
      panel.getByRole("link", {
        name: locale === "id" ? /Kunjungi website/ : /Visit website/,
      }),
    ).toHaveAttribute("href", "https://zentradigitalsolution.my.id/");
    await expect(
      panel.getByRole("link", { name: new RegExp(copy[locale].details) }),
    ).toHaveAttribute("href", "#/projects/zentra-digital-solution");
    await expect(page.locator(".hero-copy")).toHaveText(copy[locale].intro);
    await expect(page.getByRole("tab")).toHaveText(
      firstFive.map((p) => `${p.id}${p.title}↗`),
    );
    await expect(page.locator(".rail-caption-title strong").nth(0)).toHaveText(
      firstFive[0].title,
    );
    for (const [i, project] of firstFive.entries()) {
      await expect(
        page.locator(".rail-caption-title strong").nth(i),
      ).toHaveText(project.title);
      await expect(
        page.locator(".home-project-row h3 a").nth(i),
      ).toHaveAttribute("href", `#/projects/${project.slug}`);
    }
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: `docs/verification/mia-zentra/hero-${locale}-${info.project.name}.png`,
      fullPage: false,
    });
    await page.goto("/#/projects");
    await expect(page.locator(".project-card h3")).toHaveCount(16);
    for (const [i, project] of firstFive.entries()) {
      await expect(page.locator(".project-card h3").nth(i)).toHaveText(
        project.title,
      );
      await page
        .locator(`.project-visual[href="#/projects/${project.slug}"]`)
        .click();
      await expect(page).toHaveURL(new RegExp(`${project.slug}$`));
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(
        `${project.title}.`,
      );
      await expect(page.locator(".detail-intro")).toHaveText(project.summary);
      const image = {
        src: `/assets/projects/${project.slug}.webp`,
        caption: captions[locale][i],
      };
      await expect(page.locator(".gallery-caption p")).toHaveText(
        image.caption,
      );
      await expect(page.locator(".gallery-enlarge img")).toHaveAttribute(
        "src",
        image.src,
      );
      await page
        .locator(".gallery-enlarge img")
        .evaluate((img: HTMLImageElement) => img.decode());
      await expect(page.locator(".gallery-count")).toContainText("1 / 1");
      if (i > 0)
        await expect(page.locator('.detail a[target="_blank"]')).toHaveCount(0);
      await page.locator(".gallery-enlarge").click();
      await expect(
        page.getByRole("dialog").locator(".lightbox-image img"),
      ).toHaveAttribute("src", image.src);
      await page.keyboard.press("Escape");
      await page.screenshot({
        path: `docs/verification/mia-zentra/${project.slug}-${locale}-${info.project.name}.png`,
        fullPage: true,
      });
      await page
        .getByRole("link", { name: new RegExp(copy[locale].back) })
        .click();
    }
  });
}

test("native desktop scroll or mobile swipe reaches the five projects in order", async ({
  page,
}, info) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole("link", { name: "Lihat Proyek", exact: true }).click();
  const pinned =
    (await page.locator(".scroll-gallery").getAttribute("data-mode")) ===
    "pinned";
  for (let i = 0; i < 5; i++) {
    const frame = page.locator(".rail-frame").nth(i);
    if (i > 0) {
      if (pinned) {
        const delta = await frame.evaluate((e) => {
          const root = document.querySelector<HTMLElement>(".scroll-gallery")!;
          const header =
            document.querySelector<HTMLElement>(".site-header")!.offsetHeight;
          const track = document.querySelector<HTMLElement>(".rail-track")!;
          return (
            root.getBoundingClientRect().top -
            header +
            (e as HTMLElement).offsetLeft -
            parseFloat(getComputedStyle(track).paddingLeft)
          );
        });
        await page.mouse.wheel(0, delta);
      } else if (info.project.use.hasTouch) {
        const windowEl = page.locator(".rail-window");
        const box = (await windowEl.boundingBox())!;
        const x = page.viewportSize()!.width * 0.85;
        const y = box.y + Math.min(box.height * 0.25, 100);
        const client = await page.context().newCDPSession(page);
        await client.send("Input.dispatchTouchEvent", {
          type: "touchStart",
          touchPoints: [{ x, y }],
        });
        for (let step = 1; step <= 10; step++) {
          await client.send("Input.dispatchTouchEvent", {
            type: "touchMove",
            touchPoints: [
              { x: x - (page.viewportSize()!.width * 0.65 * step) / 10, y },
            ],
          });
          await page.waitForTimeout(25);
        }
        await client.send("Input.dispatchTouchEvent", {
          type: "touchEnd",
          touchPoints: [],
        });
        await client.detach();
      } else {
        await page
          .getByRole("button", { name: "Screenshot berikutnya", exact: true })
          .click();
      }
    }
    await expect(frame.locator(".rail-image")).toBeInViewport({ ratio: 0.6 });
    await expect(frame.locator("strong")).toHaveText(projects.id[i].title);
    if (!pinned) {
      await expect(page.locator(".rail-arrows")).toContainText(`${i + 1} / 12`);
      await page.locator(".rail-window").evaluate(
        (el) =>
          new Promise<void>((resolve) => {
            let last = el.scrollLeft,
              stable = 0;
            const settle = () => {
              stable = el.scrollLeft === last ? stable + 1 : 0;
              last = el.scrollLeft;
              if (stable >= 8) resolve();
              else requestAnimationFrame(settle);
            };
            requestAnimationFrame(settle);
          }),
      );
    }
    await frame
      .locator(".rail-image img")
      .evaluate((img: HTMLImageElement) => img.decode());
  }
  await page.screenshot({
    path: `docs/verification/mia-zentra/sequence-${info.project.name}.png`,
    scale: "css",
  });
});
