import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { PRODUCTS } from "@/lib/data";

export const metadata = { title: "Products & Services | AVNL" };

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Offerings"
        title="Products & Services"
        subtitle="Main battle tanks, infantry combat vehicles, military trucks, gun systems, engines and naval counter-measures, manufactured across AVNL's five units."
        crumbs={[{ label: "Products" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group bg-white border border-[var(--color-rule)] rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="relative aspect-[16/10] bg-[var(--color-navy)]">
              <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-3 left-3 bg-white/95 text-[var(--color-navy)] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded">
                {p.category}
              </div>
            </div>
            <div className="p-5">
              <h2 className="font-semibold text-[var(--color-navy)] text-lg">{p.name}</h2>
              <p className="text-xs text-[#666]">Manufactured at: {p.unit}</p>
              <p className="text-sm text-[#333] mt-3 line-clamp-3">{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
