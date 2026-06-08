"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ACHIEVEMENT = {
  img: "/images/avnl-aeroindia.jpg",
  badge: "Aero India 2025",
  title: "CEO Roundtable and EDGE at Aero India 2025",
  sub: "AVNL leadership joined the Hon'ble Raksha Mantri and global defence CEOs at the EDGE plenary on indigenous capability.",
  href: "/offerings/awards",
};

const GALLERY = {
  photos: [
    { img: "/images/avnl-aeroindia.jpg", caption: "CEO Roundtable and EDGE at Aero India 2025", date: "13.02.2025" },
    { img: "/images/avnl-dsc01091.jpg", caption: "Apex Level Review, Security and Rajbhasha Conference", date: "21.02.2025" },
    { img: "/images/avnl-114A3705.jpg", caption: "AVNL Foundation Day Rally, second anniversary", date: "01.10.2023" },
    { img: "/images/avnl-secretary.jpg", caption: "Defence Secretary visit to AVNL shop floor", date: "18.07.2024" },
    { img: "/images/avnl-agm.jpg", caption: "Second Annual General Meeting of Shareholders", date: "25.09.2023" },
    { img: "/images/rm-with-chiefs.jpg", caption: "Hon'ble Raksha Mantri with Service Chiefs at NDIC 2026", date: "14.02.2026" },
    { img: "/images/republic-day.jpg", caption: "Republic Day 2025, NCC tableaux on Kartavya Path", date: "26.01.2025" },
  ],
  videos: [
    { img: "/images/t90-bhishma.jpg", caption: "T-90 Bhishma during operational trials", date: "12.11.2025", duration: "4:18" },
    { img: "/images/avnl-aeroindia.jpg", caption: "AVNL Capability Film, Aero India 2025", date: "13.02.2025", duration: "3:42" },
    { img: "/images/avnl-dsc01091.jpg", caption: "Apex Level Review keynote, AVNL Corporate Office", date: "21.02.2025", duration: "12:05" },
    { img: "/images/bridge-layer.jpg", caption: "BMP-II Sarath assembly at OFMK Medak", date: "22.03.2024", duration: "7:25" },
  ],
};

