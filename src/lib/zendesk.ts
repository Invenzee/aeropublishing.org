export const OPEN_ZENDESK_EVENT = "open-zendesk-chat";

export function openZendeskChat() {
  if (typeof window === "undefined") return;

  const open = () => {
    window.dispatchEvent(new Event(OPEN_ZENDESK_EVENT));
    if (typeof window.zE !== "function") return false;
    try {
      window.zE("messenger", "open");
    } catch {
      // Classic vs Messaging APIs differ; ignore unsupported commands.
    }
    try {
      window.zE("webWidget", "show");
      window.zE("webWidget", "open");
    } catch {
      // ignore
    }
    return true;
  };

  if (open()) return;

  let tries = 0;
  const interval = window.setInterval(() => {
    if (open() || ++tries >= 50) {
      window.clearInterval(interval);
    }
  }, 200);
}
