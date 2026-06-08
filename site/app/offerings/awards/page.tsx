import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Awards & Achievements | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Awards & Achievements"
      subtitle="Recognition of AVNL units and personnel for quality, innovation and operational excellence."
      crumbs={[{ label: "Offerings" }, { label: "Awards" }]}
      description={
        <>
          <h2>Notable Awards</h2>
          <ul>
            <li><strong>OFMK Medak</strong>, Golden Peacock National Quality Award (2007)</li>
            <li><strong>OFMK Medak</strong>, Raksha Mantri Award for Excellence (2014-15, 2015-16)</li>
            <li><strong>HVF Avadi</strong>, ISO 50001, OHSMS and EMS certifications; NABL-accredited laboratory</li>
            <li><strong>VFJ Jabalpur</strong>, ISO 9001 and NABL accreditation</li>
            <li><strong>MTPF Ambernath</strong>, Centre of Excellence for KAVACH and electronic fuzes</li>
          </ul>
        </>
      }
    />
  );
}
