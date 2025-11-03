import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Gauge, Database, Settings2, Palette, Clock3, ArrowRight, CheckCircle2, ChevronRight,
  FileSpreadsheet, MonitorSmartphone, BarChart3, LineChart, Filter, X, Maximize2,
  Info, AlertTriangle, Target, Wrench, Star
} from "lucide-react";

/* ============================
   KONFIG WHATSAPP
============================= */
const WA_NUMBER = "6285155155285";
const wa = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

/* ============================
   ASSETS (pakai poster jpg utk list, gif utk detail)
   — biar ringan di list (mobile), gif diputar di modal
============================= */
// Excel
import excel1_gif from "../assets/Excel1.gif";     import excel1_jpg from "../assets/Excel1.jpg";
import excel2_gif from "../assets/Excel2.gif";     import excel2_jpg from "../assets/Excel2.jpg";
import excel3_gif from "../assets/Excel3.gif";     import excel3_jpg from "../assets/Excel3.jpg";
import excel4_gif from "../assets/Excel4.gif";     import excel4_jpg from "../assets/Excel4.jpg";
import excel5_gif from "../assets/Excel5.gif";     import excel5_jpg from "../assets/Excel5.jpg";
import excel6_gif from "../assets/Excel6.gif";     import excel6_jpg from "../assets/Excel6.jpg";
import excel7_gif from "../assets/Excel7.gif";     import excel7_jpg from "../assets/Excel7.jpg";
import excel8_gif from "../assets/Excel8.gif";     import excel8_jpg from "../assets/Excel8.jpg";
import excel9_gif from "../assets/Excel9.gif";     import excel9_jpg from "../assets/Excel9.jpg";
import excel10_gif from "../assets/Excel10.gif";   import excel10_jpg from "../assets/Excel10.jpg";
// Google Sheets
import gs1_gif from "../assets/Googlesheet1.gif";  import gs1_jpg from "../assets/Googlesheet1.jpg";
// Looker
import look1_gif from "../assets/Looker1.gif";     import look1_jpg from "../assets/Looker1.jpg";
import look2_gif from "../assets/Looker2.gif";     import look2_jpg from "../assets/Looker2.jpg";
// Power BI
import pbi1_gif from "../assets/Powerbi1.gif";     import pbi1_jpg from "../assets/Powerbi1.jpg";
// Tableau
import tab1_gif from "../assets/Tableau1.gif";     import tab1_jpg from "../assets/Tableau1.jpg";
import tab2_gif from "../assets/Tableau2.gif";     import tab2_jpg from "../assets/Tableau2.jpg";
import tab3_gif from "../assets/Tableau3.gif";     import tab3_jpg from "../assets/Tableau3.jpg";
import tab4_gif from "../assets/Tableau4.gif";     import tab4_jpg from "../assets/Tableau4.jpg";
import tab5_gif from "../assets/Tableau5.gif";     import tab5_jpg from "../assets/Tableau5.jpg";
import tab6_gif from "../assets/Tableau6.gif";     import tab6_jpg from "../assets/Tableau6.jpg";
import tab7_gif from "../assets/Tableau7.gif";     import tab7_jpg from "../assets/Tableau7.jpg";
import tab8_gif from "../assets/Tableau8.gif";     import tab8_jpg from "../assets/Tableau8.jpg";

