"use client";

import dynamic from "next/dynamic";

const LeadPopup = dynamic(() => import("@/components/LeadPopup"), { ssr: false });

export default function LeadPopupLoader() {
  return <LeadPopup />;
}
