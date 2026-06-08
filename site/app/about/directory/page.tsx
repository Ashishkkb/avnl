import { StubPage } from "@/components/StubPage";
import { UNITS } from "@/lib/data";
export const metadata = { title: "Directory | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="About"
      title="Directory of Officers"
      subtitle="Telephone and email directory of AVNL Corporate Office and Unit-level officers."
      crumbs={[{ label: "About", href: "/about" }, { label: "Directory" }]}
      description={
        <>
          <h2>Unit Heads</h2>
          <ul>
            {UNITS.map((u) => (
              <li key={u.slug}>
                <strong>{u.cgm}</strong>, Chief General Manager, {u.name} ({u.short}), Tel: {u.contact}
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
