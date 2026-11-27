# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: horizontal-home.test.ts >> horizontal homepage: native wheel pin/reverse/release or swipe track and arrows
- Location: e2e/horizontal-home.test.ts:70:1

# Error details

```
Error: expect(received).toBeLessThan(expected)

Expected: < 3
Received:   14.853124999999999

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
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
      - navigation "Navigasi utama" [ref=e9]:
        - link "Beranda" [ref=e10] [cursor=pointer]:
          - /url: "#/"
          - generic [aria-hidden] [ref=e11]: "01"
          - text: Beranda
        - link "Proyek" [ref=e12] [cursor=pointer]:
          - /url: "#/projects"
          - generic [aria-hidden] [ref=e13]: "02"
          - text: Proyek
        - link "Tentang" [ref=e14] [cursor=pointer]:
          - /url: "#/#about"
          - generic [aria-hidden] [ref=e15]: "03"
          - text: Tentang
        - link "Kontak" [ref=e16] [cursor=pointer]:
          - /url: "#/#contact"
          - generic [aria-hidden] [ref=e17]: "04"
          - text: Kontak
      - generic [ref=e18]:
        - button "Ganti bahasa" [ref=e19] [cursor=pointer]: ID
        - button "Ganti ke tema terang" [ref=e20] [cursor=pointer]: ☀
  - main [ref=e21]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - paragraph [ref=e25]: "> Full-Stack Developer · Linux & Self-Hosting"
          - heading "Ikbar Rabbani Purwanto." [level=1] [ref=e26]: IkbarRabbaniPurwanto.
          - paragraph [ref=e27]: "Saya membangun aplikasi web untuk kebutuhan operasional: layanan VPS, ujian online, dan ticketing. Fokus saya backend, otomasi, dan aplikasi di server Linux."
          - generic [ref=e28]:
            - link "Lihat Proyek" [ref=e29] [cursor=pointer]:
              - /url: "#/#selected-projects"
              - text: Lihat Proyek
              - generic [aria-hidden] [ref=e30]: ↗
            - link "Hubungi Saya" [ref=e31] [cursor=pointer]:
              - /url: "#/#contact"
              - text: Hubungi Saya
              - generic [aria-hidden] [ref=e32]: ↘
          - generic [ref=e33]:
            - generic [ref=e34]: 01 — PERSONAL PORTFOLIO
            - generic [ref=e35]: BACKEND / LINUX / AUTOMATION
        - generic [ref=e36]:
          - generic [ref=e37]:
            - generic [ref=e38]: Proyek pilihan
            - generic [ref=e40]: INDEX / 01
          - tabpanel "01 VPS Manager" [ref=e42]:
            - img "VPS Manager — Dashboard layanan" [ref=e44]
            - generic [ref=e45]:
              - generic [ref=e46]: Aplikasi web / Bun
              - heading "VPS Manager" [level=2] [ref=e47]
              - paragraph [ref=e48]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - link "Lihat detail" [ref=e49] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: Lihat detail
                - generic [aria-hidden] [ref=e50]: ↗
          - tablist "Pilih proyek" [ref=e51]:
            - tab "01 VPS Manager" [selected] [ref=e52] [cursor=pointer]:
              - generic [ref=e53]: "01"
              - generic [ref=e54]: VPS Manager
              - generic [aria-hidden] [ref=e55]: ↗
            - tab "02 Proxmox Home Lab" [ref=e56] [cursor=pointer]:
              - generic [ref=e57]: "02"
              - generic [ref=e58]: Proxmox Home Lab
              - generic [aria-hidden] [ref=e59]: ↗
            - tab "03 LMS Ujian Online" [ref=e60] [cursor=pointer]:
              - generic [ref=e61]: "03"
              - generic [ref=e62]: LMS Ujian Online
              - generic [aria-hidden] [ref=e63]: ↗
      - region "Proyek terpilih" [active] [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e67]:
              - paragraph [ref=e68]: 01 / Proyek terpilih
              - heading "Dibuat untuk digunakan." [level=2] [ref=e69]
            - link "Lewati galeri" [ref=e70] [cursor=pointer]:
              - /url: "#project-index"
              - text: Lewati galeri ↘
          - list [ref=e72]:
            - listitem "VPS Manager 01 / OVERVIEW Dashboard layanan Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak." [ref=e73]:
              - button "VPS Manager — Dashboard layanan" [ref=e74] [cursor=pointer]:
                - img "Dashboard layanan" [ref=e75]
                - generic [aria-hidden] [ref=e76]: Perbesar ↗
              - generic [ref=e77]:
                - generic [ref=e78]:
                  - strong [ref=e79]: VPS Manager
                  - generic [ref=e80]: 01 / OVERVIEW
                - generic [ref=e81]: Dashboard layanan
                - paragraph [ref=e82]: Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak.
            - 'listitem "VPS Manager 02 / DETAIL Detail ringkasan Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan." [ref=e83]':
              - button "VPS Manager — Detail ringkasan" [ref=e84] [cursor=pointer]:
                - img "Detail ringkasan" [ref=e85]
                - generic [aria-hidden] [ref=e86]: Perbesar ↗
              - generic [ref=e87]:
                - generic [ref=e88]:
                  - strong [ref=e89]: VPS Manager
                  - generic [ref=e90]: 02 / DETAIL
                - generic [ref=e91]: Detail ringkasan
                - paragraph [ref=e92]: "Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan."
            - listitem "Proxmox Home Lab 03 / OVERVIEW Konsol administrasi Konsol shell Proxmox. Identitas host, akun, VM, dan riwayat tugas ditutup permanen. Ini bukan dashboard metrik atau bukti isolasi jaringan." [ref=e93]:
              - button "Proxmox Home Lab — Konsol administrasi" [ref=e94] [cursor=pointer]:
                - img "Konsol administrasi" [ref=e95]
                - generic [aria-hidden] [ref=e96]: Perbesar ↗
              - generic [ref=e97]:
                - generic [ref=e98]:
                  - strong [ref=e99]: Proxmox Home Lab
                  - generic [ref=e100]: 03 / OVERVIEW
                - generic [ref=e101]: Konsol administrasi
                - paragraph [ref=e102]: Konsol shell Proxmox. Identitas host, akun, VM, dan riwayat tugas ditutup permanen. Ini bukan dashboard metrik atau bukti isolasi jaringan.
            - 'listitem "LMS Ujian Online 04 / OVERVIEW Dashboard admin Dashboard admin: ringkasan ujian, akses pengelolaan, dan daftar ujian berjudul testing. Tidak menampilkan jawaban atau identitas siswa." [ref=e103]':
              - button "LMS Ujian Online — Dashboard admin" [ref=e104] [cursor=pointer]:
                - img "Dashboard admin" [ref=e105]
                - generic [aria-hidden] [ref=e106]: Perbesar ↗
              - generic [ref=e107]:
                - generic [ref=e108]:
                  - strong [ref=e109]: LMS Ujian Online
                  - generic [ref=e110]: 04 / OVERVIEW
                - generic [ref=e111]: Dashboard admin
                - paragraph [ref=e112]: "Dashboard admin: ringkasan ujian, akses pengelolaan, dan daftar ujian berjudul testing. Tidak menampilkan jawaban atau identitas siswa."
            - 'listitem "LMS Ujian Online 05 / DETAIL Detail pengelolaan Potongan screenshot yang sama: pintasan pengelolaan ujian, pengguna, dan hasil serta panel monitoring. Bukan bukti alur siswa atau grading." [ref=e113]':
              - button "LMS Ujian Online — Detail pengelolaan" [ref=e114] [cursor=pointer]:
                - img "Detail pengelolaan" [ref=e115]
                - generic [aria-hidden] [ref=e116]: Perbesar ↗
              - generic [ref=e117]:
                - generic [ref=e118]:
                  - strong [ref=e119]: LMS Ujian Online
                  - generic [ref=e120]: 05 / DETAIL
                - generic [ref=e121]: Detail pengelolaan
                - paragraph [ref=e122]: "Potongan screenshot yang sama: pintasan pengelolaan ujian, pengguna, dan hasil serta panel monitoring. Bukan bukti alur siswa atau grading."
            - listitem "Helpdesk Ticketing 06 / OVERVIEW Antrean tiket Halaman antrean tiket dengan ringkasan status dan filter. Isi tiket serta data pelapor tidak terlihat dalam screenshot ini." [ref=e123]:
              - button "Helpdesk Ticketing — Antrean tiket" [ref=e124] [cursor=pointer]:
                - img "Antrean tiket" [ref=e125]
                - generic [aria-hidden] [ref=e126]: Perbesar ↗
              - generic [ref=e127]:
                - generic [ref=e128]:
                  - strong [ref=e129]: Helpdesk Ticketing
                  - generic [ref=e130]: 06 / OVERVIEW
                - generic [ref=e131]: Antrean tiket
                - paragraph [ref=e132]: Halaman antrean tiket dengan ringkasan status dan filter. Isi tiket serta data pelapor tidak terlihat dalam screenshot ini.
            - 'listitem "Helpdesk Ticketing 07 / DETAIL Detail filter Potongan screenshot yang sama: filter berdasarkan judul, status, prioritas, kategori, dan agen. Layar detail tiket dan notifikasi Telegram belum tersedia." [ref=e133]':
              - button "Helpdesk Ticketing — Detail filter" [ref=e134] [cursor=pointer]:
                - img "Detail filter" [ref=e135]
                - generic [aria-hidden] [ref=e136]: Perbesar ↗
              - generic [ref=e137]:
                - generic [ref=e138]:
                  - strong [ref=e139]: Helpdesk Ticketing
                  - generic [ref=e140]: 07 / DETAIL
                - generic [ref=e141]: Detail filter
                - paragraph [ref=e142]: "Potongan screenshot yang sama: filter berdasarkan judul, status, prioritas, kategori, dan agen. Layar detail tiket dan notifikasi Telegram belum tersedia."
          - generic [ref=e143]:
            - generic [ref=e144]: Gulir untuk menjelajah →
            - generic [ref=e145]: 06 / 07
      - generic [ref=e146]:
        - generic [ref=e147]:
          - generic [ref=e148]:
            - paragraph [ref=e149]: ↳ Proyek pilihan
            - heading "Proyek" [level=2] [ref=e150]
          - paragraph [ref=e151]: Aplikasi operasional, backend, dan infrastruktur yang saya kelola sendiri.
        - generic [ref=e152]:
          - article [ref=e153]:
            - generic [ref=e154]: "01"
            - heading [level=3] [ref=e155]:
              - link "VPS Manager" [ref=e156] [cursor=pointer]:
                - /url: "#/projects/vps-manager"
                - text: VPS Manager ↗
            - generic [ref=e157]:
              - paragraph [ref=e158]: Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.
              - paragraph [ref=e159]: Riwayat teruji · notifikasi mock
            - list "Stack" [ref=e160]:
              - listitem [ref=e161]: Bun
              - listitem [ref=e162]: Elysia
              - listitem [ref=e163]: Astro
              - listitem [ref=e164]: TypeScript
              - listitem [ref=e165]: Drizzle
              - listitem [ref=e166]: PostgreSQL
              - listitem [ref=e167]: Docker Compose
          - article [ref=e168]:
            - generic [ref=e169]: "02"
            - heading [level=3] [ref=e170]:
              - link "Proxmox Home Lab" [ref=e171] [cursor=pointer]:
                - /url: "#/projects/proxmox-home-lab"
                - text: Proxmox Home Lab ↗
            - generic [ref=e172]:
              - paragraph [ref=e173]: Lab VM Linux dengan bridge terpisah, NAT, firewall, dan akses jarak jauh.
              - paragraph [ref=e174]: Lab pribadi · isolasi belum terkonfirmasi
            - list "Stack" [ref=e175]:
              - listitem [ref=e176]: Proxmox
              - listitem [ref=e177]: Linux
              - listitem [ref=e178]: VM
              - listitem [ref=e179]: Bridge
              - listitem [ref=e180]: NAT
              - listitem [ref=e181]: Firewall
              - listitem [ref=e182]: Tailscale
          - article [ref=e183]:
            - generic [ref=e184]: "03"
            - heading [level=3] [ref=e185]:
              - link "LMS Ujian Online" [ref=e186] [cursor=pointer]:
                - /url: "#/projects/lms-ujian-online"
                - text: LMS Ujian Online ↗
            - generic [ref=e187]:
              - paragraph [ref=e188]: Ujian berbasis peran admin dan siswa, pilihan ganda, esai, batas waktu, serta grading.
              - paragraph [ref=e189]: Grading teruji · alur siswa parsial
            - list "Stack" [ref=e190]:
              - listitem [ref=e191]: Laravel
              - listitem [ref=e192]: PHP
              - listitem [ref=e193]: PostgreSQL
              - listitem [ref=e194]: Blade
              - listitem [ref=e195]: JavaScript
              - listitem [ref=e196]: Tailwind CSS
              - listitem [ref=e197]: Alpine.js
        - generic [ref=e198]:
          - heading "Karya lainnya" [level=3] [ref=e199]
          - article [ref=e200]:
            - generic [ref=e201]: "04"
            - heading [level=3] [ref=e202]:
              - link "Helpdesk Ticketing" [ref=e203] [cursor=pointer]:
                - /url: "#/projects/helpdesk-ticketing"
                - text: Helpdesk Ticketing ↗
            - generic [ref=e204]:
              - paragraph [ref=e205]: Pengelolaan tiket berbasis peran dengan integrasi Telegram untuk tiket baru.
              - paragraph [ref=e206]: Browser teruji · Telegram mock
            - list "Stack" [ref=e207]:
              - listitem [ref=e208]: Flask
              - listitem [ref=e209]: Python
              - listitem [ref=e210]: MySQL
              - listitem [ref=e211]: JavaScript
              - listitem [ref=e212]: Telegram Bot API
          - article [ref=e213]:
            - generic [ref=e214]: "05"
            - heading [level=3] [ref=e215]:
              - link "Trading Analysis Dashboard" [ref=e216] [cursor=pointer]:
                - /url: "#/projects/trading-analysis-dashboard"
                - text: Trading Analysis Dashboard ↗
            - generic [ref=e217]:
              - paragraph [ref=e218]: Watchlist IDX, AS, dan emas dengan chart historis, indikator teknikal, serta scoring.
              - paragraph [ref=e219]: Reminder support · dalam pengembangan
              - text: Screenshot belum tersedia
            - list "Stack" [ref=e220]:
              - listitem [ref=e221]: FastAPI
              - listitem [ref=e222]: Python
              - listitem [ref=e223]: JavaScript
              - listitem [ref=e224]: Tailwind CSS
              - listitem [ref=e225]: yfinance
              - listitem [ref=e226]: TA-Lib
        - link "Jelajahi semua proyek 05 proyek ↗" [ref=e227] [cursor=pointer]:
          - /url: "#/projects"
          - generic [ref=e228]: Jelajahi semua proyek
          - generic [ref=e229]: 05 proyek ↗
      - generic [ref=e230]:
        - generic [ref=e231]:
          - paragraph [ref=e232]: 02 / Tentang
          - heading "Dari aplikasi, ke server sendiri." [level=2] [ref=e233]
          - paragraph [ref=e234]: IKBAR RABBANI PURWANTOFull-Stack Developer · Linux & Self-Hosting
        - generic [ref=e235]:
          - paragraph [ref=e236]: Saya Ikbar Rabbani Purwanto, seorang IT Programmer dan mahasiswa S1 Manajemen Informatika. Saya membangun aplikasi web untuk pengelolaan layanan VPS, ujian online, dan ticketing.
          - generic [ref=e237]:
            - generic [ref=e238]: ↳ Linux & Self-Hosting
            - paragraph [ref=e239]: Saya mengelola lab Proxmox pribadi untuk deployment, pemisahan jaringan VM, dan akses jarak jauh. Minat utama saya adalah backend, otomasi, dan pengelolaan aplikasi di server Linux.
          - heading "Perangkat kerja" [level=3] [ref=e240]
          - generic [ref=e241]:
            - generic [ref=e242]:
              - generic [ref=e243]: "01"
              - heading "Backend & Database" [level=3] [ref=e244]
              - paragraph [ref=e245]: Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL
              - generic [ref=e246]:
                - generic [ref=e247]: Dipakai pada
                - link "VPS Manager ↗" [ref=e248] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e249] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Helpdesk Ticketing ↗" [ref=e250] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e251] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
            - generic [ref=e252]:
              - generic [ref=e253]: "02"
              - heading "Frontend" [level=3] [ref=e254]
              - paragraph [ref=e255]: JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS
              - generic [ref=e256]:
                - generic [ref=e257]: Dipakai pada
                - link "VPS Manager ↗" [ref=e258] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "LMS Ujian Online ↗" [ref=e259] [cursor=pointer]:
                  - /url: "#/projects/lms-ujian-online"
                - link "Chat APP ↗" [ref=e260] [cursor=pointer]:
                  - /url: "#/projects/chat-app"
              - paragraph [ref=e261]: Astro pada VPS Manager; React pada Chat APP di arsip. Next.js termasuk toolkit saya; proyek unggulan yang memakainya belum dicantumkan.
            - generic [ref=e262]:
              - generic [ref=e263]: "03"
              - heading "Infrastruktur" [level=3] [ref=e264]
              - paragraph [ref=e265]: Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale
              - generic [ref=e266]:
                - generic [ref=e267]: Dipakai pada
                - link "Proxmox Home Lab ↗" [ref=e268] [cursor=pointer]:
                  - /url: "#/projects/proxmox-home-lab"
                - link "VPS Manager ↗" [ref=e269] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
            - generic [ref=e270]:
              - generic [ref=e271]: "04"
              - heading "Otomasi & Integrasi" [level=3] [ref=e272]
              - paragraph [ref=e273]: Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi
              - generic [ref=e274]:
                - generic [ref=e275]: Dipakai pada
                - link "VPS Manager ↗" [ref=e276] [cursor=pointer]:
                  - /url: "#/projects/vps-manager"
                - link "Helpdesk Ticketing ↗" [ref=e277] [cursor=pointer]:
                  - /url: "#/projects/helpdesk-ticketing"
                - link "Trading Analysis Dashboard ↗" [ref=e278] [cursor=pointer]:
                  - /url: "#/projects/trading-analysis-dashboard"
      - generic [ref=e279]:
        - paragraph [ref=e280]: ↳ Catatan belajar
        - generic [ref=e281]:
          - link "Basic Javascript Programming (tab baru)" [ref=e282] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/MEPJE400WX3V
            - text: Basic Javascript Programming
            - generic [aria-hidden] [ref=e283]: ↗
            - generic [ref=e284]: (tab baru)
          - link "Creating a backend app for beginners (tab baru)" [ref=e285] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/JLX1L4Y8NX72
            - text: Creating a backend app for beginners
            - generic [aria-hidden] [ref=e286]: ↗
            - generic [ref=e287]: (tab baru)
          - link "Basic Python for beginners (tab baru)" [ref=e288] [cursor=pointer]:
            - /url: https://www.dicoding.com/certificates/81P27JWGNZOY
            - text: Basic Python for beginners
            - generic [aria-hidden] [ref=e289]: ↗
            - generic [ref=e290]: (tab baru)
          - generic [ref=e291]: Laravel & Nuxt.js
      - generic [ref=e292]:
        - paragraph [ref=e293]: 03 / Kontak
        - generic [ref=e294]:
          - heading "Punya ide? Mari kita bicarakan." [level=2] [ref=e295]
          - generic [ref=e296]:
            - paragraph [ref=e297]: Untuk pertanyaan, kolaborasi, atau sekadar menyapa. Mulai dari satu email.
            - link "Tulis email" [ref=e298] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
              - text: Tulis email
              - generic [aria-hidden] [ref=e299]: ↗
        - generic [ref=e300]:
          - generic [ref=e301]:
            - link "ikbar686@gmail.com" [ref=e302] [cursor=pointer]:
              - /url: mailto:ikbar686@gmail.com
            - button "Salin email" [ref=e303] [cursor=pointer]: Salin email ⧉
            - status [ref=e304]
          - generic [ref=e305]:
            - link "WhatsApp (tab baru)" [ref=e306] [cursor=pointer]:
              - /url: https://wa.me/6281413265114
              - text: WhatsApp
              - generic [aria-hidden] [ref=e307]: ↗
              - generic [ref=e308]: (tab baru)
            - link "+62 81413265114" [ref=e309] [cursor=pointer]:
              - /url: tel:+6281413265114
        - navigation "Tautan sosial" [ref=e310]:
          - link "GitHub (tab baru)" [ref=e311] [cursor=pointer]:
            - /url: https://github.com/d3sc
            - text: GitHub
            - generic [aria-hidden] [ref=e312]: ↗
            - generic [ref=e313]: (tab baru)
          - link "Instagram (tab baru)" [ref=e314] [cursor=pointer]:
            - /url: https://www.instagram.com/ikrabni_09/
            - text: Instagram
            - generic [aria-hidden] [ref=e315]: ↗
            - generic [ref=e316]: (tab baru)
          - link "LinkedIn (tab baru)" [ref=e317] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/ikbar-rabbani-b93096285/
            - text: LinkedIn
            - generic [aria-hidden] [ref=e318]: ↗
            - generic [ref=e319]: (tab baru)
          - link "YouTube (tab baru)" [ref=e320] [cursor=pointer]:
            - /url: https://www.youtube.com/watch?v=9pyZO3N_ltE
            - text: YouTube
            - generic [aria-hidden] [ref=e321]: ↗
            - generic [ref=e322]: (tab baru)
  - contentinfo [ref=e323]:
    - generic [ref=e324]: © 2026 Ikbar Rabbani Purwanto
    - generic [ref=e325]: Belajar. Berkembang. Membuat.
    - link "↑ Beranda" [ref=e326] [cursor=pointer]:
      - /url: "#/"
```