/* ============================
   DATA PORTFOLIO
   (cukup 12 contoh; bisa tambah bebas, struktur sama)
============================= */
const CASES = [
  {
    id: "c-ex1",
    title: "Mess Dashboard",
    client: "Government / Military",
    tool: "Excel",
    industry: "Occupancy / Room Allocation",
    tags: ["Occupancy", "Room Allocation", "Check-in/out"],
    thumb: excel1_jpg,
    video: excel1_gif,
    featured: true,
    problem:
      "Pengelola mess kesulitan memantau kamar kosong/terisi per area & divisi termasuk riwayat tanggal/jam check-in–out. Data tersebar & update manual.",
    objective:
      "Satu dashboard yang menampilkan okupansi real-time per area & divisi, daftar kamar kosong, dan histori pengisian berbasis tanggal/waktu.",
    solution:
      "Model data sederhana + Excel (Pivot/Power Query) untuk konsolidasi & visual okupansi. UI dibuat clean sesuai tema institusi.",
    results: [
      "Waktu mencari kamar kosong turun drastis (menit).",
      "Akurasi naik; double-assign kamar berkurang signifikan.",
      "Proses alokasi antar divisi jadi transparan & audit-able.",
    ],
  },
  {
    id: "c-ex2",
    title: "Pelatihan Aplikasi Dokter",
    client: "Hospital",
    tool: "Excel",
    industry: "Training / Adoption",
    tags: ["Pelatihan", "Adopsi Aplikasi"],
    thumb: excel2_jpg,
    video: excel2_gif,
    problem:
      "Manajemen butuh memantau dokter & jabatan yang sudah pelatihan dan aktif menggunakan aplikasi maupun yang belum.",
    objective:
      "Monitoring progres pelatihan & adoption rate per dokter/jabatan, lengkap dengan status aktif/tidak aktif.",
    solution:
      "Power Query untuk cleaning data kehadiran/penggunaan, pivot tracking status, KPI adoption & sertifikasi.",
    results: ["Celah pelatihan cepat teridentifikasi", "Adoption rate meningkat"],
  },
  {
    id: "c-ex3",
    title: "Stock Inventory Tracker",
    client: "Retail",
    tool: "Excel",
    industry: "Warehouse",
    tags: ["Reorder", "Cashflow"],
    thumb: excel3_jpg,
    video: excel3_gif,
    featured: true,
    problem:
      "Sulit memantau stok masuk/keluar, kapan harus restock, & arus kas terkait pembelian/penjualan.",
    objective:
      "Tracking stok & reorder point, serta arus uang masuk/keluar sederhana untuk kontrol.",
    solution:
      "Excel modeling (safety stock, reorder) + dashboard ringkas untuk alert restock.",
    results: ["Stockout menurun", "Perencanaan pembelian lebih presisi"],
  },

    {
      id: "c-ex4",
      title: "Target Sales Tracker",
      tool: "Excel",
      industry: "Sales",
      tags: ["Target vs Actual", "Gantt", "Team Coloring"],
      thumb: excel4_jpg,
      video: excel4_gif,
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
      id: "c-ex5",
      title: "Project & Budget Tracker",
      tool: "Excel",
      industry: "PMO / Ops",
      tags: ["Timeline", "Priority", "Budget"],
      thumb: excel5_jpg,
      video: excel5_gif,
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
    id: "c-ex6",
    title: "Smartphone Sales Dashboard",
    client: "Retail Gadget",
    tool: "Excel",
    industry: "Sales",
    tags: ["Time series", "Dynamic metric"],
    thumb: excel6_jpg,
    video: excel6_gif,
    problem: "User ingin mengganti metrik (sales, profit, transaksi, qty) secara dinamis.",
    objective: "Analisis penjualan per area, tipe, & time series; metrik switchable.",
    solution: "Parameter + formula & Pivot untuk metrik dinamis; UI ringan.",
    results: ["Analisis fleksibel & cepat"],
  },

  {
    id: "c-ex7",
    title: "Monitoring Kepatuhan Diklat per Direktorat",
    tool: "Excel",
    industry: "Public Sector / HR",
    tags: ["Training Compliance", "Gap Analysis"],
    thumb: excel7_jpg,
    video: excel7_gif,
    problem: `Perlu memantau karyawan yang sudah/ belum memenuhi diklat per direktorat, dan modul apa saja yang masih kurang.`,
    objective: `Menyediakan tampilan ringkas daftar karyawan belum memenuhi diklat per direktorat beserta modul yang harus diambil.`,
    solution: `Match daftar kompetensi per jabatan dengan status diklat; gap-list otomatis per direktorat; filter nama/jabatan; export untuk tindak lanjut HR.`,
    results: [
      "Kesenjangan kompetensi terlihat jelas per direktorat.",
      "Tindak lanjut training lebih terarah & terukur.",
    ],
  },

  {
    id: "c-ex8",
    title: "Employee Dashboard (Attrition, HDRF Utilization, PISA)",
    tool: "Excel",
    industry: "HR",
    tags: ["Headcount", "Attrition", "Utilization", "Compliance"],
    thumb: excel8_jpg,
    video: excel8_gif,
    problem: `Manajemen memerlukan pandangan menyeluruh atas headcount saat ini, turnover/attrition, HDRF utilization, dan status PISA submission.`,
    objective: `Memberi gambaran kondisi tenaga kerja terkini dan indikator kepatuhan/ pemanfaatan program.`,
    solution: `ETL data HR master + log kepesertaan; KPI attrition & utilization; tren bulanan; segmentasi per unit/grade; indikator submission PISA.`,
    results: [
      "Visibilitas HR meningkat; diskusi manajemen lebih berbasis data.",
      "Area dengan risiko attrition tinggi cepat terdeteksi.",
    ],
  },

  {
    id: "c-ex9",
    title: "Project Monitoring + RAID",
    tool: "Excel",
    industry: "PMO / Ops",
    tags: ["Timeline", "RAID", "Issue Tracking"],
    thumb: excel9_jpg,
    video: excel9_gif,
    problem: `Mirip Project & Budget Tracker namun fokus pada kontrol proyek berjalan dan halaman RAID (Risks, Assumptions, Issues, Dependencies) untuk mitigasi.`,
    objective: `Memusatkan status proyek dan daftar risiko/isu/dependensi untuk mempercepat eskalasi dan keputusan.`,
    solution: `Ringkasan status & timeline, halaman RAID dengan owner, severity, due date, dan rekomendasi aksi; filter per project/PIC.`,
    results: [
      "Mitigasi risiko lebih cepat; blocking issues turun.",
      "Transparansi status proyek meningkat lintas tim.",
    ],
  },


  {
    id: "c-ex10",
    title: "Transport Management (VBA)",
    client: "Logistics",
    tool: "Excel",
    industry: "Transport",
    tags: ["Tonnage", "VBA"],
    thumb: excel10_jpg,
    video: excel10_gif,
    problem:
      "Update data bulanan manual lambat; butuh pilih file dan refresh otomatis.",
    objective:
      "Dashboard tonase per tanggal/perusahaan yang bisa update file bulanan secara dinamis.",
    solution: "VBA untuk pemilihan file & refresh; Query & pivot untuk visual.",
    results: ["Update cepat, human error menurun"],
  },
  {
    id: "c-gs1",
    title: "Data Cleaning & Analytics Doc",
    client: "Supermarket",
    tool: "Google Sheets",
    industry: "Analytics",
    tags: ["Documentation", "Cleaning"],
    thumb: gs1_jpg,
    video: gs1_gif,
    problem: "Dokumentasi proses cleaning & insight toko belum rapi.",
    objective: "Dok report untuk pola penjualan & customer.",
    solution: "Template doc + sheet cleaning log; insight ringkas.",
    results: ["Proses data reproducible"],
  },
  {
    id: "c-look1",
    title: "FnB Store Performance",
    client: "F&B",
    tool: "Looker Studio",
    industry: "Sales / Finance",
    tags: ["CAPEX", "OPEX", "Geo"],
    thumb: look1_jpg,
    video: look1_gif,
    featured: true,
    problem:
      "Owner ingin pantau target penjualan & pengeluaran per kota/provinsi tanpa biaya lisensi BI.",
    objective:
      "Dashboard marketing/finance cepat, mudah dishare.",
    solution:
      "Looker Studio (gratis) + GA4/Ads + spreadsheet; visual geo & KPI.",
    results: ["Akses mudah lintas cabang", "Share link praktis"],
  },
  {
    id: "c-look2",
    title: "KOL Endorsement Tracker",
    client: "Agency",
    tool: "Looker Studio",
    industry: "Marketing",
    tags: ["Pipeline", "Impact"],
    thumb: look2_jpg,
    video: look2_gif,
    problem: "Sulit memantau KOL mana yang belum deal/proses/selesai & dampaknya.",
    objective: "Pipeline KOL end-to-end dgn tema warna Google.",
    solution: "Looker + Sheet (form) untuk status & skor impact.",
    results: ["Transparansi proses meningkat"],
  },
  {
    id: "c-pbi1",
    title: "Store Sales + Discount Simulator",
    client: "Retail",
    tool: "Power BI",
    industry: "Sales",
    tags: ["Geo map", "Discount"],
    thumb: pbi1_jpg,
    video: pbi1_gif,
    problem:
      "Perlu simulasi diskon per produk & visual geo penjualan per provinsi.",
    objective: "Analisis sales & dampak diskon cepat.",
    solution: "Model star + DAX untuk parameter diskon, Map visual.",
    results: ["Eksperimen harga lebih percaya diri"],
  },
  {
    id: "c-tab1",
    title: "RFM Analysis",
    client: "E-commerce",
    tool: "Tableau",
    industry: "CRM",
    tags: ["Segmentation", "RFM"],
    thumb: tab1_jpg,
    video: tab1_gif,
    featured: true,
    problem:
      "Butuh segmentasi customer dg alasan & ringkasan yang jelas.",
    objective:
      "RFM dashboard menampilkan proporsi segmen & alasan scoring.",
    solution: "Tableau viz best-practice & tooltip ringkas.",
    results: ["Retensi & targeting naik"],
  },

  {
    id: "c-tab2",
    title: "RFM Analysis — Customer Detail",
    tool: "Tableau",
    industry: "E-Commerce / Retail",
    tags: ["RFM Detail", "Customer 360"],
    thumb: tab2_jpg,
    video: tab2_gif,
    problem: `Setelah overview, tim butuh melihat nilai recency/frequency/monetary per customer dan segmen masing-masing.`,
    objective: `Memberikan tampilan detail per customer lengkap dengan skor & riwayat transaksi.`,
    solution: `Tabel detail customer dengan R/F/M, filter segmen, link drill ke histori transaksi; export untuk CRM campaign.`,
    results: [
      "Tim CRM bisa mengeksekusi kampanye yang sangat terarah.",
      "Analisis churn & upsell jadi actionable.",
    ],
  },

  {
    id: "c-tab3",
    title: "Monitoring Administrasi Kapal",
    tool: "Tableau",
    industry: "Marine",
    tags: ["Compliance", "Budget Usage"],
    thumb: tab3_jpg,
    video: tab3_gif,
    problem: `Perlu memeriksa kelengkapan administrasi tiap kapal serta anggaran yang sudah terpakai.`,
    objective: `Menyediakan status kepatuhan administrasi per kapal dan ringkasan biaya terkait.`,
    solution: `Checklist dokumen per kapal, indikator hijau/merah, rekap biaya per kapal/per periode; filter armada & rute.`,
    results: [
      "Temuan dokumen kurang lengkap turun signifikan.",
      "Kontrol biaya per kapal lebih ketat & terdokumentasi.",
    ],
  },

  {
    id: "c-tab4",
    title: "Monitoring Status Kapal",
    tool: "Tableau",
    industry: "Marine",
    tags: ["Asset Value", "Destination", "Vendor"],
    thumb: tab4_jpg,
    video: tab4_gif,
    problem: `Manajemen ingin melihat nilai kapal per unit, tujuan, penyedia, serta dinamika anggaran & nilai per bulan.`,
    objective: `Memberikan pandangan menyeluruh nilai aset & pergerakannya per vendor/tujuan.`,
    solution: `Model aset kapal, ringkasan nilai/budget bulanan, breakdown per vendor & tujuan, tren nilai, dan indikator penyimpangan.`,
    results: [
      "Pengambilan keputusan investasi/maintenance lebih berbasis data.",
      "Variasi nilai per vendor/tujuan lebih mudah dianalisis.",
    ],
  },

  {
    id: "c-tab5",
    title: "Smartphone Sales (Branches)",
    client: "Retail Gadget",
    tool: "Tableau",
    industry: "Sales",
    tags: ["Branch", "Type", "Spend"],
    thumb: tab5_jpg,
    video: tab5_gif,
    problem: "Butuh ringkasan penjualan & pengeluaran antar cabang/merk/type.",
    objective: "KPI sales/spend & drilldown cepat.",
    solution: "Model star + viz interaktif.",
    results: ["Kontrol biaya & penjualan lebih presisi"],
  },

  {
    id: "c-tab6",
    title: "Financial Development Dashboard",
    tool: "Tableau",
    industry: "Finance",
    tags: ["Dept", "Cost Center", "Revenue", "Expenses"],
    thumb: tab6_jpg,
    video: tab6_gif,
    problem: `Manajemen butuh memantau nilai ekonomi per department, cost centre, revenue & expenses, termasuk tren penjualan.`,
    objective: `Satu dashboard keuangan komprehensif untuk pemantauan performa & efisiensi biaya.`,
    solution: `Ringkasan P&L per dept/cost centre, tren revenue & expense, variance vs target, dan drill ke transaksi besar.`,
    results: [
      "Identifikasi penghematan biaya lebih cepat.",
      "Kinerja departemen bisa dibandingkan secara objektif.",
    ],
  },

  {
    id: "c-tab7",
    title: "KPI Sales Dashboard",
    tool: "Tableau",
    industry: "Sales",
    tags: ["Target vs Actual", "Province", "Agent"],
    thumb: tab7_jpg,
    video: tab7_gif,
    problem: `Perlu memantau target vs actual, revenue per provinsi, dan achievement per agen sales.`,
    objective: `Memberikan dasbor KPI penjualan yang langsung menyorot pencapaian & deviasi.`,
    solution: `Kartu KPI, peta provinsi, leaderboard agen, serta filter waktu/produk; highlight gap untuk coaching cepat.`,
    results: [
      "Fokus pembinaan agen menjadi jelas & berdampak.",
      "Pertumbuhan penjualan lebih konsisten lintas provinsi.",
    ],
  },

  {
    id: "c-tab8",
    title: "BPJS Health — Comprehensive",
    client: "Healthcare",
    tool: "Tableau",
    industry: "Insurance / Health",
    tags: ["Diagnosis", "Premium", "City"],
    thumb: tab8_jpg,
    video: tab8_gif,
    problem:
      "Perlu pandangan komprehensif: penyakit, level asuransi, premi, biaya per kota, demografi dsb.",
    objective:
      "Eksplorasi lengkap dengan ringkasan eksekutif.",
    solution:
      "Tableau multi-page + bookmark; viz advanced.",
    results: ["Insight eksekutif cepat, detail tersedia"],
  },
];

