import { StubPage } from "@/components/StubPage";

export const metadata = { title: "Online Vendor Registration (OVRA) | AVNL" };

export default function OVRAPage() {
  return (
    <StubPage
      eyebrow="Connect"
      title="Online Vendor Registration Application (OVRA)"
      subtitle="Digital onboarding for new suppliers across AVNL's five manufacturing units."
      crumbs={[{ label: "Connect" }, { label: "OVRA" }]}
      description={
        <>
          <h2>About OVRA</h2>
          <p>
            The Online Vendor Registration Application (OVRA) is AVNL's centralised digital
            platform for registering new suppliers, vendors and service providers. OVRA
            replaces the legacy paper-based vendor empanelment process and provides a single
            window across all five AVNL units, HVF, EFA, OFMK, VFJ and MTPF.
          </p>
          <h2>Who can register</h2>
          <ul>
            <li>Manufacturers of raw materials, sub-assemblies and components used in armoured platforms</li>
            <li>Original Equipment Manufacturers (OEMs) of machinery, tools and test equipment</li>
            <li>Service providers, calibration, NDT, surface treatment, special processes</li>
            <li>MSMEs and start-ups under the iDEX and AVNL MSME Initiative</li>
          </ul>
          <h2>Documents required</h2>
          <ul>
            <li>PAN, GSTIN and Udyam (MSME) registration certificate</li>
            <li>Company incorporation documents / partnership deed</li>
            <li>Audited financials of the last three financial years</li>
            <li>Quality certifications (ISO 9001, AS9100, NABL etc.) where applicable</li>
            <li>Past performance / past purchase orders relevant to defence manufacturing</li>
          </ul>
        </>
      }
      contacts={[
        { label: "Vendor Helpdesk", value: "044-26843000" },
        { label: "Email", value: "vendor[at]avnl[dot]co[dot]in" },
      ]}
    />
  );
}
