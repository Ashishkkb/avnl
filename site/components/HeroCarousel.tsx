"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  tag: string;
  title: string;
  caption: string;
  unit: string;
  cta?: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    image: "/images/rm-with-chiefs.jpg",
    tag: "NDIC 2026, New Delhi",
    title: "Capability showcase with the Raksha Mantri",
    caption: "AVNL presented T-90 Mk-III, BMP-II and the Sharang 155 mm gun system at the National Defence Industries Conclave.",
    unit: "Ministry of Defence event",
    cta: { label: "Read More", href: "/offerings/tenders" },
  },
  {
    image: "/images/t90-bhishma.jpg",
    tag: "Main Battle Tank",
    title: "T-90S Bhishma",
    caption: "First batch of upgraded Mk-III handed over to the Indian Army, May 2024.",
    unit: "Heavy Vehicles Factory, Avadi",
    cta: { label: "View Product", href: "/products/t90-bhishma" },
  },
  {
    image: "/images/arjun-mbt.jpg",
    tag: "Indigenous MBT",
    title: "MBT Arjun Mk-1A",
    caption: "89 upgrades over the baseline. Composite armour with ERA panels. ALWCS and NBC protection.",
    unit: "Heavy Vehicles Factory, Avadi",
    cta: { label: "View Product", href: "/products/arjun-mk1a" },
  },
  {
    image: "/images/t72-ajeya.jpg",
    tag: "Backbone of Armoured Corps",
    title: "T-72 Ajeya",
    caption: "Series production, mid-life overhaul and life extension of the in-service T-72 fleet.",
    unit: "Heavy Vehicles Factory, Avadi",
    cta: { label: "View Product", href: "/products/t72-ajeya" },
  },
  {
    image: "/images/bridge-layer.jpg",
    tag: "Infantry Combat Vehicle",
    title: "BMP-II Sarath",
    caption: "98.5 percent indigenisation achieved on the BMP-II / II-K platform.",
    unit: "Ordnance Factory, Medak",
    cta: { label: "View Product", href: "/products/bmp2-sarath" },
  },
  {
    image: "/images/republic-day.jpg",
    tag: "Seven Decades",
    title: "From Ambernath (1953) to AVNL (2021)",
    caption: "Five manufacturing units across Tamil Nadu, Telangana, Madhya Pradesh and Maharashtra.",
    unit: "AVNL Corporate",
    cta: { label: "Our Units", href: "/units" },
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(id);
  }, [paused, n]);

  return (
    <section
      className="relative bg-black overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="relative w-full" style={{ aspectRatio: "21 / 9", maxHeight: "640px" }}>
        {SLIDES.map((s, idx) => (
          <div
            key={s.image + idx}
            className={`absolute inset-0 transition-opacity duration-[900ms] ${idx === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            aria-hidden={idx !== i}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={`object-cover ${idx === i ? "scale-[1.04]" : "scale-100"} transition-transform duration-[8000ms] ease-out`}
            />
            {/* Vignette so caption is readable on any photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
          </div>
        ))}

        {/* Caption, bottom-left, image-forward */}
        <div className="absolute inset-x-0 bottom-0 z-20 px-4 md:px-10 pb-14 md:pb-16 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[var(--color-gold)] text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                <span className="w-6 h-px bg-[var(--color-gold)]" />
                {SLIDES[i].tag}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                {SLIDES[i].title}
              </h1>
              <p className="mt-3 text-white/90 text-base md:text-lg leading-snug max-w-xl">
                {SLIDES[i].caption}
              </p>
              <div className="mt-4 text-xs text-white/70 uppercase tracking-wider">
                {SLIDES[i].unit}
              </div>
              {SLIDES[i].cta && (
                <div className="mt-5 flex gap-3">
                  <Link
                    href={SLIDES[i].cta!.href}
                    className="bg-[var(--color-saffron)] text-[var(--color-navy)] font-semibold px-5 py-2.5 rounded hover:bg-white transition"
                  >
                    {SLIDES[i].cta!.label}
                  </Link>
                  <Link
                    href="/products"
                    className="border border-white/40 text-white px-5 py-2.5 rounded hover:bg-white/10 transition"
                  >
                    All Products
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => setI((p) => (p - 1 + n) % n)}
          className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white grid place-items-center backdrop-blur-sm"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => setI((p) => (p + 1) % n)}
          className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white grid place-items-center backdrop-blur-sm"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide counter (top-right) */}
        <div className="absolute top-4 right-4 md:top-5 md:right-6 z-20 bg-black/40 text-white text-xs font-mono px-2.5 py-1 rounded backdrop-blur-sm">
          {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </div>

        {/* Dots + play/pause */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`dot ${idx === i ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          <button
            onClick={() => setPaused((p) => !p)}
            className="ml-3 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white grid place-items-center text-[11px]"
            aria-label={paused ? "Play" : "Pause"}
          >
            {paused ? "▶" : "❚❚"}
          </button>
        </div>
      </div>
    </section>
  );
}
