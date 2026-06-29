import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BaMo — Your AI Growth Team for Real Estate",
  description:
    "BaMo is a done-for-you AI growth team for Philippine real estate professionals — website, Facebook ads, AI content, 24/7 lead follow-up, private CRM, and appointment setting, all in one service.",
  openGraph: {
    title: "BaMo — Your AI Growth Team for Real Estate",
    description:
      "We build your website, manage your marketing, respond to every lead 24/7, and book appointments — so you can focus on closing more sales.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1F3C88",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
