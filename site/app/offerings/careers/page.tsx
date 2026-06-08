import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Vacancies & Careers | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Offerings"
      title="Vacancies & Careers"
      subtitle="AVNL recruits Engineers, Technicians, Apprentices and Functional Specialists through open advertised processes."
      crumbs={[{ label: "Offerings" }, { label: "Careers" }]}
      description={
        <>
          <h2>Recruitment Channels</h2>
          <ul>
            <li>Direct recruitment to Group A, B and C posts through advertised written examinations and interviews</li>
            <li>Apprentices Act 1961, engagement of trade and graduate apprentices at all five units</li>
            <li>Lateral entry of specialists through PESB / Search-cum-Selection Committees for senior management positions</li>
            <li>Engagement of consultants, retired officers and contract personnel through public notices</li>
          </ul>
          <h2>Current Openings</h2>
          <p>Active vacancy notices are published in the Employment News, leading national dailies and on AVNL's website under <em>Documents → Orders & Notices</em>.</p>
        </>
      }
    />
  );
}
