import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Make in India | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Make in India, Defence"
      subtitle="AVNL is a flag-bearer of the Atma Nirbhar Bharat Abhiyan in armoured mobility."
      crumbs={[{ label: "Offerings" }, { label: "Make in India" }]}
      description={
        <>
          <h2>Indigenisation Achievements</h2>
          <ul>
            <li><strong>BMP-II / Sarath</strong>, 98.5% indigenisation achieved at OFMK</li>
            <li><strong>MBT Arjun Mk-1A</strong>, 54.7% indigenous content; 89 major/minor upgrades over the baseline</li>
            <li><strong>T-90 Bhishma Mk-III</strong>, Indigenously upgraded variant delivered to the Indian Army from 2024</li>
            <li><strong>KAVACH Mod II</strong>, Centre of Excellence at MTPF Ambernath</li>
            <li><strong>V46-6 / V92S2 / UTD-20</strong> diesel engines, manufactured indigenously at EFA Avadi</li>
          </ul>
          <h2>Positive Indigenisation Lists</h2>
          <p>AVNL aligns its product roadmap with the Ministry of Defence's <em>Positive Indigenisation Lists</em> notifying items reserved for indigenous procurement after specified embargo dates.</p>
        </>
      }
    />
  );
}
