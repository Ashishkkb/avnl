import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { A11yProvider } from "@/components/A11yProvider";

export const metadata: Metadata = {
  title: "Armoured Vehicles Nigam Limited | Government of India Enterprise",
  description:
    "AVNL, A Government of India Enterprise under the Ministry of Defence. Manufacturer of armoured fighting vehicles, main battle tanks, military vehicles and engines for the Indian Armed Forces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <A11yProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[var(--color-navy)] focus:text-white focus:px-3 focus:py-2 focus:rounded z-50">
            Skip to main content
          </a>
          <TopBar />
          <Header />
          <main id="main" className="flex-1">{children}</main>
          <Footer />
        </A11yProvider>
      </body>
    </html>
  );
}
