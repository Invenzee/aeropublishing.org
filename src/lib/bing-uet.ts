export const BING_UET_PID_KEY = "aero-uet-pid";

type BingCustomerPid = {
  em?: string;
  ph?: string;
};

export function standardizeEmail(email: string) {
  let value = email.normalize("NFD").replace(/\p{M}/gu, "");
  value = value.replace(/\s/g, "").toLowerCase().replace(/\.+$/, "");

  const at = value.indexOf("@");
  if (at <= 0) return null;

  let local = value.slice(0, at);
  const domain = value.slice(at + 1).replace(/\.+$/, "");
  if (!local || !domain) return null;

  const plus = local.indexOf("+");
  if (plus >= 0) local = local.slice(0, plus);
  local = local.replace(/\./g, "");
  if (!local) return null;

  return `${local}@${domain}`;
}

export function standardizePhone(phone: string) {
  const trimmed = phone.trim();
  if (!trimmed) return null;

  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return null;

  if (trimmed.startsWith("+")) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;

  return `+${digits}`;
}

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function storeBingCustomer(email: string, phone?: string) {
  try {
    const pid: BingCustomerPid = {};
    const em = standardizeEmail(email);
    const ph = phone ? standardizePhone(phone) : null;

    if (em) pid.em = await sha256(em);
    if (ph) pid.ph = await sha256(ph);
    if (!pid.em && !pid.ph) return;

    sessionStorage.setItem(BING_UET_PID_KEY, JSON.stringify(pid));
  } catch {
    // Tracking must not block the thank-you redirect.
  }
}
