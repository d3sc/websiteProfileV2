# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.test.ts >> id/dark: home, archive, current details, accessibility
- Location: e2e/portfolio.test.ts:113:5

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 320
Received:    323
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Lewati ke konten" [ref=e3] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Ikbar Rabbani Purwanto" [ref=e6] [cursor=pointer]:
        - /url: "#/"
        - text: ir
        - generic [ref=e7]: /
        - generic [ref=e8]: developerfield notes
      - button "Menu" [ref=e9] [cursor=pointer]: Menu +
      - generic [ref=e10]:
        - button "Ganti bahasa" [ref=e11] [cursor=pointer]: ID
        - button "Ganti ke tema terang" [ref=e12] [cursor=pointer]: ☀
  - main [active] [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - paragraph [ref=e17]: + Full-Stack Developer · Linux & Self-Hosting
          - heading "Ikbar Rabbani Purwanto." [level=1] [ref=e18]: IkbarRabbaniPurwanto.
          - paragraph [ref=e19]: "Saya membangun aplikasi web untuk kebutuhan operasional: layanan VPS, ujian online, dan ticketing. Fokus saya backend, otomasi, dan aplikasi di server Linux."
          - generic [ref=e20]:
            - link "Lihat Proyek" [ref=e21] [cursor=pointer]:
              - /url: "#/projects"
              - text: Lihat Proyek
              - generic [aria-hidden] [ref=e22]: ↗
            - link "Hubungi Saya" [ref=e23] [cursor=pointer]:
              - /url: "#/#contact"
              - text: Hubungi Saya
              - generic [aria-hidden] [ref=e24]: ↘
          - generic [ref=e25]:
            - generic [ref=e26]: 01 — PERSONAL PORTFOLIO
            - generic [ref=e27]: BACKEND / LINUX / AUTOMATION
        - generic [ref=e28]:
          - generic [ref=e29]:
            - generic [ref=e30]: Proyek pilihan
            - generic [ref=e32]: INDEX / 01
          - tabpanel "01 VPS Manager" [ref=e34]:
            - generic [ref=e36]:
              - generic [ref=e37]: FIELD NOTE / 01
              - generic [aria-hidden] [ref=e38]: "01"
              - paragraph [ref=e39]: CUSTOMERS / SERVICES
              - generic [ref=e40]: PAYMENTS / REMINDERS
            - generic [ref=e41]:
              - generic [ref=e42]: Aplikasi web / Bun
              - heading "VPS Manager" [level=2] [ref=e43]
              - paragraph [ref=e44]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - link "Lihat detail" [ref=e45] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: Lihat detail
                - generic [aria-hidden] [ref=e46]: ↗
          - tablist "Pilih proyek" [ref=e47]:
            - tab "01 VPS Manager" [selected] [ref=e48] [cursor=pointer]:
              - generic [ref=e49]: "01"
              - generic [ref=e50]: VPS Manager
              - generic [aria-hidden] [ref=e51]: ↗
            - tab "02 Proxmox Home Lab" [ref=e52] [cursor=pointer]:
              - generic [ref=e53]: "02"
              - generic [ref=e54]: Proxmox Home Lab
              - generic [aria-hidden] [ref=e55]: ↗
            - tab "03 LMS Ujian Online" [ref=e56] [cursor=pointer]:
              - generic [ref=e57]: "03"
              - generic [ref=e58]: LMS Ujian Online
              - generic [aria-hidden] [ref=e59]: ↗
      - generic [ref=e61]:
        - generic [ref=e62]: DEVELOPER FIELD NOTES
        - generic [ref=e63]: Learning → Evolving → Innovating
      - generic [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]:
            - paragraph [ref=e67]: 01 / Proyek pilihan
            - heading "Dibuat untuk digunakan." [level=2] [ref=e68]: Dibuat untukdigunakan.
          - paragraph [ref=e69]: Aplikasi operasional, backend, dan infrastruktur yang saya kelola sendiri.
        - generic [ref=e70]:
          - article [ref=e71]:
            - 'link "Lihat detail: VPS Manager" [ref=e72] [cursor=pointer]':
              - /url: "#/projects/vps-manager"
              - generic [ref=e73]:
                - generic [ref=e74]: FIELD NOTE / 01
                - generic [aria-hidden] [ref=e75]: "01"
                - paragraph [ref=e76]: CUSTOMERS / SERVICES
                - generic [ref=e77]: PAYMENTS / REMINDERS
              - generic [aria-hidden] [ref=e78]: ↗
            - generic [ref=e79]:
              - paragraph [ref=e80]: /01 — Web App
              - heading [level=3] [ref=e81]:
                - link "VPS Manager" [ref=e82] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
              - paragraph [ref=e83]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - paragraph [ref=e84]: Riwayat teruji · notifikasi mock
              - paragraph [ref=e85]:
                - strong [ref=e86]: Yang saya kerjakan
                - text: Saya membangun alur pengelolaan layanan dan pembayaran. Di halaman riwayat, saya menambahkan penjaga urutan request agar respons, error, dan status loading dari request lama tidak menimpa data terbaru.
              - list "Stack" [ref=e87]:
                - listitem [ref=e88]: Bun
                - listitem [ref=e89]: Elysia
                - listitem [ref=e90]: Astro
                - listitem [ref=e91]: TypeScript
                - listitem [ref=e92]: Drizzle
                - listitem [ref=e93]: PostgreSQL
                - listitem [ref=e94]: Docker Compose
              - link "Lihat detail ↗" [ref=e96] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
          - article [ref=e97]:
            - 'link "Lihat detail: Proxmox Home Lab" [ref=e98] [cursor=pointer]':
              - /url: "#/projects/proxmox-home-lab"
              - generic [ref=e99]:
                - generic [ref=e100]: FIELD NOTE / 02
                - generic [aria-hidden] [ref=e101]: "02"
                - paragraph [ref=e102]: LAN / HOST PROXMOX
                - generic [ref=e103]: JARINGAN VM / REMOTE ACCESS
              - generic [aria-hidden] [ref=e104]: ↗
            - generic [ref=e105]:
              - paragraph [ref=e106]: /02 — Infrastructure
              - heading [level=3] [ref=e107]:
                - link "Proxmox Home Lab" [ref=e108] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
              - paragraph [ref=e109]: Lab VM Linux dengan bridge terpisah, NAT, firewall, dan akses jarak jauh.
              - paragraph [ref=e110]: Lab pribadi · isolasi belum terkonfirmasi
              - list "Stack" [ref=e111]:
                - listitem [ref=e112]: Proxmox
                - listitem [ref=e113]: Linux
                - listitem [ref=e114]: VM
                - listitem [ref=e115]: Bridge
                - listitem [ref=e116]: NAT
                - listitem [ref=e117]: Firewall
                - listitem [ref=e118]: Tailscale
              - link "Lihat detail ↗" [ref=e120] [cursor=pointer]:
                - /url: "#/projects/proxmox-home-lab"
          - article [ref=e121]:
            - 'link "Lihat detail: LMS Ujian Online" [ref=e122] [cursor=pointer]':
              - /url: "#/projects/lms-ujian-online"
              - generic [ref=e123]:
                - generic [ref=e124]: FIELD NOTE / 03
                - generic [aria-hidden] [ref=e125]: "03"
                - paragraph [ref=e126]: ADMIN / STUDENT
                - generic [ref=e127]: EXAMS / ESSAYS / GRADING
              - generic [aria-hidden] [ref=e128]: ↗
            - generic [ref=e129]:
              - paragraph [ref=e130]: /03 — Web App
              - heading [level=3] [ref=e131]:
                - link "LMS Ujian Online" [ref=e132] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
              - paragraph [ref=e133]: Ujian berbasis peran admin dan siswa, pilihan ganda, esai, batas waktu, serta grading.
              - paragraph [ref=e134]: Grading teruji · alur siswa parsial
              - list "Stack" [ref=e135]:
                - listitem [ref=e136]: Laravel
                - listitem [ref=e137]: PHP
                - listitem [ref=e138]: PostgreSQL
                - listitem [ref=e139]: Blade
                - listitem [ref=e140]: JavaScript
                - listitem [ref=e141]: Tailwind CSS
                - listitem [ref=e142]: Alpine.js
              - link "Lihat detail ↗" [ref=e144] [cursor=pointer]:
                - /url: "#/projects/lms-ujian-online"
        - link "Jelajahi semua proyek 05 proyek" [ref=e145] [cursor=pointer]:
          - /url: "#/projects"
          - generic [ref=e146]: Jelajahi semua proyek
          - generic [ref=e147]: 05 proyek ↗
      - generic [ref=e148]:
        - generic [ref=e150]:
          - paragraph [ref=e151]: ↳ Karya lainnya
          - heading "Karya lainnya" [level=2] [ref=e152]
        - generic [ref=e153]:
          - article [ref=e154]:
            - 'link "Lihat detail: Helpdesk Ticketing" [ref=e155] [cursor=pointer]':
              - /url: "#/projects/helpdesk-ticketing"
              - generic [ref=e156]:
                - generic [ref=e157]: FIELD NOTE / 04
                - generic [aria-hidden] [ref=e158]: "04"
                - paragraph [ref=e159]: TICKETS / ROLES
                - generic [ref=e160]: OUTBOX / TELEGRAM
              - generic [aria-hidden] [ref=e161]: ↗
            - generic [ref=e162]:
              - paragraph [ref=e163]: /04 — Web App
              - heading [level=3] [ref=e164]:
                - link "Helpdesk Ticketing" [ref=e165] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
              - paragraph [ref=e166]: Pengelolaan tiket berbasis peran dengan integrasi Telegram untuk tiket baru.
              - paragraph [ref=e167]: Browser teruji · Telegram mock
              - list "Stack" [ref=e168]:
                - listitem [ref=e169]: Flask
                - listitem [ref=e170]: Python
                - listitem [ref=e171]: MySQL
                - listitem [ref=e172]: JavaScript
                - listitem [ref=e173]: Telegram Bot API
              - link "Lihat detail ↗" [ref=e175] [cursor=pointer]:
                - /url: "#/projects/helpdesk-ticketing"
          - article [ref=e176]:
            - 'link "Lihat detail: Trading Analysis Dashboard" [ref=e177] [cursor=pointer]':
              - /url: "#/projects/trading-analysis-dashboard"
              - generic [ref=e178]:
                - generic [ref=e179]: FIELD NOTE / 05
                - generic [aria-hidden] [ref=e180]: "05"
                - paragraph [ref=e181]: IDX / US / GOLD
                - generic [ref=e182]: WATCHLIST / CHARTS / SCORING
              - generic [aria-hidden] [ref=e183]: ↗
            - generic [ref=e184]:
              - paragraph [ref=e185]: /05 — Web App
              - heading [level=3] [ref=e186]:
                - link "Trading Analysis Dashboard" [ref=e187] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
              - paragraph [ref=e188]: Watchlist IDX, AS, dan emas dengan chart historis, indikator teknikal, serta scoring.
              - paragraph [ref=e189]: Reminder support · dalam pengembangan
              - list "Stack" [ref=e190]:
                - listitem [ref=e191]: FastAPI
                - listitem [ref=e192]: Python
                - listitem [ref=e193]: JavaScript
                - listitem [ref=e194]: Tailwind CSS
                - listitem [ref=e195]: yfinance
                - listitem [ref=e196]: TA-Lib
              - link "Lihat detail ↗" [ref=e198] [cursor=pointer]:
                - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e199]:
        - generic [ref=e200]:
          - paragraph [ref=e201]: 02 / Tentang
          - heading "Dari aplikasi, ke server sendiri." [level=2] [ref=e202]
          - paragraph [ref=e203]: IKBAR RABBANI PURWANTOFull-Stack Developer · Linux & Self-Hosting
        - generic [ref=e204]:
          - paragraph [ref=e205]: Saya Ikbar Rabbani Purwanto, seorang IT Programmer dan mahasiswa S1 Manajemen Informatika. Saya membangun aplikasi web untuk pengelolaan layanan VPS, ujian online, dan ticketing.
          - generic [ref=e206]:
            - generic [ref=e207]: ↳ Linux & Self-Hosting
            - paragraph [ref=e208]: Saya mengelola lab Proxmox pribadi untuk deployment, pemisahan jaringan VM, dan akses jarak jauh. Minat utama saya adalah backend, otomasi, dan pengelolaan aplikasi di server Linux.
          - heading "Perangkat kerja" [level=3] [ref=e209]
          - generic [ref=e210]:
            - generic [ref=e211]:
              - generic [ref=e212]: "01"
              - heading "Backend & Database" [level=3] [ref=e213]
              - paragraph [ref=e214]: Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL
              - generic [ref=e215]:
                - generic [ref=e216]: Dipakai pada
                - link "VPS Manager ↗" [ref=e217] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e218] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Helpdesk Ticketing ↗" [ref=e219] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e220] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
            - generic [ref=e221]:
              - generic [ref=e222]: "02"
              - heading "Frontend" [level=3] [ref=e223]
              - paragraph [ref=e224]: JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS
              - generic [ref=e225]:
                - generic [ref=e226]: Dipakai pada
                - link "VPS Manager ↗" [ref=e227] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e228] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Chat APP ↗" [ref=e229] [cursor=pointer]:
                  - /url: "#/projects/chat-app"
              - paragraph [ref=e230]: Astro pada VPS Manager; React pada Chat APP di arsip. Next.js termasuk toolkit saya; proyek unggulan yang memakainya belum dicantumkan.
            - generic [ref=e231]:
              - generic [ref=e232]: "03"
              - heading "Infrastruktur" [level=3] [ref=e233]
              - paragraph [ref=e234]: Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale
              - generic [ref=e235]:
                - generic [ref=e236]: Dipakai pada
                - link "Proxmox Home Lab ↗" [ref=e237] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
                - link "VPS Manager ↗" [ref=e238] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
            - generic [ref=e239]:
              - generic [ref=e240]: "04"
              - heading "Otomasi & Integrasi" [level=3] [ref=e241]
              - paragraph [ref=e242]: Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi
              - generic [ref=e243]:
                - generic [ref=e244]: Dipakai pada
                - link "VPS Manager ↗" [ref=e245] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "Helpdesk Ticketing ↗" [ref=e246] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e247] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e248]:
        - paragraph [ref=e249]: ↳ Catatan belajar
        - generic [ref=e250]:
          - link "Basic Javascript Programming (tab baru)" [ref=e251] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/MEPJE400WX3V
            - text: Basic Javascript Programming
            - generic [aria-hidden] [ref=e252]: ↗
            - generic [ref=e253]: (tab baru)
          - link "Creating a backend app for beginners (tab baru)" [ref=e254] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/JLX1L4Y8NX72
            - text: Creating a backend app for beginners
            - generic [aria-hidden] [ref=e255]: ↗
            - generic [ref=e256]: (tab baru)
          - link "Basic Python for beginners (tab baru)" [ref=e257] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/81P27JWGNZOY
            - text: Basic Python for beginners
            - generic [aria-hidden] [ref=e258]: ↗
            - generic [ref=e259]: (tab baru)
          - generic [ref=e260]: Laravel & Nuxt.js
      - generic [ref=e261]:
        - paragraph [ref=e262]: 03 / Kontak
        - generic [ref=e263]:
          - heading "Punya ide? Mari kita bicarakan." [level=2] [ref=e264]
          - generic [ref=e265]:
            - paragraph [ref=e266]: Untuk pertanyaan, kolaborasi, atau sekadar menyapa. Mulai dari satu email.
            - link "Tulis email" [ref=e267] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
              - text: Tulis email
              - generic [aria-hidden] [ref=e268]: ↗
        - generic [ref=e269]:
          - generic [ref=e270]:
            - link "ikbar686@gmail.com" [ref=e271] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
            - button "Salin email" [ref=e272] [cursor=pointer]: Salin email ⧉
            - status [ref=e273]
          - generic [ref=e274]:
            - link "WhatsApp (tab baru)" [ref=e275] [cursor=pointer]:
              - /url: https://wa.me/6281413265114
              - text: WhatsApp
              - generic [aria-hidden] [ref=e276]: ↗
              - generic [ref=e277]: (tab baru)
            - link "+62 81413265114" [ref=e278] [cursor=pointer]:
              - /url: tel:+6281413265114
        - navigation "Tautan sosial" [ref=e279]:
          - link "GitHub (tab baru)" [ref=e280] [cursor=pointer]:
            - /url: https://github.com/d3sc
            - text: GitHub
            - generic [aria-hidden] [ref=e281]: ↗
            - generic [ref=e282]: (tab baru)
          - link "Instagram (tab baru)" [ref=e283] [cursor=pointer]:
            - /url: https://www.instagram.com/ikrabni_09/
            - text: Instagram
            - generic [aria-hidden] [ref=e284]: ↗
            - generic [ref=e285]: (tab baru)
          - link "LinkedIn (tab baru)" [ref=e286] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ikbar-rabbani-b93096285/
            - text: LinkedIn
            - generic [aria-hidden] [ref=e287]: ↗
            - generic [ref=e288]: (tab baru)
          - link "YouTube (tab baru)" [ref=e289] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e290]: ↗
            - generic [ref=e291]: (tab baru)
  - contentinfo [ref=e292]:
    - generic [ref=e293]: © 2026 Ikbar Rabbani Purwanto
    - link "↑ Beranda" [ref=e294] [cursor=pointer]:
      - /url: "#/"
