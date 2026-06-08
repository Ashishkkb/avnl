import Link from "next/link";
import { PageHeader } from "./PageHeader";

export function StubPage({
  eyebrow,
  title,
  subtitle,
  crumbs,
  description,
  contacts,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
  description: React.ReactNode;
  contacts?: { label: string; value: string; href?: string }[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} crumbs={crumbs} />
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2 prose-gov">{description}</article>
        <aside className="space-y-4">
          {contacts && (
            <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-5">
              <h3 className="font-semibold text-[var(--color-navy)] mb-3">Contact / Apply</h3>
              <ul className="text-sm space-y-2">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <span className="text-[#666]">{c.label}: </span>
                    {c.href ? <Link href={c.href} className="text-[var(--color-navy)] underline">{c.value}</Link> : <span className="font-medium">{c.value}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="bg-white border border-[var(--color-rule)] rounded-lg p-5">
            <h3 className="font-semibold text-[var(--color-navy)] mb-2">Related</h3>
            <ul className="text-sm space-y-1.5">
              <li><Link href="/about" className="text-[var(--color-navy)] hover:underline">About AVNL</Link></li>
              <li><Link href="/units" className="text-[var(--color-navy)] hover:underline">Our Units</Link></li>
              <li><Link href="/products" className="text-[var(--color-navy)] hover:underline">Products</Link></li>
              <li><Link href="/connect/contact" className="text-[var(--color-navy)] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
