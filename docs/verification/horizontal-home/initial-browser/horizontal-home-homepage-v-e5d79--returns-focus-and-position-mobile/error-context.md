# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: horizontal-home.test.ts >> homepage viewer opens exact second screenshot and returns focus and position
- Location: e2e/horizontal-home.test.ts:171:1

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 2
Received:   3
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
  - main [ref=e13]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - paragraph [ref=e17]: "> Full-Stack Developer · Linux & Self-Hosting"
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
      - region "Proyek terpilih" [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e59]:
              - paragraph [ref=e60]: 01 / Proyek terpilih
              - heading "Dibuat untuk digunakan." [level=2] [ref=e61]
            - link "Lewati galeri" [ref=e62] [cursor=pointer]:
              - /url: "#project-index"
              - text: Lewati galeri ↘
          - list [ref=e64]:
            - listitem "VPS Manager 01 / OVERVIEW Dashboard layanan Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak." [ref=e65]:
              - button "VPS Manager — Dashboard layanan" [ref=e66] [cursor=pointer]:
                - img "Dashboard layanan" [ref=e67]
                - generic [aria-hidden] [ref=e68]: Perbesar ↗
              - generic [ref=e69]:
                - generic [ref=e70]:
                  - strong [ref=e71]: VPS Manager
                  - generic [ref=e72]: 01 / OVERVIEW
                - generic [ref=e73]: Dashboard layanan
                - paragraph [ref=e74]: Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak.
            - 'listitem "VPS Manager 02 / DETAIL Detail ringkasan Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan." [ref=e75]':
              - button "VPS Manager — Detail ringkasan" [active] [ref=e76] [cursor=pointer]:
                - img "Detail ringkasan" [ref=e77]
                - generic [aria-hidden] [ref=e78]: Perbesar ↗
              - generic [ref=e79]:
                - generic [ref=e80]:
                  - strong [ref=e81]: VPS Manager
                  - generic [ref=e82]: 02 / DETAIL
                - generic [ref=e83]: Detail ringkasan
                - paragraph [ref=e84]: "Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan."
            - listitem "Proxmox Home Lab 03 / OVERVIEW Konsol administrasi Konsol shell Proxmox. Identitas host, akun, VM, dan riwayat tugas ditutup permanen. Ini bukan dashboard metrik atau bukti isolasi jaringan." [ref=e85]:
              - button "Proxmox Home Lab — Konsol administrasi" [ref=e86] [cursor=pointer]:
                - img "Konsol administrasi" [ref=e87]
                - generic [aria-hidden] [ref=e88]: Perbesar ↗
              - generic [ref=e89]:
                - generic [ref=e90]:
                  - strong [ref=e91]: Proxmox Home Lab
                  - generic [ref=e92]: 03 / OVERVIEW
                - generic [ref=e93]: Konsol administrasi
                - paragraph [ref=e94]: Konsol shell Proxmox. Identitas host, akun, VM, dan riwayat tugas ditutup permanen. Ini bukan dashboard metrik atau bukti isolasi jaringan.
            - 'listitem "LMS Ujian Online 04 / OVERVIEW Dashboard admin Dashboard admin: ringkasan ujian, akses pengelolaan, dan daftar ujian berjudul testing. Tidak menampilkan jawaban atau identitas siswa." [ref=e95]':
              - button "LMS Ujian Online — Dashboard admin" [ref=e96] [cursor=pointer]:
                - img "Dashboard admin" [ref=e97]
                - generic [aria-hidden] [ref=e98]: Perbesar ↗
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - strong [ref=e101]: LMS Ujian Online
                  - generic [ref=e102]: 04 / OVERVIEW
                - generic [ref=e103]: Dashboard admin
                - paragraph [ref=e104]: "Dashboard admin: ringkasan ujian, akses pengelolaan, dan daftar ujian berjudul testing. Tidak menampilkan jawaban atau identitas siswa."
            - 'listitem "LMS Ujian Online 05 / DETAIL Detail pengelolaan Potongan screenshot yang sama: pintasan pengelolaan ujian, pengguna, dan hasil serta panel monitoring. Bukan bukti alur siswa atau grading." [ref=e105]':
              - button "LMS Ujian Online — Detail pengelolaan" [ref=e106] [cursor=pointer]:
                - img "Detail pengelolaan" [ref=e107]
                - generic [aria-hidden] [ref=e108]: Perbesar ↗
              - generic [ref=e109]:
                - generic [ref=e110]:
                  - strong [ref=e111]: LMS Ujian Online
                  - generic [ref=e112]: 05 / DETAIL
                - generic [ref=e113]: Detail pengelolaan
                - paragraph [ref=e114]: "Potongan screenshot yang sama: pintasan pengelolaan ujian, pengguna, dan hasil serta panel monitoring. Bukan bukti alur siswa atau grading."
            - listitem "Helpdesk Ticketing 06 / OVERVIEW Antrean tiket Halaman antrean tiket dengan ringkasan status dan filter. Isi tiket serta data pelapor tidak terlihat dalam screenshot ini." [ref=e115]:
              - button "Helpdesk Ticketing — Antrean tiket" [ref=e116] [cursor=pointer]:
                - img "Antrean tiket" [ref=e117]
                - generic [aria-hidden] [ref=e118]: Perbesar ↗
              - generic [ref=e119]:
                - generic [ref=e120]:
                  - strong [ref=e121]: Helpdesk Ticketing
                  - generic [ref=e122]: 06 / OVERVIEW
                - generic [ref=e123]: Antrean tiket
                - paragraph [ref=e124]: Halaman antrean tiket dengan ringkasan status dan filter. Isi tiket serta data pelapor tidak terlihat dalam screenshot ini.
            - 'listitem "Helpdesk Ticketing 07 / DETAIL Detail filter Potongan screenshot yang sama: filter berdasarkan judul, status, prioritas, kategori, dan agen. Layar detail tiket dan notifikasi Telegram belum tersedia." [ref=e125]':
              - button "Helpdesk Ticketing — Detail filter" [ref=e126] [cursor=pointer]:
                - img "Detail filter" [ref=e127]
                - generic [aria-hidden] [ref=e128]: Perbesar ↗
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - strong [ref=e131]: Helpdesk Ticketing
                  - generic [ref=e132]: 07 / DETAIL
                - generic [ref=e133]: Detail filter
                - paragraph [ref=e134]: "Potongan screenshot yang sama: filter berdasarkan judul, status, prioritas, kategori, dan agen. Layar detail tiket dan notifikasi Telegram belum tersedia."
          - generic [ref=e135]:
            - generic [ref=e136]: Geser untuk menjelajah →
            - generic [ref=e137]:
              - button "Screenshot sebelumnya" [ref=e138] [cursor=pointer]: ←
              - generic [ref=e139]: 2 / 7
              - button "Screenshot berikutnya" [ref=e140] [cursor=pointer]: →
      - generic [ref=e141]:
        - generic [ref=e142]:
          - generic [ref=e143]:
            - paragraph [ref=e144]: ↳ Proyek pilihan
            - heading "Proyek" [level=2] [ref=e145]
          - paragraph [ref=e146]: Aplikasi operasional, backend, dan infrastruktur yang saya kelola sendiri.
        - generic [ref=e147]:
          - article [ref=e148]:
            - generic [ref=e149]: "01"
            - heading [level=3] [ref=e150]:
              - link "VPS Manager" [ref=e151] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: VPS Manager ↗
            - generic [ref=e152]:
              - paragraph [ref=e153]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - paragraph [ref=e154]: Riwayat teruji · notifikasi mock
            - list "Stack" [ref=e155]:
              - listitem [ref=e156]: Bun
              - listitem [ref=e157]: Elysia
              - listitem [ref=e158]: Astro
              - listitem [ref=e159]: TypeScript
              - listitem [ref=e160]: Drizzle
              - listitem [ref=e161]: PostgreSQL
              - listitem [ref=e162]: Docker Compose
          - article [ref=e163]:
            - generic [ref=e164]: "02"
            - heading [level=3] [ref=e165]:
              - link "Proxmox Home Lab" [ref=e166] [cursor=pointer]:
                - /url: "#/projects/proxmox-home-lab"
                - text: Proxmox Home Lab ↗
            - generic [ref=e167]:
              - paragraph [ref=e168]: Lab VM Linux dengan bridge terpisah, NAT, firewall, dan akses jarak jauh.
              - paragraph [ref=e169]: Lab pribadi · isolasi belum terkonfirmasi
            - list "Stack" [ref=e170]:
              - listitem [ref=e171]: Proxmox
              - listitem [ref=e172]: Linux
              - listitem [ref=e173]: VM
              - listitem [ref=e174]: Bridge
              - listitem [ref=e175]: NAT
              - listitem [ref=e176]: Firewall
              - listitem [ref=e177]: Tailscale
          - article [ref=e178]:
            - generic [ref=e179]: "03"
            - heading [level=3] [ref=e180]:
              - link "LMS Ujian Online" [ref=e181] [cursor=pointer]:
                - /url: "#/projects/lms-ujian-online"
                - text: LMS Ujian Online ↗
            - generic [ref=e182]:
              - paragraph [ref=e183]: Ujian berbasis peran admin dan siswa, pilihan ganda, esai, batas waktu, serta grading.
              - paragraph [ref=e184]: Grading teruji · alur siswa parsial
            - list "Stack" [ref=e185]:
              - listitem [ref=e186]: Laravel
              - listitem [ref=e187]: PHP
              - listitem [ref=e188]: PostgreSQL
              - listitem [ref=e189]: Blade
              - listitem [ref=e190]: JavaScript
              - listitem [ref=e191]: Tailwind CSS
              - listitem [ref=e192]: Alpine.js
        - generic [ref=e193]:
          - heading "Karya lainnya" [level=3] [ref=e194]
          - article [ref=e195]:
            - generic [ref=e196]: "04"
            - heading [level=3] [ref=e197]:
              - link "Helpdesk Ticketing" [ref=e198] [cursor=pointer]:
                - /url: "#/projects/helpdesk-ticketing"
                - text: Helpdesk Ticketing ↗
            - generic [ref=e199]:
              - paragraph [ref=e200]: Pengelolaan tiket berbasis peran dengan integrasi Telegram untuk tiket baru.
              - paragraph [ref=e201]: Browser teruji · Telegram mock
            - list "Stack" [ref=e202]:
              - listitem [ref=e203]: Flask
              - listitem [ref=e204]: Python
              - listitem [ref=e205]: MySQL
              - listitem [ref=e206]: JavaScript
              - listitem [ref=e207]: Telegram Bot API
          - article [ref=e208]:
            - generic [ref=e209]: "05"
            - heading [level=3] [ref=e210]:
              - link "Trading Analysis Dashboard" [ref=e211] [cursor=pointer]:
                - /url: "#/projects/trading-analysis-dashboard"
                - text: Trading Analysis Dashboard ↗
            - generic [ref=e212]:
              - paragraph [ref=e213]: Watchlist IDX, AS, dan emas dengan chart historis, indikator teknikal, serta scoring.
              - paragraph [ref=e214]: Reminder support · dalam pengembangan
              - text: Screenshot belum tersedia
            - list "Stack" [ref=e215]:
              - listitem [ref=e216]: FastAPI
              - listitem [ref=e217]: Python
              - listitem [ref=e218]: JavaScript
              - listitem [ref=e219]: Tailwind CSS
              - listitem [ref=e220]: yfinance
              - listitem [ref=e221]: TA-Lib
        - link "Jelajahi semua proyek 05 proyek ↗" [ref=e222] [cursor=pointer]:
          - /url: "#/projects"
          - generic [ref=e223]: Jelajahi semua proyek
          - generic [ref=e224]: 05 proyek ↗
      - generic [ref=e225]:
        - generic [ref=e226]:
          - paragraph [ref=e227]: 02 / Tentang
          - heading "Dari aplikasi, ke server sendiri." [level=2] [ref=e228]
          - paragraph [ref=e229]: IKBAR RABBANI PURWANTOFull-Stack Developer · Linux & Self-Hosting
        - generic [ref=e230]:
          - paragraph [ref=e231]: Saya Ikbar Rabbani Purwanto, seorang IT Programmer dan mahasiswa S1 Manajemen Informatika. Saya membangun aplikasi web untuk pengelolaan layanan VPS, ujian online, dan ticketing.
          - generic [ref=e232]:
            - generic [ref=e233]: ↳ Linux & Self-Hosting
            - paragraph [ref=e234]: Saya mengelola lab Proxmox pribadi untuk deployment, pemisahan jaringan VM, dan akses jarak jauh. Minat utama saya adalah backend, otomasi, dan pengelolaan aplikasi di server Linux.
          - heading "Perangkat kerja" [level=3] [ref=e235]
          - generic [ref=e236]:
            - generic [ref=e237]:
              - generic [ref=e238]: "01"
              - heading "Backend & Database" [level=3] [ref=e239]
              - paragraph [ref=e240]: Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL
              - generic [ref=e241]:
                - generic [ref=e242]: Dipakai pada
                - link "VPS Manager ↗" [ref=e243] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e244] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Helpdesk Ticketing ↗" [ref=e245] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e246] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
            - generic [ref=e247]:
              - generic [ref=e248]: "02"
              - heading "Frontend" [level=3] [ref=e249]
              - paragraph [ref=e250]: JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS
              - generic [ref=e251]:
                - generic [ref=e252]: Dipakai pada
                - link "VPS Manager ↗" [ref=e253] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e254] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Chat APP ↗" [ref=e255] [cursor=pointer]:
                  - /url: "#/projects/chat-app"
              - paragraph [ref=e256]: Astro pada VPS Manager; React pada Chat APP di arsip. Next.js termasuk toolkit saya; proyek unggulan yang memakainya belum dicantumkan.
            - generic [ref=e257]:
              - generic [ref=e258]: "03"
              - heading "Infrastruktur" [level=3] [ref=e259]
              - paragraph [ref=e260]: Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale
              - generic [ref=e261]:
                - generic [ref=e262]: Dipakai pada
                - link "Proxmox Home Lab ↗" [ref=e263] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
                - link "VPS Manager ↗" [ref=e264] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
            - generic [ref=e265]:
              - generic [ref=e266]: "04"
              - heading "Otomasi & Integrasi" [level=3] [ref=e267]
              - paragraph [ref=e268]: Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi
              - generic [ref=e269]:
                - generic [ref=e270]: Dipakai pada
                - link "VPS Manager ↗" [ref=e271] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "Helpdesk Ticketing ↗" [ref=e272] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e273] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e274]:
        - paragraph [ref=e275]: ↳ Catatan belajar
        - generic [ref=e276]:
          - link "Basic Javascript Programming (tab baru)" [ref=e277] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/MEPJE400WX3V
            - text: Basic Javascript Programming
            - generic [aria-hidden] [ref=e278]: ↗
            - generic [ref=e279]: (tab baru)
          - link "Creating a backend app for beginners (tab baru)" [ref=e280] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/JLX1L4Y8NX72
            - text: Creating a backend app for beginners
            - generic [aria-hidden] [ref=e281]: ↗
            - generic [ref=e282]: (tab baru)
          - link "Basic Python for beginners (tab baru)" [ref=e283] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/81P27JWGNZOY
            - text: Basic Python for beginners
            - generic [aria-hidden] [ref=e284]: ↗
            - generic [ref=e285]: (tab baru)
          - generic [ref=e286]: Laravel & Nuxt.js
      - generic [ref=e287]:
        - paragraph [ref=e288]: 03 / Kontak
        - generic [ref=e289]:
          - heading "Punya ide? Mari kita bicarakan." [level=2] [ref=e290]
          - generic [ref=e291]:
            - paragraph [ref=e292]: Untuk pertanyaan, kolaborasi, atau sekadar menyapa. Mulai dari satu email.
            - link "Tulis email" [ref=e293] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
              - text: Tulis email
              - generic [aria-hidden] [ref=e294]: ↗
        - generic [ref=e295]:
          - generic [ref=e296]:
            - link "ikbar686@gmail.com" [ref=e297] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
            - button "Salin email" [ref=e298] [cursor=pointer]: Salin email ⧉
            - status [ref=e299]
          - generic [ref=e300]:
            - link "WhatsApp (tab baru)" [ref=e301] [cursor=pointer]:
              - /url: https://wa.me/6281413265114
              - text: WhatsApp
              - generic [aria-hidden] [ref=e302]: ↗
              - generic [ref=e303]: (tab baru)
            - link "+62 81413265114" [ref=e304] [cursor=pointer]:
              - /url: tel:+6281413265114
        - navigation "Tautan sosial" [ref=e305]:
          - link "GitHub (tab baru)" [ref=e306] [cursor=pointer]:
            - /url: https://github.com/d3sc
            - text: GitHub
            - generic [aria-hidden] [ref=e307]: ↗
            - generic [ref=e308]: (tab baru)
          - link "Instagram (tab baru)" [ref=e309] [cursor=pointer]:
            - /url: https://www.instagram.com/ikrabni_09/
            - text: Instagram
            - generic [aria-hidden] [ref=e310]: ↗
            - generic [ref=e311]: (tab baru)
          - link "LinkedIn (tab baru)" [ref=e312] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ikbar-rabbani-b93096285/
            - text: LinkedIn
            - generic [aria-hidden] [ref=e313]: ↗
            - generic [ref=e314]: (tab baru)
          - link "YouTube (tab baru)" [ref=e315] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e316]: ↗
            - generic [ref=e317]: (tab baru)
  - contentinfo [ref=e318]:
    - generic [ref=e319]: © 2026 Ikbar Rabbani Purwanto
    - link "↑ Beranda" [ref=e320] [cursor=pointer]:
      - /url: "#/"
