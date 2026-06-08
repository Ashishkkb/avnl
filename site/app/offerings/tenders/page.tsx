import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Tenders | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Tenders"
      subtitle="AVNL publishes all open tenders on the Government e-Marketplace (GeM) and the Central Public Procurement Portal (CPPP)."
      crumbs={[{ label: "Offerings" }, { label: "Tenders" }]}
      description={
        <>
          <h2>Where AVNL tenders are published</h2>
          <ul>
            <li>Central Public Procurement Portal, eprocure.gov.in</li>
            <li>Government e-Marketplace, gem.gov.in</li>
            <li>Unit-level notice boards at HVF, EFA, OFMK, VFJ and MTPF</li>
          </ul>
          <h2>Vendor Pre-requisites</h2>
          <p>Bidders are required to be registered on the CPPP / GeM and where applicable empanelled with AVNL through the OVRA process. Defence-sensitive tenders may additionally require Industrial Security clearance from the Ministry of Home Affairs.</p>
        </>
      }
      contacts={[
        { label: "CPPP", value: "eprocure.gov.in", href: "https://eprocure.gov.in/" },
        { label: "GeM", value: "gem.gov.in", href: "https://gem.gov.in/" },
      ]}
    />
  );
}
