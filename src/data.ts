import { currentProjects } from "./current-projects";

export const profileName = "Ikbar Rabbani Purwanto";
export type Locale = "id" | "en";
export type Category = "Web App" | "Infrastructure" | "Game";
export interface Project {
  id: string;
  slug: string;
  category: Category;
  title: string;
  summary: string;
  contribution: string;
  stack: string[];
  image?: string;
  externalUrl?: string;
  externalLabel?: string;
  problem?: string;
  statusLabel?: string;
  status?: string;
  visual?: string[];
  note?: string;
}
export const categories: Category[] = ["Web App", "Infrastructure", "Game"];
export const categoryLabels = {
  id: {
    "Web App": "Aplikasi web",
    Infrastructure: "Infrastruktur",
    Game: "Game",
  },
  en: {
    "Web App": "Web apps",
    Infrastructure: "Infrastructure",
    Game: "Games",
  },
};
// Facts and screenshots recovered from the original portfolio bundle, not invented case studies.
const entries = [
  {
    slug: "kulineran",
    title: "FnB Website",
    stack: ["React JS", "JavaScript", "json-web-server", "CSS"],
    image: "kulineran",
    externalUrl: "https://github.com/d3sc/kulineran/",
    externalLabel: "GitHub",
    summary: [
      "Menemukan rekomendasi makanan Indonesia, dengan pengelolaan konten melalui admin CRUD.",
      "Indonesian food recommendations, with an admin CRUD workflow to manage the content.",
    ],
    contribution: [
      "Membangun website rekomendasi FnB dan alur pengelolaan konten admin.",
      "Built the FnB recommendation website and its admin content workflow.",
    ],
  },
  {
    slug: "school-website",
    title: "School Website",
    stack: ["HTML", "CSS", "Bootstrap 5"],
    image: "school-website",
    externalUrl: "https://schl.smkletris2pamulang.sch.id/index.html",
    externalLabel: "Website",
    summary: [
      "Website bertema sekolah dengan teknologi sederhana, dipublikasikan di domain sekolah.",
      "A school-themed website built with simple technology and published on a school domain.",
    ],
    contribution: [
      "Mengembangkan antarmuka website sekolah dengan HTML, CSS, dan Bootstrap.",
      "Developed the school website interface with HTML, CSS, and Bootstrap.",
    ],
  },
  {
    slug: "cashier-application",
    title: "Cashier Application Demo",
    stack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap 5"],
    image: "cashier-application",
    externalUrl: "https://github.com/d3sc/cashier-application-demo",
    externalLabel: "GitHub",
    summary: [
      "Eksplorasi aplikasi kasir berbasis Laravel dengan penyimpanan data MySQL.",
      "A Laravel cashier application exploration, backed by a MySQL database.",
    ],
    contribution: [
      "Membuat demo aplikasi kasir. Fitur pada versi sumber belum lengkap.",
      "Built a cashier application demo. The source version has incomplete features.",
    ],
  },
  {
    slug: "laravel-blog",
    title: "Blog Website",
    stack: ["Laravel", "Bootstrap 4"],
    image: "laravel-blog",
    externalUrl: "https://github.com/d3sc/laravel-blog",
    externalLabel: "GitHub",
    summary: [
      "Ruang untuk menulis blog sendiri, dengan pengelolaan oleh admin.",
      "A place for users to write their own blogs, with admin management.",
    ],
    contribution: [
      "Membangun website blog untuk penulis dan admin menggunakan Laravel.",
      "Built the Laravel blog website for authors and admins.",
    ],
  },
  {
    slug: "chat-app",
    title: "Chat APP",
    stack: ["React JS", "JavaScript", "Sass", "Firebase"],
    image: "chat-app",
    externalUrl: "https://github.com/d3sc/chat-app",
    externalLabel: "GitHub",
    summary: [
      "Aplikasi chat sederhana untuk komunikasi privat dengan data kontak di Firebase.",
      "A simple private chat application with contact data stored in Firebase.",
    ],
    contribution: [
      "Mengembangkan antarmuka chat React dan penyimpanan data kontak Firebase.",
      "Developed the React chat interface and Firebase contact data storage.",
    ],
  },
  {
    slug: "samurai-game",
    title: "Samurai Game",
    stack: ["Godot 3"],
    externalUrl: "https://www.youtube.com/watch?v=9pyZO3N_ltE",
    externalLabel: "YouTube",
    summary: [
      "Game samurai: menyerang, melompat, berlari, dan melempar shuriken untuk melawan musuh.",
      "A samurai game: attack, jump, run, and throw shuriken to fight enemies.",
    ],
    contribution: [
      "Membuat game bertema samurai sebagai eksplorasi awal pengembangan game di Godot 3.",
      "Made a samurai-themed game as an early exploration of game development in Godot 3.",
    ],
  },
];
const make = (locale: Locale): Project[] =>
  entries.map((p, i) => ({
    ...p,
    id: String(i + 1).padStart(2, "0"),
    category: p.slug === "samurai-game" ? "Game" : "Web App",
    summary: p.summary[locale === "id" ? 0 : 1],
    contribution: p.contribution[locale === "id" ? 0 : 1],
    image: p.image ? `/assets/projects/${p.image}.webp` : undefined,
    note:
      p.slug === "kulineran"
        ? locale === "id"
          ? "Tautan arsip: repository saat diperiksa tidak tersedia publik (404)."
          : "Archive link: the repository is not publicly available at verification (404)."
        : p.slug === "school-website"
          ? locale === "id"
            ? "Tautan arsip: domain demo tidak dapat diakses saat diperiksa."
            : "Archive link: the demo domain could not be reached at verification."
          : undefined,
  }));
