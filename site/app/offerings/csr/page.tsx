import { StubPage } from "@/components/StubPage";
export const metadata = { title: "CSR Activities | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Corporate Social Responsibility"
      subtitle="AVNL's CSR programme is governed by Section 135 of the Companies Act 2013 and DPE Guidelines."
      crumbs={[{ label: "Offerings" }, { label: "CSR" }]}
      description={
        <>
          <h2>Focus Areas</h2>
          <ul>
            <li>Education and skill development in the vicinity of AVNL units</li>
            <li>Healthcare, mobile medical units, support to government hospitals</li>
            <li>Environmental sustainability, afforestation, water conservation</li>
            <li>Welfare of ex-servicemen and their families</li>
            <li>Promotion of sports and Swachh Bharat activities</li>
          </ul>
          <h2>Governance</h2>
          <p>The Board of Directors of AVNL constitutes a CSR Committee that approves the annual CSR Policy, project list and budget in accordance with the Companies (CSR Policy) Rules, 2014.</p>
        </>
      }
    />
  );
}