```

# Test source

```ts
  1   | import type { Page } from "@playwright/test";
  2   | import { test, expect } from "./fixtures";
  3   | import AxeBuilder from "@axe-core/playwright";
  4   | import { projects, copy, categoryLabels, type Locale } from "../src/data";
  5   | async function start(
  6   |   page: Page,
  7   |   locale: Locale = "id",
  8   |   theme: "dark" | "light" = "dark",
  9   | ) {
  10  |   await page.addInitScript(
  11  |     ({ locale, theme }) => {
  12  |       localStorage.setItem("portfolio-locale", locale);
  13  |       localStorage.setItem("portfolio-theme", theme);
  14  |     },
  15  |     { locale, theme },
  16  |   );
  17  |   await page.goto("/");
  18  |   await expect(page.getByRole("tab").first()).toBeVisible();
  19  | }
  20  | async function noOverflow(page: Page) {
  21  |   expect(
  22  |     await page.evaluate(() =>
  23  |       Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
  24  |     ),
> 25  |   ).toBeLessThanOrEqual(page.viewportSize()!.width);
      |     ^ Error: expect(received).toBeLessThanOrEqual(expected)
  26  | }
  27  | async function axe(page: Page) {
  28  |   // This portfolio has no frames. The normal runPartial/finishRun pipeline
  29  |   // creates a second renderer, which exhausted this host's memory in the trace.
  30  |   // Guard the assumption so a future embedded frame cannot silently lose coverage.
  31  |   expect(
  32  |     page.frames(),
  33  |     "single-page audit requires a frame-free document",
  34  |   ).toHaveLength(1);
  35  |   const context = page.context();
  36  |   const pageCount = context.pages().length;
  37  |   await test.step(`WCAG audit: ${new URL(page.url()).hash || "home"}`, async () => {
  38  |     const result = await new AxeBuilder({ page })
  39  |       .setLegacyMode(true)
  40  |       .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
  41  |       .analyze();
  42  |     await test.info().attach(`axe-${new URL(page.url()).hash || "home"}`, {
  43  |       body: JSON.stringify(
  44  |         {
  45  |           url: page.url(),
  46  |           mode: "same-page axe.run",
  47  |           frameCount: page.frames().length,
  48  |           passedRules: result.passes.length,
  49  |           violations: result.violations,
  50  |           incomplete: result.incomplete.map((rule) => ({
  51  |             id: rule.id,
  52  |             impact: rule.impact,
  53  |           })),
  54  |         },
  55  |         null,
  56  |         2,
  57  |       ),
  58  |       contentType: "application/json",
  59  |     });
  60  |     expect(result.violations).toEqual([]);
  61  |     expect(
  62  |       context.pages(),
  63  |       "audit must not allocate an auxiliary page",
  64  |     ).toHaveLength(pageCount);
  65  |   });
  66  | }
  67  | async function navigate(page: Page, label: string) {
  68  |   if (page.viewportSize()!.width <= 800)
  69  |     await page.getByRole("button", { name: /^Menu/ }).click();
  70  |   await page
  71  |     .locator("#primary-nav")
  72  |     .getByRole("link", { name: label, exact: true })
  73  |     .click();
  74  | }
  75  | 
  76  | test("hero selection: click, keyboard, wrap, focus, links and no autoplay", async ({
  77  |   page,
  78  | }) => {
  79  |   await start(page);
  80  |   const tabs = page.getByRole("tab");
  81  |   await expect(tabs.first()).toHaveAttribute("aria-selected", "true");
  82  |   await expect(page.getByRole("tabpanel")).toContainText("VPS Manager");
  83  |   if (test.info().project.use.hasTouch) await tabs.nth(1).tap();
  84  |   else await tabs.nth(1).click();
  85  |   await expect(page.getByRole("tabpanel")).toContainText("Proxmox Home Lab");
  86  |   await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
  87  |     "href",
  88  |     "#/projects/proxmox-home-lab",
  89  |   );
  90  |   await page.keyboard.press("ArrowRight");
  91  |   await expect(tabs.nth(2)).toBeFocused();
  92  |   await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  93  |   await page.keyboard.press("ArrowRight");
  94  |   await expect(tabs.first()).toBeFocused();
  95  |   await page.keyboard.press("End");
  96  |   await expect(tabs.nth(2)).toBeFocused();
  97  |   await page.keyboard.press("Home");
  98  |   await expect(tabs.first()).toBeFocused();
  99  |   await page.keyboard.press("ArrowLeft");
  100 |   await expect(tabs.nth(2)).toBeFocused();
  101 |   await page.waitForTimeout(900);
  102 |   await expect(tabs.nth(2)).toHaveAttribute("aria-selected", "true");
  103 |   await page.getByRole("tabpanel").getByRole("link").click();
  104 |   await expect(page).toHaveURL(/lms-ujian-online$/);
  105 |   await expect(page.locator("main")).toBeFocused();
  106 |   await expect(page.getByRole("heading", { level: 1 })).toContainText(
  107 |     "LMS Ujian Online",
  108 |   );
  109 |   await noOverflow(page);
  110 | });
  111 | for (const locale of ["id", "en"] as const)
  112 |   for (const theme of ["dark", "light"] as const) {
  113 |     test(`${locale}/${theme}: home, archive, current details, accessibility`, async ({
  114 |       page,
  115 |     }) => {
  116 |       const t = copy[locale];
  117 |       await start(page, locale, theme);
  118 |       await expect(page.locator("html")).toHaveAttribute("lang", locale);
  119 |       await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
  120 |       await axe(page);
  121 |       await noOverflow(page);
  122 |       await navigate(page, t.work);
  123 |       await expect(page).toHaveURL(/#\/projects$/);
  124 |       await expect(page.locator(".project-card")).toHaveCount(12);
  125 |       await expect(page.locator("#primary-nav a[aria-current]")).toContainText(
```