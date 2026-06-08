"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Leader = {
  img: string;
  name: string;
  role: string;
  date: string;
  occasion: string;
  href: string;
  hrefLabel: string;
  quote: string;
  sub?: string;
};

const LEADERS: Leader[] = [
  {
    img: "/images/modi.jpg",
    name: "Shri Narendra Modi",
    role: "Hon'ble Prime Minister of India",
    date: "25.09.2024",
    occasion: "10 Years of Make in India",
    href: "https://www.pmindia.gov.in/",
    hrefLabel: "PMO",
    quote:
      "Atma Nirbhar Bharat is not just a policy, it is a national resolve. A strong, self-reliant defence manufacturing base is the foundation of a strong India.",
    sub:
      "India's defence production has crossed a record high, and Defence PSUs like AVNL are at the heart of this transformation.",
  },
  {
    img: "/images/rajnath-singh.jpg",
    name: "Shri Rajnath Singh",
    role: "Hon'ble Raksha Mantri (Defence Minister)",
    date: "14.02.2026",
    occasion: "NDIC 2026, New Delhi",
    href: "https://mod.gov.in/",
    hrefLabel: "Visit MoD",
    quote:
      "Today's India thinks fast, thinks far and takes quick decisions like a fighter, and our defence manufacturing must keep pace.",
    sub:
      "India's armoured corps is built on the shoulders of AVNL, from the Avadi tank line to the Medak ICV line.",
  },
];

export function LeaderQuote() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % LEADERS.length), 9000);
    return () => clearInterval(id);
  }, []);
  const l = LEADERS[i];
  return (
    <section className="bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-[220px_1fr_auto] gap-8 items-center">
        <div className="justify-self-center md:justify-self-start relative">
          <div className="logo-plate w-44 h-44 rounded-full overflow-hidden grid place-items-center">
            <Image
              key={l.img}
              src={l.img}
              alt={l.name}
              width={176}
              height={176}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-3" role="tablist" aria-label="Leader quote">
            {LEADERS.map((leader, idx) => (
              <button
                key={leader.name}
                role="tab"
                aria-selected={idx === i}
                aria-label={leader.name}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-[var(--color-saffron)]" : "w-2 bg-[var(--color-navy)]/25 hover:bg-[var(--color-navy)]/50"}`}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="text-5xl text-[var(--color-saffron)] leading-none font-serif">“</div>
          <blockquote className="text-[var(--color-navy)] text-xl md:text-2xl font-semibold leading-snug -mt-3">
            {l.quote}
          </blockquote>
          {l.sub && <p className="text-[var(--color-navy)] mt-3 leading-relaxed">{l.sub}</p>}
          <div className="mt-4 text-xs uppercase tracking-wider text-[var(--color-navy-light)] font-semibold">
            {l.name} · {l.role}
          </div>
          <div className="text-xs text-[#666] mt-1">{l.occasion} · {l.date}</div>
        </div>

        <Link
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-[var(--color-navy)] text-[var(--color-navy)] px-4 py-2 rounded hover:bg-white text-sm font-medium whitespace-nowrap"
        >
          {l.hrefLabel} ↗
        </Link>
      </div>
    </section>
  );
}
