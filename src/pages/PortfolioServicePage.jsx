import React, { useMemo, useRef, useState, useEffect } from "react";
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

/* ============================
   ASSETS (GIF + Poster JPG)
============================= */
// Excel
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

import excel1Poster from "../assets/Excel1.jpg";
import excel2Poster from "../assets/Excel2.jpg";
import excel3Poster from "../assets/Excel3.jpg";
import excel4Poster from "../assets/Excel4.jpg";
import excel5Poster from "../assets/Excel5.jpg";
import excel6Poster from "../assets/Excel6.jpg";
import excel7Poster from "../assets/Excel7.jpg";
import excel8Poster from "../assets/Excel8.jpg";
import excel9Poster from "../assets/Excel9.jpg";
import excel10Poster from "../assets/Excel10.jpg";

// Google Sheets
import googleSheet1 from "../assets/Googlesheet1.gif";
import googleSheet1Poster from "../assets/Googlesheet1.jpg";

// Looker
import looker1 from "../assets/Looker1.gif";
import looker2 from "../assets/Looker2.gif";
import looker1Poster from "../assets/Looker1.jpg";
import looker2Poster from "../assets/Looker2.jpg";

// Power BI
import powerbi1 from "../assets/Powerbi1.gif";
import powerbi1Poster from "../assets/Powerbi1.jpg";

// Tableau
import tableau1 from "../assets/Tableau1.gif";
import tableau2 from "../assets/Tableau2.gif";
import tableau3 from "../assets/Tableau3.gif";
import tableau4 from "../assets/Tableau4.gif";
import tableau5 from "../assets/Tableau5.gif";
import tableau6 from "../assets/Tableau6.gif";
import tableau7 from "../assets/Tableau7.gif";
import tableau8 from "../assets/Tableau8.gif";

import tableau1Poster from "../assets/Tableau1.jpg";
import tableau2Poster from "../assets/Tableau2.jpg";
import tableau3Poster from "../assets/Tableau3.jpg";
import tableau4Poster from "../assets/Tableau4.jpg";
import tableau5Poster from "../assets/Tableau5.jpg";
import tableau6Poster from "../assets/Tableau6.jpg";
import tableau7Poster from "../assets/Tableau7.jpg";
import tableau8Poster from "../assets/Tableau8.jpg";

/* -----------------------------
   Utils
------------------------------ */
const WA_NUMBER = "6285155155285";
const waBase = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const money = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

/* -----------------------------
   Data (Portfolio) — (dipangkas utk singkat)
   NOTE: tetap gunakan daftar CASES dari versi sebelumnya.
------------------------------ */
const CASES = [
  // … (gunakan CASES lengkap dari versi sebelumnya yang sudah OK)
];

