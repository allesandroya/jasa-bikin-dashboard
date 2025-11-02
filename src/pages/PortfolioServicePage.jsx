import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  Database,
  Settings2,
  Palette,
  Clock3,
  FileSpreadsheet,
  MonitorSmartphone,
  Gauge,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Star,
  Filter,
  X,
  Info,
  AlertTriangle,
  Target,
  Wrench,
  Maximize2,
} from "lucide-react";

// Jika file ini tidak ada di proyekmu, hapus import di bawah dan pakai ph("...") sebagai pengganti
// === ASSETS (GIF) ===
import excel1 from "../assets/Excel1.gif";
import excel2 from "../assets/Excel2.gif";
import excel3 from "../assets/Excel3.gif";
import excel4 from "../assets/Excel4.gif";
import excel5 from "../assets/Excel5.gif";
import excel6 from "../assets/Excel6.gif";
import excel7 from "../assets/Excel7.gif";
import excel8 from "../assets/Excel8.gif";
import excel9 from "../assets/Excel9.gif";
import excel10 from "../assets/Excel10.gif";

import googleSheet1 from "../assets/Googlesheet1.gif";

import looker1 from "../assets/Looker1.gif";
import looker2 from "../assets/Looker2.gif";

import powerbi1 from "../assets/Powerbi1.gif";

import tableau1 from "../assets/Tableau1.gif";
import tableau2 from "../assets/Tableau2.gif";
import tableau3 from "../assets/Tableau3.gif";
import tableau4 from "../assets/Tableau4.gif";
import tableau5 from "../assets/Tableau5.gif";
import tableau6 from "../assets/Tableau6.gif";
import tableau7 from "../assets/Tableau7.gif";
import tableau8 from "../assets/Tableau8.gif";


/* -----------------------------
   Utils
------------------------------ */
const WA_NUMBER = "6281234567890"; // TODO: ganti nomormu (tanpa +)
const waBase = (msg) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const money = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

// Thumbnail placeholder (SVG data URI)
const ph = (label) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'>
      <defs>
        <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0%' stop-color='%23eef2ff'/>
          <stop offset='100%' stop-color='%23e0e7ff'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(%23g)'/>
      <g font-family='Inter,Segoe UI,Arial' fill='%23565' text-anchor='middle'>
        <text x='50%' y='48%' font-size='28' font-weight='600'>${label}</text>
        <text x='50%' y='60%' font-size='16'>Preview / Thumbnail</text>
      </g>
    </svg>`
  )}`;

/* -----------------------------
   Data (Portfolio)
------------------------------ */
// === TEMPLATE KALIMAT DEFAULT ===
const TEMPLATE = {
  problem:
    "Data tersebar dan laporan manual memakan waktu. Tim membutuhkan satu sumber kebenaran untuk memantau KPI secara real-time.",
  objective:
    "Menyediakan dashboard interaktif yang ringkas, dapat difilter, dan siap presentasi untuk menjawab pertanyaan bisnis harian.",
  solution:
    "Bangun model data sederhana, lakukan data cleaning seperlunya, terapkan kalkulasi KPI, dan desain UI sesuai brand.",
  results: [
    "Penyusunan laporan lebih cepat & konsisten",
    "Keputusan lebih data-driven",
  ],
};

