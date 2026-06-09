import Link from "next/link";
import { ORG } from "@/lib/data";
import { Icon } from "./icons";
import { SocialIcon, type SocialName } from "./SocialIcon";

// DBIM "Useful Links" — statutory + key links for a GoI ministry/dept/PSU site,
// laid out as one wide multi-column block (matching the DBIM footer template).
const usefulLinks: { label: string; href: string }[] = [
  { label: "Archives", href: "/documents/orders" },
  { label: "Website Policies", href: "/website-policies" },
  { label: "Related Links", href: "/connect/contact" },
  { label: "Sitemap", href: "/sitemap" },
  { label: "Help", href: "/help" },
  { label: "Contact Us", href: "/connect/contact" },
  { label: "Feedback", href: "/connect/grievances" },
  { label: "RTI", href: "/connect/rti" },
  { label: "Public Grievances", href: "/connect/grievances" },
  { label: "Tenders", href: "/offerings/tenders" },
  { label: "Vacancies / Careers", href: "/offerings/careers" },
  { label: "Vigilance / PIDPI", href: "/connect/vigilance" },
  { label: "Vendor Registration (OVRA)", href: "/connect/ovra" },
  { label: "Annual Reports", href: "/documents/annual-reports" },
  { label: "Acts & Policies", href: "/documents/acts-policies" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

const socials: { name: SocialName; label: string; href: string }[] = [
  { name: "x", label: "X (Twitter)", href: "https://twitter.com/" },
  { name: "youtube", label: "YouTube", href: "https://youtube.com/" },
  { name: "facebook", label: "Facebook", href: "https://facebook.com/" },
  { name: "instagram", label: "Instagram", href: "https://instagram.com/" },
];

const govPortals: { label: string; sub: string; href: string }[] = [
  { label: "MyGov", sub: "मेरी सरकार", href: "https://www.mygov.in/" },
  { label: "India.gov.in", sub: "National Portal of India", href: "https://www.india.gov.in/" },
];

// DBIM footers carry a "Last Updated On" date (dd.mm.yyyy).
const lastUpdated = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
  .format(new Date())
  .replace(/\//g, ".");

export function Footer() {
  return (
    <footer className="bg-[var(--color-eagle-green)] text-white mt-16" role="contentinfo" aria-label="footer">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Useful Links — wide multi-column block */}
        <div className="lg:col-span-8">
          <h4 className="font-bold mb-4 text-white uppercase tracking-wide text-sm">Useful Links</h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-2.5 text-sm">
            {usefulLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="group inline-flex items-start gap-1 text-white/85 hover:text-white hover:underline">
                  <Icon name="chevron-right" size={16} className="text-[var(--color-saffron)] mt-0.5 shrink-0" />
                  <span>{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe for updates */}
        <div className="lg:col-span-4 lg:text-right">
          <h4 className="font-bold mb-4 text-white uppercase tracking-wide text-sm">Subscribe for Updates</h4>
          <ul className="flex items-center gap-2 mb-5 lg:justify-end">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  title={s.label}
                  className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-[var(--color-saffron)] hover:text-[var(--color-eagle-green)] transition"
                >
                  <SocialIcon name={s.name} size={17} />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 lg:justify-end">
            {govPortals.map((g) => (
              <a
                key={g.label}
                href={g.href}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white text-[var(--color-navy)] rounded px-3 py-1.5 leading-tight text-left hover:shadow-md transition"
                title={g.label}
              >
                <span className="block font-bold text-sm">{g.label}</span>
                <span className="block text-[10px] text-[#555]">{g.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Ownership + Last Updated bar */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/75">
          <p className="text-center md:text-left">
            This website belongs to {ORG.fullName}, Ministry of Defence, Government of India.
            <span className="block text-white/55">© {new Date().getFullYear()} {ORG.fullName}. All rights reserved · CIN: {ORG.cin}</span>
          </p>
          <p className="inline-flex items-center gap-1.5 shrink-0">
            <Icon name="calendar" size={14} className="text-[var(--color-saffron)]" />
            Last Updated On: {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}
