import { StubPage } from "@/components/StubPage";

export default function Page() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Public Grievances"
      subtitle="AVNL handles public grievances through the CPGRAMS portal."
      crumbs={[{ label: "Connect" }, { label: "Grievances" }]}
      description={
        <>
          <h2>How to lodge a grievance</h2>
          <p>
            Grievances against AVNL or any of its manufacturing units may be lodged on the
            Centralised Public Grievance Redress and Monitoring System (CPGRAMS) operated by
            the Department of Administrative Reforms and Public Grievances (DARPG).
          </p>
          <h2>Internal escalation</h2>
          <p>
            Grievances received by AVNL are tracked and escalated through a defined SLA, first
            response within 7 working days, full resolution targeted within 30 working days.
          </p>
        </>
      }
      contacts={[
        { label: "CPGRAMS", value: "pgportal.gov.in", href: "https://pgportal.gov.in/" },
        { label: "Helpline", value: "044-26843000" },
      ]}
    />
  );
}
export const metadata = { title: "Public Grievances | AVNL" };
