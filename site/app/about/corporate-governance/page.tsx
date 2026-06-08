import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Corporate Governance | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="About"
      title="Corporate Governance"
      crumbs={[{ label: "About", href: "/about" }, { label: "Corporate Governance" }]}
      description={
        <>
          <h2>Framework</h2>
          <p>AVNL complies with the DPE Guidelines on Corporate Governance for CPSEs, the Companies Act 2013 and Rules framed thereunder, and the Right to Information Act 2005.</p>
          <h2>Board Committees</h2>
          <ul>
            <li>Audit Committee</li>
            <li>Nomination and Remuneration Committee</li>
            <li>Corporate Social Responsibility Committee</li>
            <li>Stakeholders Relationship Committee</li>
            <li>Risk Management Committee</li>
          </ul>
          <h2>Key Officers</h2>
          <ul>
            <li>Company Secretary &amp; Compliance Officer</li>
            <li>Chief Vigilance Officer (CVO), appointed by MoD on the advice of CVC</li>
            <li>Chief Public Information Officer under the RTI Act 2005</li>
          </ul>
        </>
      }
    />
  );
}
