import type { Metadata } from "next";
import PolicyHero from "@/components/sections/PolicyHero";
import TermsContent from "@/components/sections/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aero Publishing",
  description:
    "Read the Terms & Conditions for Aero Publishing, a brand owned and operated by SOLAR THIRTY LLC. Learn about our revision, refund, delivery, and communication policies.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PolicyHero
        title="Terms &"
        highlight="Conditions"
        effectiveDate="01/06/2026"
        lastUpdated="01/06/2026"
      />
      <TermsContent />
    </>
  );
}
