import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Annual Returns | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Annual Returns (MGT-7)"
      subtitle="Annual Returns filed by AVNL with the Ministry of Corporate Affairs under Section 92 of the Companies Act 2013."
      crumbs={[{ label: "Documents" }, { label: "Annual Returns" }]}
      description={
        <>
          <h2>Filed Returns</h2>
          <ul>
            <li>Form MGT-7 for FY 2024-25, filed with MCA</li>
            <li>Form MGT-7 for FY 2023-24, filed with MCA</li>
            <li>Form MGT-7 for FY 2022-23, filed with MCA</li>
            <li>Form MGT-7 for FY 2021-22 (inaugural), filed with MCA</li>
          </ul>
        </>
      }
    />
  );
}
