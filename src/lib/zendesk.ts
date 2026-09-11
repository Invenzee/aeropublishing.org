export function openZendeskChat() {
  if (typeof window === "undefined") return;

  const open = () => {
    if (typeof window.zE === "function") {
      window.zE("webWidget", "show");
      window.zE("webWidget", "open");
      return true;
    }
    return false;
  };

  if (open()) return;

  let tries = 0;
  const interval = window.setInterval(() => {
    if (open() || ++tries >= 25) {
      window.clearInterval(interval);
    }
  }, 300);
}