export const archivedProjects = { id: make("id"), en: make("en") };
export const projects = {
  id: currentProjects("id"),
  en: currentProjects("en"),
};
export const allProjects = {
  id: [...projects.id, ...archivedProjects.id],
  en: [...projects.en, ...archivedProjects.en],
};
export const email = "ikbar686@gmail.com";
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/d3sc" },
  { label: "Instagram", href: "https://www.instagram.com/ikrabni_09/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikbar-rabbani-b93096285/",
  },
  { label: "YouTube", href: "https://www.youtube.com/watch?v=9pyZO3N_ltE" },
];
export const achievements = [
  {
    title: "Basic Javascript Programming",
    href: "https://www.dicoding.com/certificates/MEPJE400WX3V",
  },
  {
    title: "Creating a backend app for beginners",
    href: "https://www.dicoding.com/certificates/JLX1L4Y8NX72",
  },
  {
    title: "Basic Python for beginners",
    href: "https://www.dicoding.com/certificates/81P27JWGNZOY",
  },
];
export const skills = [
  {
    title: { id: "Backend & Database", en: "Backend & Database" },
    tools: "Laravel / PHP · Python · Bun / Elysia · PostgreSQL · MySQL",
    projects: [
      "vps-manager",
      "lms-ujian-online",
      "helpdesk-ticketing",
      "trading-analysis-dashboard",
    ],
  },
  {
    title: { id: "Frontend", en: "Frontend" },
    tools:
      "JavaScript / TypeScript · Astro · React / Next.js · Blade · Tailwind CSS",
    projects: ["vps-manager", "lms-ujian-online", "chat-app"],
    note: {
      id: "Astro pada VPS Manager; React pada Chat APP di arsip. Next.js termasuk toolkit saya; proyek unggulan yang memakainya belum dicantumkan.",
      en: "Astro in VPS Manager; React in the archived Chat APP. Next.js is part of my toolkit; no featured project using it is listed yet.",
    },
  },
  {
    title: { id: "Infrastruktur", en: "Infrastructure" },
    tools: "Linux · Docker Compose · Proxmox · VM · NAT / Firewall · Tailscale",
    projects: ["proxmox-home-lab", "vps-manager"],
  },
  {
    title: { id: "Otomasi & Integrasi", en: "Automation & Integrations" },
    tools:
      "Python · Scheduler · Telegram Bot API · HTTP API · Retry / Deduplikasi",
    projects: [
      "vps-manager",
      "helpdesk-ticketing",
      "trading-analysis-dashboard",
    ],
  },
  {
    title: { id: "AI Tools", en: "Artificial Intelligence Tools" },
    tools:
      "Hermes Agent · 9Router · Graphify · Opencode · Antigrafity",
    projects: [
      "Few Projects"
    ],
  },
];
export const copy = {
  id: {
    home: "Beranda",
    work: "Proyek",
    about: "Tentang",
    contact: "Kontak",
    skip: "Lewati ke konten",
    nav: "Navigasi utama",
    menu: "Menu",
    language: "Ganti bahasa",
    darkTheme: "Ganti ke tema gelap",
    lightTheme: "Ganti ke tema terang",
    cta: "Lihat Proyek",
    contactCta: "Hubungi Saya",
    intro:
      "Saya adalah pengembang web fullstack dengan fokus pada backend, otomasi, dan pengelolaan server Linux. Saya berpengalaman dalam pemeliharaan projek legacy perusahaan, mengembangkan antarmuka, merancang API dan basis data, serta menangani deployment dan pemeliharaan aplikasi.",
    role: "Full-Stack Developer · Linux & Self-Hosting",
    select: "Pilih proyek",
    selected: "Proyek pilihan",
    details: "Lihat detail",
    viewAll: "Jelajahi semua proyek",
    back: "Kembali ke proyek",
    all: "Semua",
    filter: "Saring berdasarkan kategori",
    count: "proyek",
    contribution: "Yang saya kerjakan",
    stack: "Teknologi",
    source: "Screenshot dari portfolio asli",
    noImage: "Catatan proyek · bukan screenshot",
    aboutTitle: "Dari aplikasi,\nke server sendiri.",
    aboutText:
      "Saya Ikbar Rabbani Purwanto, seorang IT Programmer dan mahasiswa S1 Manajemen Informatika. Saya adalah pengembang web full-stack dengan fokus pada backend, otomasi, dan pengelolaan server Linux. Saya berpengalaman dalam pemeliharaan projek legacy perusahaan, mengembangkan antarmuka, merancang API dan basis data, serta menangani deployment dan pemeliharaan aplikasi.",
    experience: "Linux & Self-Hosting",
    experienceText:
      "Saya mengelola lab Proxmox pribadi untuk deployment, pemisahan jaringan VM, dan akses jarak jauh. Minat utama saya adalah backend, otomasi, dan pengelolaan aplikasi di server Linux.",
    skills: "Perangkat kerja",
    learning: "Catatan belajar",
    contactTitle: "Punya ide?\nMari kita bicarakan.",
    contactText:
      "Untuk pertanyaan, kolaborasi, atau sekadar menyapa. Mulai dari satu email.",
    send: "Tulis email",
    copy: "Salin email",
    copied: "Email tersalin",
    copyFailed: "Pilih dan salin email secara manual.",
    socialLabel: "Tautan sosial",
    external: "tab baru",
    notFoundTitle: "Halaman tidak ditemukan",
    notFoundText: "Alamat ini tidak memiliki halaman portfolio.",
    notFoundAction: "Kembali ke beranda",
    archive: "Arsip proyek",
    other: "Karya lainnya",
    older: "Proyek terdahulu",
    problem: "Masalah yang diselesaikan",
    verification: "Status & batas verifikasi",
    applied: "Dipakai pada",
    projectIntro:
      "Aplikasi operasional, backend, dan infrastruktur yang saya kelola sendiri.",
    detailNote:
      "Status merangkum bukti pengujian yang tercatat, bukan jaminan kondisi deployment saat ini. Pengujian mock tidak membuktikan pengiriman aktual.",
    footer: "Belajar. Berkembang. Membuat.",
    legacy:
      "Entri ilustratif dari versi sebelumnya. Ini bukan proyek portfolio terverifikasi.",
  },
  en: {
    home: "Home",
    work: "Projects",
    about: "About",
    contact: "Contact",
    skip: "Skip to content",
    nav: "Primary navigation",
    menu: "Menu",
    language: "Switch language",
    darkTheme: "Switch to dark theme",
    lightTheme: "Switch to light theme",
    cta: "View Projects",
    contactCta: "Contact Me",
    intro:
      "I’m a full-stack web developer focused on backend development, automation, and Linux server administration. I've experience with legacy company projects, build user interfaces, design APIs and databases, and handle application deployment and maintenance.",
    role: "Full-Stack Developer · Linux & Self-Hosting",
    select: "Choose a project",
    selected: "Selected work",
    details: "View details",
    viewAll: "Explore all projects",
    back: "Back to projects",
    all: "All",
    filter: "Filter by category",
    count: "projects",
    contribution: "What I built",
    stack: "Technology",
    source: "Screenshot from the original portfolio",
    noImage: "Project notes · not a screenshot",
    aboutTitle: "From applications,\nto my own servers.",
    aboutText:
      "I’m Ikbar Rabbani Purwanto, an IT Programmer and an undergraduate student in Information Management. I’m a full-stack web developer focused on backend development, automation, and Linux server administration. I've experience with legacy company projects, build user interfaces, design APIs and databases, and handle application deployment and maintenance.",
    experience: "Linux & Self-Hosting",
    experienceText:
      "I manage a personal Proxmox lab for deployment, VM network separation, and remote access. My main interests are backend development, automation, and running applications on Linux servers.",
    skills: "My working toolkit",
    learning: "Learning notes",
    contactTitle: "Have an idea?\nLet’s talk it through.",
    contactText:
      "For a question, a collaboration, or just a hello. It starts with one email.",
    send: "Write an email",
    copy: "Copy email",
    copied: "Email copied",
    copyFailed: "Select and copy the email manually.",
    socialLabel: "Social links",
    external: "new tab",
    notFoundTitle: "Page not found",
    notFoundText: "This address has no portfolio page.",
    notFoundAction: "Return home",
    archive: "Project archive",
    other: "Other work",
    older: "Earlier projects",
    problem: "The problem",
    verification: "Status & verification limits",
    applied: "Applied in",
    projectIntro:
      "Operational applications, backends, and infrastructure I manage myself.",
    detailNote:
      "Status summarizes recorded test evidence, not the current health of a deployment. Mock tests do not prove actual message delivery.",
    footer: "Learn. Evolve. Make.",
    legacy:
      "An illustrative entry from an earlier version. This is not a verified portfolio project.",
  },
};
