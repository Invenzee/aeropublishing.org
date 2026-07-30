import type { Metadata } from "next";
import PortfolioHero from "@/components/sections/PortfolioHero";
import ContactPageForm from "@/components/sections/ContactPageForm";

export const metadata: Metadata = {
  title: "Contact Us | Aero Publishing",
  description:
    "Connect with Aero Publishing to discuss your manuscript, explore our services, and discover how we can help bring your story to readers around the world.",
};

export default function ContactUsPage() {
  return (
    <>
      <PortfolioHero
        title="Contact"
        highlight="Us"
        description="Connect with the team behind your publishing success. Whether you have a completed manuscript, an unfinished draft, or simply an idea worth sharing, we're here to guide you through every stage of the publishing journey. Reach out to discuss your project, explore our services, and discover how Aero Publishing can help bring your story to readers around the world."
      />
      <ContactPageForm />
    </>
  );
}
