import type { Metadata } from "next";
import { Figtree, Playfair_Display } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import MarketingAttributionCapture from "@/components/MarketingAttributionCapture";
import ZendeskWidget from "@/components/ZendeskWidget";
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
      className={`${figtree.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
        <MarketingAttributionCapture />
        <ZendeskWidget />
      </body>
    </html>
  );
}
