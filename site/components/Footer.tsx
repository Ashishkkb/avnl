import Link from "next/link";
import Image from "next/image";
import { ORG } from "@/lib/data";

const usefulLinks = [
  { label: "Ministry of Defence", href: "https://mod.gov.in/" },
  { label: "Department of Defence Production", href: "https://www.ddpmod.gov.in/" },
  { label: "Make in India", href: "https://www.makeinindia.com/" },
  { label: "MyGov", href: "https://www.mygov.in/" },
  { label: "India.gov.in", href: "https://www.india.gov.in/" },
  { label: "PIB India", href: "https://pib.gov.in/" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/avnl-mark.png" alt="AVANI" width={56} height={56} className="object-contain bg-white/95 rounded p-1" />
            <div>
              <div className="font-semibold">{ORG.fullName}</div>
              <div className="text-xs text-white/70">{ORG.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            {ORG.registeredOffice}
          </p>
          <p className="text-sm text-white/80 mt-2">Tel: {ORG.phone}</p>
          <p className="text-sm text-white/80">Email: {ORG.emailGeneral}</p>
          <p className="text-xs text-white/60 mt-2">CIN: {ORG.cin}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-gold)]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About AVNL</Link></li>
            <li><Link href="/leadership" className="hover:underline">Leadership</Link></li>
            <li><Link href="/units" className="hover:underline">Our Units</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><Link href="/offerings/tenders" className="hover:underline">Tenders</Link></li>
            <li><Link href="/offerings/careers" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-gold)]">Citizen Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/connect/rti" className="hover:underline">RTI</Link></li>
            <li><Link href="/connect/grievances" className="hover:underline">Public Grievances</Link></li>
            <li><Link href="/connect/vigilance" className="hover:underline">Vigilance / PIDPI</Link></li>
            <li><Link href="/connect/ovra" className="hover:underline">Online Vendor Registration</Link></li>
            <li><Link href="/documents/acts-policies" className="hover:underline">Acts &amp; Policies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[var(--color-gold)]">Government of India</h4>
          <ul className="space-y-2 text-sm">
            {usefulLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline" target="_blank" rel="noreferrer noopener">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <div>
            © {new Date().getFullYear()} Armoured Vehicles Nigam Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sitemap" className="hover:underline">Sitemap</Link>
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
