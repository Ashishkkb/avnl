import { StubPage } from "@/components/StubPage";

export const metadata = { title: "Vigilance | AVNL" };

export default function VigilancePage() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Vigilance, PIDPI / Whistle Blower"
      subtitle="AVNL Vigilance follows the Central Vigilance Commission (CVC) guidelines and the PIDPI Resolution."
      crumbs={[{ label: "Connect" }, { label: "Vigilance" }]}
      description={
        <>
          <h2>Public Interest Disclosure and Protection of Informers (PIDPI)</h2>
          <p>
            Complaints under the PIDPI Resolution may be sent in a closed envelope to the
            Secretary, Central Vigilance Commission, with the words "PIDPI Complaint"
            super-scribed on the envelope. The identity of the complainant is protected by law.
          </p>
          <h2>Whistle Blower Policy</h2>
          <p>
            AVNL's Whistle Blower Policy provides employees, vendors and stakeholders with a
            secure mechanism to report any actual or suspected violations of the Code of
            Conduct, the Companies Act 2013, anti-bribery laws or other applicable
            regulations, without fear of retaliation.
          </p>
          <h2>Chief Vigilance Officer (CVO)</h2>
          <p>The CVO is appointed by the Ministry of Defence and reports administratively to the CMD of AVNL and functionally to the CVC.</p>
        </>
      }
      contacts={[
        { label: "CVO Office", value: "044-26843000" },
        { label: "CVC Portal", value: "cvc.gov.in", href: "https://cvc.gov.in/" },
      ]}
    />
  );
}
