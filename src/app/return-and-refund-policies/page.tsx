import type { Metadata } from "next";
import PolicyHero from "@/components/sections/PolicyHero";
import ReturnRefundContent from "@/components/sections/ReturnRefundContent";

export const metadata: Metadata = {
  title: "Return & Refund Policies | Aero Publishing",
  description:
    "Review Aero Publishing's Return & Refund Policy for information on cancellations, deposits, digital deliverables, chargebacks, and project abandonment.",
};

export default function ReturnAndRefundPoliciesPage() {
  return (
    <>
      <PolicyHero
        title="Return &"
        highlight="Refund Policies"
        effectiveDate="01/06/2026"
        lastUpdated="01/06/2026"
      />
      <ReturnRefundContent />
    </>
  );
}
