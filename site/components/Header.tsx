"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV } from "@/lib/nav";
import { ORG } from "@/lib/data";
import { useT } from "./A11yProvider";

export function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const t = useT();
  return (
    <header className="bg-white border-b border-[var(--color-rule)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-5">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <Image
            src="/images/avnl-mark.png"
            alt="AVANI, Armoured Vehicles Nigam Limited"
            width={96}
            height={96}
            className="object-contain shrink-0 w-[68px] h-[68px] sm:w-[84px] sm:h-[84px]"
            priority
          />
          <div className="leading-tight">
            <div className="text-lg sm:text-xl md:text-[22px] font-bold text-[var(--color-navy)] tracking-tight">
              {ORG.fullName}
            </div>
            <div className="text-xs sm:text-sm text-[#555] mt-0.5">
              {ORG.tagline} · CIN: <span className="font-mono">{ORG.cin}</span>
            </div>
          </div>
        </Link>
        <div className="ml-auto hidden md:flex items-center gap-4">
          <form role="search" className="flex items-center border border-[var(--color-rule)] rounded-full overflow-hidden bg-[var(--color-paper)]">
            <input
              type="search"
              placeholder={t("search")}
              className="px-4 py-2 text-sm bg-transparent outline-none w-64"
              aria-label="Search"
            />
            <button className="px-3 py-2 text-[var(--color-navy)] hover:bg-white grid place-items-center" aria-label="Submit search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
            </button>
          </form>
          <div className="h-12 w-px bg-[var(--color-rule)]" aria-hidden />
          <Image
            src="/images/mod-india.svg"
            alt="Ministry of Defence, Government of India"
            width={140}
            height={72}
            title="Ministry of Defence"
            className="h-16 w-auto"
          />
        </div>
        <button
          onClick={() => setOpenMobile((v) => !v)}
          className="md:hidden ml-auto p-2 border border-[var(--color-rule)] rounded text-[var(--color-navy)]"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>

      <nav className="border-t border-[var(--color-rule)] bg-white hidden md:block" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-stretch">
            <li>
              <Link
                href="/"
                className="block px-4 py-3 text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-paper)] border-b-2 border-transparent hover:border-[var(--color-saffron)]"
              >
                {t("home")}
              </Link>
            </li>
            {NAV.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-paper)] border-b-2 border-transparent group-hover:border-[var(--color-saffron)]"
                >
                  {item.label} ▾
                </Link>
                {item.children && (
                  <ul className="absolute left-0 top-full bg-white border border-[var(--color-rule)] shadow-lg min-w-[260px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
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

      {openMobile && (
        <nav className="md:hidden border-t border-[var(--color-rule)] bg-white" aria-label="Mobile">
          <ul className="px-4 py-2">
            <li><Link href="/" className="block py-2 text-sm font-medium">{t("home")}</Link></li>
            {NAV.map((item) => (
              <li key={item.label}>
                <details>
                  <summary className="py-2 text-sm font-medium cursor-pointer">{item.label}</summary>
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
