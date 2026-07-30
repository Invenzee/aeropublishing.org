import type { Metadata } from "next";
import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Portfolio | Aero Publishing",
  description:
    "Explore Aero Publishing's portfolio of professionally published books, cover designs, marketing campaigns, and author branding projects that connect writers with readers worldwide.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero
        title="Our"
        highlight="Portfolio"
        description="Explore a collection of projects that showcase our commitment to publishing excellence, creative innovation, and author success. From professionally published books and captivating cover designs to marketing campaigns and author branding projects, our portfolio highlights how Aero Publishing helps writers transform their ideas into impactful, market-ready publications that connect with readers worldwide."
      />
      <PortfolioGallery />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}
