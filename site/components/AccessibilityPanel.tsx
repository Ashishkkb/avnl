"use client";
import { useEffect } from "react";
import { useA11y, useT } from "./A11yProvider";
import { Icon, type IconName } from "./icons";

/**
 * DBIM "Accessibility Controls" drawer — slides in from the right when the
 * header accessibility icon is clicked. Mirrors the toolkit's tile grid:
 * Dark Contrast, Invert, Saturation, Text Size +/-, Highlight Links,
 * Hide Images, Big/Default Cursor.
 */
export function AccessibilityPanel() {
  const a = useA11y();
  const t = useT();

  // Close on Escape.
  useEffect(() => {
    if (!a.panelOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && a.setPanelOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [a.panelOpen, a]);

  type Tile = { icon: IconName; label: string; active: boolean; onClick: () => void; custom?: string };
  const tiles: Tile[] = [
    { icon: "moon", label: t("darkContrast"), active: a.theme === "dark", onClick: () => a.setTheme(a.theme === "dark" ? "light" : "dark") },
    { icon: "contrast", label: t("invert"), active: a.invert, onClick: () => a.setInvert(!a.invert) },
    { icon: "saturation", label: t("saturation"), active: a.saturation, onClick: () => a.setSaturation(!a.saturation) },
    { icon: "text-increase", label: t("textIncrease"), active: a.fontStep > 0, onClick: () => a.setFontStep(Math.min(2, (a.fontStep + 1)) as 2), custom: "A+" },
    { icon: "text-decrease", label: t("textDecrease"), active: a.fontStep < 0, onClick: () => a.setFontStep(Math.max(-1, (a.fontStep - 1)) as -1), custom: "A−" },
    { icon: "link", label: t("highlightLinks"), active: a.underline, onClick: () => a.setUnderline(!a.underline) },
    { icon: "hide-image", label: t("hideImages"), active: a.imagesHidden, onClick: () => a.setImagesHidden(!a.imagesHidden) },
    { icon: "cursor", label: t("bigCursor"), active: a.bigCursor, onClick: () => a.setBigCursor(!a.bigCursor) },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-[60] transition-opacity ${a.panelOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => a.setPanelOpen(false)}
        aria-hidden
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t("a11yControls")}
        className={`fixed top-0 right-0 h-full w-[340px] max-w-[88vw] bg-white shadow-2xl z-[61] transition-transform duration-300 ${a.panelOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-rule)]">
          <h2 className="flex items-center gap-2 text-base font-semibold text-[var(--color-navy)] whitespace-nowrap">
            <Icon name="accessibility" size={20} className="text-[var(--color-navy)]" />
            {t("a11yControls")}
          </h2>
          <button
            onClick={() => a.setPanelOpen(false)}
            aria-label={t("close")}
            className="p-1 rounded hover:bg-[var(--color-paper)] text-[#555]"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="p-4 grid grid-cols-2 gap-2.5 overflow-y-auto" style={{ maxHeight: "calc(100% - 130px)" }}>
          {tiles.map((tile) => (
            <button
              key={tile.label}
              onClick={tile.onClick}
              aria-pressed={tile.active}
              className={`flex flex-col items-center justify-center gap-2 rounded-md border p-2.5 text-center transition ${
                tile.active
                  ? "border-[var(--color-navy)] bg-[var(--color-navy)]/5"
                  : "border-[var(--color-rule)] hover:border-[var(--color-navy)]"
              }`}
            >
              {/* Icon */}
              <span className="grid place-items-center h-9 text-[var(--color-navy)]">
                {tile.custom ? (
                  <span className="text-2xl font-bold leading-none">{tile.custom}</span>
                ) : (
                  <Icon name={tile.icon} size={26} />
                )}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wide text-[var(--color-navy)] leading-tight">{tile.label}</span>
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 inset-x-0 px-4 py-3 border-t border-[var(--color-rule)] bg-white">
          <button
            onClick={a.reset}
            className="w-full inline-flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-[var(--color-navy)] hover:bg-[var(--color-paper)] rounded-md"
          >
            <Icon name="reset" size={18} />
            {t("reset")}
          </button>
        </div>
      </aside>
    </>
  );
}
