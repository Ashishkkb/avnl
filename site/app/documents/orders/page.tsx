import { StubPage } from "@/components/StubPage";
import { ANNOUNCEMENTS } from "@/lib/data";
export const metadata = { title: "Orders & Notices | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="Documents"
      title="Orders & Notices"
      subtitle="Official notifications, circulars and notices issued by AVNL Corporate Office and Units."
      crumbs={[{ label: "Documents" }, { label: "Orders & Notices" }]}
      description={
        <>
          <h2>Recent Notices</h2>
          <ul>
            {ANNOUNCEMENTS.map((a) => (
              <li key={a.title}>
                <strong>{a.date}</strong>, [{a.badge}] {a.title}
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
