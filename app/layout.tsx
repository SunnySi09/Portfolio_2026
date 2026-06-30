import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cormorant_Garamond } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

// Fonts are self-hosted (no Google Fonts request at build or runtime).
const display = localFont({
  src: "./fonts/BricolageGrotesque-Variable.woff2",
  variable: "--font-display",
  weight: "400 800",
  display: "swap",
});

const body = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.intro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
