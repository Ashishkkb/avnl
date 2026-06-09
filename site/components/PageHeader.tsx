import Link from "next/link";
import { SectionNav } from "./SectionNav";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <>
      <section className="bg-gradient-to-r from-[var(--color-eagle-green)] to-[var(--color-wintergreen)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-9">
          {crumbs && (
            <nav className="text-xs text-white/75 mb-3" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                {crumbs.map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span>/</span>
                    {c.href ? <Link href={c.href} className="hover:underline">{c.label}</Link> : <span className="text-white">{c.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {eyebrow && <p className="text-xs uppercase tracking-wider text-[var(--color-aqua)] font-semibold">{eyebrow}</p>}
          <h1 className="text-3xl md:text-4xl font-bold mt-1">{title}</h1>
          {subtitle && <p className="mt-2 text-white/85 max-w-3xl">{subtitle}</p>}
        </div>
      </section>
      <SectionNav />
    </>
  );
}
