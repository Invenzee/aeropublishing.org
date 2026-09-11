import { openZendeskChat } from "@/lib/zendesk";

export const OPEN_QUOTE_POPUP_EVENT = "open-quote-popup";
export const OPEN_ZENDESK_EVENT = "open-zendesk-chat";

export function openQuotePopup() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_QUOTE_POPUP_EVENT));
}

export function openLiveChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_ZENDESK_EVENT));
  openZendeskChat();
}
