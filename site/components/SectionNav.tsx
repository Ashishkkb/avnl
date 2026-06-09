"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, type NavItem } from "@/lib/nav";
import { Icon } from "./icons";

/**
 * DBIM section sub-navigation bar.
 *
 * Sits directly under the page banner and exposes the sibling pages of the
 * current top-level section as a horizontal tab strip (e.g. on any Documents
 * page it lists Annual Reports · Acts & Policies · Orders · Publications …).
 * The active page is highlighted. Renders nothing on pages that don't belong
 * to a NAV section (so it's safe to mount globally via PageHeader).
 */
export function SectionNav() {
  const pathname = usePathname() || "/";
  const segOf = (href: string) => href.split("/")[1] || "";

  // Find the NAV section that owns the current path.
  const section: NavItem | undefined = NAV.find((item) => {
    const segs = new Set([segOf(item.href), ...(item.children?.map((c) => segOf(c.href)) ?? [])]);
    segs.delete("");
    return [...segs].some((s) => pathname === `/${s}` || pathname.startsWith(`/${s}/`));
  });

  if (!section?.children?.length) return null;

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="bg-[var(--color-wintergreen)] text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <nav aria-label={`${section.label} section`} className="flex items-stretch">
          <span className="hidden sm:grid place-items-center pr-1 text-white/50" aria-hidden>
            <Icon name="grip" size={18} />
          </span>
          <ul className="flex items-stretch gap-0 overflow-x-auto">
            {section.children.map((c) => {
              const active = isActive(c.href);
              return (
                <li key={c.href} className="shrink-0">
                  <Link
                    href={c.href}
                    aria-current={active ? "page" : undefined}
                    className={`block px-3.5 py-3 text-sm whitespace-nowrap border-b-[3px] transition ${
                      active
                        ? "bg-[var(--color-eagle-green)] text-white font-semibold border-[var(--color-saffron)]"
                        : "text-white/85 border-transparent hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
