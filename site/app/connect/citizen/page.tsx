import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Citizen Engagement | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Citizen Engagement"
      subtitle="AVNL engages with citizens through outreach programmes, factory visits, exhibitions and digital channels."
      crumbs={[{ label: "Connect" }, { label: "Citizen Engagement" }]}
      description={
        <>
          <h2>Outreach</h2>
          <p>
            AVNL participates in flagship Government of India events including Defence Expo,
            Aero India, the National Defence Industries Conclave (NDIC) and Republic Day
            tableaux to engage citizens, academia and industry.
          </p>
          <h2>Factory Visits</h2>
          <p>Educational institutions and accredited media may request guided factory visits at HVF, EFA, OFMK, VFJ and MTPF, subject to security clearance and prior approval from the respective unit's General Manager.</p>
        </>
      }
    />
  );
}
