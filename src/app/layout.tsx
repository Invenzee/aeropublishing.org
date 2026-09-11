import type { Metadata } from "next";
import { Figtree, Playfair_Display, Poppins, Syne } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import MarketingAttributionCapture from "@/components/MarketingAttributionCapture";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeropublishing.org"),
  title: "Aero Publishing | We Publish More Than Books, We Publish Legacies",
  description:
    "Whether you're writing your first book or expanding your author brand, our publishing experts help you transform your manuscript into a professionally published book.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${playfairDisplay.variable} ${poppins.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
        <MarketingAttributionCapture />
      </body>
    </html>
  );
}
