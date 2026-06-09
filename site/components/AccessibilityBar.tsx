"use client";
import { useA11y, useT } from "./A11yProvider";
import { Icon, type IconName } from "./icons";

export function AccessibilityBar() {
  const a = useA11y();
  const t = useT();
  const themes: { v: "light" | "dark" | "hc"; label: string; icon: IconName }[] = [
    { v: "light", label: t("light"), icon: "sun" },
    { v: "dark", label: t("dark"), icon: "moon" },
    { v: "hc", label: t("hc"), icon: "contrast" },
  ];
  return (
    <div className="flex items-center gap-2 text-xs" role="toolbar" aria-label={t("accessibility")}>
      <span className="hidden lg:inline text-[#777] mr-1">{t("fontSize")}:</span>
      <div className="inline-flex bg-white border border-[var(--color-rule)] rounded overflow-hidden">
        <button
          onClick={() => a.setFontStep(Math.max(-1, (a.fontStep - 1) as -1) as -1)}
          aria-label="Decrease text size"
          className="w-7 h-7 grid place-items-center hover:bg-[var(--color-paper)] disabled:opacity-40"
          disabled={a.fontStep <= -1}
        >A−</button>
        <button
          onClick={() => a.setFontStep(0)}
          aria-label="Reset text size"
          className={`w-7 h-7 grid place-items-center hover:bg-[var(--color-paper)] ${a.fontStep === 0 ? "bg-[var(--color-paper)] font-bold" : ""}`}
        >A</button>
        <button
          onClick={() => a.setFontStep(Math.min(2, (a.fontStep + 1) as 2) as 2)}
          aria-label="Increase text size"
          className="w-7 h-7 grid place-items-center hover:bg-[var(--color-paper)] disabled:opacity-40"
          disabled={a.fontStep >= 2}
        >A+</button>
      </div>

      <div className="inline-flex bg-white border border-[var(--color-rule)] rounded overflow-hidden ml-1" role="radiogroup" aria-label={t("theme")}>
        {themes.map((th) => (
          <button
            key={th.v}
            onClick={() => a.setTheme(th.v)}
            aria-label={th.label}
            aria-checked={a.theme === th.v}
            role="radio"
            title={th.label}
            className={`w-7 h-7 grid place-items-center hover:bg-[var(--color-paper)] ${a.theme === th.v ? "bg-[var(--color-paper)] text-[var(--color-navy)]" : ""}`}
          ><Icon name={th.icon} size={16} /></button>
        ))}
      </div>

      <button
        onClick={() => a.setUnderline(!a.underline)}
        aria-pressed={a.underline}
        title={t("underline")}
        className={`px-2 h-7 border border-[var(--color-rule)] rounded text-xs hover:bg-[var(--color-paper)] ${a.underline ? "bg-[var(--color-paper)] font-bold underline" : "bg-white"}`}
      >U</button>
    </div>
  );
}
