"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FontStep = -1 | 0 | 1 | 2;
type Lang = "en" | "hi";
type Theme = "light" | "dark" | "hc";

type Ctx = {
  fontStep: FontStep;
  setFontStep: (s: FontStep) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  underline: boolean;
  setUnderline: (b: boolean) => void;
  imagesHidden: boolean;
  setImagesHidden: (b: boolean) => void;
  reset: () => void;
};

const A11yCtx = createContext<Ctx | null>(null);

export function A11yProvider({ children }: { children: React.ReactNode }) {
  const [fontStep, setFontStep] = useState<FontStep>(0);
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");
  const [underline, setUnderline] = useState(false);
  const [imagesHidden, setImagesHidden] = useState(false);

  // Restore from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("avnl-a11y");
      if (raw) {
        const v = JSON.parse(raw);
        if (typeof v.fontStep === "number") setFontStep(v.fontStep);
        if (v.lang) setLang(v.lang);
        if (v.theme) setTheme(v.theme);
        setUnderline(!!v.underline);
        setImagesHidden(!!v.imagesHidden);
      }
    } catch {}
  }, []);

  // Persist + apply to <html>
  useEffect(() => {
    const html = document.documentElement;
    const sizes: Record<FontStep, string> = { "-1": "14px", "0": "16px", "1": "18px", "2": "20px" } as Record<FontStep, string>;
    html.style.fontSize = sizes[fontStep];
    html.setAttribute("data-theme", theme);
    html.setAttribute("data-lang", lang);
    html.setAttribute("data-underline", underline ? "on" : "off");
    html.setAttribute("data-hide-images", imagesHidden ? "on" : "off");
    try {
      localStorage.setItem(
        "avnl-a11y",
        JSON.stringify({ fontStep, lang, theme, underline, imagesHidden })
      );
    } catch {}
  }, [fontStep, lang, theme, underline, imagesHidden]);

  const reset = () => {
    setFontStep(0);
    setLang("en");
    setTheme("light");
    setUnderline(false);
    setImagesHidden(false);
  };

  const value = useMemo<Ctx>(
    () => ({
      fontStep, setFontStep,
      lang, setLang,
      theme, setTheme,
      underline, setUnderline,
      imagesHidden, setImagesHidden,
      reset,
    }),
    [fontStep, lang, theme, underline, imagesHidden]
  );

  return <A11yCtx.Provider value={value}>{children}</A11yCtx.Provider>;
}

export function useA11y() {
  const ctx = useContext(A11yCtx);
  if (!ctx) throw new Error("useA11y must be used inside A11yProvider");
  return ctx;
}

// Convenience: a translated string lookup using a tiny dictionary.
export function useT() {
  const { lang } = useA11y();
  return (key: keyof typeof DICT["en"]) => DICT[lang][key] ?? DICT.en[key] ?? key;
}

export const DICT = {
  en: {
    goi: "Government of India",
    mod: "Ministry of Defence",
    skip: "Skip to Main Content",
    contact: "Contact",
    search: "Search avnl.co.in",
    home: "Home",
    accessibility: "Accessibility",
    fontSize: "Text size",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    hc: "High contrast",
    underline: "Underline links",
    hideImages: "Hide images",
    reset: "Reset",
    languageLabel: "हिंदी",
    explore: "Explore Products",
    vendor: "Vendor Registration (OVRA)",
    tenders: "Active Tenders",
    welcomeTo: "Welcome to",
  },
  hi: {
    goi: "भारत सरकार",
    mod: "रक्षा मंत्रालय",
    skip: "मुख्य सामग्री पर जाएँ",
    contact: "संपर्क",
    search: "avnl.co.in पर खोजें",
    home: "मुख पृष्ठ",
    accessibility: "सुगम्यता",
    fontSize: "टेक्स्ट आकार",
    theme: "थीम",
    light: "हल्की",
    dark: "गहरी",
    hc: "उच्च कंट्रास्ट",
    underline: "लिंक रेखांकित करें",
    hideImages: "चित्र छिपाएँ",
    reset: "रीसेट",
    languageLabel: "English",
    explore: "उत्पाद देखें",
    vendor: "विक्रेता पंजीकरण (OVRA)",
    tenders: "सक्रिय निविदाएँ",
    welcomeTo: "स्वागत है",
  },
} as const;
