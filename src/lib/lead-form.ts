export type MarketingAttribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  msclkid?: string;
  fbclid?: string;
  landing_page?: string;
  referrer?: string;
};

export type LeadFormSource = "hero" | "contact-section" | "contact-page" | "lead-popup";

export type LeadSubmission = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  subject?: string;
  formSource: LeadFormSource;
  pageUrl: string;
  marketing: MarketingAttribution;
};

const STORAGE_KEY = "aero-marketing-attribution";

const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "msclkid",
  "fbclid",
] as const;

function readStoredAttribution(): MarketingAttribution {
  if (typeof window === "undefined") return {};

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as MarketingAttribution;
  } catch {
    return {};
  }
}

function writeStoredAttribution(data: MarketingAttribution) {
  if (typeof window === "undefined") return;

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable
  }
}

export function captureMarketingAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const existing = readStoredAttribution();
  const next: MarketingAttribution = { ...existing };

  for (const key of TRACKING_PARAMS) {
    const value = params.get(key);
    if (value) {
      next[key] = value;
    }
  }

  if (!next.landing_page) {
    next.landing_page = window.location.href.split("#")[0];
  }

  if (!next.referrer && document.referrer) {
    next.referrer = document.referrer;
  }

  writeStoredAttribution(next);
}

export function getMarketingAttribution(): MarketingAttribution {
  return readStoredAttribution();
}

export function formatMarketingAttribution(marketing: MarketingAttribution): string {
  const lines: string[] = [];

  const fields: { label: string; key: keyof MarketingAttribution }[] = [
    { label: "UTM Source", key: "utm_source" },
    { label: "UTM Medium", key: "utm_medium" },
    { label: "UTM Campaign", key: "utm_campaign" },
    { label: "UTM Term", key: "utm_term" },
    { label: "UTM Content", key: "utm_content" },
    { label: "Google Click ID (gclid)", key: "gclid" },
    { label: "Microsoft Click ID (msclkid)", key: "msclkid" },
    { label: "Facebook Click ID (fbclid)", key: "fbclid" },
    { label: "Landing Page", key: "landing_page" },
    { label: "Referrer", key: "referrer" },
  ];

  for (const { label, key } of fields) {
    const value = marketing[key];
    if (value) {
      lines.push(`${label}: ${value}`);
    }
  }

  return lines.length > 0 ? lines.join("\n") : "No marketing attribution data captured";
}

export const FORM_SOURCE_LABELS: Record<LeadFormSource, string> = {
  hero: "Hero Form",
  "contact-section": "Contact Section",
  "contact-page": "Contact Page",
  "lead-popup": "Lead Popup",
};
