import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Presentations | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Media"
      title="Presentations"
      subtitle="Leadership presentations from NDIC, DefExpo, Aero India and investor meetings."
      crumbs={[{ label: "Media" }, { label: "Presentations" }]}
      description={
        <>
          <h2>Featured Presentations</h2>
          <ul>
            <li>NDIC 2026, DRISHTI Challenge Launch Presentation (Feb 2026)</li>
            <li>DefExpo 2024, AVNL Capability Showcase (Oct 2024)</li>
            <li>Aero India 2025, Land Systems Roadmap (Feb 2025)</li>
            <li>Vendor Meet 2024, MSME Engagement Framework</li>
          </ul>
        </>
      }
    />
  );
}
