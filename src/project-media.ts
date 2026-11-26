import dimensions from "./asset-dimensions.json";
import type { Locale } from "./data";

export interface ProjectImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  label: string;
}
type Description = readonly [string, string];
interface Shot {
  asset: keyof typeof dimensions;
  label: Description;
  caption: Description;
}
const shots: Record<string, Shot[]> = {
  "vps-manager": [
    {
      asset: "vps-manager",
      label: ["Dashboard layanan", "Service dashboard"],
      caption: [
        "Dashboard pelanggan, layanan, dan pembayaran. Identitas pelanggan pada panel aktivitas ditutup permanen; angka adalah isi screenshot, bukan klaim dampak.",
        "Customers, services, and payments dashboard. Customer identities in the activity panel are permanently redacted; displayed figures are screenshot content, not impact claims.",
      ],
    },
    {
      asset: "vps-manager-metrics",
      label: ["Detail ringkasan", "Summary close-up"],
      caption: [
        "Potongan screenshot yang sama: ringkasan pelanggan, layanan aktif, jatuh tempo, dan pembayaran. Bukan layar tambahan.",
        "Crop of the same screenshot: customers, active services, due dates, and payments. Not an additional screen.",
      ],
    },
  ],
  "proxmox-home-lab": [
    {
      asset: "proxmox-home-lab",
      label: ["Konsol administrasi", "Administration console"],
      caption: [
        "Konsol shell Proxmox. Identitas host, akun, VM, dan riwayat tugas ditutup permanen. Ini bukan dashboard metrik atau bukti isolasi jaringan.",
        "Proxmox shell console. Host, account, VM identifiers, and task history are permanently redacted. This is not a metrics dashboard or proof of network isolation.",
      ],
    },
  ],
  "lms-ujian-online": [
    {
      asset: "lms-ujian-online",
      label: ["Dashboard admin", "Admin dashboard"],
      caption: [
        "Dashboard admin: ringkasan ujian, akses pengelolaan, dan daftar ujian berjudul testing. Tidak menampilkan jawaban atau identitas siswa.",
        "Admin dashboard: exam summary, management shortcuts, and exams labelled testing. No student identities or answers are displayed.",
      ],
    },
    {
      asset: "lms-ujian-online-controls",
      label: ["Detail pengelolaan", "Management close-up"],
      caption: [
        "Potongan screenshot yang sama: pintasan pengelolaan ujian, pengguna, dan hasil serta panel monitoring. Bukan bukti alur siswa atau grading.",
        "Crop of the same screenshot: exam, user, and result shortcuts with monitoring panels. Not evidence of the student journey or grading flow.",
      ],
    },
  ],
  "helpdesk-ticketing": [
    {
      asset: "helpdesk-ticketing",
      label: ["Antrean tiket", "Ticket queue"],
      caption: [
        "Halaman antrean tiket dengan ringkasan status dan filter. Isi tiket serta data pelapor tidak terlihat dalam screenshot ini.",
        "Ticket queue with status summaries and filters. Ticket contents and reporter data are not visible in this screenshot.",
      ],
    },
    {
      asset: "helpdesk-ticketing-filters",
      label: ["Detail filter", "Filter close-up"],
      caption: [
        "Potongan screenshot yang sama: filter berdasarkan judul, status, prioritas, kategori, dan agen. Layar detail tiket dan notifikasi Telegram belum tersedia.",
        "Crop of the same screenshot: title, status, priority, category, and agent filters. Ticket-detail and Telegram-notification screens are not yet available.",
      ],
    },
  ],
  kulineran: [
    {
      asset: "kulineran",
      label: ["Halaman utama", "Landing page"],
      caption: [
        "Halaman rekomendasi kuliner dari portfolio terdahulu; tampilan hero dan navigasi kategori.",
        "Food recommendation landing page from the earlier portfolio; hero and category navigation.",
      ],
    },
  ],
  "school-website": [
    {
      asset: "school-website",
      label: ["Halaman sekolah", "School landing page"],
      caption: [
        "Hero website sekolah dari portfolio terdahulu. Ketersediaan demo mengikuti catatan tautan arsip.",
        "School website hero from the earlier portfolio. Demo availability follows the archive-link notice.",
      ],
    },
  ],
  "cashier-application": [
    {
      asset: "cashier-application",
      label: ["Form transaksi", "Transaction form"],
      caption: [
        "Form transaksi demo kasir: produk, jumlah, total, dan pembayaran. Bukan klaim fitur sudah lengkap.",
        "Cashier demo transaction form: products, quantities, totals, and payment. Not a claim of feature completeness.",
      ],
    },
  ],
  "laravel-blog": [
    {
      asset: "laravel-blog",
      label: ["Daftar artikel", "Article index"],
      caption: [
        "Daftar artikel dengan pencarian pada screenshot portfolio terdahulu; konten contoh terlihat di halaman.",
        "Article index and search from the earlier portfolio screenshot; sample content is visible.",
      ],
    },
  ],
  "chat-app": [
    {
      asset: "chat-app",
      label: ["Antarmuka percakapan", "Conversation interface"],
      caption: [
        "Antarmuka chat dari portfolio terdahulu dengan label user dan percakapan pengujian yang terlihat.",
        "Earlier portfolio chat interface with generic user labels and visible test conversation.",
      ],
    },
  ],
};
export function projectImages(slug: string, locale: Locale): ProjectImage[] {
  const i = locale === "id" ? 0 : 1;
  return (shots[slug] ?? []).map((shot) => {
    const d = dimensions[shot.asset];
    const src = `/assets/projects/${shot.asset}.webp`;
    return {
      src,
      width: d.width,
      height: d.height,
      srcSet: [
        ...d.widths.map(
          (w) => `/assets/projects/${shot.asset}-${w}.webp ${w}w`,
        ),
        `${src} ${d.width}w`,
      ].join(", "),
      alt: shot.label[i],
      label: shot.label[i],
      caption: shot.caption[i],
    };
  });
}
export const galleryCopy = {
  id: {
    gallery: "Galeri",
    open: "Buka galeri",
    enlarge: "Perbesar screenshot",
    previous: "Gambar sebelumnya",
    next: "Gambar berikutnya",
    close: "Tutup lightbox",
    zoom: "Ukuran asli",
    fit: "Sesuaikan layar",
    hint: "Geser atau gunakan tombol panah. Tanpa putar otomatis.",
    singleHint: "Pilih screenshot untuk memperbesar.",
    missing: "Screenshot belum tersedia",
    missingText:
      "Catatan proyek tersedia di bawah. Tidak ada preview visual yang direkayasa.",
    thumbnails: "Pilih gambar",
    original: "Screenshot proyek",
    preview: "Preview screenshot",
    crop: "OVERVIEW / DETAIL",
  },
  en: {
    gallery: "Gallery",
    open: "Open gallery",
    enlarge: "Enlarge screenshot",
    previous: "Previous image",
    next: "Next image",
    close: "Close lightbox",
    zoom: "Original size",
    fit: "Fit to screen",
    hint: "Swipe or use arrow keys. No autoplay.",
    singleHint: "Select the screenshot to enlarge.",
    missing: "Screenshots not yet available",
    missingText: "Read the project notes below. No fabricated visual preview.",
    thumbnails: "Choose an image",
    original: "Project screenshot",
    preview: "Screenshot preview",
    crop: "OVERVIEW / DETAIL",
  },
};
