import { StubPage } from "@/components/StubPage";
import { ORG, UNITS } from "@/lib/data";

export const metadata = { title: "Contact Us | AVNL" };

export default function ContactPage() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Contact Us"
      subtitle="Reach AVNL Corporate Office and our five manufacturing units."
      crumbs={[{ label: "Connect", href: "/connect/contact" }, { label: "Contact" }]}
      contacts={[
        { label: "Phone", value: ORG.phone },
        { label: "Email", value: ORG.emailGeneral },
        { label: "CIN", value: ORG.cin },
      ]}
      description={
        <>
          <h2>Corporate Office</h2>
          <p>{ORG.registeredOffice}</p>
          <p>Tel: {ORG.phone} · Email: {ORG.emailGeneral}</p>

          <h2>Unit Contacts</h2>
          <ul>
            {UNITS.map((u) => (
              <li key={u.slug}>
                <strong>{u.name} ({u.short})</strong>, {u.location} · CGM: {u.cgm} · Tel: {u.contact}
              </li>
            ))}
          </ul>
        </>
      }
    />
  );
}