/* -----------------------------
   Page
------------------------------ */
export default function PortfolioServicePage() {
  const [query, setQuery] = useState("");
  const [toolFilter, setToolFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  const itemsToRender = useMemo(() => {
    if (showAll) return filtered;
    const featured = filtered.filter((c) => c.featured);
    if (featured.length >= 4) return featured.slice(0, 4);
    return filtered.slice(0, 4);
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
            href={waBase("Hi kak, mau tanya-tanya dulu tentang jasa pembuatan dashboard ya 🙌")}
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
              <b>Power BI</b>, dan <b>Tableau</b>. Fokus: insight cepat, otomasi rapi, desain sesuai brand.
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
                href={waBase("Hi kak, mau tanya-tanya dulu tentang jasa pembuatan dashboard ya 🙌")}
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
              Klik card untuk baca cerita: problem, objektif, dan solusi. Preview dibuat ringan untuk mobile.
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="hidden md:block text-sm text-slate-500">Filter:</div>
            {/* scrollable segmented */}
            <Segmented
              value={toolFilter}
              onChange={(v) => {
                setToolFilter(v);
                setShowAll(false);
              }}
              options={["All", "Excel", "Google Sheets", "Looker Studio", "Power BI", "Tableau"]}
            />
            <div className="relative flex-1 md:flex-none">
              <Filter className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Cari: retail, geo map, KPI…"
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowAll(true);
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {itemsToRender.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <button
                className="w-full text-left rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
                onClick={() => setActive(item)}
                aria-label={`Lihat detail ${item.title}`}
              >
                <div className="w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
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
                    {item.tags?.map((tg) => (
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

        {/* MODAL */}
        {active && (
          <Modal isOpen={!!active} onClose={() => setActive(null)}>
            <ModalPanel active={active} onClose={() => setActive(null)} />
          </Modal>
        )}
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">Paket & Harga</h2>
        </div>

        {/* GROUP 1: SHEETS */}
        <h3 className="text-lg font-semibold mb-3">Paket Sheets (Excel / Google Sheets)</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          <PriceCard
            title="Premium — Sheets"
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
            title="Pro — Sheets"
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

        {/* GROUP 2: BI */}
        <h3 className="text-lg font-semibold mb-3">Paket BI (Looker / Power BI / Tableau)</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <PriceCard
            title="Premium — BI"
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
            title="Pro — BI"
            price={1_800_000}
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
            href={waBase("Halo, saya ingin konsultasi paket yang paling cocok dengan kebutuhan saya.")}
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
          <StepCard
            n={1}
            t="Discovery"
            d="Klien brief kebutuhan: tujuan bisnis, data scope, dan sample data."
          />
          <StepCard
            n={2}
            t="Deal"
            d="Klien setuju dengan harga & melakukan DP. Kami kunci scope & timeline."
          />
          <StepCard n={3} t="Build" d="ETL/cleaning, modeling, desain UI; progress update rutin." />
          <StepCard n={4} t="Handover" d="Review, revisi, dokumentasi singkat, dan serah terima." />
        </div>
      </section>

      {/* TOOLS COMPARE (tetap) */}
      {/* … (biarkan sama seperti sebelumnya) */}

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">FAQ Singkat</h2>
            <div className="mt-6 space-y-4">
              <Faq q="Berapa lama pengerjaan?" a="Premium umumnya 3–7 hari kerja, Pro 5–14 hari. Timeline disepakati di awal." />
              <Faq q="Apa saja yang saya dapat?" a="File dashboard final, dokumentasi singkat, dan support minor 7 hari." />
              <Faq
                q="Bedanya Premium vs Pro apa?"
                a="Pada paket Pro, request & proses ETL/modeling lebih kompleks (mis. DAX/transformasi berat), jumlah halaman bisa >2, dan biasanya melibatkan skenario analitik yang lebih advanced. Di luar itu, kualitas desain, flow kerja, dan after-sales tetap sama bagusnya dengan Premium."
              />
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

/* ============================
   Modal (scrollable + body lock)
============================= */
function useBodyScrollLock(isOpen) {
  const scrollYRef = useRef(0);
  useEffect(() => {
    if (!isOpen) return;
    scrollYRef.current = window.scrollY || window.pageYOffset;
    const original = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflowY: document.body.style.overflowY,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.position = original.position;
      document.body.style.top = original.top;
      document.body.style.left = original.left;
      document.body.style.right = original.right;
      document.body.style.width = original.width;
      document.body.style.overflowY = original.overflowY;
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);
}

function Modal({ isOpen, onClose, children }) {
  useBodyScrollLock(isOpen);
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

function ModalPanel({ active, onClose }) {
  return (
    <div className="rounded-2xl bg-white shadow-xl border pointer-events-auto" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-start justify-between gap-3 p-5 border-b sticky top-0 bg-white/95 backdrop-blur z-10 rounded-t-2xl">
        <div>
          <div id="modal-title" className="text-lg md:text-xl font-semibold">{active.title}</div>
          <div className="text-slate-500 mt-1">{active.industry}</div>
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
                {(() => {
                  const src = active.video || active.thumb;
                  const isVideo = typeof src === "string" && (src.endsWith(".mp4") || src.endsWith(".webm"));
                  return isVideo ? (
                    <video
                      src={src}
                      controls
                      poster={active.thumb}
                      preload="metadata"
                      className="w-full bg-black h-[360px] md:h-[520px] object-contain"
                    />
                  ) : src.endsWith(".gif") ? (
                    <img
                      src={src}
                      alt="preview"
                      className="w-full h-[360px] md:h-[520px] object-contain bg-white"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <img
                      src={active.thumb}
                      alt="preview"
                      className="w-full h-[360px] md:h-[520px] object-contain bg-white"
                      loading="lazy"
                      decoding="async"
                    />
                  );
                })()}
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
                    {active.results.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
            </div>

            <div className="md:col-span-2 space-y-4">
              <DetailBlock title="Problem" text={active.problem} variant="problem" />
              <DetailBlock title="Objektif" text={active.objective} variant="objective" />
              <DetailBlock title="Solusi" text={active.solution} variant="solution" />
              <a
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700"
                href={waBase(`Hi kak, saya tertarik project seperti: ${active.title}. Boleh diskusi scope & timeline?`)}
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

/* -----------------------------
   Small components
------------------------------ */
function PriceCard({ title, price, bullets, ctaMsg, accent = false }) {
  return (
    <div className={`rounded-2xl border bg-white p-6 ${accent ? "border-indigo-300 shadow-[0_10px_30px_rgba(79,70,229,0.08)]" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        {accent && <span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Paling Populer</span>}
      </div>
      <div className="text-3xl font-bold mt-2">
        {money(price)}<span className="text-base font-normal text-slate-500"> / start from</span>
      </div>
      <ul className="space-y-2 mt-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-slate-700 text-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      <a className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700" href={waBase(ctaMsg)}>
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

function ToolCard({ icon, title, bestFor, pros = [], cons = [], classes }) {
  return (
    <div className={`h-full rounded-2xl border p-4 md:p-5 ${classes?.container ?? ""}`} role="region" aria-label={title}>
      <div className={`flex items-center gap-2 font-semibold ${classes?.title ?? ""}`}>
        <span className={`inline-flex items-center px-2 py-1 rounded-lg ${classes?.pill ?? ""}`}>{icon}</span>
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
    sky: { border: "border-sky-200", title: "text-sky-900", pill: "bg-sky-100 text-sky-800" },
    amber: { border: "border-amber-200", title: "text-amber-900", pill: "bg-amber-100 text-amber-900" },
    indigo: { border: "border-indigo-200", title: "text-indigo-900", pill: "bg-indigo-100 text-indigo-900" },
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
    problem: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-900", Icon: AlertTriangle },
    objective: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-900", Icon: Target },
    solution: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", Icon: Wrench },
    info: { bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-900", Icon: Info },
  };
  const { bg, border, text: txt, Icon } = map[variant] || map.info;
  return (
    <div className={`rounded-xl p-4 border ${border} ${bg}`}>
      <div className={`flex items-center gap-2 font-semibold ${txt}`}>
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

/** Segmented control — now horizontally scrollable on mobile */
function Segmented({ value, onChange, options }) {
  return (
    <div className="max-w-full overflow-x-auto -mx-1 px-1">
      <div className="inline-flex whitespace-nowrap rounded-xl border bg-white overflow-hidden">
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
    </div>
  );
}
