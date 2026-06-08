import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
export const metadata = { title: "Photo Gallery | AVNL" };

export default function Page() {
  const images = [
    { src: "/images/avnl-aeroindia.jpg", caption: "CEO Roundtable and EDGE at Aero India 2025", date: "13.02.2025" },
    { src: "/images/avnl-dsc01091.jpg", caption: "Apex Level Review, Security and Rajbhasha Conference", date: "21.02.2025" },
    { src: "/images/avnl-114A3705.jpg", caption: "AVNL Foundation Day Rally, second anniversary", date: "01.10.2023" },
    { src: "/images/avnl-secretary.jpg", caption: "Defence Secretary visit to AVNL shop floor", date: "18.07.2024" },
    { src: "/images/avnl-agm.jpg", caption: "Second Annual General Meeting of Shareholders", date: "25.09.2023" },
    { src: "/images/rm-with-chiefs.jpg", caption: "Hon'ble Raksha Mantri with Service Chiefs at NDIC 2026", date: "14.02.2026" },
    { src: "/images/t90-bhishma.jpg", caption: "T-90 Bhishma at Republic Day Parade", date: "26.01.2024" },
    { src: "/images/t90-side.jpg", caption: "T-90 side profile, manufactured at HVF Avadi", date: "15.08.2023" },
    { src: "/images/arjun-mbt.jpg", caption: "MBT Arjun on display at the Indian Army parade", date: "15.01.2024" },
    { src: "/images/t72-ajeya.jpg", caption: "T-72 Ajeya, backbone of India's armoured corps", date: "20.11.2023" },
    { src: "/images/bridge-layer.jpg", caption: "T-72 Bridge Layer Tank manufactured by HVF", date: "10.05.2023" },
    { src: "/images/hvf-entrance.jpg", caption: "Heavy Vehicles Factory entrance, Avadi", date: "02.04.2023" },
  ];
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Photo Gallery"
        subtitle="Photos from AVNL units, parades, exhibitions and ceremonial events."
        crumbs={[{ label: "Media" }, { label: "Photos" }]}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((img) => (
          <figure key={img.src} className="bg-white border border-[var(--color-rule)] rounded-lg overflow-hidden lift">
            <div className="relative aspect-[4/3] bg-[var(--color-navy)]">
              <Image src={img.src} alt={img.caption} fill className="object-cover" />
            </div>
            <figcaption className="p-3 text-sm">
              <div className="font-medium text-[#222] leading-snug">{img.caption}</div>
              <div className="text-xs text-[#666] mt-1 inline-flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[var(--color-saffron)]"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>
                {img.date}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
