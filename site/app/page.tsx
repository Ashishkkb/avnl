import Image from "next/image";
import Link from "next/link";
import { ANNOUNCEMENTS, BOARD, KEY_OFFERINGS, MILESTONES, PRODUCTS, UNITS } from "@/lib/data";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LeaderQuote } from "@/components/LeaderQuote";
import { BannerCards } from "@/components/BannerCards";
import { SocialFeed } from "@/components/SocialFeed";
import { PartnerStrip } from "@/components/PartnerStrip";
import { MediaShowcase } from "@/components/MediaShowcase";
import { DocsPersonasLinks } from "@/components/DocsPersonasLinks";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Notification marquee */}
      <section className="bg-[var(--color-paper)] border-y border-[var(--color-rule)]">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-4">
          <span className="shrink-0 bg-[var(--color-navy)] text-white text-xs font-semibold px-3 py-1 rounded-full">
            Notifications
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="marquee whitespace-nowrap">
              {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((a, i) => (
                <a key={i} href={a.href} className="text-sm text-[#222] hover:text-[var(--color-navy)]">
                  <span className="text-[var(--color-saffron)] font-semibold mr-2">●</span>
                  <span className="font-medium">{a.badge}:</span> {a.title}
                </a>
              ))}
            </div>
          </div>
          <Link href="/documents/orders" className="shrink-0 text-sm text-[var(--color-navy)] font-medium hover:underline">
            View All →
          </Link>
        </div>
      </section>

      <LeaderQuote />

      {/* About Us + Quick Access */}
      <section className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-8 grid place-items-center rounded bg-[var(--color-navy)]/10 text-[var(--color-navy)]">◈</span>
            <h2 className="text-2xl font-bold text-[var(--color-navy)]">About AVNL</h2>
          </div>
          <p className="mt-3 text-[#333] leading-relaxed">
            Armoured Vehicles Nigam Limited (AVNL), branded AVANI, is a Defence Public
            Sector Undertaking under the Department of Defence Production, Ministry of
            Defence, Government of India. The company was incorporated on{" "}
            <strong>14 August 2021</strong> and commenced operations on{" "}
            <strong>1 October 2021</strong> as one of seven corporate entities created from
            the erstwhile Ordnance Factory Board.
          </p>
          <p className="mt-3 text-[#333] leading-relaxed">
            AVNL manufactures armoured fighting vehicles, main battle tanks, military
            vehicles and their engines for the Indian Armed Forces, across five
            manufacturing units at <strong>Avadi, Medak, Jabalpur and Ambernath</strong>.
          </p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              {
                label: "Our Team",
                href: "/leadership",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M2.8 19c.4-3 3.1-4.8 6.2-4.8s5.8 1.8 6.2 4.8" />
                    <circle cx="17" cy="9" r="2.6" />
                    <path d="M14.8 16.5c.6-1.6 2-2.4 3.7-2.4 1.8 0 3.1 1 3.5 2.4" />
                  </svg>
                ),
              },
              {
                label: "Our Units",
                href: "/units",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 21V10l5 3V10l5 3V8l8 4v9z" />
                    <path d="M3 21h18" />
                    <path d="M9 17h2M14 17h2" />
                    <path d="M18 7V4l1.5-1.5L21 4v3" />
                  </svg>
                ),
              },
              {
                label: "Our Performance",
                href: "/about/performance",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M3 20h18" />
                    <rect x="5" y="13" width="3" height="6" rx="0.5" />
                    <rect x="10.5" y="9" width="3" height="10" rx="0.5" />
                    <rect x="16" y="5" width="3" height="14" rx="0.5" />
                    <path d="M4 9l5-4 4 3 6-5" />
                  </svg>
                ),
              },
            ].map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="group bg-white border border-[var(--color-rule)] rounded-md px-4 py-3.5 flex items-center gap-3 hover:border-[var(--color-saffron)] hover:shadow-sm transition lift"
              >
                <span className="w-10 h-10 rounded-md bg-[var(--color-paper)] grid place-items-center text-[var(--color-navy)] group-hover:bg-[var(--color-saffron)]/15 group-hover:text-[var(--color-saffron)] transition">
                  {c.icon}
                </span>
                <span className="font-semibold text-[var(--color-navy)] text-sm">{c.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="bg-[var(--color-paper)] rounded-lg border border-[var(--color-rule)] p-6">
          <h3 className="font-semibold text-[var(--color-navy)] mb-3">Quick Access</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/connect/rti" className="text-[var(--color-navy)] hover:underline">→ Right to Information (RTI)</Link></li>
            <li><Link href="/connect/grievances" className="text-[var(--color-navy)] hover:underline">→ Public Grievances</Link></li>
            <li><Link href="/connect/ovra" className="text-[var(--color-navy)] hover:underline">→ Vendor Registration (OVRA)</Link></li>
            <li><Link href="/documents/annual-reports" className="text-[var(--color-navy)] hover:underline">→ Annual Reports</Link></li>
            <li><Link href="/offerings/careers" className="text-[var(--color-navy)] hover:underline">→ Vacancies & Careers</Link></li>
            <li><Link href="/connect/vigilance" className="text-[var(--color-navy)] hover:underline">→ Vigilance / PIDPI</Link></li>
          </ul>
        </aside>
      </section>

      {/* Recent Documents + Personas + Important Links */}
      <DocsPersonasLinks />

      {/* Banner cards */}
      <BannerCards />

      {/* Units */}
      <section className="bg-[var(--color-paper)] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-[var(--color-saffron)] font-semibold">Our Footprint</p>
              <h2 className="text-3xl font-bold text-[var(--color-navy)]">Five Manufacturing Units</h2>
            </div>
            <Link href="/units" className="hidden sm:inline text-sm font-medium text-[var(--color-navy)] hover:underline">
              View all units →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {UNITS.map((u) => (
              <Link
                key={u.slug}
                href={`/units/${u.slug}`}
                className="group bg-white rounded-lg border border-[var(--color-rule)] overflow-hidden hover:border-[var(--color-navy)]/40 lift"
              >
                <div className="relative h-44 bg-[var(--color-navy)]">
                  <Image src={u.image} alt={u.name} fill className="object-cover opacity-85 group-hover:opacity-100 transition" />
                  <div className="absolute top-3 left-3 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-2 py-1 rounded">
                    {u.short}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg">{u.name}</h3>
                  <p className="text-xs text-[#666] mt-0.5 inline-flex items-center gap-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[var(--color-saffron)]"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    {u.location}
                  </p>
                  <p className="text-sm text-[#333] mt-3 line-clamp-3">{u.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements + Photo/Video Gallery split */}
      <MediaShowcase />

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-[var(--color-saffron)] font-semibold">Capability</p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">Flagship Products</h2>
          </div>
          <Link href="/products" className="hidden sm:inline text-sm font-medium text-[var(--color-navy)] hover:underline">All products →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.slice(0, 4).map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group lift">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[var(--color-rule)] bg-[var(--color-navy)]">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute bottom-2 left-2 bg-white/95 text-[var(--color-navy)] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                  {p.category}
                </div>
              </div>
              <h3 className="mt-3 font-semibold text-[var(--color-navy)] group-hover:underline">{p.name}</h3>
              <p className="text-xs text-[#666]">{p.unit}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Key offerings */}
      <section className="bg-[var(--color-paper)] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wider text-[var(--color-saffron)] font-semibold">Engage with AVNL</p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">Key Offerings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {KEY_OFFERINGS.map((k, idx) => {
              const icons = [
                // Make in India, lion-ish star burst
                <svg key="m" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/><circle cx="12" cy="12" r="4"/></svg>,
                // MSME, handshake
                <svg key="h" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M3 12l4-4 3 3 4-4 4 4 3-3"/><path d="M7 14l3 3 2-2 3 3"/><path d="M3 17V8M21 17V8"/></svg>,
                // OVRA, document with checkmark
                <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M9 14l2 2 4-4"/></svg>,
                // Training, graduation cap
                <svg key="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v5"/></svg>,
              ];
              return (
                <Link key={k.title} href={k.href} className="group bg-white border border-[var(--color-rule)] rounded-lg p-6 lift hover:border-[var(--color-saffron)]">
                  <div className="w-11 h-11 rounded-lg bg-[var(--color-navy)] text-white grid place-items-center mb-4 group-hover:bg-[var(--color-saffron)] group-hover:text-[var(--color-navy)] transition">
                    {icons[idx % icons.length]}
                  </div>
                  <h3 className="font-semibold text-[var(--color-navy)]">{k.title}</h3>
                  <p className="text-sm text-[#444] mt-2 leading-relaxed">{k.body}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--color-navy)] group-hover:text-[var(--color-saffron)]">
                    Learn more
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-wider text-[var(--color-saffron)] font-semibold">Governance</p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]">Board of Directors</h2>
          </div>
          <Link href="/leadership" className="hidden sm:inline text-sm font-medium text-[var(--color-navy)] hover:underline">Full board →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BOARD.map((b) => (
            <div key={b.name} className="group bg-white border border-[var(--color-rule)] rounded-lg overflow-hidden text-center lift">
              <div className="relative aspect-[4/5] bg-gradient-to-b from-[var(--color-paper)] to-[var(--color-navy)]/5 overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition duration-500"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)]" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[var(--color-navy)]">{b.name}</h3>
                <p className="text-xs text-[#555] mt-1 leading-snug">{b.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social feed */}
      <SocialFeed />

      {/* Milestones */}
      <section className="bg-gradient-to-b from-[var(--color-navy)] to-[var(--color-navy-light)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-wider text-[var(--color-gold)] font-semibold">Our Journey</p>
          <h2 className="text-3xl font-bold mb-10">Milestones</h2>
          <ol className="relative border-l border-white/25 pl-6 space-y-5">
            {MILESTONES.map((m) => (
              <li key={m.year}>
                <div className="absolute -left-2 w-4 h-4 rounded-full bg-[var(--color-saffron)] border-4 border-[var(--color-navy)]" />
                <div className="text-[var(--color-gold)] font-bold">{m.year}</div>
                <div className="text-white/90 text-sm">{m.event}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partner strip */}
      <PartnerStrip />
    </>
  );
}
