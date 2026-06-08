import { StubPage } from "@/components/StubPage";

export const metadata = { title: "Right to Information (RTI) | AVNL" };

export default function RTIPage() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Right to Information (RTI)"
      subtitle="Proactive disclosure under Section 4(1)(b) of the Right to Information Act, 2005."
      crumbs={[{ label: "Connect" }, { label: "RTI" }]}
      description={
        <>
          <h2>Filing an RTI Application</h2>
          <p>
            Citizens may file an RTI application with AVNL either online through the
            <strong> RTI Online Portal (rtionline.gov.in)</strong> or by post addressed to the
            Central Public Information Officer (CPIO) at AVNL Corporate Office, Avadi.
          </p>
          <h2>Designated Officers</h2>
          <ul>
            <li>Chief Public Information Officer (CPIO), AVNL Corporate Office, Avadi</li>
            <li>Public Information Officers (PIOs), designated at each of the five manufacturing units</li>
            <li>First Appellate Authority (FAA), Director (HR), AVNL</li>
          </ul>
          <h2>Proactive Disclosure</h2>
          <p>
            AVNL publishes its Proactive Disclosure document covering organisational
            particulars, functions, powers and duties of officers, decision-making
            processes, budget allocations, subsidy programmes and the directory of officers.
          </p>
        </>
      }
      contacts={[
        { label: "CPIO Phone", value: "044-26843000" },
        { label: "RTI Online", value: "rtionline.gov.in", href: "https://rtionline.gov.in/" },
      ]}
    />
  );
}