# Test source

```ts
  19  |       stickyTop: viewport.getBoundingClientRect().top,
  20  |       travel: track.scrollWidth - windowEl.clientWidth,
  21  |       sectionHeight: root.offsetHeight,
  22  |       viewportHeight: viewport.offsetHeight,
  23  |       x: track.getBoundingClientRect().left,
  24  |       y: scrollY,
  25  |       left: windowEl.scrollLeft,
  26  |       first: track.children[0].getBoundingClientRect().left,
  27  |       last: track.lastElementChild!.getBoundingClientRect().right,
  28  |       width: document.documentElement.clientWidth,
  29  |     };
  30  |   });
  31  | }
  32  | async function overflow(page: Page) {
  33  |   expect(
  34  |     await page.evaluate(
  35  |       () =>
  36  |         document.documentElement.scrollWidth <=
  37  |         document.documentElement.clientWidth + 1,
  38  |     ),
  39  |   ).toBe(true);
  40  | }
  41  | async function touch(page: Page, dx: number, dy: number) {
  42  |   const box = (await page.locator(".rail-image").nth(1).boundingBox())!;
  43  |   const x = Math.max(
  44  |       35,
  45  |       Math.min(page.viewportSize()!.width - 35, box.x + box.width * 0.5),
  46  |     ),
  47  |     y = Math.max(
  48  |       140,
  49  |       Math.min(page.viewportSize()!.height - 100, box.y + box.height * 0.5),
  50  |     );
  51  |   const client = await page.context().newCDPSession(page);
  52  |   await client.send("Input.dispatchTouchEvent", {
  53  |     type: "touchStart",
  54  |     touchPoints: [{ x, y }],
  55  |   });
  56  |   for (let i = 1; i <= 8; i++) {
  57  |     await client.send("Input.dispatchTouchEvent", {
  58  |       type: "touchMove",
  59  |       touchPoints: [{ x: x + (dx * i) / 8, y: y + (dy * i) / 8 }],
  60  |     });
  61  |     await page.waitForTimeout(25);
  62  |   }
  63  |   await client.send("Input.dispatchTouchEvent", {
  64  |     type: "touchEnd",
  65  |     touchPoints: [],
  66  |   });
  67  |   await client.detach();
  68  | }
  69  | 
  70  | test("horizontal homepage: native wheel pin/reverse/release or swipe track and arrows", async ({
  71  |   page,
  72  | }, info) => {
  73  |   await page.goto("/");
  74  |   await page.evaluate(() => document.fonts.ready);
  75  |   await page.screenshot({
  76  |     path: `docs/verification/horizontal-home/hero-${info.project.name}.png`,
  77  |     scale: "css",
  78  |   });
  79  |   await page.getByRole("link", { name: "Lihat Proyek", exact: true }).click();
  80  |   await expect(page.locator("#selected-projects")).toBeFocused();
  81  |   const initial = await geometry(page);
  82  |   expect(initial.first).toBeGreaterThanOrEqual(0);
  83  |   expect(initial.first).toBeLessThan(initial.width / 4);
  84  |   if (initial.mode === "pinned") {
  85  |     expect(
  86  |       Math.abs(initial.sectionHeight - initial.travel - initial.viewportHeight),
  87  |     ).toBeLessThan(2);
  88  |     await page.mouse.wheel(0, 500);
  89  |     await expect
  90  |       .poll(async () => (await geometry(page)).x)
  91  |       .toBeLessThan(initial.x - 250);
  92  |     const forward = await geometry(page);
  93  |     expect(Math.abs(forward.stickyTop - forward.header)).toBeLessThan(2);
  94  |     await page.screenshot({
  95  |       path: `docs/verification/horizontal-home/gallery-${info.project.name}.png`,
  96  |       scale: "css",
  97  |     });
  98  |     await page.mouse.wheel(0, -220);
  99  |     await expect
  100 |       .poll(async () => (await geometry(page)).x)
  101 |       .toBeGreaterThan(forward.x + 100);
  102 |     await page.evaluate(
  103 |       (g) =>
  104 |         scrollTo({ top: g.top + g.travel - g.header, behavior: "instant" }),
  105 |       initial,
  106 |     );
  107 |     await expect
  108 |       .poll(async () =>
  109 |         Math.abs(
  110 |           (await geometry(page)).last -
  111 |             (await geometry(page)).width +
  112 |             parseFloat(
  113 |               await page
  114 |                 .locator(".rail-track")
  115 |                 .evaluate((e) => getComputedStyle(e).paddingRight),
  116 |             ),
  117 |         ),
  118 |       )
> 119 |       .toBeLessThan(3);
      |        ^ Error: expect(received).toBeLessThan(expected)
  120 |     await page.mouse.wheel(0, 250);
  121 |     await expect
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
```