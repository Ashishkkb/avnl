"use client";
import Link from "next/link";
import { useT } from "./A11yProvider";
import { AccessibilityBar } from "./AccessibilityBar";

export function TopBar() {
  const t = useT();
  return (
    <div className="w-full">
      <div className="tricolor-bar" aria-hidden />
      <div className="bg-[var(--color-paper)] border-b border-[var(--color-rule)] text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4 text-[#444]">
          <div className="flex items-center gap-3 min-w-0 truncate">
            <span className="hidden sm:inline">{t("goi")}</span>
            <span className="text-[#888]">·</span>
            <span>{t("mod")}</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/connect/contact" className="hidden md:inline hover:underline">{t("contact")}</Link>
            <AccessibilityBar />
          </div>
        </div>
      </div>
    </div>
  );
}