export function MediaShowcase() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const items = GALLERY[tab];
  const [g, setG] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => { setG(0); }, [tab]);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setG((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  const cur = items[g];

  return (
    <section className="bg-[#E9EEF8] py-14">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[5fr_7fr] gap-6">
        {/* LEFT: Achievements */}
        <div className="flex flex-col gap-4">
          <header className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-navy)]">Achievements</h2>
            <Link href="/offerings/awards" className="text-sm text-[var(--color-navy)] hover:underline flex items-center gap-1">
              View All
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </header>

          {/* Big achievement card */}
          <Link
            href={ACHIEVEMENT.href}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition flex-1"
          >
            <div className="relative aspect-[16/9] bg-[var(--color-navy)]">
              <Image src={ACHIEVEMENT.img} alt={ACHIEVEMENT.title} fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--color-gold)] text-[var(--color-navy)] text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                {ACHIEVEMENT.badge}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[var(--color-navy)] text-base md:text-lg leading-snug">{ACHIEVEMENT.title}</h3>
              <p className="text-sm text-[#555] mt-2 leading-relaxed">{ACHIEVEMENT.sub}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-saffron)] mt-3 group-hover:gap-2 transition-all">
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </span>
            </div>
          </Link>

          {/* Events Calendar — compact horizontal card */}
          <Link
            href="/about/milestones"
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4 p-4"
          >
            <div className="w-12 h-12 rounded-lg bg-[var(--color-navy)]/8 grid place-items-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[var(--color-navy)]">
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 3v4M16 3v4" />
                <circle cx="8" cy="14" r="0.7" fill="currentColor" />
                <circle cx="12" cy="14" r="0.7" fill="currentColor" />
                <circle cx="16" cy="14" r="0.7" fill="currentColor" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-[var(--color-navy)]">Events Calendar</div>
              <div className="text-xs text-[#666]">Upcoming AVNL events and announcements</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--color-navy)] group-hover:translate-x-1 transition-transform"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>

        {/* RIGHT: Gallery */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <header className="flex items-end justify-between mb-4 gap-4 flex-wrap">
            <div className="flex items-baseline gap-3">
              <button
                onClick={() => setTab("photos")}
                className={`text-2xl md:text-3xl font-bold transition ${tab === "photos" ? "text-[var(--color-navy)]" : "text-[var(--color-navy)]/35 hover:text-[var(--color-navy)]/60"}`}
                aria-pressed={tab === "photos"}
              >
                Photo Gallery
              </button>
              <span className="text-[var(--color-navy)]/25 text-2xl select-none">|</span>
              <button
                onClick={() => setTab("videos")}
                className={`text-2xl md:text-3xl font-bold transition ${tab === "videos" ? "text-[var(--color-navy)]" : "text-[var(--color-navy)]/35 hover:text-[var(--color-navy)]/60"}`}
                aria-pressed={tab === "videos"}
              >
                Video Gallery
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Link href={tab === "photos" ? "/media/photos" : "/media/videos"} className="text-sm text-[var(--color-navy)] hover:underline flex items-center gap-1">
                View All
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setG((p) => (p - 1 + items.length) % items.length)}
                  className="w-8 h-8 rounded-full border border-[var(--color-navy)]/25 grid place-items-center text-[var(--color-navy)] hover:bg-white"
                  aria-label="Previous"
                >‹</button>
                <button
                  onClick={() => setPaused((p) => !p)}
                  className="w-8 h-8 rounded-full border border-[var(--color-navy)]/25 grid place-items-center text-[var(--color-navy)] hover:bg-white text-[11px]"
                  aria-label={paused ? "Play" : "Pause"}
                >{paused ? "▶" : "❚❚"}</button>
                <button
                  onClick={() => setG((p) => (p + 1) % items.length)}
                  className="w-8 h-8 rounded-full border border-[var(--color-navy)]/25 grid place-items-center text-[var(--color-navy)] hover:bg-white"
                  aria-label="Next"
                >›</button>
              </div>
            </div>
          </header>

          <div className="relative rounded-xl overflow-hidden shadow-sm bg-[var(--color-navy)]" style={{ aspectRatio: "16 / 9" }}>
            {items.map((it, idx) => (
              <div key={it.img + idx} className={`absolute inset-0 transition-opacity duration-700 ${idx === g ? "opacity-100" : "opacity-0"}`} aria-hidden={idx !== g}>
                <Image src={it.img} alt={it.caption} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                {tab === "videos" && idx === g && (
                  <div className="absolute inset-0 grid place-items-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white/90 text-[var(--color-navy)] grid place-items-center text-2xl shadow-lg">▶</div>
                  </div>
                )}
              </div>
            ))}
            <div className="absolute left-0 right-0 bottom-0 p-5 md:p-6 text-white">
              <div className="text-[10px] uppercase tracking-wider text-[var(--color-gold)] font-semibold">
                {tab === "photos" ? "Photo" : "Video"} · {cur.date}
                {tab === "videos" && "duration" in cur && ` · ${(cur as { duration: string }).duration}`}
              </div>
              <h3 className="mt-1 text-base md:text-xl font-semibold leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] max-w-3xl">
                {cur.caption}
              </h3>
              <Link
                href={tab === "photos" ? "/media/photos" : "/media/videos"}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-saffron)] mt-2 hover:text-white"
              >
                Know More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>

            <div className="absolute top-3 right-3 bg-black/40 text-white text-[11px] font-mono px-2 py-0.5 rounded backdrop-blur-sm">
              {String(g + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-3 right-3 hidden md:flex items-center gap-1.5">
              {items.slice(0, 5).map((it, idx) => (
                <button
                  key={idx}
                  onClick={() => setG(idx)}
                  className={`relative w-10 h-10 rounded overflow-hidden border-2 transition ${idx === g ? "border-[var(--color-saffron)]" : "border-white/40 hover:border-white"}`}
                  aria-label={`Show ${it.caption}`}
                >
                  <Image src={it.img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
