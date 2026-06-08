import { StubPage } from "@/components/StubPage";
export const metadata = { title: "MSME Initiatives | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="MSME Initiatives"
      subtitle="AVNL is committed to the Public Procurement Policy for Micro and Small Enterprises Order, 2012."
      crumbs={[{ label: "Offerings" }, { label: "MSME" }]}
      description={
        <>
          <h2>Procurement Target</h2>
          <p>AVNL targets a minimum of 25% of its annual procurement from MSEs, with 4% reserved for MSEs owned by SC/ST entrepreneurs and 3% for women-owned MSEs, in line with the PPP-MSE Order.</p>
          <h2>Support Provided</h2>
          <ul>
            <li>Vendor Development Programmes (VDP) at each unit</li>
            <li>Free issue of tender documents and exemption from Earnest Money Deposit</li>
            <li>Technical hand-holding for new entrants, drawings, gauges, test specifications</li>
            <li>Payment within stipulated MSME Samadhan timelines</li>
          </ul>
        </>
      }
    />
  );
}
