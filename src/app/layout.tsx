import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DI ProCrafts — Website Renovation & Reskinning",
  description:
    "We renovate and reskin outdated websites to look stunningly modern. Fixed fees starting from €100. WordPress, HTML/CSS, any CMS.",
  metadataBase: new URL("https://di-procrafts.com"),
  openGraph: {
    title: "DI ProCrafts — Website Renovation & Reskinning",
    description: "We make old websites look modern. Starting from €100.",
    url: "https://di-procrafts.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
