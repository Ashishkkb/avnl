"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const DOCS = [
  {
    tag: "Orders And Notices",
    title: "Revised work distribution amongst CGMs and Functional Directors of AVNL, 29.05.2026",
    href: "/documents/orders",
  },
  {
    tag: "Orders And Notices",
    title: "Delegation of Powers, AVNL Corporate Office and Unit Heads",
    href: "/documents/orders",
  },
  {
    tag: "Orders And Notices",
    title: "Competition for Logo Design and Tagline of the AVNL Vendor Development Programme 2026",
    href: "/documents/orders",
  },
  {
    tag: "Orders And Notices",
    title: "Constitution of AVNL AI and Industry 4.0 Working Group, regulating IIoT adoption on the shop floor",
    href: "/documents/orders",
  },
];

const PERSONAS = [
  {
    label: "FOR CITIZEN",
    href: "/connect/citizen",
    accent: "#E0EAFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4 20c.6-3.8 3.6-6 8-6s7.4 2.2 8 6" />
        <path d="M12 11.5v1.5" />
      </svg>
    ),
  },
  {
    label: "FOR VENDOR / MSME",
    href: "/connect/ovra",
    accent: "#FFE9D6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <path d="M3 10l9-6 9 6v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 21V12h6v9" />
        <path d="M12 7v3" />
      </svg>
    ),
  },
  {
    label: "FOR ARMED FORCES",
    href: "/products",
    accent: "#D6F0E3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "FOR RESEARCHER",
    href: "/offerings/training",
    accent: "#E0EAFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <path d="M9 3v8.5a3 3 0 0 1-1 2.3l-3 2.6c-1.4 1.2-.6 3.6 1.3 3.6h11.4c1.9 0 2.7-2.4 1.3-3.6l-3-2.6a3 3 0 0 1-1-2.3V3" />
        <path d="M8 3h8" />
        <path d="M9 13h6" />
      </svg>
    ),
  },
  {
    label: "FOR DEFENCE INDUSTRY",
    href: "/offerings/make-in-india",
    accent: "#FFF2CC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <rect x="3" y="11" width="6" height="10" rx="0.5" />
        <rect x="15" y="11" width="6" height="10" rx="0.5" />
        <path d="M9 11l3-4 3 4" />
        <path d="M3 21h18" />
        <circle cx="12" cy="4" r="1.5" />
      </svg>
    ),
  },
  {
    label: "FOR MEDIA",
    href: "/media/photos",
    accent: "#FCE4EC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path d="M17 10l4-2.5v9L17 14" />
      </svg>
    ),
  },
];

const LINKS = [
  { label: "AVNL Performance Dashboard", href: "/about/performance" },
  { label: "Interested in Applying for a Tender?", href: "/offerings/tenders" },
  { label: "Public Grievances (CPGRAMS)", href: "/connect/grievances" },
  { label: "Online Vendor Registration (OVRA)", href: "/connect/ovra" },
  { label: "Explore What's New", href: "/documents/orders" },
];

export function DocsPersonasLinks() {
  const [pi, setPi] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = PERSONAS.length;
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPi((p) => (p + 1) % n), 4500);
    return () => clearInterval(id);
  }, [paused, n]);
  const persona = PERSONAS[pi];

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[6fr_3fr_3fr] gap-10 items-start">
        {/* RECENT DOCUMENTS */}
        <div>
          <header className="flex items-center gap-3 mb-5 h-12">
            <span className="w-10 h-10 grid place-items-center text-[var(--color-navy)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 13h6M9 17h4"/></svg>
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--color-navy)] whitespace-nowrap">Recent Documents</h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DOCS.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className="group block border border-[var(--color-navy)]/15 rounded-lg p-5 hover:border-[var(--color-saffron)] hover:shadow-sm transition bg-white"
              >
                <div className="font-bold text-[var(--color-navy)] text-base">{d.tag}</div>
                <p className="text-sm text-[#555] mt-2 leading-snug">{d.title}</p>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              href="/documents/orders"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-navy)] border border-[var(--color-navy)]/30 px-4 py-2 rounded hover:bg-[var(--color-paper)]"
            >
              VIEW MORE
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>

        {/* PERSONAS */}
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <header className="flex items-center gap-3 mb-5 h-12">
            <span className="w-10 h-10 grid place-items-center text-[var(--color-navy)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19c.4-2.8 2.8-4.5 6-4.5s5.6 1.7 6 4.5"/><path d="M14.5 17c.5-1.6 1.7-2.4 3.5-2.4 1.8 0 2.8 1 3.2 2.4"/></svg>
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--color-navy)] whitespace-nowrap">User Personas</h2>
          </header>

          <div className="flex flex-col items-center text-center pt-2">
            <div
              key={persona.label}
              className="w-44 h-44 rounded-full grid place-items-center transition-colors duration-500"
              style={{ background: persona.accent }}
            >
              {persona.icon}
            </div>
            <Link href={persona.href} className="mt-4 font-bold text-[var(--color-navy)] tracking-wider text-sm hover:underline">
              {persona.label}
            </Link>

            <div className="mt-3 flex items-center gap-3 text-[var(--color-navy)]">
              <button
                onClick={() => setPi((p) => (p - 1 + n) % n)}
                aria-label="Previous persona"
                className="w-7 h-7 grid place-items-center hover:text-[var(--color-saffron)]"
              >‹</button>
              <div className="flex items-center gap-1.5">
                {PERSONAS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPi(idx)}
                    aria-label={`Persona ${idx + 1}`}
                    className={`rounded-full transition-all ${idx === pi ? "w-2.5 h-2.5 bg-[var(--color-navy)]" : "w-2 h-2 bg-[var(--color-navy)]/30 hover:bg-[var(--color-navy)]/60"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setPi((p) => (p + 1) % n)}
                aria-label="Next persona"
                className="w-7 h-7 grid place-items-center hover:text-[var(--color-saffron)]"
              >›</button>
            </div>
          </div>
        </div>

        {/* IMPORTANT LINKS */}
        <div className="border-l border-[var(--color-navy)]/15 lg:pl-6">
          <header className="flex items-center gap-3 mb-5 h-12">
            <span className="w-10 h-10 grid place-items-center text-[var(--color-navy)]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="10" cy="10" r="6"/><path d="m20 20-5.5-5.5"/><path d="M10 7v3l2 1"/></svg>
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold text-[var(--color-navy)] whitespace-nowrap">Important Links</h2>
          </header>

          <ul className="divide-y divide-[var(--color-navy)]/15 border-y border-[var(--color-navy)]/15">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="group flex items-center justify-between gap-3 py-3.5 hover:text-[var(--color-saffron)] transition"
                >
                  <span className="text-[var(--color-navy)] group-hover:text-[var(--color-saffron)] text-sm leading-snug">{l.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--color-navy)]/50 group-hover:text-[var(--color-saffron)] group-hover:translate-x-0.5 transition-transform"><path d="m9 6 6 6-6 6"/></svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
