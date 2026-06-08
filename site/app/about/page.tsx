import { PageHeader } from "@/components/PageHeader";
import { FUNCTIONS, OBJECTIVES, ORG, VISION, MISSION } from "@/lib/data";

export const metadata = { title: "About Us | AVNL" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ministry / Department"
        title="About AVNL"
        subtitle="A Defence Public Sector Undertaking under the Department of Defence Production, Ministry of Defence, Government of India."
        crumbs={[{ label: "About" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2 prose-gov">
          <h2>History</h2>
          <p>
            Armoured Vehicles Nigam Limited (AVNL), branded as <strong>AVANI</strong>, was
            registered with the Ministry of Corporate Affairs on{" "}
            <strong>14 August 2021</strong> under the Companies Act, 2013. AVNL is one of
            seven fully Government-owned corporate entities created as part of the
            corporatisation of the erstwhile Ordnance Factory Board. The company commenced
            commercial operations on <strong>1 October 2021</strong>.
          </p>
          <p>
            AVNL inherits a manufacturing legacy spanning seven decades, beginning with
            the Machine Tool Prototype Factory (1953) and the Heavy Vehicles Factory (1965)
           , and is today one of India's largest defence manufacturers of armoured fighting
            vehicles, main battle tanks and high-power diesel engines.
          </p>

          <h2>Vision</h2>
          <p className="italic">“{VISION}”</p>

          <h2>Mission</h2>
          <ul>
            {MISSION.map((m, i) => <li key={i}>{m}</li>)}
          </ul>

          <h2>Objectives</h2>
          <ul>
            {OBJECTIVES.map((o, i) => <li key={i}>{o}</li>)}
          </ul>

          <h2>Functions</h2>
          <ul>
            {FUNCTIONS.map((f, i) => <li key={i}>{f}</li>)}
          </ul>

          <h2>Motto</h2>
          <p className="italic text-lg">“{ORG.motto}”</p>
        </article>

        <aside className="space-y-5">
          <div className="bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-lg p-5">
            <h3 className="font-semibold text-[var(--color-navy)] mb-3">Corporate Identity</h3>
            <dl className="text-sm space-y-2">
              <div><dt className="text-[#666]">Legal name</dt><dd className="font-medium">{ORG.fullName}</dd></div>
              <div><dt className="text-[#666]">Brand</dt><dd className="font-medium">{ORG.alias}</dd></div>
              <div><dt className="text-[#666]">CIN</dt><dd className="font-mono">{ORG.cin}</dd></div>
              <div><dt className="text-[#666]">Incorporated</dt><dd className="font-medium">{ORG.incorporated}</dd></div>
              <div><dt className="text-[#666]">Operational</dt><dd className="font-medium">{ORG.operationalFrom}</dd></div>
              <div><dt className="text-[#666]">Authorised Capital</dt><dd className="font-medium">{ORG.authorisedCapital}</dd></div>
              <div><dt className="text-[#666]">Order Book</dt><dd className="font-medium">{ORG.orderBookValue}</dd></div>
              <div><dt className="text-[#666]">Registered Office</dt><dd className="font-medium">{ORG.registeredOffice}</dd></div>
              <div><dt className="text-[#666]">Phone</dt><dd className="font-medium">{ORG.phone}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </>
  );
}
