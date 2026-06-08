import { PageHeader } from "@/components/PageHeader";
import { MILESTONES } from "@/lib/data";
export const metadata = { title: "Milestones | AVNL" };
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Milestones"
        subtitle="From Ambernath (1953) to AVNL (2021), seven decades of armoured manufacturing in India."
        crumbs={[{ label: "About", href: "/about" }, { label: "Milestones" }]}
      />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <ol className="relative border-l-2 border-[var(--color-navy)]/30 pl-6 space-y-6">
          {MILESTONES.map((m) => (
            <li key={m.year}>
              <div className="absolute -left-[10px] w-5 h-5 rounded-full bg-[var(--color-saffron)] border-4 border-white shadow" />
              <div className="text-[var(--color-navy)] font-bold text-lg">{m.year}</div>
              <div className="text-[#333]">{m.event}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
