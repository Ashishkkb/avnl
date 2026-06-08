import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Rajbhasha | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Rajbhasha"
      subtitle="राजभाषा (हिंदी) के प्रसार हेतु AVNL की प्रतिबद्धता, Niyam Pustak, Avani Pravah."
      crumbs={[{ label: "Documents" }, { label: "Rajbhasha" }]}
      description={
        <>
          <h2>Publications</h2>
          <ul>
            <li><strong>Avani Pravah</strong>, AVNL's official Hindi corporate magazine, released bi-annually.</li>
            <li><strong>Niyam Pustak</strong>, Compendium of provisions of the Official Languages Act, 1963 and Rules, 1976 as applicable to AVNL.</li>
            <li>Hindi Pakhwada, Hindi Diwas and Rajbhasha workshops conducted across units.</li>
          </ul>
          <h2>Compliance</h2>
          <p>AVNL operates in a Region 'C' notified jurisdiction and complies with all reporting requirements of the Department of Official Language, Ministry of Home Affairs.</p>
        </>
      }
    />
  );
}
