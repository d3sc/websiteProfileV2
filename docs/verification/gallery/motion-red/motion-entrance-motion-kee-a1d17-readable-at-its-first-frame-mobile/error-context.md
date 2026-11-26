# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: motion.test.ts >> entrance motion keeps text readable at its first frame
- Location: e2e/motion.test.ts:3:1

# Error details

```
Error: expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 0.9
Received:    0.5
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
              - /url: "#/#selected-projects"
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
            - img "VPS Manager — Dashboard layanan" [ref=e36]
            - generic [ref=e37]:
              - generic [ref=e38]: Aplikasi web / Bun
              - heading "VPS Manager" [level=2] [ref=e39]
              - paragraph [ref=e40]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - link "Lihat detail" [ref=e41] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: Lihat detail
                - generic [aria-hidden] [ref=e42]: ↗
          - tablist "Pilih proyek" [ref=e43]:
            - tab "01 VPS Manager" [selected] [ref=e44] [cursor=pointer]:
              - generic [ref=e45]: "01"
              - generic [ref=e46]: VPS Manager
              - generic [aria-hidden] [ref=e47]: ↗
            - tab "02 Proxmox Home Lab" [ref=e48] [cursor=pointer]:
              - generic [ref=e49]: "02"
              - generic [ref=e50]: Proxmox Home Lab
              - generic [aria-hidden] [ref=e51]: ↗
            - tab "03 LMS Ujian Online" [ref=e52] [cursor=pointer]:
              - generic [ref=e53]: "03"
              - generic [ref=e54]: LMS Ujian Online
              - generic [aria-hidden] [ref=e55]: ↗
      - generic [ref=e57]:
        - generic [ref=e58]: DEVELOPER FIELD NOTES
        - generic [ref=e59]: Learning → Evolving → Innovating
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - paragraph [ref=e63]: 01 / Proyek pilihan
            - heading "Dibuat untuk digunakan." [level=2] [ref=e64]: Dibuat untukdigunakan.
          - paragraph [ref=e65]: Aplikasi operasional, backend, dan infrastruktur yang saya kelola sendiri.
        - generic [ref=e66]:
          - article [ref=e67]:
            - 'link "Lihat detail: VPS Manager" [ref=e68] [cursor=pointer]':
              - /url: "#/projects/vps-manager"
              - img "VPS Manager — Dashboard layanan" [ref=e69]
              - generic [ref=e70]: Preview screenshot / 02
              - generic [aria-hidden] [ref=e71]: ↗
            - generic [ref=e72]:
              - paragraph [ref=e73]: /01 — Web App
              - heading [level=3] [ref=e74]:
                - link "VPS Manager" [ref=e75] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
              - paragraph [ref=e76]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - paragraph [ref=e77]: Riwayat teruji · notifikasi mock
              - paragraph [ref=e78]:
                - strong [ref=e79]: Yang saya kerjakan
                - text: Saya membangun alur pengelolaan layanan dan pembayaran. Di halaman riwayat, saya menambahkan penjaga urutan request agar respons, error, dan status loading dari request lama tidak menimpa data terbaru.
              - list "Stack" [ref=e80]:
                - listitem [ref=e81]: Bun
                - listitem [ref=e82]: Elysia
                - listitem [ref=e83]: Astro
                - listitem [ref=e84]: TypeScript
                - listitem [ref=e85]: Drizzle
                - listitem [ref=e86]: PostgreSQL
                - listitem [ref=e87]: Docker Compose
              - link "Buka galeri ↗" [ref=e89] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
          - article [ref=e90]:
            - 'link "Lihat detail: Proxmox Home Lab" [ref=e91] [cursor=pointer]':
              - /url: "#/projects/proxmox-home-lab"
              - img "Proxmox Home Lab — Konsol administrasi" [ref=e92]
              - generic [ref=e93]: Preview screenshot / 01
              - generic [aria-hidden] [ref=e94]: ↗
            - generic [ref=e95]:
              - paragraph [ref=e96]: /02 — Infrastructure
              - heading [level=3] [ref=e97]:
                - link "Proxmox Home Lab" [ref=e98] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
              - paragraph [ref=e99]: Lab VM Linux dengan bridge terpisah, NAT, firewall, dan akses jarak jauh.
              - paragraph [ref=e100]: Lab pribadi · isolasi belum terkonfirmasi
              - list "Stack" [ref=e101]:
                - listitem [ref=e102]: Proxmox
                - listitem [ref=e103]: Linux
                - listitem [ref=e104]: VM
                - listitem [ref=e105]: Bridge
                - listitem [ref=e106]: NAT
                - listitem [ref=e107]: Firewall
                - listitem [ref=e108]: Tailscale
              - link "Buka galeri ↗" [ref=e110] [cursor=pointer]:
                - /url: "#/projects/proxmox-home-lab"
          - article [ref=e111]:
            - 'link "Lihat detail: LMS Ujian Online" [ref=e112] [cursor=pointer]':
              - /url: "#/projects/lms-ujian-online"
              - img "LMS Ujian Online — Dashboard admin" [ref=e113]
              - generic [ref=e114]: Preview screenshot / 02
              - generic [aria-hidden] [ref=e115]: ↗
            - generic [ref=e116]:
              - paragraph [ref=e117]: /03 — Web App
              - heading [level=3] [ref=e118]:
                - link "LMS Ujian Online" [ref=e119] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
              - paragraph [ref=e120]: Ujian berbasis peran admin dan siswa, pilihan ganda, esai, batas waktu, serta grading.
              - paragraph [ref=e121]: Grading teruji · alur siswa parsial
              - list "Stack" [ref=e122]:
                - listitem [ref=e123]: Laravel
                - listitem [ref=e124]: PHP
                - listitem [ref=e125]: PostgreSQL
                - listitem [ref=e126]: Blade
                - listitem [ref=e127]: JavaScript
                - listitem [ref=e128]: Tailwind CSS
                - listitem [ref=e129]: Alpine.js
              - link "Buka galeri ↗" [ref=e131] [cursor=pointer]:
                - /url: "#/projects/lms-ujian-online"
        - link "Jelajahi semua proyek 05 proyek" [ref=e132] [cursor=pointer]:
          - /url: "#/projects"
          - generic [ref=e133]: Jelajahi semua proyek
          - generic [ref=e134]: 05 proyek ↗
      - generic [ref=e135]:
        - generic [ref=e137]:
          - paragraph [ref=e138]: ↳ Karya lainnya
          - heading "Karya lainnya" [level=2] [ref=e139]
        - generic [ref=e140]:
          - article [ref=e141]:
            - 'link "Lihat detail: Helpdesk Ticketing" [ref=e142] [cursor=pointer]':
              - /url: "#/projects/helpdesk-ticketing"
              - img "Helpdesk Ticketing — Antrean tiket" [ref=e143]
              - generic [ref=e144]: Preview screenshot / 02
              - generic [aria-hidden] [ref=e145]: ↗
            - generic [ref=e146]:
              - paragraph [ref=e147]: /04 — Web App
              - heading [level=3] [ref=e148]:
                - link "Helpdesk Ticketing" [ref=e149] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
              - paragraph [ref=e150]: Pengelolaan tiket berbasis peran dengan integrasi Telegram untuk tiket baru.
              - paragraph [ref=e151]: Browser teruji · Telegram mock
              - list "Stack" [ref=e152]:
                - listitem [ref=e153]: Flask
                - listitem [ref=e154]: Python
                - listitem [ref=e155]: MySQL
                - listitem [ref=e156]: JavaScript
                - listitem [ref=e157]: Telegram Bot API
              - link "Buka galeri ↗" [ref=e159] [cursor=pointer]:
                - /url: "#/projects/helpdesk-ticketing"
          - article [ref=e160]:
            - 'link "Lihat detail: Trading Analysis Dashboard" [ref=e161] [cursor=pointer]':
              - /url: "#/projects/trading-analysis-dashboard"
              - generic [ref=e162]:
                - generic [ref=e163]: FIELD NOTE / 05
                - generic [aria-hidden] [ref=e164]: "05"
                - paragraph [ref=e165]: IDX / US / GOLD
                - generic [ref=e166]: WATCHLIST / CHARTS / SCORING
              - generic [aria-hidden] [ref=e167]: ↗
            - generic [ref=e168]:
              - paragraph [ref=e169]: /05 — Web App
              - heading [level=3] [ref=e170]:
                - link "Trading Analysis Dashboard" [ref=e171] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
              - paragraph [ref=e172]: Watchlist IDX, AS, dan emas dengan chart historis, indikator teknikal, serta scoring.
              - paragraph [ref=e173]: Reminder support · dalam pengembangan
              - list "Stack" [ref=e174]:
                - listitem [ref=e175]: FastAPI
                - listitem [ref=e176]: Python
                - listitem [ref=e177]: JavaScript
                - listitem [ref=e178]: Tailwind CSS
                - listitem [ref=e179]: yfinance
                - listitem [ref=e180]: TA-Lib
              - link "Lihat detail ↗" [ref=e182] [cursor=pointer]:
                - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e183]:
        - generic [ref=e184]:
          - paragraph [ref=e185]: 02 / Tentang
          - heading "Dari aplikasi, ke server sendiri." [level=2] [ref=e186]
          - paragraph [ref=e187]: IKBAR RABBANI PURWANTOFull-Stack Developer · Linux & Self-Hosting
        - generic [ref=e188]:
          - paragraph [ref=e189]: Saya Ikbar Rabbani Purwanto, seorang IT Programmer dan mahasiswa S1 Manajemen Informatika. Saya membangun aplikasi web untuk pengelolaan layanan VPS, ujian online, dan ticketing.
          - generic [ref=e190]:
            - generic [ref=e191]: ↳ Linux & Self-Hosting
            - paragraph [ref=e192]: Saya mengelola lab Proxmox pribadi untuk deployment, pemisahan jaringan VM, dan akses jarak jauh. Minat utama saya adalah backend, otomasi, dan pengelolaan aplikasi di server Linux.
          - heading "Perangkat kerja" [level=3] [ref=e193]
          - generic [ref=e194]:
            - generic [ref=e195]:
              - generic [ref=e196]: "01"
              - heading "Backend & Database" [level=3] [ref=e197]
              - paragraph [ref=e198]: Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL
              - generic [ref=e199]:
                - generic [ref=e200]: Dipakai pada
                - link "VPS Manager ↗" [ref=e201] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e202] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Helpdesk Ticketing ↗" [ref=e203] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e204] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
            - generic [ref=e205]:
              - generic [ref=e206]: "02"
              - heading "Frontend" [level=3] [ref=e207]
              - paragraph [ref=e208]: JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS
              - generic [ref=e209]:
                - generic [ref=e210]: Dipakai pada
                - link "VPS Manager ↗" [ref=e211] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e212] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Chat APP ↗" [ref=e213] [cursor=pointer]:
                  - /url: "#/projects/chat-app"
              - paragraph [ref=e214]: Astro pada VPS Manager; React pada Chat APP di arsip. Next.js termasuk toolkit saya; proyek unggulan yang memakainya belum dicantumkan.
            - generic [ref=e215]:
              - generic [ref=e216]: "03"
              - heading "Infrastruktur" [level=3] [ref=e217]
              - paragraph [ref=e218]: Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale
              - generic [ref=e219]:
                - generic [ref=e220]: Dipakai pada
                - link "Proxmox Home Lab ↗" [ref=e221] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
                - link "VPS Manager ↗" [ref=e222] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
            - generic [ref=e223]:
              - generic [ref=e224]: "04"
              - heading "Otomasi & Integrasi" [level=3] [ref=e225]
              - paragraph [ref=e226]: Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi
              - generic [ref=e227]:
                - generic [ref=e228]: Dipakai pada
                - link "VPS Manager ↗" [ref=e229] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "Helpdesk Ticketing ↗" [ref=e230] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e231] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e232]:
        - paragraph [ref=e233]: ↳ Catatan belajar
        - generic [ref=e234]:
          - link "Basic Javascript Programming (tab baru)" [ref=e235] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/MEPJE400WX3V
            - text: Basic Javascript Programming
            - generic [aria-hidden] [ref=e236]: ↗
            - generic [ref=e237]: (tab baru)
          - link "Creating a backend app for beginners (tab baru)" [ref=e238] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/JLX1L4Y8NX72
            - text: Creating a backend app for beginners
            - generic [aria-hidden] [ref=e239]: ↗
            - generic [ref=e240]: (tab baru)
          - link "Basic Python for beginners (tab baru)" [ref=e241] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/81P27JWGNZOY
            - text: Basic Python for beginners
            - generic [aria-hidden] [ref=e242]: ↗
            - generic [ref=e243]: (tab baru)
          - generic [ref=e244]: Laravel & Nuxt.js
      - generic [ref=e245]:
        - paragraph [ref=e246]: 03 / Kontak
        - generic [ref=e247]:
          - heading "Punya ide? Mari kita bicarakan." [level=2] [ref=e248]
          - generic [ref=e249]:
            - paragraph [ref=e250]: Untuk pertanyaan, kolaborasi, atau sekadar menyapa. Mulai dari satu email.
            - link "Tulis email" [ref=e251] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
              - text: Tulis email
              - generic [aria-hidden] [ref=e252]: ↗
        - generic [ref=e253]:
          - generic [ref=e254]:
            - link "ikbar686@gmail.com" [ref=e255] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
            - button "Salin email" [ref=e256] [cursor=pointer]: Salin email ⧉
            - status [ref=e257]
          - generic [ref=e258]:
            - link "WhatsApp (tab baru)" [ref=e259] [cursor=pointer]:
              - /url: https://wa.me/6281413265114
              - text: WhatsApp
              - generic [aria-hidden] [ref=e260]: ↗
              - generic [ref=e261]: (tab baru)
            - link "+62 81413265114" [ref=e262] [cursor=pointer]:
              - /url: tel:+6281413265114
        - navigation "Tautan sosial" [ref=e263]:
          - link "GitHub (tab baru)" [ref=e264] [cursor=pointer]:
            - /url: https://github.com/d3sc
            - text: GitHub
            - generic [aria-hidden] [ref=e265]: ↗
            - generic [ref=e266]: (tab baru)
          - link "Instagram (tab baru)" [ref=e267] [cursor=pointer]:
            - /url: https://www.instagram.com/ikrabni_09/
            - text: Instagram
            - generic [aria-hidden] [ref=e268]: ↗
            - generic [ref=e269]: (tab baru)
          - link "LinkedIn (tab baru)" [ref=e270] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ikbar-rabbani-b93096285/
            - text: LinkedIn
            - generic [aria-hidden] [ref=e271]: ↗
            - generic [ref=e272]: (tab baru)
          - link "YouTube (tab baru)" [ref=e273] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e274]: ↗
            - generic [ref=e275]: (tab baru)
  - contentinfo [ref=e276]:
    - generic [ref=e277]: © 2026 Ikbar Rabbani Purwanto
    - link "↑ Beranda" [ref=e278] [cursor=pointer]:
      - /url: "#/"
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures";
  2  | 
  3  | test("entrance motion keeps text readable at its first frame", async ({page}) => {
  4  |   await page.goto("/");
  5  |   const firstFrame = await page.locator(".hero-identity").evaluate(element => {
  6  |     const animation=element.getAnimations()[0];
  7  |     if(animation) { animation.pause();animation.currentTime=0; }
  8  |     return Number(getComputedStyle(element).opacity);
  9  |   });
> 10 |   expect(firstFrame).toBeGreaterThanOrEqual(0.9);
     |                      ^ Error: expect(received).toBeGreaterThanOrEqual(expected)
  11 |   await page.locator("#selected-projects").scrollIntoViewIfNeeded();
  12 |   await expect(page.locator("#selected-projects")).toHaveClass(/revealed/);
  13 |   const reveal = await page.locator("#selected-projects").evaluate(element => {
  14 |     const animation=element.getAnimations()[0];
  15 |     if(animation) {animation.pause();animation.currentTime=0;}
  16 |     return Number(getComputedStyle(element).opacity);
  17 |   });
  18 |   expect(reveal).toBeGreaterThanOrEqual(0.9);
  19 | });
  20 | 
```