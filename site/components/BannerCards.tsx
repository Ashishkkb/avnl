import Link from "next/link";

type Banner = {
  href: string;
  title: string;
  sub: string;
  gradient: string;
  accent: string;
  badge: string;
};

const BANNERS: Banner[] = [
  {
    href: "/offerings/make-in-india",
    title: "DRISHTI Challenge 2026",
    sub: "7 Problem Statements · ₹ Prize Money · Apply by 04 May 2026",
    gradient: "from-[#1B2A4E] to-[#4B2E83]",
    accent: "#FF9933",
    badge: "DPSU R&D",
  },
  {
    href: "/offerings/msme",
    title: "AVNL Vendor Meet 2026",
    sub: "MSME empanelment · Technology transfer · Skill development",
    gradient: "from-[var(--color-eagle-green)] to-[var(--color-wintergreen)]",
    accent: "#FFD166",
    badge: "MSME Initiative",
  },
  {
    href: "/connect/ovra",
    title: "Online Vendor Registration",
    sub: "Single-window digital onboarding across all five units",
    gradient: "from-[#0B6E4F] to-[#08A045]",
    accent: "#FFFFFF",
    badge: "OVRA",
  },
];

export function BannerCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {BANNERS.map((b) => (
          <Link
            key={b.title}
            href={b.href}
            className={`relative group overflow-hidden rounded-xl bg-gradient-to-br ${b.gradient} text-white p-6 min-h-[180px] flex flex-col justify-between lift`}
          >
            <span
              className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-20 group-hover:opacity-30 transition"
              style={{ background: b.accent }}
              aria-hidden
            />
            <span className="absolute -left-6 bottom-0 text-[170px] leading-none font-black opacity-[0.07]" aria-hidden>
              {b.title[0]}
            </span>
            <div className="relative">
              <div className="inline-block text-[10px] uppercase tracking-wider font-bold bg-white/15 border border-white/25 px-2 py-0.5 rounded-full">
                {b.badge}
              </div>
              <h3 className="mt-3 text-xl font-bold leading-snug">{b.title}</h3>
            </div>
            <div className="relative flex items-end justify-between gap-3">
              <p className="text-sm text-white/85 leading-snug">{b.sub}</p>
              <span className="shrink-0 w-9 h-9 rounded-full bg-white/15 group-hover:bg-white group-hover:text-[var(--color-navy)] grid place-items-center text-lg transition">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
