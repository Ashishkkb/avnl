"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import { ORG } from "@/lib/data";
import { useA11y, useT } from "./A11yProvider";
import { Icon } from "./icons";

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const t = useT();
  const a = useA11y();
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  // A section is active when the current path matches the item or any of its
  // children's top-level segment (children may span several segments, e.g.
  // "Ministry/Department" covers /about, /leadership and /units).
  const segOf = (href: string) => href.split("/")[1] || "";
  const isItemActive = (item: (typeof NAV)[number]) => {
    const segs = new Set([segOf(item.href), ...(item.children?.map((c) => segOf(c.href)) ?? [])]);
    segs.delete("");
    return [...segs].some((s) => pathname === `/${s}` || pathname.startsWith(`/${s}/`));
  };

  return (
    <header className="bg-white border-b border-[var(--color-rule)] sticky top-0 z-40">
      {/* Identity row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Emblem + lockup */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/avnl-mark.png"
            alt="AVANI, Armoured Vehicles Nigam Limited"
            width={96}
            height={96}
            className="object-contain shrink-0 w-[58px] h-[58px] sm:w-[68px] sm:h-[68px]"
            priority
          />
          <div className="leading-tight">
            <div className="text-xs sm:text-sm text-[#555]">{t("goi")} · {t("mod")}</div>
            <div className="text-base sm:text-lg md:text-xl font-bold text-[var(--color-navy)] tracking-tight">
              {ORG.fullName}
            </div>
            <div className="text-[11px] text-[#777] hidden sm:block">{ORG.tagline} · CIN: <span className="font-mono">{ORG.cin}</span></div>
          </div>
        </Link>

        {/* Search */}
        <form role="search" className="ml-auto hidden lg:flex items-center">
          <div className="flex items-center border border-[var(--color-rule)] border-b-2 border-b-[var(--color-navy)] rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[var(--color-navy)]/30">
            <input
              type="search"
              placeholder={t("search")}
              className="px-3 py-2 text-sm bg-transparent outline-none w-56 xl:w-64"
              aria-label="Search"
            />
            <button type="submit" className="px-2.5 py-2 text-[var(--color-navy)] hover:bg-[var(--color-paper)] grid place-items-center" aria-label="Submit search">
              <Icon name="search" size={18} />
            </button>
          </div>
        </form>

        {/* Partner logo */}
        <div className="hidden md:flex items-center shrink-0 lg:ml-4">
          <Image
            src="/images/mod-india.svg"
            alt="Ministry of Defence, Government of India"
            width={140}
            height={64}
            title="Ministry of Defence"
            className="h-14 w-auto"
          />
        </div>

        {/* Utility icon cluster: login | language | accessibility */}
        <div className="hidden md:flex items-center gap-2 shrink-0 ml-2 text-[var(--color-navy)]">
          <a
            href="https://janparichay.meripehchaan.gov.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="p-1.5 rounded hover:bg-[var(--color-paper)]"
            aria-label="Login (Jan Parichay)"
            title="Login"
          >
            <Icon name="login" size={22} />
          </a>
          <span className="w-px h-6 bg-[var(--color-rule)]" aria-hidden />
          <button
            type="button"
            onClick={() => a.setLang(a.lang === "en" ? "hi" : "en")}
            className="px-1.5 py-1 rounded hover:bg-[var(--color-paper)] grid place-items-center leading-none"
            aria-label="Switch language"
            title={a.lang === "en" ? "हिंदी में देखें" : "View in English"}
          >
            <span className="flex flex-col items-center text-[11px] font-semibold">
              <span className={a.lang === "hi" ? "text-[var(--color-saffron)]" : ""} lang="hi">अ</span>
              <span className={a.lang === "en" ? "text-[var(--color-saffron)]" : ""}>A</span>
            </span>
          </button>
          <span className="w-px h-6 bg-[var(--color-rule)]" aria-hidden />
          <button
            type="button"
            onClick={() => a.setPanelOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={a.panelOpen}
            className="p-1.5 rounded hover:bg-[var(--color-paper)]"
            aria-label={t("accessibility")}
            title={t("accessibility")}
          >
            <Icon name="accessibility" size={22} />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="md:hidden ml-auto p-2 border border-[var(--color-rule)] rounded text-[var(--color-navy)]"
          aria-label="Toggle menu"
          aria-expanded={openMobile}
        >
          <Icon name={openMobile ? "close" : "menu"} size={22} />
        </button>
      </div>

      {/* Primary navigation */}
      <nav className="border-t border-[var(--color-rule)] bg-white hidden md:block" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-stretch">
            <li>
              <Link
                href="/"
                aria-current={isHome ? "page" : undefined}
                className={`block px-4 py-3 text-sm hover:bg-[var(--color-paper)] border-b-2 ${
                  isHome
                    ? "text-[var(--color-navy)] border-[var(--color-navy)] font-bold"
                    : "text-[#374151] border-transparent font-medium hover:text-[var(--color-navy)] hover:border-[var(--color-navy)]"
                }`}
              >
                {t("home")}
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  aria-current={isItemActive(item) ? "page" : undefined}
                  className={`px-4 py-3 text-sm hover:bg-[var(--color-paper)] border-b-2 flex items-center gap-1 ${
                    isItemActive(item)
                      ? "text-[var(--color-navy)] border-[var(--color-navy)] font-bold"
                      : "text-[#374151] border-transparent font-medium group-hover:text-[var(--color-navy)] group-hover:border-[var(--color-navy)]"
                  }`}
                >
                  {item.label}
                  <Icon name="chevron-down" size={16} className="opacity-70 transition-transform group-hover:rotate-180" />
                </Link>
                {item.children && (
                  <ul className="absolute left-0 top-full bg-white border border-[var(--color-rule)] shadow-lg min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block px-4 py-2 text-sm text-[#222] hover:bg-[var(--color-paper)] hover:text-[var(--color-navy)]"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navigation */}
      {openMobile && (
        <nav className="md:hidden border-t border-[var(--color-rule)] bg-white" aria-label="Mobile">
          <form role="search" className="px-4 py-3">
            <div className="flex items-center border border-[var(--color-rule)] border-b-2 border-b-[var(--color-navy)] rounded-md overflow-hidden">
              <input type="search" placeholder={t("search")} className="px-3 py-2 text-sm bg-transparent outline-none flex-1" aria-label="Search" />
              <button type="submit" className="px-2.5 py-2 text-[var(--color-navy)]" aria-label="Submit search"><Icon name="search" size={18} /></button>
            </div>
          </form>
          <ul className="px-4 pb-2">
            <li><Link href="/" className="block py-2 text-sm font-medium">{t("home")}</Link></li>
            {NAV.map((item) => (
              <li key={item.label}>
                <details>
                  <summary className="py-2 text-sm font-medium cursor-pointer flex items-center justify-between">
                    {item.label}
                    <Icon name="chevron-down" size={16} />
                  </summary>
                  <ul className="pl-4 pb-2">
                    {item.children?.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block py-1.5 text-sm text-[#333]">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
