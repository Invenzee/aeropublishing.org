export const BING_UET_PID_KEY = "aero-uet-pid";

type BingCustomerPid = {
  em?: string;
  ph?: string;
};

function normalizePhone(phone?: string) {
  if (!phone) return "";

  const trimmed = phone.trim();
  if (!trimmed) return "";

  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) return "";

  if (hasPlus) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;

  return `+${digits}`;
}

export function storeBingCustomer(email: string, phone?: string) {
  const pid: BingCustomerPid = {};
  const em = email.trim().toLowerCase();
  const ph = normalizePhone(phone);

  if (em) pid.em = em;
  if (ph) pid.ph = ph;
  if (!pid.em && !pid.ph) return;

  try {
    sessionStorage.setItem(BING_UET_PID_KEY, JSON.stringify(pid));
  } catch {
    // sessionStorage unavailable
  }
}
