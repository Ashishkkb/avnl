import Image from "next/image";
import Link from "next/link";

const PARTNERS = [
  { label: "Government of India", img: "/images/goi-logo.svg", href: "https://india.gov.in/" },
  { label: "Ministry of Defence", img: "/images/mod-india.svg", href: "https://mod.gov.in/" },
  { label: "Emblem of India", img: "/images/emblem.svg", href: "https://india.gov.in/" },
  { label: "AVNL", img: "/images/avnl-mark.png", href: "/" },
  { label: "HVF Avadi", img: "/images/hvf-logo.jpg", href: "/units/hvf" },
];

export function PartnerStrip() {
  return (
    <section className="bg-white border-y border-[var(--color-rule)]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-[#666] mb-5">
          A Government of India Enterprise · Affiliations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PARTNERS.map((p) => (
            <Link key={p.label} href={p.href} className="block grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition" title={p.label}>
              <Image src={p.img} alt={p.label} width={80} height={64} className="object-contain h-14 w-auto" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
