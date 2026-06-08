import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Annual Reports | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Annual Reports"
      subtitle="AVNL Annual Reports laid before Parliament in accordance with the Companies Act 2013 and DPE Guidelines."
      crumbs={[{ label: "Documents" }, { label: "Annual Reports" }]}
      description={
        <>
          <h2>Reports</h2>
          <ul>
            <li>AVNL Annual Report 2024-25, released October 2025</li>
            <li>AVNL Annual Report 2023-24, released October 2024</li>
            <li>AVNL Annual Report 2022-23, released September 2023</li>
            <li>AVNL Annual Report 2021-22 (Inaugural Report), released August 2022</li>
          </ul>
          <p>Each report contains the Directors' Report, Management Discussion &amp; Analysis, Corporate Governance Report, audited Financial Statements, Independent Auditors' Report and the Comments of the Comptroller &amp; Auditor General of India under Section 143(6) of the Companies Act 2013.</p>
        </>
      }
    />
  );
}
