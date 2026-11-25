import type { Locale, Project } from "./data";

// Latest owner-supplied brief + recorded verification. No private URLs/configuration.
// These are portfolio descriptions of historical evidence, not fresh application acceptance.
type Localized = readonly [string, string];
interface Entry {
  slug: string;
  title: string;
  category: Project["category"];
  stack: string[];
  summary: Localized;
  problem: Localized;
  contribution: Localized;
  statusLabel: Localized;
  status: Localized;
  visual: string[];
}
const entries: Entry[] = [
  {
    slug: "vps-manager",
    title: "VPS Manager",
    category: "Web App",
    stack: [
      "Bun",
      "Elysia",
      "Astro",
      "TypeScript",
      "Drizzle",
      "PostgreSQL",
      "Docker Compose",
    ],
    summary: [
      "Dashboard untuk mengelola pelanggan, layanan VPS, pembayaran, dan reminder tagihan.",
      "A dashboard for customers, VPS services, payments, and billing reminders.",
    ],
    problem: [
      "Saya membutuhkan satu tempat untuk memantau pelanggan, masa aktif layanan, pembayaran, dan tagihan yang perlu ditindaklanjuti.",
      "I needed one place to track customers, service periods, payments, and bills that need follow-up.",
    ],
    contribution: [
      "Saya membangun alur pengelolaan layanan dan pembayaran. Di halaman riwayat, saya menambahkan penjaga urutan request agar respons, error, dan status loading dari request lama tidak menimpa data terbaru.",
      "I built service and payment workflows. In the history view, I added request sequencing so stale responses, errors, and loading completions cannot overwrite the latest state.",
    ],
    statusLabel: [
      "Riwayat teruji · notifikasi mock",
      "History tested · notifications mocked",
    ],
    status: [
      "Regresi latest-request-wins tercatat lulus pada tes frontend. Pengaturan notifikasi juga diuji dengan mock; catatan integrasi dan browser memakai PostgreSQL terisolasi serta provider HTTP mock. Bukti pengiriman aktual ke provider atau penerima belum tersedia dalam audit ini.",
      "The latest-request-wins frontend regression has a recorded pass. Notification settings were tested with mocks; integration and browser records use isolated PostgreSQL and mocked provider HTTP. Actual provider submission or recipient delivery is not established by this audit.",
    ],
    visual: ["CUSTOMERS / SERVICES", "PAYMENTS / REMINDERS"],
  },
  {
    slug: "proxmox-home-lab",
    title: "Proxmox Home Lab",
    category: "Infrastructure",
    stack: ["Proxmox", "Linux", "VM", "Bridge", "NAT", "Firewall", "Tailscale"],
    summary: [
      "Lab VM Linux dengan bridge terpisah, NAT, firewall, dan akses jarak jauh.",
      "A Linux VM lab with a separate bridge, NAT, firewall, and remote access.",
    ],
    problem: [
      "Saya membutuhkan lingkungan deployment pribadi yang memberi VM akses internet sambil membatasi akses ke LAN pribadi. Ini adalah tujuan desain jaringan, bukan klaim hasil pengujian.",
      "I needed a personal deployment environment that gives VMs internet access while restricting access to my private LAN. This is a network design goal, not a test-result claim.",
    ],
    contribution: [
      "Saya mengelola host Proxmox dan VM Linux, memisahkan bridge jaringan VM, serta mengatur NAT, firewall, dan akses jarak jauh melalui Tailscale. Konfigurasi dan alamat privat tidak dipublikasikan.",
      "I manage the Proxmox host and Linux VMs, separate the VM network bridge, and configure NAT, firewall rules, and remote access through Tailscale. Private addresses and configuration are not published.",
    ],
    statusLabel: [
      "Lab pribadi · isolasi belum terkonfirmasi",
      "Personal lab · isolation unconfirmed",
    ],
    status: [
      "Lab pribadi digunakan untuk deployment dan administrasi VM. Bukti pengujian VM ke internet, pembatasan akses VM ke LAN, dan akses antaringan belum ditemukan pada audit; saya belum mengklaim isolasi telah terverifikasi.",
      "The personal lab is used for deployment and VM administration. The audit did not locate test evidence for VM internet access, VM-to-LAN restrictions, or cross-network access; isolation is not claimed as verified.",
    ],
    visual: ["LAN / HOST PROXMOX", "JARINGAN VM / REMOTE ACCESS"],
  },
  {
    slug: "lms-ujian-online",
    title: "LMS Ujian Online",
    category: "Web App",
    stack: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Blade",
      "JavaScript",
      "Tailwind CSS",
      "Alpine.js",
    ],
    summary: [
      "Ujian berbasis peran admin dan siswa, pilihan ganda, esai, batas waktu, serta grading.",
      "Role-based online exams with admin and student views, multiple choice, essays, time limits, and grading.",
    ],
    problem: [
      "Saya membangun aplikasi untuk mengelola ujian dan penilaian tanpa mencampur jawaban atau skor antarsoal, siswa, dan percobaan ujian.",
      "I built an application to manage exams and grading without mixing answers or scores across questions, students, or exam attempts.",
    ],
    contribution: [
      "Saya memperbaiki form grading esai dengan menghapus asosiasi form duplikat agar nilai dan feedback ikut terkirim. Di server, saya memvalidasi skor maksimum dari snapshot soal dan menolak ID soal yang bukan milik attempt terkait.",
      "I fixed essay grading by removing a duplicate form association so scores and feedback are submitted. On the server, I validate maximum scores against question snapshots and reject question IDs outside the relevant attempt.",
    ],
    statusLabel: [
      "Grading teruji · alur siswa parsial",
      "Grading tested · student flow partial",
    ],
    status: [
      "Perbaikan grading tercatat lulus feature test PostgreSQL: skor 0 dan 1, feedback, beberapa esai dan attempt, serta penolakan skor di atas maksimum. Tes start/resume dan snapshot attempt memiliki hasil feature test historis yang lulus. Verifikasi browser untuk kasus mulai ujian belum tuntas; seluruh alur siswa belum diklaim teruji end-to-end.",
      "The grading fix has a recorded PostgreSQL feature-test pass covering scores of 0 and 1, feedback, multiple essays and attempts, and maximum-score rejection. Start/resume and attempt snapshots have historical passing feature tests. Browser verification of the reported start-exam case remains incomplete; the full student journey is not claimed as end-to-end verified.",
    ],
    visual: ["ADMIN / STUDENT", "EXAMS / ESSAYS / GRADING"],
  },
  {
    slug: "helpdesk-ticketing",
    title: "Helpdesk Ticketing",
    category: "Web App",
    stack: ["Flask", "Python", "MySQL", "JavaScript", "Telegram Bot API"],
    summary: [
      "Pengelolaan tiket berbasis peran dengan integrasi Telegram untuk tiket baru.",
      "Role-based ticket management with Telegram integration for new tickets.",
    ],
    problem: [
      "Saya membutuhkan alur pelaporan dan tindak lanjut tiket dengan hak akses yang jelas, serta pemberitahuan saat ada tiket baru.",
      "I needed a ticket reporting and follow-up workflow with clear access permissions and notifications for new tickets.",
    ],
    contribution: [
      "Saya mengembangkan aplikasi Flask dan MySQL dengan akses berbasis peran serta integrasi Telegram. Alur notifikasi menyimpan status dan retry tanpa menggagalkan penyimpanan tiket ketika provider bermasalah.",
      "I developed a Flask and MySQL application with role-based access and Telegram integration. Notification state and retries are tracked without failing ticket persistence when the provider is unavailable.",
    ],
    statusLabel: [
      "Browser teruji · Telegram mock",
      "Browser tested · Telegram mocked",
    ],
    status: [
      "Pengujian browser yang tercatat menggunakan Telegram mock, termasuk simulasi kegagalan provider. Ada catatan terpisah bahwa API Telegram menerima notifikasi pada lingkungan uji nyata; itu bukan bukti penerima membaca pesan atau verifikasi deployment utama.",
      "Recorded browser tests use a Telegram mock, including simulated provider failure. A separate record shows Telegram API acceptance in a real-send test environment; it does not establish recipient read status or verification of the primary deployment.",
    ],
    visual: ["TICKETS / ROLES", "OUTBOX / TELEGRAM"],
  },
  {
    slug: "trading-analysis-dashboard",
    title: "Trading Analysis Dashboard",
    category: "Web App",
    stack: [
      "FastAPI",
      "Python",
      "JavaScript",
      "Tailwind CSS",
      "yfinance",
      "TA-Lib",
    ],
    summary: [
      "Watchlist IDX, AS, dan emas dengan chart historis, indikator teknikal, serta scoring.",
      "IDX, US, and gold watchlists with historical charts, technical indicators, and scoring.",
    ],
    problem: [
      "Saya membutuhkan tempat untuk meninjau watchlist beberapa pasar, riwayat harga, dan indikator teknikal secara konsisten.",
      "I needed one place to review multi-market watchlists, historical prices, and technical indicators consistently.",
    ],
    contribution: [
      "Saya membangun backend FastAPI, pengambilan data pasar, chart historis, indikator teknikal, dan scoring. Saya juga mengembangkan reminder support dengan kontrol episode, deduplikasi, dan retry.",
      "I built the FastAPI backend, market-data retrieval, historical charts, technical indicators, and scoring. I am also developing support reminders with episode tracking, deduplication, and retries.",
    ],
    statusLabel: [
      "Reminder support · dalam pengembangan",
      "Support reminders · in development",
    ],
    status: [
      "Regresi reminder backend dan browser terisolasi memiliki catatan lulus. Namun, verifikasi deployment aktif belum tuntas dan pengiriman Telegram aktual belum terbukti. Reminder support tetap dalam pengembangan sampai regresi pada deployment sasaran dan pengiriman aktual terkonfirmasi.",
      "Backend reminder regressions and isolated browser checks have recorded passes. Verification of the active deployment remains incomplete, and actual Telegram delivery is unverified. Support reminders remain in development until regressions on the target deployment and real delivery are confirmed.",
    ],
    visual: ["IDX / US / GOLD", "WATCHLIST / CHARTS / SCORING"],
  },
];
export const currentProjects = (locale: Locale): Project[] =>
  entries.map((entry, index) => {
    const i = locale === "id" ? 0 : 1;
    return {
      ...entry,
      id: String(index + 1).padStart(2, "0"),
      summary: entry.summary[i],
      problem: entry.problem[i],
      contribution: entry.contribution[i],
      statusLabel: entry.statusLabel[i],
      status: entry.status[i],
    };
  });