// === PORTFOLIO CASES (thumb = video = GIF) ===
const CASES = [
  /* ========== EXCEL ========== */

  {
    id: "excel-1",
    title: "Mess Dashboard",
    tool: "Excel",
    industry: "Government / Military",
    tags: ["Occupancy", "Room Allocation", "Check-in/out"],
    thumb: excel1,
    video: excel1,
    problem: `Pengelola mess kesulitan memantau ketersediaan kamar kosong/terisi di tiap area & divisi, termasuk riwayat tanggal/jam check-in–check-out. Data tersebar di file berbeda dan update manual sering terlambat.`,
    objective: `Menyediakan satu dashboard yang menampilkan okupansi real-time per area & divisi, daftar kamar kosong, serta histori pengisian berbasis tanggal/waktu untuk mempercepat alokasi kamar.`,
    solution: `Konsolidasi data penghuni & kamar dengan Power Query; tabel kalender untuk tracking waktu; measure okupansi saat ini & tren; slicer area/divisi; indikator kamar kosong dan lama hunian. Layout dibuat mobile-friendly untuk petugas lapangan.`,
    results: [
      "Waktu mencari kamar kosong turun drastis (hitungan menit).",
      "Akurasinya naik; double-assign kamar berkurang signifikan.",
      "Proses alokasi antar divisi jadi transparan & audit-able.",
    ],
  },

  {
    id: "excel-2",
    title: "Dashboard Monitoring Pelatihan Aplikasi Dokter",
    tool: "Excel",
    industry: "Healthcare",
    tags: ["Training", "Adoption", "Compliance"],
    thumb: excel2,
    video: excel2,
    problem: `RS/klinik perlu memantau status pelatihan aplikasi untuk para dokter dan jabatannya. Siapa yang sudah lulus pelatihan, aktif menggunakan aplikasi, atau belum memulai—selama ini dilacak manual dan rawan miss.`,
    objective: `Menyediakan registry terpusat status pelatihan per dokter/jabatan, serta ringkasan adopsi aplikasi (aktif vs belum) per unit/rumah sakit.`,
    solution: `Power Query menggabungkan data HR & log aplikasi; dashboard dengan slicer jabatan/unit; badge status (Lulus, Aktif, Belum); daftar nama yang belum pelatihan lengkap dengan daftar modul yang harus diambil.`,
    results: [
      "Pelaporan kepatuhan pelatihan jadi real-time.",
      "Coverage training meningkat karena follow-up lebih terarah.",
      "Manajemen bisa memetakan kebutuhan refresh training per jabatan.",
    ],
  },

  {
    id: "excel-3",
    title: "Stock Inventory Tracker",
    tool: "Excel",
    industry: "Retail / Distribution",
    tags: ["Stock In/Out", "Reorder", "Cashflow"],
    thumb: excel3,
    video: excel3,
    problem: `Stok masuk/keluar dicatat terpisah sehingga sulit mengetahui saldo stok akhir dan item yang harus segera di-reorder. Selain itu arus kas keluar/masuk untuk pembelian/penjualan tidak terlihat terpadu.`,
    objective: `Monitoring real-time untuk saldo stok, item low-stock dengan ambang batas reorder, serta ringkasan uang masuk/keluar terkait persediaan.`,
    solution: `Model pergerakan persediaan (in/out/adjustment), perhitungan saldo bergerak, daftar reorder otomatis, dan recap kas sederhana. Notifikasi warna untuk low-stock & dead-stock.`,
    results: [
      "Stockout berkurang; pembelian jadi lebih presisi.",
      "Visibilitas cash-flow persediaan meningkat.",
      "Waktu rekap stok bulanan turun signifikan.",
    ],
  },

  {
    id: "excel-4",
    title: "Target Sales Tracker",
    tool: "Excel",
    industry: "Sales",
    tags: ["Target vs Actual", "Gantt", "Team Coloring"],
    thumb: excel4,
    video: excel4,
    problem: `Sulit melihat mana salesperson yang sudah mencapai target tiap bulan dan progress keseluruhan per tim. Visual timeline tidak ada, sehingga koordinasi proyek penjualan kurang jelas.`,
    objective: `Menampilkan pencapaian target per sales & per bulan dengan visual Gantt dan pewarnaan berbeda per tim agar status cepat terbaca.`,
    solution: `Model target/actual per bulan, Gantt pseudo-chart di Excel, pewarnaan dinamis per tim, serta kartu KPI ringkas (achievement, gap).`,
    results: [
      "Daily stand-up lebih cepat karena visualisasi jelas.",
      "Manager mudah mengidentifikasi sales yang butuh bantuan.",
      "Rate pencapaian target tim meningkat.",
    ],
  },

  {
    id: "excel-5",
    title: "Project & Budget Tracker",
    tool: "Excel",
    industry: "PMO / Ops",
    tags: ["Timeline", "Priority", "Budget"],
    thumb: excel5,
    video: excel5,
    problem: `Proyek berjalan paralel tanpa ringkasan yang rapi: tanggal mulai/selesai, persentase progress, prioritas, dan realisasi anggaran sulit dipantau dalam satu tempat.`,
    objective: `Menyatukan informasi inti proyek dan halaman khusus budget untuk melihat pemakaian vs alokasi.`,
    solution: `Tabel proyek (start, end, %progress, priority), kanban/gantt sederhana, halaman budget dengan breakdown kategori & variance, serta filter per PIC/tim.`,
    results: [
      "Stakeholder punya single source of truth proyek.",
      "Deteksi potensi over-budget lebih dini.",
      "Rapat koordinasi mingguan lebih ringkas & fokus.",
    ],
  },

  {
    id: "excel-6",
    title: "Smartphone Sales Dashboard",
    tool: "Excel",
    industry: "Retail",
    tags: ["Area", "Product Type", "Dynamic Metrics"],
    thumb: excel6,
    video: excel6,
    problem: `Penjualan smartphone perlu dipantau per area/tipe & tren waktunya. User minta metrik bisa diganti dinamis (Sales, Profit, Total Transaksi, Quantity) tanpa membuat banyak report terpisah.`,
    objective: `Satu dashboard fleksibel dengan switch metrik yang bisa diganti on-the-fly.`,
    solution: `Selector metrik (Sales/Profit/Txn/Qty), pivot terhubung, timeseries & breakdown area/tipe, KPI cards, dan conditional formatting untuk outlier.`,
    results: [
      "Analisis cepat tanpa membuat banyak versi file.",
      "Tim bisa fokus ke area/tipe yang paling berdampak.",
      "Perencanaan stok & promosi lebih presisi.",
    ],
  },

  {
    id: "excel-7",
    title: "Monitoring Kepatuhan Diklat per Direktorat",
    tool: "Excel",
    industry: "Public Sector / HR",
    tags: ["Training Compliance", "Gap Analysis"],
    thumb: excel7,
    video: excel7,
    problem: `Perlu memantau karyawan yang sudah/ belum memenuhi diklat per direktorat, dan modul apa saja yang masih kurang.`,
    objective: `Menyediakan tampilan ringkas daftar karyawan belum memenuhi diklat per direktorat beserta modul yang harus diambil.`,
    solution: `Match daftar kompetensi per jabatan dengan status diklat; gap-list otomatis per direktorat; filter nama/jabatan; export untuk tindak lanjut HR.`,
    results: [
      "Kesenjangan kompetensi terlihat jelas per direktorat.",
      "Tindak lanjut training lebih terarah & terukur.",
    ],
  },

  {
    id: "excel-8",
    title: "Employee Dashboard (Attrition, HDRF Utilization, PISA)",
    tool: "Excel",
    industry: "HR",
    tags: ["Headcount", "Attrition", "Utilization", "Compliance"],
    thumb: excel8,
    video: excel8,
    problem: `Manajemen memerlukan pandangan menyeluruh atas headcount saat ini, turnover/attrition, HDRF utilization, dan status PISA submission.`,
    objective: `Memberi gambaran kondisi tenaga kerja terkini dan indikator kepatuhan/ pemanfaatan program.`,
    solution: `ETL data HR master + log kepesertaan; KPI attrition & utilization; tren bulanan; segmentasi per unit/grade; indikator submission PISA.`,
    results: [
      "Visibilitas HR meningkat; diskusi manajemen lebih berbasis data.",
      "Area dengan risiko attrition tinggi cepat terdeteksi.",
    ],
  },

  {
    id: "excel-9",
    title: "Project Monitoring + RAID",
    tool: "Excel",
    industry: "PMO / Ops",
    tags: ["Timeline", "RAID", "Issue Tracking"],
    thumb: excel9,
    video: excel9,
    problem: `Mirip Project & Budget Tracker namun fokus pada kontrol proyek berjalan dan halaman RAID (Risks, Assumptions, Issues, Dependencies) untuk mitigasi.`,
    objective: `Memusatkan status proyek dan daftar risiko/isu/dependensi untuk mempercepat eskalasi dan keputusan.`,
    solution: `Ringkasan status & timeline, halaman RAID dengan owner, severity, due date, dan rekomendasi aksi; filter per project/PIC.`,
    results: [
      "Mitigasi risiko lebih cepat; blocking issues turun.",
      "Transparansi status proyek meningkat lintas tim.",
    ],
  },

  {
    id: "excel-10",
    title: "Transport Management Dashboard",
    tool: "Excel",
    industry: "Logistics",
    tags: ["Tonnage", "Company", "VBA"],
    thumb: excel10,
    video: excel10,
    problem: `Perlu memantau tonase barang per tanggal dan per perusahaan. User meminta dashboard dapat di-update bulanan sesuai file yang dipilih.`,
    objective: `Memungkinkan pemilihan file bulanan secara dinamis dan otomatis mengganti sumber data ke dashboard tanpa repot copy-paste.`,
    solution: `Automasi VBA untuk selector file & refresh query; tabel kalender; visual tonase per tanggal/perusahaan; log update untuk jejak audit.`,
    results: [
      "Update bulanan cukup pilih file → data langsung terganti.",
      "Human error saat copy-paste hilang.",
      "Tim logistik punya histori tonase yang konsisten.",
    ],
  },

  /* ========== GOOGLE SHEETS ========== */

  {
    id: "gsheets-1",
    title: "Data Cleaning & Analytics Log (Supermarket)",
    tool: "Google Sheets",
    industry: "Retail",
    tags: ["Doc & Log", "Cleaning Steps", "Analytics"],
    thumb: googleSheet1,
    video: googleSheet1,
    problem: `Proses pembersihan data & analitik toko tersebar di banyak catatan sehingga sulit ditelusuri step-by-step.`,
    objective: `Mendokumentasikan pipeline cleaning & eksplorasi analitik (pola penjualan, pola customer, dsb.) dalam satu file yang rapi.`,
    solution: `Template log cleaning (before/after, rule, contoh), ringkasan insight awal (produk top, customer segment), dan link ke dataset final.`,
    results: [
      "Jejak proses (data lineage) jelas & mudah di-audit.",
      "Transfer pengetahuan ke tim lain jadi cepat.",
    ],
  },

  /* ========== LOOKER STUDIO ========== */

  {
    id: "looker-1",
    title: "F&B Chain Performance (CAPEX/OPEX & Sales)",
    tool: "Looker Studio",
    industry: "F&B",
    tags: ["CAPEX", "OPEX", "Sales", "Province/City"],
    thumb: looker1,
    video: looker1,
    problem: `User ingin memantau target penjualan & pengeluaran per kota/provinsi, menemukan pola penyebab pendapatan/biaya tinggi, namun belum ada anggaran BI berbayar.`,
    objective: `Menyediakan dashboard Looker Studio yang gratis namun powerful untuk monitoring lintas wilayah & kategori biaya.`,
    solution: `Koneksi ke sumber transaksi + biaya; field kalkulasi (ROAS, margin, rasio biaya); kontrol filter provinsi/kota; komponen target vs actual.`,
    results: [
      "Stakeholder bisa evaluasi daerah prioritas tanpa lisensi mahal.",
      "Identifikasi kota ber-OPEX tinggi untuk program efisiensi.",
    ],
  },

  {
    id: "looker-2",
    title: "KOL Endorsement Tracker",
    tool: "Looker Studio",
    industry: "Marketing",
    tags: ["Pipeline", "Impact", "Google Theme"],
    thumb: looker2,
    video: looker2,
    problem: `Manajemen KOL tersebar; sulit memonitor status (belum deal/proses/selesai) dan mengukur dampaknya.`,
    objective: `Menyediakan pipeline KOL yang jelas dengan indikator impact dan tema warna bergaya Google sesuai permintaan user.`,
    solution: `Tabel pipeline status + owner, skor impact, timeline aktivitas; filter kategori KOL; palet warna Google untuk konsistensi brand.`,
    results: [
      "Follow-up KOL lebih terstruktur; bottleneck cepat terlihat.",
      "Analisis ROI endorsement lebih mudah dipresentasikan.",
    ],
  },

  /* ========== POWER BI ========== */

  {
    id: "powerbi-1",
    title: "Power BI — Store Sales with Discount Simulator",
    tool: "Power BI",
    industry: "Retail",
    tags: ["Parameter", "Geo Map", "What-if"],
    thumb: powerbi1,
    video: powerbi1,
    problem: `Perlu memantau penjualan per gerai & mensimulasikan dampak diskon terhadap produk tertentu. Juga ingin melihat persebaran penjualan secara geografis.`,
    objective: `Memberikan ringkasan penjualan per provinsi/gerai lengkap dengan parameter diskon dan peta interaktif.`,
    solution: `Model bintang (FactSales, DimDate, DimStore, DimProduct), parameter What-if Discount, kartu KPI & Geo Map, drillthrough per produk/gerai.`,
    results: [
      "Skenario diskon bisa diuji sebelum dijalankan.",
      "Gerai/provinsi prioritas cepat diidentifikasi.",
    ],
  },

  /* ========== TABLEAU ========== */

  {
    id: "tableau-1",
    title: "RFM Analysis — Overview",
    tool: "Tableau",
    industry: "E-Commerce / Retail",
    tags: ["RFM", "Segmentation", "Behavior"],
    thumb: tableau1,
    video: tableau1,
    problem: `Bisnis membutuhkan segmentasi customer berbasis Recency, Frequency, Monetary untuk memahami perilaku & prioritas retensi.`,
    objective: `Dashboard RFM yang menampilkan persentase tiap segmen, alasan masuk segmen, dan ringkasan perilaku.`,
    solution: `Perhitungan skor R/F/M, pembentukan segmen, visual komposisi segmen & kontribusi revenue, filter periode & kanal.`,
    results: [
      "Strategi retensi & promosi menjadi lebih tepat sasaran.",
      "Customer high-value terdefinisi jelas untuk program loyalti.",
    ],
  },

  {
    id: "tableau-2",
    title: "RFM Analysis — Customer Detail",
    tool: "Tableau",
    industry: "E-Commerce / Retail",
    tags: ["RFM Detail", "Customer 360"],
    thumb: tableau2,
    video: tableau2,
    problem: `Setelah overview, tim butuh melihat nilai recency/frequency/monetary per customer dan segmen masing-masing.`,
    objective: `Memberikan tampilan detail per customer lengkap dengan skor & riwayat transaksi.`,
    solution: `Tabel detail customer dengan R/F/M, filter segmen, link drill ke histori transaksi; export untuk CRM campaign.`,
    results: [
      "Tim CRM bisa mengeksekusi kampanye yang sangat terarah.",
      "Analisis churn & upsell jadi actionable.",
    ],
  },

  {
    id: "tableau-3",
    title: "Monitoring Administrasi Kapal",
    tool: "Tableau",
    industry: "Marine",
    tags: ["Compliance", "Budget Usage"],
    thumb: tableau3,
    video: tableau3,
    problem: `Perlu memeriksa kelengkapan administrasi tiap kapal serta anggaran yang sudah terpakai.`,
    objective: `Menyediakan status kepatuhan administrasi per kapal dan ringkasan biaya terkait.`,
    solution: `Checklist dokumen per kapal, indikator hijau/merah, rekap biaya per kapal/per periode; filter armada & rute.`,
    results: [
      "Temuan dokumen kurang lengkap turun signifikan.",
      "Kontrol biaya per kapal lebih ketat & terdokumentasi.",
    ],
  },

  {
    id: "tableau-4",
    title: "Monitoring Status Kapal",
    tool: "Tableau",
    industry: "Marine",
    tags: ["Asset Value", "Destination", "Vendor"],
    thumb: tableau4,
    video: tableau4,
    problem: `Manajemen ingin melihat nilai kapal per unit, tujuan, penyedia, serta dinamika anggaran & nilai per bulan.`,
    objective: `Memberikan pandangan menyeluruh nilai aset & pergerakannya per vendor/tujuan.`,
    solution: `Model aset kapal, ringkasan nilai/budget bulanan, breakdown per vendor & tujuan, tren nilai, dan indikator penyimpangan.`,
    results: [
      "Pengambilan keputusan investasi/maintenance lebih berbasis data.",
      "Variasi nilai per vendor/tujuan lebih mudah dianalisis.",
    ],
  },

  {
    id: "tableau-5",
    title: "Smartphone Sales — Summary",
    tool: "Tableau",
    industry: "Retail",
    tags: ["Branch", "Brand", "Type"],
    thumb: tableau5,
    video: tableau5,
    problem: `Perlu ringkasan penjualan & pengeluaran smartphone per cabang, merek, tipe, dan jenis.`,
    objective: `Memberikan gambaran menyeluruh performa penjualan vs biaya untuk evaluasi margin.`,
    solution: `Model sales & expense, breakdown per cabang/merek/tipe, KPI margin & kontribusi, tren waktu & komparasi cabang.`,
    results: [
      "Cabang low-margin cepat terdeteksi untuk tindakan perbaikan.",
      "Perencanaan stok & promosi makin presisi.",
    ],
  },

  {
    id: "tableau-6",
    title: "Financial Development Dashboard",
    tool: "Tableau",
    industry: "Finance",
    tags: ["Dept", "Cost Center", "Revenue", "Expenses"],
    thumb: tableau6,
    video: tableau6,
    problem: `Manajemen butuh memantau nilai ekonomi per department, cost centre, revenue & expenses, termasuk tren penjualan.`,
    objective: `Satu dashboard keuangan komprehensif untuk pemantauan performa & efisiensi biaya.`,
    solution: `Ringkasan P&L per dept/cost centre, tren revenue & expense, variance vs target, dan drill ke transaksi besar.`,
    results: [
      "Identifikasi penghematan biaya lebih cepat.",
      "Kinerja departemen bisa dibandingkan secara objektif.",
    ],
  },

  {
    id: "tableau-7",
    title: "KPI Sales Dashboard",
    tool: "Tableau",
    industry: "Sales",
    tags: ["Target vs Actual", "Province", "Agent"],
    thumb: tableau7,
    video: tableau7,
    problem: `Perlu memantau target vs actual, revenue per provinsi, dan achievement per agen sales.`,
    objective: `Memberikan dasbor KPI penjualan yang langsung menyorot pencapaian & deviasi.`,
    solution: `Kartu KPI, peta provinsi, leaderboard agen, serta filter waktu/produk; highlight gap untuk coaching cepat.`,
    results: [
      "Fokus pembinaan agen menjadi jelas & berdampak.",
      "Pertumbuhan penjualan lebih konsisten lintas provinsi.",
    ],
  },

  {
    id: "tableau-8",
    title: "BPJS Kesehatan — Comprehensive Dashboard",
    tool: "Tableau",
    industry: "Healthcare",
    tags: ["Diagnosis", "Insurance Level", "Premium", "Demography"],
    thumb: tableau8,
    video: tableau8,
    problem: `Data BPJS perlu dilihat secara komprehensif: penyakit, level asuransi, premi, biaya per kota, diagnosis, dan demografi pasien.`,
    objective: `Memberikan pandangan menyeluruh untuk analisis biaya & layanan kesehatan antar wilayah/segmen peserta.`,
    solution: `Model klaim & peserta, breakdown biaya per kota/diagnosis, demografi pasien, dan indikator utilisasi layanan.`,
    results: [
      "Prioritas program kesehatan dapat ditentukan berbasis data.",
      "Biaya tinggi per penyakit/wilayah cepat teridentifikasi.",
    ],
  },
];



