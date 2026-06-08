import { PageHeader } from "@/components/PageHeader";
import { BOARD, UNITS } from "@/lib/data";

export const metadata = { title: "Organisation Chart | AVNL" };

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Organisation Chart"
        subtitle="AVNL's Board, Functional Directorates and five manufacturing units."
        crumbs={[{ label: "About", href: "/about" }, { label: "Organogram" }]}
      />
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <div className="bg-[var(--color-navy)] text-white rounded-lg p-6 text-center">
          <div className="text-xs uppercase tracking-wider text-[var(--color-gold)]">Board</div>
          <div className="text-xl font-bold mt-1">Chairman & Managing Director</div>
          <div className="text-white/80 text-sm">{BOARD[0].name} ({BOARD[0].title.split(" with")[0]})</div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {BOARD.slice(1).map((b) => (
            <div key={b.name} className="bg-white border border-[var(--color-rule)] rounded-lg p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-[var(--color-saffron)]">Director</div>
              <div className="font-semibold text-[var(--color-navy)] mt-1">{b.name}</div>
              <div className="text-xs text-[#555] mt-1">{b.title}</div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="h-6 border-l-2 border-[var(--color-rule)] mx-auto w-px" />
          <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-4 text-center max-w-xs mx-auto">
            <div className="text-xs uppercase tracking-wider text-[#666]">Operating Units</div>
            <div className="font-semibold text-[var(--color-navy)]">5 Manufacturing Units</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {UNITS.map((u) => (
            <div key={u.slug} className="bg-white border border-[var(--color-rule)] rounded-lg p-4 text-center">
              <div className="font-bold text-[var(--color-navy)]">{u.short}</div>
              <div className="text-xs text-[#666] mt-1">{u.location.split(",")[0]}</div>
              <div className="text-xs mt-2">CGM: {u.cgm}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
