import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Acts & Policies | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Acts & Policies"
      subtitle="Statutory framework and corporate policies applicable to AVNL."
      crumbs={[{ label: "Documents" }, { label: "Acts & Policies" }]}
      description={
        <>
          <h2>Statutory Framework</h2>
          <ul>
            <li>Companies Act, 2013 and Rules framed thereunder</li>
            <li>Right to Information Act, 2005</li>
            <li>Defence of India Act / Official Secrets Act</li>
            <li>SEBI / DPE Guidelines on Corporate Governance for CPSEs</li>
            <li>Apprentices Act, 1961; Contract Labour (R&A) Act, 1970; Factories Act, 1948</li>
          </ul>
          <h2>Corporate Policies</h2>
          <ul>
            <li>CSR Policy under Section 135 of the Companies Act 2013</li>
            <li>Whistle Blower / Vigil Mechanism Policy</li>
            <li>Related Party Transactions Policy</li>
            <li>Risk Management Policy</li>
            <li>Policy on Materiality of Events / Information</li>
          </ul>
        </>
      }
    />
  );
}
