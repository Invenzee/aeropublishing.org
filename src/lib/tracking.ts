export interface FormTrackingData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  landing_page?: string;
  previous_page?: string;
  current_page?: string;
  referrer?: string;
  user_agent?: string;
}

const STORAGE_KEY = "aero_ppc_tracking";

const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
] as const;

function readStoredTracking(): FormTrackingData {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FormTrackingData) : {};
  } catch {
    return {};
  }
}

function writeStoredTracking(data: FormTrackingData) {
  if (typeof window === "undefined") {
    return;
  }

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function initTracking() {
  if (typeof window === "undefined") {
    return;
  }

  const stored = readStoredTracking();
  const url = new URL(window.location.href);
  const updates: FormTrackingData = { ...stored };

  for (const key of TRACKING_PARAMS) {
    const value = url.searchParams.get(key);
    if (value) {
      updates[key] = value;
    }
  }

  if (!updates.landing_page) {
    updates.landing_page = window.location.href;
  }

  if (document.referrer && !updates.referrer) {
    updates.referrer = document.referrer;
  }

  writeStoredTracking(updates);
}

export function recordPageView(pathWithQuery: string) {
  if (typeof window === "undefined") {
    return;
  }

  const stored = readStoredTracking();
  const nextPage = `${window.location.origin}${pathWithQuery}`;

  if (stored.current_page && stored.current_page !== nextPage) {
    stored.previous_page = stored.current_page;
  }

  stored.current_page = nextPage;
  writeStoredTracking(stored);
}

export function getFormTrackingPayload(): FormTrackingData {
  if (typeof window === "undefined") {
    return {};
  }

  const stored = readStoredTracking();

  return {
    ...stored,
    current_page: window.location.href,
    user_agent: navigator.userAgent,
  };
}
