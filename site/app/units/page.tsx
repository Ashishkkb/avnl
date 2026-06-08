import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { UNITS } from "@/lib/data";

export const metadata = { title: "Our Units | AVNL" };

export default function UnitsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Footprint"
        title="Our Manufacturing Units"
        subtitle="AVNL operates five manufacturing units across Tamil Nadu, Telangana, Madhya Pradesh and Maharashtra."
        crumbs={[{ label: "Units" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8">
        {UNITS.map((u) => (
          <article key={u.slug} id={u.slug} className="grid md:grid-cols-3 gap-6 border border-[var(--color-rule)] rounded-lg overflow-hidden bg-white">
            <div className="relative md:col-span-1 min-h-[220px] bg-[var(--color-navy)]">
              <Image src={u.image} alt={u.name} fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold px-2 py-1 rounded">
                {u.short}
              </div>
            </div>
            <div className="md:col-span-2 p-6">
              <h2 className="text-2xl font-bold text-[var(--color-navy)]">{u.name}</h2>
              <p className="text-sm text-[#666] mt-1 inline-flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[var(--color-saffron)]"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
                {u.location} · Established {u.established} · {u.area}
              </p>
              <p className="text-sm text-[#666]">Chief General Manager: <strong className="text-[#222]">{u.cgm}</strong> · Tel: {u.contact}</p>
              <p className="mt-4 text-[#333] leading-relaxed">{u.blurb}</p>
              <h3 className="mt-4 text-sm uppercase tracking-wider text-[var(--color-saffron)] font-semibold">Products</h3>
              <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm list-disc pl-5">
                {u.products.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="mt-5">
                <Link href={`/units/${u.slug}`} className="inline-block text-sm font-medium text-[var(--color-navy)] hover:underline">
                  Detailed page →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
