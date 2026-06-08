import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { BOARD } from "@/lib/data";

export const metadata = { title: "Leadership | AVNL" };

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Governance"
        title="Board of Directors"
        subtitle="The AVNL Board comprises Functional Directors, a Government Nominee Director and (forthcoming) Independent Directors, in line with DPE governance guidelines."
        crumbs={[{ label: "Leadership" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {BOARD.map((b) => (
          <div key={b.name} className="bg-white border border-[var(--color-rule)] rounded-lg overflow-hidden flex flex-col sm:flex-row gap-0 lift">
            <div className="relative w-full sm:w-44 shrink-0 aspect-[4/5] sm:aspect-auto sm:min-h-[220px] bg-[var(--color-paper)]">
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 640px) 176px, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)] sm:hidden" />
            </div>
            <div className="p-5 flex-1">
              <h2 className="text-lg font-semibold text-[var(--color-navy)]">{b.name}</h2>
              <p className="text-sm text-[#444] mt-1 leading-snug">{b.title}</p>
              {b.note && (
                <p className="text-xs text-[#666] mt-3 italic border-l-2 border-[var(--color-saffron)] pl-3">
                  {b.note}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-6">
          <h2 className="text-xl font-semibold text-[var(--color-navy)]">Corporate Governance</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#333]">
            AVNL is committed to the highest standards of corporate governance, with
            emphasis on accountability, transparency, fairness and responsibility. The
            company complies with the Department of Public Enterprises (DPE) Guidelines on
            Corporate Governance for CPSEs, the Companies Act 2013, and the Right to
            Information Act 2005.
          </p>
        </div>
      </div>
    </>
  );
}
