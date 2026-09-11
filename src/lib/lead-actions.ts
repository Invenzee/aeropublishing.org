import { OPEN_ZENDESK_EVENT, openZendeskChat } from "@/lib/zendesk";

export const OPEN_QUOTE_POPUP_EVENT = "open-quote-popup";
export { OPEN_ZENDESK_EVENT };

export function openQuotePopup() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_QUOTE_POPUP_EVENT));
}

export function openLiveChat() {
  openZendeskChat();
}
