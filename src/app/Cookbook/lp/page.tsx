import type { Metadata } from "next";
import CookbookHeader from "./CookbookHeader";
import CookbookHero from "./CookbookHero";
import CookbookAbout from "./CookbookAbout";
import CookbookFeatures from "./CookbookFeatures";
import CookbookOccasions from "./CookbookOccasions";
import CookbookExpert from "./CookbookExpert";
import CookbookSimple from "./CookbookSimple";
import CookbookCulinary from "./CookbookCulinary";
import CookbookFooter from "./CookbookFooter";
import CookbookLeadPopup from "./CookbookLeadPopup";

export const metadata: Metadata = {
  title: "Cookbook LP",
  description:
    "Publish your cookbook with Aero Publishing. Expert recipe editing, cookbook design, printing, and marketing to turn your recipes into a professional cookbook.",
  keywords: [
    "cookbook publishing",
    "publish a cookbook",
    "cookbook design",
    "self publish cookbook",
    "recipe book publishing",
    "Aero Publishing",
  ],
  alternates: {
    canonical: "https://aeropublishing.org/Cookbook/lp",
  },
  openGraph: {
    title: "Cookbook LP",
    description:
      "Turn your recipes into a beautifully designed cookbook with Aero Publishing. Professional design, printing, and worldwide publishing support.",
    type: "website",
    url: "https://aeropublishing.org/Cookbook/lp",
    siteName: "Aero Publishing",
  },
};

export default function CookbookLandingPage() {
  return (
    <main className="min-h-screen overflow-x-clip scroll-smooth bg-white text-black">
      <CookbookHeader />
      <CookbookHero />
      <CookbookAbout />
      <CookbookFeatures />
      <CookbookOccasions />
      <CookbookExpert />
      <CookbookSimple />
      <CookbookCulinary />
      <CookbookFooter />
      <CookbookLeadPopup />
    </main>
  );
}
