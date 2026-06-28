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
  title: "BaMo — From ad to appointment, handled for you",
  description:
    "BaMo creates your content, runs your Facebook ads, and follows up with every lead 24/7 — so real estate agents walk into warm appointments instead of chasing cold leads.",
  openGraph: {
    title: "BaMo — From ad to appointment, handled for you",
    description:
      "Done-for-you real estate marketing and lead follow-up. We run your funnel; you just close.",
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