/* ============================
   PAGE KOMPONEN
============================= */
export default function PortfolioServicePage() {
  /* --- state & derived --- */
  const [filter, setFilter] = useState("All");
  const [q, setQ] = useState("");
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false); // tampil 4

  const filtered = useMemo(() => {
    const qq = q.toLowerCase();
    const f = filter;
    const res = CASES.filter((c) => {
      const okTool = f === "All" || c.tool === f;
      const okQ =
        !qq ||
        [c.title, c.industry, c.tool, c.problem, c.objective, c.solution, ...(c.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(qq);
      return okTool && okQ;
    });
    // fallback bila kosong -> tampilkan semua biar gallery tidak hilang
    return res.length ? res : CASES;
  }, [filter, q]);

  const items = useMemo(() => {
    if (showAll) return filtered;
    const feat = filtered.filter((c) => c.featured);
    return feat.length ? feat : filtered.slice(0, 4);
  }, [filtered, showAll]);

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
            href={wa("Hi kak, mau tanya-tanya dulu tentang jasa pembuatan dashboard ya 🙌")}
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
              Jasa dashboard untuk <b>Excel</b>, <b>Google Sheets</b>, <b>Looker Studio</b>, <b>Power BI</b>, dan <b>Tableau</b>.
              Fokus: insight cepat, otomasi rapi, desain sesuai brand.
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
                href={wa("Hi kak, mau tanya-tanya dulu tentang jasa pembuatan dashboard ya 🙌")}
              >
                Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a className="inline-flex items-center px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50" href="#portfolio">
                Lihat Portfolio
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500 flex items-center gap-1">
              <Info className="h-3.5 w-3.5" /> Bonus: revisi gratis untuk error/bug.
            </p>
          </div>

          <div className="md:pl-6">
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-2 gap-4">
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
                line2="Dashboard online gratis tanpa ribet."
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

      {/* GALLERY */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Gallery Portfolio</h2>
            <p className="text-slate-600 mt-2">
              Klik card untuk baca cerita: problem, objektif, dan solusi. Preview dibuat ringan untuk mobile.
            </p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="hidden md:block text-sm text-slate-500">Filter:</div>
            <Segmented
              value={filter}
              onChange={(v) => {
                setFilter(v);
                setShowAll(true);
              }}
              options={["All", "Excel", "Google Sheets", "Looker Studio", "Power BI", "Tableau"]}
            />
            <div className="relative flex-1 md:flex-none">
              <Filter className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Cari: retail, geo map, KPI…"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((it) => (
            <motion.div key={it.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <button
                className="w-full text-left rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
                onClick={() => setActive(it)}
                aria-label={`Lihat detail ${it.title}`}
              >
                <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={it.thumb}
                    alt={it.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {it.title}
                    </div>
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-100 border">{it.tool}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 overflow-hidden text-ellipsis whitespace-nowrap">
                    {it.industry}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {it.tags?.map((tg) => (
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

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-4 py-2 rounded-2xl border bg-white hover:bg-slate-50"
          >
            {showAll ? "Tampilkan 4 Contoh" : "Lihat Semua Portfolio"}
          </button>
        </div>

        {active && (
          <Modal isOpen={!!active} onClose={() => setActive(null)}>
            <ModalPanel data={active} onClose={() => setActive(null)} />
          </Modal>
        )}
      </section>

      {/* PRICING (rapi & tinggi sama) */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Paket & Harga</h2>
        </div>

        <h3 className="text-lg font-semibold mb-3">Paket Sheets (Excel / Google Sheets)</h3>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <PriceCard
            title="Dashboard Premium - Sheets"
            price={700_000}
            bullets={[
              "Data sudah rapi (cleaning minimal)",
              "Dashboard interaktif sesuai request",
              "Design rapi sesuai tema",
              "Maks 2x revisi dalam 1 minggu setelah handover",
              "Revisi gratis untuk error/bug dalam 2 minggu",
            ]}
            ctaMsg="hi kak, mau tanya-tanya tentang paket dashboard premium excel/sheets nih 🙌"
          />
          <PriceCard
            title="Dashboard Pro - Sheets"
            price={1_500_000}
            accent
            bullets={[
              "Butuh cleaning/modeling/rumus kompleks",
              "Dashboard interaktif sesuai request",
              "Design rapi sesuai tema",
              "Maks 2x revisi dalam 1 minggu setelah handover",
              "Revisi gratis untuk error/bug dalam 2 minggu",
            ]}
            ctaMsg="hi kak, mau tanya-tanya tentang paket dashboard pro excel/sheets nih 🙌"
          />
        </div>

        <h3 className="text-lg font-semibold mt-10 mb-3">Paket BI (Looker / Power BI / Tableau)</h3>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <PriceCard
            title="Dashboard Premium - BI Tools"
            price={1_000_000}
            bullets={[
              "Data sudah rapi (cleaning minimal)",
              "Dashboard interaktif sesuai request",
              "Design rapi sesuai tema",
              "Maks 2x revisi dalam 1 minggu setelah handover",
              "Revisi gratis untuk error/bug dalam 2 minggu",
            ]}
            ctaMsg="hi kak, mau tanya-tanya tentang paket dashboard premium BI (Looker/Power BI/Tableau) nih 🙌"
          />
          <PriceCard
            title="Dashboard Pro - BI Tools"
            price={2_000_000}
            accent
            bullets={[
              "Butuh cleaning/modeling/DAX/kalkulasi kompleks",
              "Dashboard interaktif sesuai request",
              "Design rapi sesuai tema",
              "Maks 2x revisi dalam 1 minggu setelah handover",
              "Revisi gratis untuk error/bug dalam 2 minggu",
            ]}
            ctaMsg="hi kak, mau tanya-tanya tentang paket dashboard pro BI (Looker/Power BI/Tableau) nih 🙌"
          />
        </div>

        <div className="text-center mt-10">
          <a
            className="inline-flex items-center px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
            href={wa("Halo, saya ingin konsultasi paket yang paling cocok dengan kebutuhan saya.")}
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
          <StepCard n={1} t="Discovery" d="Klien brief kebutuhan: tujuan bisnis, data scope, dan sample data." />
          <StepCard n={2} t="Deal" d="Klien setuju dengan harga & melakukan DP. Kami kunci scope & timeline." />
          <StepCard
            n={3}
            t="Build Process"
            d="Kami proses ETL/cleaning data, modeling, desain UI sesuai tema/request."
          />
          <StepCard n={4} t="Handover" d="Review, revisi, dokumentasi singkat, dan serah terima." />
        </div>
      </section>  

      {/* COMPARISON SECTION — Perbedaan Tiap Tools */}
      <section id="tools-diff" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Perbedaan Tiap Tools</h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Pilih tools sesuai kebutuhan dan skala datamu. Berikut perbandingan singkat dari masing-masing platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Excel / Sheets */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-emerald-800 font-semibold">
              <FileSpreadsheet className="h-5 w-5" /> Excel / Sheets
            </div>
            <p className="text-sm text-slate-800 font-medium">Cocok untuk:</p>
            <p className="text-sm text-slate-700 mb-2">Operasional cepat & template kustom.</p>
            <p className="text-sm font-semibold text-emerald-800">Kelebihan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 mb-2">
              <li>Biaya rendah & familiar</li>
              <li>Sangat fleksibel, bisa offline</li>
            </ul>
            <p className="text-sm font-semibold text-emerald-800">Kekurangan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5">
              <li>Skalabilitas terbatas</li>
              <li>Kolaborasi manual & bisa berantakan</li>
            </ul>
          </div>

          {/* Looker Studio */}
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-sky-800 font-semibold">
              <MonitorSmartphone className="h-5 w-5" /> Looker Studio
            </div>
            <p className="text-sm text-slate-800 font-medium">Cocok untuk:</p>
            <p className="text-sm text-slate-700 mb-2">Kebutuhan simple, ga butuh instalasi/lisensi, share via link.</p>
            <p className="text-sm font-semibold text-sky-800">Kelebihan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 mb-2">
              <li>Gratis & cepat konek</li>
              <li>Mudah di-share ke publik</li>
            </ul>
            <p className="text-sm font-semibold text-sky-800">Kekurangan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5">
              <li>Modeling terbatas</li>
              <li>Quota/limit data tertentu</li>
            </ul>
          </div>

          {/* Power BI */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-amber-800 font-semibold">
              <BarChart3 className="h-5 w-5" /> Power BI
            </div>
            <p className="text-sm text-slate-800 font-medium">Cocok untuk:</p>
            <p className="text-sm text-slate-700 mb-2">Enterprise modeling, DAX, dan RLS.</p>
            <p className="text-sm font-semibold text-amber-800">Kelebihan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 mb-2">
              <li>Performa tinggi untuk data besar</li>
              <li>RLS & governance kuat</li>
            </ul>
            <p className="text-sm font-semibold text-amber-800">Kekurangan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5">
              <li>Butuh email kantor & lisensi Pro/Premium jika mau online</li>
            </ul>
          </div>

          {/* Tableau */}
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 text-indigo-800 font-semibold">
              <LineChart className="h-5 w-5" /> Tableau
            </div>
            <p className="text-sm text-slate-800 font-medium">Cocok untuk:</p>
            <p className="text-sm text-slate-700 mb-2">Visual storytelling & eksplorasi data.</p>
            <p className="text-sm font-semibold text-indigo-800">Kelebihan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 mb-2">
              <li>Visual kelas atas</li>
              <li>Prototyping interaktif cepat</li>
            </ul>
            <p className="text-sm font-semibold text-indigo-800">Kekurangan</p>
            <ul className="text-sm text-slate-700 list-disc ml-5">
              <li>Harga lisensi cukup mahal</li>
              <li>Butuh data yang lebih rapi</li>
            </ul>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">FAQ Singkat</h2>
            <div className="mt-6 space-y-4">
              <Faq q="Berapa lama pengerjaan?" a="Premium umumnya 3–7 hari kerja, Pro 5–14 hari. Timeline disepakati di awal." />
              <Faq q="Apa saja yang saya dapat?" a="File dashboard final, dokumentasi singkat, dan support minor 7 hari." />
              <Faq
                q="Bedanya Premium vs Pro?"
                a="Premium: kami hanya cleaning data minimal. Pro: ETL/modeling & kalkulasi lebih kompleks, halaman bisa >2. Kualitas desain & proses tetap sama bagusnya."
              />
              <Faq q="Apakah bisa NDA?" a="Bisa. Kami siap tanda tangan NDA jika diperlukan." />
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
                  href={wa("Halo, saya ingin membuat dashboard. Berikut gambaran kebutuhan saya: ...")}
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
            <a className="hover:underline" href={wa("Halo, saya ingin menanyakan ketersediaan jadwal pembuatan dashboard.")}>Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Kerja.id — All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

/* ============================
   MODAL + BODY LOCK (MOBILE OK)
============================= */
function useBodyLock(open) {
  const y = useRef(0);
  useEffect(() => {
    if (!open) return;
    y.current = window.scrollY || window.pageYOffset;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${y.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflowY = prev.overflowY;
      window.scrollTo(0, y.current);
    };
  }, [open]);
}

function Modal({ isOpen, onClose, children }) {
  useBodyLock(isOpen);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 flex justify-center min-h-screen min-h-[100svh] p-4 sm:p-6 overflow-y-auto overscroll-contain">
        <div className="w-full max-w-5xl">{children}</div>
      </div>
    </div>
  );
}

function ModalPanel({ data, onClose }) {
  return (
    <div className="rounded-2xl bg-white shadow-xl border pointer-events-auto" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between gap-3 p-5 border-b sticky top-0 bg-white/95 backdrop-blur z-10 rounded-t-2xl">
        <div>
          <div id="modal-title" className="text-lg md:text-xl font-semibold">{data.title}</div>
          <div className="text-slate-500 mt-1">{data.industry}</div>
        </div>
        <button className="p-2 rounded-lg hover:bg-slate-100" onClick={onClose} aria-label="Tutup">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="px-5 pb-5">
        <div className="mt-5 max-h-[80svh] md:max-h-[85vh] overflow-y-auto pr-1">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3 space-y-4">
              <div className="relative rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={data.video || data.thumb}
                  alt="preview"
                  className="w-full h-[360px] md:h-[520px] object-contain bg-white"
                  loading="lazy"
                  decoding="async"
                />
                <a
                  href={data.video || data.thumb}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/90 backdrop-blur border text-xs hover:bg-white"
                  title="Buka ukuran penuh"
                >
                  <Maximize2 className="h-3.5 w-3.5" /> Full view
                </a>
              </div>

              {data.results?.length > 0 && (
                <div className="p-4 bg-indigo-50 rounded-xl text-sm">
                  <div className="font-semibold mb-1">Hasil & Dampak</div>
                  <ul className="list-disc ml-5 space-y-1">
                    {data.results.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="md:col-span-2 space-y-4">
              <Detail title="Problem" text={data.problem} variant="problem" />
              <Detail title="Objektif" text={data.objective} variant="objective" />
              <Detail title="Solusi" text={data.solution} variant="solution" />
              <a
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                href={wa(`Hi kak, saya tertarik project seperti: ${data.title}. Boleh diskusi scope & timeline?`)}
              >
                Diskusikan Proyek Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================
   UI KOMPONEN KECIL
============================= */
function PriceCard({ title, price, bullets, ctaMsg, accent = false }) {
  return (
    <div className={`h-full rounded-2xl border bg-white p-6 flex flex-col ${accent ? "border-indigo-300 shadow-[0_10px_30px_rgba(79,70,229,0.08)]" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        {accent && <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Paling Populer</span>}
      </div>
      <div className="text-3xl font-bold mt-2">
        {rupiah(price)} <span className="text-base font-normal text-slate-500">/ start from</span>
      </div>
      <ul className="space-y-2 mt-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-slate-700 text-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5" /> {b}
          </li>
        ))}
      </ul>
      <a
        className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
        href={wa(ctaMsg)}
      >
        Pesan via WhatsApp
      </a>

    </div>
  );
}

function StepCard({ n, t, d }) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <div className="text-indigo-600 font-semibold">Step {n}</div>
      <div className="text-lg font-semibold">{t}</div>
      <div className="text-slate-600 mt-1 text-sm">{d}</div>
    </div>
  );
}

function NeedCard({ icon, title, line1, line2, color = "emerald" }) {
  const c = {
    emerald: { border: "border-emerald-200", title: "text-emerald-800", pill: "bg-emerald-100 text-emerald-800" },
    sky: { border: "border-sky-200", title: "text-sky-900", pill: "bg-sky-100 text-sky-800" },
    amber: { border: "border-amber-200", title: "text-amber-900", pill: "bg-amber-100 text-amber-900" },
    indigo: { border: "border-indigo-200", title: "text-indigo-900", pill: "bg-indigo-100 text-indigo-900" },
  }[color];
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

function Detail({ title, text, variant = "info" }) {
  if (!text) return null;
  const map = {
    problem: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-900", Icon: AlertTriangle },
    objective: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-900", Icon: Target },
    solution: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", Icon: Wrench },
    info: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-900", Icon: Info },
  }[variant] || {};
  const Icon = map.Icon || Info;
  return (
    <div className={`rounded-xl p-4 border ${map.border} ${map.bg}`}>
      <div className={`flex items-center gap-2 font-semibold ${map.text}`}>
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="text-sm text-slate-700 mt-1 whitespace-pre-line leading-relaxed">{text}</div>
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

/** Segmented control — scrollable di mobile */
function Segmented({ value, onChange, options }) {
  return (
    <div className="max-w-full overflow-x-auto -mx-1 px-1">
      <div className="inline-flex whitespace-nowrap rounded-xl border bg-white overflow-hidden">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              className={`px-3 py-1.5 text-sm border-r last:border-r-0 ${active ? "bg-indigo-600 text-white" : "hover:bg-slate-50"}`}
              onClick={() => onChange(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
