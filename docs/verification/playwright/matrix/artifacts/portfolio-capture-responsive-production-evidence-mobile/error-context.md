# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: portfolio.test.ts >> capture responsive production evidence
- Location: e2e/portfolio.test.ts:287:1

# Error details

```
TimeoutError: page.screenshot: Timeout 60000ms exceeded.
Call log:
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded

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
  204 |     "https://wa.me/6281413265114",
  205 |   );
  206 |   await expect(page.locator('a[href^="tel:"]')).toHaveAttribute(
  207 |     "href",
  208 |     "tel:+" + "6281413265114",
  209 |   );
  210 |   await page.evaluate(() =>
  211 |     Object.defineProperty(navigator, "clipboard", {
  212 |       configurable: true,
  213 |       value: { writeText: async () => undefined },
  214 |     }),
  215 |   );
  216 |   await page.getByRole("button", { name: "Salin email" }).click();
  217 |   await expect(page.locator(".copy-status")).toHaveText("Email tersalin");
  218 |   await page.evaluate(() =>
  219 |     Object.defineProperty(navigator, "clipboard", {
  220 |       configurable: true,
  221 |       value: {
  222 |         writeText: async () => {
  223 |           throw Error("denied");
  224 |         },
  225 |       },
  226 |     }),
  227 |   );
  228 |   await page.getByRole("button", { name: "Salin email" }).click();
  229 |   await expect(page.locator(".copy-status")).toContainText("manual");
  230 |   await navigate(page, "Tentang");
  231 |   await expect(page.locator("#about")).toBeFocused();
  232 |   await page.reload();
  233 |   await expect(page.locator("#about")).toBeFocused();
  234 |   await noOverflow(page);
  235 | });
  236 | test("preferences persist, reduced motion and observer/storage failure remain usable", async ({
  237 |   page,
  238 | }) => {
  239 |   await page.goto("/");
  240 |   await page.getByRole("button", { name: "Ganti bahasa" }).click();
  241 |   await page.getByRole("button", { name: "Switch to light theme" }).click();
  242 |   await page.reload();
  243 |   await expect(page.locator("html")).toHaveAttribute("lang", "en");
  244 |   await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  245 |   await page.emulateMedia({ reducedMotion: "reduce" });
  246 |   await expect(page.locator("html")).toHaveCSS("scroll-behavior", "auto");
  247 |   await expect(page.locator(".hero-identity")).toHaveCSS(
  248 |     "animation-name",
  249 |     "none",
  250 |   );
  251 |   await expect(page.locator(".hero-panel").first()).toHaveCSS(
  252 |     "transition-duration",
  253 |     "0s",
  254 |   );
  255 |   await page.addInitScript(() => {
  256 |     Object.defineProperty(window, "IntersectionObserver", { value: undefined });
  257 |     Object.defineProperty(window, "localStorage", {
  258 |       get() {
  259 |         throw new DOMException("denied", "SecurityError");
  260 |       },
  261 |     });
  262 |   });
  263 |   await page.reload();
  264 |   await expect(page.getByRole("tab").first()).toBeVisible();
  265 |   await expect(page.locator("#selected-projects")).toHaveCSS("opacity", "1");
  266 |   await page.getByRole("tab").nth(1).click();
  267 |   await expect(page.getByRole("tabpanel")).toContainText("Proxmox Home Lab");
  268 |   await noOverflow(page);
  269 | });
  270 | test("unknown, malformed and legacy sample URLs do not crash", async ({
  271 |   page,
  272 | }) => {
  273 |   await start(page);
  274 |   for (const path of ["missing", "projects/%E0%A4%A", "projects/unknown"]) {
  275 |     await page.goto(`/#/${path}`);
  276 |     await expect(page.getByRole("heading", { level: 1 })).toHaveText(
  277 |       "Halaman tidak ditemukan",
  278 |     );
  279 |   }
  280 |   for (const slug of ["sample-notes", "sample-api", "sample-tooling"]) {
  281 |     await page.goto(`/#/projects/${slug}`);
  282 |     await expect(page.locator("main")).toContainText(
  283 |       "Ini bukan proyek portfolio terverifikasi",
  284 |     );
  285 |   }
  286 | });
  287 | test("capture responsive production evidence", async ({ page }, info) => {
  288 |   await start(page);
  289 |   await page.emulateMedia({ reducedMotion: "reduce" });
  290 |   for (const [name, path] of [
  291 |     ["home", "/"],
  292 |     ["projects", "/projects"],
  293 |     ["detail", "/projects/vps-manager"],
  294 |   ]) {
  295 |     await page.goto(`/#${path}`);
  296 |     await page.evaluate(async () => {
  297 |       await document.fonts.ready;
  298 |       for (const img of document.images) {
  299 |         img.loading = "eager";
  300 |         await img.decode().catch(() => {});
  301 |       }
  302 |     });
  303 |     await noOverflow(page);
> 304 |     await page.screenshot({
      |                ^ TimeoutError: page.screenshot: Timeout 60000ms exceeded.
  305 |       path: `docs/screenshots/field-notes/positioning/${name}-${info.project.name}.png`,
  306 |       fullPage: true,
  307 |       animations: "disabled",
  308 |       timeout: 60000,
  309 |     });
  310 |   }
  311 | });
  312 | 
```