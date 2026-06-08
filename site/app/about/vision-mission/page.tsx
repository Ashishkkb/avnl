import { StubPage } from "@/components/StubPage";
import { MISSION, VISION } from "@/lib/data";
export const metadata = { title: "Vision & Mission | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="About"
      title="Vision & Mission"
      crumbs={[{ label: "About", href: "/about" }, { label: "Vision & Mission" }]}
      description={
        <>
          <h2>Vision</h2>
          <p className="italic text-lg">“{VISION}”</p>
          <h2>Mission</h2>
          <ul>{MISSION.map((m, i) => <li key={i}>{m}</li>)}</ul>
        </>
      }
    />
  );
}
