import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import OurMission from "@/components/sections/OurMission";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About Us | Aero Publishing",
  description:
    "Aero Publishing is a brand operated by SOLAR THIRTY LLC, dedicated to helping authors at every stage of the publishing journey with professional editing, design, publishing, and marketing services.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <OurMission />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
