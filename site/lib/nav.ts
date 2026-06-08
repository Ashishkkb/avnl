export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: "Ministry/Department",
    href: "/about",
    children: [
      { label: "About AVNL", href: "/about" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Corporate Governance", href: "/about/corporate-governance" },
      { label: "Leadership", href: "/leadership" },
      { label: "Our Units", href: "/units" },
      { label: "Organisation Chart", href: "/about/organogram" },
      { label: "Milestones", href: "/about/milestones" },
      { label: "Directory", href: "/about/directory" },
      { label: "Our Performance", href: "/about/performance" },
    ],
  },
  {
    label: "Offerings",
    href: "/offerings",
    children: [
      { label: "Products & Services", href: "/products" },
      { label: "Training & Development", href: "/offerings/training" },
      { label: "Tenders", href: "/offerings/tenders" },
      { label: "Vacancies / Careers", href: "/offerings/careers" },
      { label: "MSME Initiatives", href: "/offerings/msme" },
      { label: "Make in India", href: "/offerings/make-in-india" },
      { label: "Awards & Achievements", href: "/offerings/awards" },
      { label: "CSR Activities", href: "/offerings/csr" },
    ],
  },
  {
    label: "Documents",
    href: "/documents",
    children: [
      { label: "Annual Reports", href: "/documents/annual-reports" },
      { label: "Annual Returns", href: "/documents/annual-returns" },
      { label: "Acts & Policies", href: "/documents/acts-policies" },
      { label: "Rajbhasha", href: "/documents/rajbhasha" },
      { label: "Orders & Notices", href: "/documents/orders" },
      { label: "Publications", href: "/documents/publications" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Photo Gallery", href: "/media/photos" },
      { label: "Video Gallery", href: "/media/videos" },
      { label: "Brochures", href: "/media/brochures" },
      { label: "Presentations", href: "/media/presentations" },
    ],
  },
  {
    label: "Connect",
    href: "/connect",
    children: [
      { label: "Contact Us", href: "/connect/contact" },
      { label: "RTI", href: "/connect/rti" },
      { label: "Vigilance (PIDPI / Whistle Blower)", href: "/connect/vigilance" },
      { label: "Public Grievances", href: "/connect/grievances" },
      { label: "Online Vendor Registration (OVRA)", href: "/connect/ovra" },
      { label: "Citizen Engagement", href: "/connect/citizen" },
    ],
  },
];
