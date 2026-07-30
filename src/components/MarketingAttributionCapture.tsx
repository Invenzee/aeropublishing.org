"use client";

import { useEffect } from "react";
import { captureMarketingAttribution } from "@/lib/lead-form";

export default function MarketingAttributionCapture() {
  useEffect(() => {
    captureMarketingAttribution();
  }, []);

  return null;
}
