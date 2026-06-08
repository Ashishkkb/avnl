import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { PRODUCTS } from "@/lib/data";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) return notFound();
  return (
    <>
      <PageHeader
        eyebrow={p.category}
        title={p.name}
        subtitle={`Manufactured at ${p.unit}`}
        crumbs={[{ label: "Products", href: "/products" }, { label: p.name }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[var(--color-rule)] bg-[var(--color-navy)]">
            <Image src={p.image} alt={p.name} fill className="object-cover" />
          </div>
          <p className="text-[#333] leading-relaxed">{p.summary}</p>
        </div>
        <aside>
          <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-5">
            <h3 className="font-semibold text-[var(--color-navy)] mb-3">Key Specifications</h3>
            <dl className="text-sm space-y-2">
              {Object.entries(p.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 border-b border-[var(--color-rule)] pb-2 last:border-0">
                  <dt className="text-[#666]">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Link href="/connect/ovra" className="block mt-4 bg-[var(--color-navy)] text-white text-center font-medium py-2.5 rounded hover:bg-[var(--color-navy-light)]">
            Become a Supplier
          </Link>
        </aside>
      </div>
    </>
  );
}
