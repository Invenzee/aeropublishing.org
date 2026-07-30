import type { Metadata } from "next";
import PolicyHero from "@/components/sections/PolicyHero";
import PrivacyContent from "@/components/sections/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Aero Publishing",
  description:
    "Learn how Aero Publishing collects, uses, stores, and protects your personal information when you visit our website or use our publishing services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHero
        title="Privacy"
        highlight="Policy"
        effectiveDate="01/06/2026"
        lastUpdated="01/06/2026"
      />
      <PrivacyContent />
    </>
  );
}
