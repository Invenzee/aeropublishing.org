"use client";

import { useEffect } from "react";
import { captureMarketingAttribution } from "@/lib/lead-form";
import { initTracking } from "@/lib/tracking";

export default function MarketingAttributionCapture() {
  useEffect(() => {
    captureMarketingAttribution();
    initTracking();
  }, []);

  return null;
}
