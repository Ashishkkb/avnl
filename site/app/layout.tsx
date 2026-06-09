import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { A11yProvider } from "@/components/A11yProvider";
import { AccessibilityPanel } from "@/components/AccessibilityPanel";

// DBIM typography: Noto Sans for Latin, Noto Sans Devanagari for Hindi/Rajbhasha,
// so the language toggle renders Devanagari script reliably across platforms.
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Armoured Vehicles Nigam Limited | Government of India Enterprise",
  description:
    "AVNL, A Government of India Enterprise under the Ministry of Defence. Manufacturer of armoured fighting vehicles, main battle tanks, military vehicles and engines for the Indian Armed Forces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${notoDevanagari.variable}`}>
      <head>
        {/* DBIM iconography: Material Symbols Outlined (same icon font the DBIM ToolKit uses) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <A11yProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--color-navy)] focus:text-white focus:px-3 focus:py-2 focus:rounded z-50">
            Skip to main content
          </a>
          <TopBar />
          <Header />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
          <AccessibilityPanel />
        </A11yProvider>
      </body>
    </html>
  );
}