```

# Test source

```ts
  122 |       .poll(async () => (await page.locator("#project-index").boundingBox())!.y)
  123 |       .toBeLessThan(page.viewportSize()!.height);
  124 |     expect((await geometry(page)).stickyTop).toBeLessThan(initial.header - 50);
  125 |     await page.setViewportSize({ width: 1280, height: 800 });
  126 |     await expect
  127 |       .poll(async () => {
  128 |         const g = await geometry(page);
  129 |         return Math.abs(g.sectionHeight - g.travel - g.viewportHeight);
  130 |       })
  131 |       .toBeLessThan(2);
  132 |   } else {
  133 |     expect(initial.mode).toBe("manual");
  134 |     await page
  135 |       .getByRole("button", { name: "Screenshot berikutnya", exact: true })
  136 |       .click();
  137 |     await expect
  138 |       .poll(async () => (await geometry(page)).left)
  139 |       .toBeGreaterThan(120);
  140 |     await expect(page.locator(".rail-arrows")).toContainText("2 / 7");
  141 |     await page
  142 |       .getByRole("button", { name: "Screenshot sebelumnya", exact: true })
  143 |       .click();
  144 |     await expect.poll(async () => (await geometry(page)).left).toBeLessThan(2);
  145 |     if (info.project.use.hasTouch) {
  146 |       await page.locator(".rail-image").nth(1).focus();
  147 |       const before = (await geometry(page)).left;
  148 |       await touch(page, -135, 0);
  149 |       await expect
  150 |         .poll(async () => (await geometry(page)).left)
  151 |         .toBeGreaterThan(before + 80);
  152 |       await page.locator(".rail-image").nth(1).focus();
  153 |       const y = await page.evaluate(() => scrollY);
  154 |       await touch(page, 0, -140);
  155 |       await expect
  156 |         .poll(() => page.evaluate(() => scrollY))
  157 |         .toBeGreaterThan(y + 30);
  158 |     }
  159 |     await page.screenshot({
  160 |       path: `docs/verification/horizontal-home/gallery-${info.project.name}.png`,
  161 |       scale: "css",
  162 |     });
  163 |   }
  164 |   await overflow(page);
  165 |   await page.locator(".rail-skip").click();
  166 |   await expect(page.locator("#project-index")).toBeFocused();
  167 |   await expect(page.locator(".home-project-row")).toHaveCount(5);
  168 |   await overflow(page);
  169 | });
  170 | 
  171 | test("homepage viewer opens exact second screenshot and returns focus and position", async ({
  172 |   page,
  173 | }, info) => {
  174 |   await page.goto("/");
  175 |   await page.evaluate(() => document.fonts.ready);
  176 |   const opener = page.locator(".rail-image").nth(1);
  177 |   await opener.focus();
  178 |   await expect(opener).toBeFocused();
  179 |   await page.waitForTimeout(120);
  180 |   const before = await geometry(page);
  181 |   if (info.project.use.hasTouch) await opener.tap();
  182 |   else await opener.click();
  183 |   const dialog = page.getByRole("dialog");
  184 |   await expect(dialog).toBeVisible();
  185 |   await expect(dialog.locator("h2")).toContainText("VPS Manager 2 / 2");
  186 |   await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
  187 |     vpsShots[1].caption,
  188 |   );
  189 |   await expect(dialog.locator(".lightbox-image img")).toHaveAttribute(
  190 |     "src",
  191 |     vpsShots[1].src,
  192 |   );
  193 |   await expect(
  194 |     dialog.getByRole("link", { name: /Catatan proyek/ }),
  195 |   ).toHaveAttribute("href", "#/projects/vps-manager");
  196 |   await page.keyboard.press("ArrowRight");
  197 |   await expect(dialog.locator("h2")).toContainText("1 / 2");
  198 |   await expect(dialog.locator(".lightbox-bottom p")).toHaveText(
  199 |     vpsShots[0].caption,
  200 |   );
  201 |   await dialog
  202 |     .getByRole("button", { name: "Ukuran asli", exact: true })
  203 |     .click();
  204 |   expect(
  205 |     await dialog
  206 |       .locator(".lightbox-image img")
  207 |       .evaluate((e: HTMLImageElement) =>
  208 |         Math.abs(e.getBoundingClientRect().width - e.naturalWidth),
  209 |       ),
  210 |   ).toBeLessThan(1);
  211 |   await dialog.getByRole("button", { name: "Sesuaikan layar" }).click();
  212 |   await page.screenshot({
  213 |     path: `docs/verification/horizontal-home/viewer-${info.project.name}.png`,
  214 |     scale: "css",
  215 |   });
  216 |   if (info.project.use.hasTouch)
  217 |     await dialog.getByRole("button", { name: "Tutup lightbox" }).tap();
  218 |   else await page.keyboard.press("Escape");
  219 |   await expect(dialog).not.toBeVisible();
  220 |   await expect(opener).toBeFocused();
  221 |   const after = await geometry(page);
> 222 |   expect(Math.abs(after.y - before.y)).toBeLessThan(2);
      |                                        ^ Error: expect(received).toBeLessThan(expected)
  223 |   expect(Math.abs(after.left - before.left)).toBeLessThan(2);
  224 |   // Continue keyboard-only through an off-screen entry, then activate without a pointer.
  225 |   await page.keyboard.press("Tab");
  226 |   await expect(page.locator(".rail-image").nth(2)).toBeFocused();
  227 |   await page.keyboard.press("Enter");
  228 |   await expect(dialog).toBeVisible();
  229 |   await expect(dialog.locator("h2")).toContainText("Proxmox Home Lab 1 / 1");
  230 |   await expect(
  231 |     dialog.getByRole("button", { name: "Gambar berikutnya" }),
  232 |   ).toHaveCount(0);
  233 |   await page.keyboard.press("Escape");
  234 |   await overflow(page);
  235 | });
  236 | 
  237 | test("homepage static reduced motion, both themes/locales, image dimensions and index routes", async ({
  238 |   page,
  239 | }, info) => {
  240 |   await page.goto("/");
  241 |   await page.emulateMedia({ reducedMotion: "reduce" });
  242 |   await expect(page.locator(".scroll-gallery")).toHaveAttribute(
  243 |     "data-mode",
  244 |     "static",
  245 |   );
  246 |   const g = await geometry(page);
  247 |   expect(g.sectionHeight).toBeLessThan(g.travel + g.viewportHeight + 3);
  248 |   await expect(page.locator(".rail-viewport")).toHaveCSS("position", "static");
  249 |   await expect(page.locator(".rail-track")).toHaveCSS("transform", "none");
  250 |   const before = await page.locator(".rail-image").first().boundingBox();
  251 |   await page.locator(".rail-track img").evaluateAll(async (images) => {
  252 |     await Promise.all(
  253 |       images.map((i) => {
  254 |         i.loading = "eager";
  255 |         return i.decode();
  256 |       }),
  257 |     );
  258 |   });
  259 |   const after = await page.locator(".rail-image").first().boundingBox();
  260 |   expect(Math.abs(before!.height - after!.height)).toBeLessThan(1);
  261 |   const broken = await page
  262 |     .locator(".rail-track img")
  263 |     .evaluateAll((imgs) =>
  264 |       imgs.filter((i) => !i.naturalWidth || !i.complete).map((i) => i.src),
  265 |     );
  266 |   expect(broken).toEqual([]);
  267 |   for (const image of await page.locator(".rail-image").all()) {
  268 |     await image.focus();
  269 |     await expect(image).toBeInViewport();
  270 |   }
  271 |   await overflow(page);
  272 |   await page.getByRole("button", { name: "Ganti ke tema terang" }).click();
  273 |   await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  274 |   expect(
  275 |     (
  276 |       await page
  277 |         .locator("html")
  278 |         .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
  279 |     ).trim(),
  280 |   ).toBe("#225e3b");
  281 |   await page.getByRole("button", { name: "Ganti bahasa" }).click();
  282 |   await expect(page.locator(".hero-copy")).toContainText(
  283 |     "I build web applications",
  284 |   );
  285 |   await expect(page.locator(".rail-skip")).toHaveText("Skip gallery ↘");
  286 |   await expect(page.locator("#other-projects")).toContainText(
  287 |     "Trading Analysis Dashboard",
  288 |   );
  289 |   await page.evaluate(() => scrollTo({ top: 0, behavior: "instant" }));
  290 |   await page.screenshot({
  291 |     path: `docs/verification/horizontal-home/reduced-light-en-${info.project.name}.png`,
  292 |     fullPage: true,
  293 |     scale: "css",
  294 |     animations: "disabled",
  295 |   });
  296 |   await page.locator(".home-project-row h3 a").first().click();
  297 |   await expect(page).toHaveURL(/#\/projects\/vps-manager$/);
  298 |   await expect(page.locator(".project-gallery")).toBeVisible();
  299 |   // The new homepage palette must not leak into the existing case-study page.
  300 |   expect(
  301 |     (
  302 |       await page
  303 |         .locator("html")
  304 |         .evaluate((e) => getComputedStyle(e).getPropertyValue("--accent"))
  305 |     ).trim(),
  306 |   ).toBe("#345600");
  307 |   await overflow(page);
  308 | });
  309 | 
```