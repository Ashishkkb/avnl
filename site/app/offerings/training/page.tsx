import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Training & Development | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Training & Development, AVNL IOLs"
      subtitle="Industrial Operating Labs and structured training programmes for technicians, engineers and supervisors."
      crumbs={[{ label: "Offerings" }, { label: "Training" }]}
      description={
        <>
          <h2>Industrial Operating Labs (IOLs)</h2>
          <p>Each AVNL unit operates an Industrial Operating Lab focused on hands-on capability building in CNC operations, armour welding, foundry, transmissions, metrology and quality inspection.</p>
          <h2>Apprenticeship</h2>
          <p>AVNL engages graduate, technician and trade apprentices under the Apprentices Act, 1961, contributing to the National Apprenticeship Promotion Scheme.</p>
          <h2>External Training</h2>
          <p>AVNL also offers structured short-term programmes for vendor personnel, defence customers and academic institutions on its specialised platforms (T-90, T-72, BMP-II, Arjun).</p>
        </>
      }
    />
  );
}