/* -----------------------------
   Page
------------------------------ */
export default function PortfolioServicePage() {
  const [query, setQuery] = useState("");
  const [toolFilter, setToolFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return CASES.filter((c) => {
      const matchTool = toolFilter === "All" || c.tool === toolFilter;
      const matchQ =
        !q ||
        [c.title, c.industry, c.tool, c.problem, c.objective, c.solution, ...(c.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchTool && matchQ;
    });
  }, [query, toolFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Gauge className="h-6 w-6" />
            <span className="font-semibold">Jasa Bikin Dashboard</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="hover:opacity-80">Portfolio</a>
            <a href="#pricing" className="hover:opacity-80">Paket & Harga</a>
            <a href="#services" className="hover:opacity-80">Proses</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <a
            className="inline-flex items-center px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
            href={waBase("Halo, saya tertarik jasa pembuatan dashboard. Boleh konsultasi?")}
          >
            Chat WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Bangun <span className="text-indigo-600">Dashboard Interaktif</span>{" "}
              yang Bikin Keputusan Lebih Cepat
            </motion.h1>
            <p className="mt-4 text-slate-600 md:text-lg">
              Jasa dashboard untuk <b>Excel</b>, <b>Google Sheets</b>, <b>Looker Studio</b>,{" "}
              <b>Power BI</b>, dan <b>Tableau</b>. Fokus pada hasil: insight cepat, otomasi rapi,
              dan desain sesuai brand.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <Badge icon={<Database className="h-4 w-4 mr-1" />}>Data Modeling</Badge>
              <Badge icon={<Settings2 className="h-4 w-4 mr-1" />}>Automation</Badge>
              <Badge icon={<Palette className="h-4 w-4 mr-1" />}>Custom Design</Badge>
              <Badge icon={<Clock3 className="h-4 w-4 mr-1" />}>Fast Turnaround</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                href={waBase("Halo, saya mau konsultasi kebutuhan dashboard.")}
              >
                Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50"
                href="#portfolio"
              >
                Lihat Portfolio
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500 flex items-center gap-1">
              <Info className="h-3.5 w-3.5" /> Bonus: revisi gratis untuk error/bug.
            </p>
          </div>

          <div className="md:pl-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <NeedCard
                icon={<FileSpreadsheet className="h-5 w-5" />}
                title="Excel / Sheets"
                line1="Dashboard offline siap pakai."
                line2="Operasional cepat, fleksibel, biaya rendah."
                color="emerald"
              />
              <NeedCard
                icon={<MonitorSmartphone className="h-5 w-5" />}
                title="Looker Studio"
                line1="Cepat, gratis, share via link."
                line2="Ideal untuk GA4/Ads & marketing."
                color="sky"
              />
              <NeedCard
                icon={<BarChart3 className="h-5 w-5" />}
                title="Power BI"
                line1="Enterprise + DAX & RLS."
                line2="Cocok untuk data besar & governance."
                color="amber"
              />
              <NeedCard
                icon={<LineChart className="h-5 w-5" />}
                title="Tableau"
                line1="Storytelling & eksplorasi terbaik."
                line2="Pas untuk presentasi eksekutif."
                color="indigo"
              />
            </motion.div>


          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Gallery Portfolio</h2>
            <p className="text-slate-600 mt-2">
              Klik card untuk baca cerita: problem, objektif, dan solusi. Video/gif preview disediakan.
            </p>
          </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block text-sm text-slate-500">Filter:</div>
          <Segmented
            value={toolFilter}
            onChange={setToolFilter}
            options={["All", "Excel", "Google Sheets", "Looker Studio", "Power BI", "Tableau"]}
          />
          <div className="relative">
            <Filter className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Cari: retail, ROAS, KPI…"
              className="pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <button
                className="w-full text-left rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
                onClick={() => setActive(item)}
              >
                <img src={item.thumb} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.title}
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-100 border">
                      {item.tool}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.industry}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tg) => (
                      <span key={tg} className="px-2 py-0.5 text-xs rounded-full border bg-white">
                        {tg}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-indigo-600 flex items-center">
                    Lihat detail <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {active && (
          <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <div
              className="max-w-5xl w-full rounded-2xl bg-white p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xl font-semibold">{active.title}</div>
                  <div className="text-slate-500 mt-1">
                    {active.client ? `Client: ${active.client} · ${active.industry}` : active.industry}
                  </div>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-slate-100"
                  onClick={() => setActive(null)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-5 gap-6 mt-5">
                {/* Media — besar */}
                <div className="md:col-span-3 space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-slate-100">
                    {(() => {
                      const src = active.video || active.thumb;
                      const isVideo =
                        typeof src === "string" &&
                        (src.endsWith(".mp4") || src.endsWith(".webm"));
                      return isVideo ? (
                        <video
                          src={src}
                          controls
                          className="w-full bg-black h-[360px] md:h-[520px] object-contain"
                        />
                      ) : (
                        <img
                          src={src}
                          alt="preview"
                          className="w-full h-[360px] md:h-[520px] object-contain bg-white"
                        />
                      );
                    })()}
                    {/* Full view */}
                    <a
                      href={active.video || active.thumb}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur border text-xs hover:bg-white"
                      title="Buka ukuran penuh"
                    >
                      <Maximize2 className="h-3.5 w-3.5" /> Full view
                    </a>
                  </div>

                  {active.results?.length > 0 && (
                    <div className="p-4 bg-indigo-50 rounded-xl text-sm">
                      <div className="font-semibold mb-1">Hasil & Dampak</div>
                      <ul className="list-disc ml-5 space-y-1">
                        {active.results.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Detail — mencolok */}
                <div className="md:col-span-2 space-y-4">
                  <DetailBlock title="Problem"   text={active.problem}  variant="problem" />
                  <DetailBlock title="Objektif"  text={active.objective} variant="objective" />
                  <DetailBlock title="Solusi"    text={active.solution}  variant="solution" />
                  <a
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                    href={waBase(
                      `Halo, saya tertarik project seperti: ${active.title}. Boleh diskusi scope & timeline?`
                    )}
                  >
                    Diskusikan Proyek Ini
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Paket & Harga</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <PriceCard
            title="Simple (Excel / Sheets / Looker)"
            price={700_000}
            bullets={[
              "Data sudah rapi (cleaning minimal)",
              "Dashboard interaktif sesuai request",
              "Maks 2x revisi dalam 1 minggu",
              "Revisi gratis untuk error/bug",
            ]}
            ctaMsg="Halo, saya ingin paket Simple untuk Excel/Sheets/Looker."
          />
          <PriceCard
            title="Pro (Excel / Sheets / Looker)"
            price={1_500_000}
            accent
            bullets={[
              "Butuh cleaning/modeling/rumus kompleks",
              "Dashboard interaktif sesuai request",
              "Maks 2x revisi dalam 1 minggu",
              "Revisi gratis untuk error/bug",
            ]}
            ctaMsg="Halo, saya ingin paket Pro untuk Excel/Sheets/Looker."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
          <PriceCard
            title="Simple (Power BI / Tableau)"
            price={1_000_000}
            bullets={[
              "Data sudah rapi (cleaning minimal)",
              "Dashboard interaktif sesuai request",
              "Maks 2x revisi dalam 1 minggu",
              "Revisi gratis untuk error/bug",
            ]}
            ctaMsg="Halo, saya ingin paket Simple untuk Power BI/Tableau."
          />
          <PriceCard
            title="Pro (Power BI / Tableau)"
            price={1_800_000}
            accent
            bullets={[
              "Butuh cleaning/modeling/DAX/kalkulasi kompleks",
              "Dashboard interaktif sesuai request",
              "Maks 2x revisi dalam 1 minggu",
              "Revisi gratis untuk error/bug",
            ]}
            ctaMsg="Halo, saya ingin paket Pro untuk Power BI/Tableau."
          />
        </div>

        <div className="text-center mt-10">
          <a
            className="inline-flex items-center px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
            href={waBase(
              "Halo, saya ingin konsultasi paket yang paling cocok dengan kebutuhan saya."
            )}
          >
            Tanya Paket yang Cocok
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Harga “start from” — final tergantung cakupan, jumlah halaman, dan integrasi data.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Proses Kerja Ringkas</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: 1, t: "Discovery", d: "Pahami tujuan bisnis & data scope." },
            { n: 2, t: "Blueprint", d: "Sketsa layout, pilih metrik & model." },
            { n: 3, t: "Build", d: "ETL/cleaning, modeling, design UI." },
            { n: 4, t: "Handover", d: "Review, revisi, dokumentasi singkat." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border bg-white p-6">
              <div className="text-indigo-600 font-semibold">Step {s.n}</div>
              <div className="text-lg font-semibold">{s.t}</div>
              <div className="text-slate-600 mt-1 text-sm">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS COMPARE (dipindah dari hero) */}
      <section id="tools" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold">Perbedaan Tools (Singkat)</h2>
          <p className="text-slate-600 mt-2">Kelebihan & kekurangan untuk bantu pilih lebih cepat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ToolCard
            icon={<FileSpreadsheet className="h-5 w-5" />}
            title="Excel / Sheets"
            bestFor="Operasional cepat & template kustom."
            pros={["Biaya rendah & familiar", "Sangat fleksibel, offline OK"]}
            cons={["Skalabilitas terbatas", "Versi/kolaborasi bisa berantakan"]}
            classes={{
              container: "bg-emerald-50 border-emerald-200",
              title: "text-emerald-800",
              pill: "bg-emerald-100 text-emerald-800"
            }}
          />

          <ToolCard
            icon={<MonitorSmartphone className="h-5 w-5" />}
            title="Looker Studio"
            bestFor="Marketing/GA4/Ads, share via link."
            pros={["Gratis & cepat konek", "Mudah di-share ke publik"]}
            cons={["Modeling terbatas", "Quota/limit data tertentu"]}
            classes={{
              container: "bg-sky-50 border-sky-200",
              title: "text-sky-900",
              pill: "bg-sky-100 text-sky-800"
            }}
          />

          <ToolCard
            icon={<BarChart3 className="h-5 w-5" />}
            title="Power BI"
            bestFor="Enterprise modeling, DAX, RLS."
            pros={["Performa big data", "RLS & governance kuat"]}
            cons={["Butuh lisensi Pro/Premium", "Kurva belajar DAX"]}
            classes={{
              container: "bg-amber-50 border-amber-200",
              title: "text-amber-900",
              pill: "bg-amber-100 text-amber-900"
            }}
          />

          <ToolCard
            icon={<LineChart className="h-5 w-5" />}
            title="Tableau"
            bestFor="Visual storytelling & eksplorasi data."
            pros={["Viz kelas atas", "Prototyping interaktif cepat"]}
            cons={["Lisensi berbayar", "Butuh data prep rapi"]}
            classes={{
              container: "bg-indigo-50 border-indigo-200",
              title: "text-indigo-900",
              pill: "bg-indigo-100 text-indigo-900"
            }}
          />
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">FAQ Singkat</h2>
            <div className="mt-6 space-y-4">
              <Faq q="Berapa lama pengerjaan?" a="Simple umumnya 3–7 hari kerja, Pro 5–14 hari. Timeline disepakati di awal." />
              <Faq q="Apa saja yang saya dapat?" a="File dashboard final, dokumentasi singkat, dan support minor 7 hari." />
              <Faq q="Bagaimana revisi?" a="Maks 2x revisi dalam satu minggu setelah handover. Error/bug dari kami = gratis." />
              <Faq q="Apakah bisa NDA?" a="Bisa. Kami siap NDA atau masking data sensitif." />
            </div>
          </div>
          <div>
            <div className="p-6 bg-indigo-50 rounded-2xl h-full flex flex-col justify-center">
              <div className="text-lg font-semibold">Siap mulai?</div>
              <p className="text-slate-600 mt-1">
                Ceritakan kebutuhanmu, kirim contoh data (dummy boleh). Kami bantu rekomendasikan paket terbaik.
              </p>
              <div className="mt-4">
                <a
                  className="inline-flex items-center px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                  href={waBase("Halo, saya ingin membuat dashboard. Berikut gambaran kebutuhan saya: ...")}
                >
                  Chat WhatsApp Sekarang
                </a>
              </div>
              <div className="mt-3 text-xs text-slate-500">Balasan cepat di jam kerja (WIB).</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" /> Crafted for data-driven brands
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#portfolio">Portfolio</a>
            <a className="hover:underline" href="#pricing">Harga</a>
            <a className="hover:underline" href={waBase("Halo, saya ingin menanyakan ketersediaan jadwal pembuatan dashboard.")}>Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Kerja.id — All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

/* -----------------------------
   Small components
------------------------------ */
function SimpleCard({ title, children }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="px-4 pt-4 pb-2 font-semibold flex items-center gap-2 text-base">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function PriceCard({ title, price, bullets, ctaMsg, accent = false }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 ${
        accent ? "border-indigo-300 shadow-[0_10px_30px_rgba(79,70,229,0.08)]" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        {accent && (
          <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
            Paling Populer
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mt-2">
        {money(price)}
        <span className="text-base font-normal text-slate-500"> / start from</span>
      </div>
      <ul className="space-y-2 mt-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-slate-700 text-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      <a
        className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
        href={waBase(ctaMsg)}
      >
        Pesan via WhatsApp
      </a>
    </div>
  );
}

function ToolCard({ icon, title, bestFor, pros = [], cons = [], classes }) {
  return (
    <div
      className={`h-full rounded-2xl border p-4 md:p-5 ${classes?.container ?? ""}`}
      role="region"
      aria-label={title}
    >
      <div className={`flex items-center gap-2 font-semibold ${classes?.title ?? ""}`}>
        <span className={`inline-flex items-center px-2 py-1 rounded-lg ${classes?.pill ?? ""}`}>
          {icon}
        </span>
        <span>{title}</span>
      </div>

      <div className="mt-3 text-[13px] leading-5 text-slate-700">
        <div className="font-medium">Cocok untuk:</div>
        <div className="text-slate-600">{bestFor}</div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 text-[13px] leading-5">
        <div>
          <div className="font-medium text-slate-800">Kelebihan</div>
          <ul className="mt-1 space-y-1">
            {pros.map((p, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-medium text-slate-800">Kekurangan</div>
          <ul className="mt-1 space-y-1">
            {cons.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="h-4 w-4 shrink-0 rounded-full bg-slate-400/30 text-slate-500 grid place-content-center text-[10px]">–</span>
                <span className="text-slate-700">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function NeedCard({ icon, title, line1, line2, color = "emerald" }) {
  const map = {
    emerald: { border: "border-emerald-200", title: "text-emerald-800", pill: "bg-emerald-100 text-emerald-800" },
    sky:     { border: "border-sky-200",     title: "text-sky-900",     pill: "bg-sky-100 text-sky-800" },
    amber:   { border: "border-amber-200",   title: "text-amber-900",   pill: "bg-amber-100 text-amber-900" },
    indigo:  { border: "border-indigo-200",  title: "text-indigo-900",  pill: "bg-indigo-100 text-indigo-900" },
  };
  const c = map[color] || map.emerald;

  return (
    <div className={`rounded-2xl border bg-white p-4 md:p-5 ${c.border}`}>
      <div className={`flex items-center gap-2 font-semibold ${c.title}`}>
        <span className={`inline-flex items-center px-2 py-1 rounded-lg ${c.pill}`}>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="mt-2 text-sm text-slate-800 font-medium">{line1}</div>
      <div className="text-sm text-slate-600">{line2}</div>
    </div>
  );
}


function DetailBlock({ title, text, variant = "info" }) {
  if (!text) return null;
  const map = {
    problem:   { bg: "bg-rose-50",    border: "border-rose-200",    text: "text-rose-900",    Icon: AlertTriangle },
    objective: { bg: "bg-indigo-50",  border: "border-indigo-200",  text: "text-indigo-900",  Icon: Target },
    solution:  { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", Icon: Wrench },
    info:      { bg: "bg-slate-50",   border: "border-slate-200",   text: "text-slate-900",   Icon: Info },
  };
  const { bg, border, text: txt, Icon } = map[variant] || map.info;
  return (
    <div className={`rounded-xl p-4 border ${border} ${bg}`}>
      <div className={`flex items-center gap-2 font-semibold ${txt}`}>
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="text-sm text-slate-700 mt-1 whitespace-pre-line leading-relaxed">
        {text}
      </div>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="border rounded-2xl p-4">
      <div className="font-semibold">{q}</div>
      <div className="text-slate-600 text-sm mt-1">{a}</div>
    </div>
  );
}

function Badge({ children, icon }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-slate-100 border">
      {icon}
      {children}
    </span>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="inline-flex rounded-xl border bg-white overflow-hidden">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            className={`px-3 py-1.5 text-sm border-r last:border-r-0 ${
              active ? "bg-indigo-600 text-white" : "hover:bg-slate-50"
            }`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
