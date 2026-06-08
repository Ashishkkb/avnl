import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Publications | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Publications"
      subtitle="Technical publications, capability brochures and corporate communications."
      crumbs={[{ label: "Documents" }, { label: "Publications" }]}
      description={
        <>
          <h2>Capability Brochures</h2>
          <ul>
            <li>AVNL Corporate Brochure, Edition 2025</li>
            <li>Product Capability Compendium: T-90 / T-72 / Arjun</li>
            <li>OFMK Capability Brochure, BMP-II and Special Vehicles</li>
            <li>VFJ Product Catalogue, Stallion, Sharang, MPV families</li>
            <li>MTPF Capability Brochure, KAVACH, Electronic Fuzes, Precision Gearboxes</li>
          </ul>
        </>
      }
    />
  );
}
