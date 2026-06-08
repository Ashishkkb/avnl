import { StubPage } from "@/components/StubPage";
export const metadata = { title: "Our Performance | AVNL" };
export default function Page() {
  return (
    <StubPage
      eyebrow="About"
      title="Our Performance"
      subtitle="AVNL operating and financial performance highlights."
      crumbs={[{ label: "About", href: "/about" }, { label: "Performance" }]}
      description={
        <>
          <h2>Headline Numbers</h2>
          <ul>
            <li><strong>Authorised Capital:</strong> ₹ 12,500 Crore</li>
            <li><strong>Order Book:</strong> ~ ₹ 31,000 Crore (across the five manufacturing units)</li>
            <li><strong>Workforce:</strong> ~17,000 across all units</li>
            <li><strong>Operating Profit:</strong> Disclosed in the Audited Annual Accounts</li>
          </ul>
          <h2>Key Deliveries</h2>
          <ul>
            <li>First batch of T-90 Bhishma Mk-III delivered May 2024</li>
            <li>Continued series production of BMP-II Sarath at OFMK</li>
            <li>Sharang 155 mm gun upgrades delivered to Indian Army Artillery</li>
          </ul>
        </>
      }
    />
  );
}
