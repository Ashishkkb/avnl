import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { UNITS } from "@/lib/data";

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.slug }));
}

export default async function UnitDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const u = UNITS.find((x) => x.slug === slug);
  if (!u) return notFound();
  return (
    <>
      <PageHeader
        eyebrow={u.short}
        title={u.name}
        subtitle={`${u.location} · Established ${u.established}`}
        crumbs={[{ label: "Units", href: "/units" }, { label: u.short }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-[16/8] rounded-lg overflow-hidden border border-[var(--color-rule)] bg-[var(--color-navy)]">
            <Image src={u.image} alt={u.name} fill className="object-cover" />
          </div>
          <div className="prose-gov">
            <h2>Overview</h2>
            <p>{u.blurb}</p>
            <h2>Products & Capabilities</h2>
            <ul>{u.products.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
        <aside>
          <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-5">
            <h3 className="font-semibold text-[var(--color-navy)] mb-3">Unit Information</h3>
            <dl className="text-sm space-y-2">
              <div><dt className="text-[#666]">Location</dt><dd>{u.location}</dd></div>
              <div><dt className="text-[#666]">Established</dt><dd>{u.established}</dd></div>
              <div><dt className="text-[#666]">Area</dt><dd>{u.area}</dd></div>
              <div><dt className="text-[#666]">CGM</dt><dd>{u.cgm}</dd></div>
              <div><dt className="text-[#666]">Telephone</dt><dd>{u.contact}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </>
  );
}
