import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Brochures | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Media"
      title="Brochures"
      subtitle="Downloadable product and capability brochures."
      crumbs={[{ label: "Media" }, { label: "Brochures" }]}
      description={
        <>
          <h2>Downloads</h2>
          <ul>
            <li>AVNL Corporate Brochure 2025 (PDF)</li>
            <li>T-90 Bhishma Capability Brochure (PDF)</li>
            <li>MBT Arjun Mk-1A Capability Brochure (PDF)</li>
            <li>BMP-II Sarath Product Brochure (PDF)</li>
            <li>Stallion / Super Stallion Product Brochure (PDF)</li>
          </ul>
        </>
      }
    />
  );
}
