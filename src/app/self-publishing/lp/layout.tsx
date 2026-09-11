import type { Metadata } from "next";
import "./sp-lp.css";

export const metadata: Metadata = {
  title: "Self-Publishing LP",
  description:
    "Aero Publishing takes your manuscript to Amazon, Barnes & Noble, Apple Books, Ingram, Kobo and Audible. Ghostwriting, editing, cover design, audiobook and marketing, with distribution reach most self-publishing services cannot match. You keep every right and every royalty.",
  keywords: [
    "self publishing services",
    "self publish a book",
    "book distribution",
    "Ingram distribution",
    "Amazon self publishing",
    "Aero Publishing",
  ],
  alternates: {
    canonical: "https://aeropublishing.org/self-publishing/lp",
  },
  openGraph: {
    title: "Self-Publishing LP",
    description:
      "Editing, design, publishing and marketing, with distribution reach into stores and libraries most self-publishing services never get you into.",
    type: "website",
    url: "https://aeropublishing.org/self-publishing/lp",
    siteName: "Aero Publishing",
  },
};

export default function SelfPublishingLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
