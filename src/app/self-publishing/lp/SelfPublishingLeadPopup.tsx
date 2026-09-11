"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { handleLeadFormSubmit } from "@/lib/submit-form";

const DELAY_MS = 60000;
const SESSION_KEY = "self-publishing-lp-popup-dismissed";
const PHONE_HREF = "tel:(424) 282-3304";
const PHONE_DISPLAY = "(424) 282-3304";
const EMAIL = "info@aeropublishing.org";
const NAVY = "#3F3774";
const BLUE = "#3F3774";
const CYAN = "#E96659";

type SelfPublishingLeadPopupProps = {
  blocked?: boolean;
};

export default function SelfPublishingLeadPopup({ blocked = false }: SelfPublishingLeadPopupProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      // ignore
    }
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    if (!open || blocked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, blocked]);

  if (!open || !mounted || blocked) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/55 px-4 pt-10 pb-6 backdrop-blur-sm sm:items-center sm:overflow-hidden sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sp-timed-popup-heading"
    >
      <button type="button" className="absolute inset-0 cursor-default bg-transparent" aria-label="Close popup" onClick={close} />
      <div
        className="sp-lp relative z-10 my-auto grid w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(12,27,51,0.34)] max-md:max-h-[calc(100dvh-2rem)] max-md:overflow-y-auto md:max-h-[90vh] md:grid-cols-[42%_58%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-md bg-[#3F3774] text-white hover:bg-[#332C60] sm:top-4 sm:right-4"
          aria-label="Close popup"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex min-h-[280px] flex-col p-6 pr-12 text-white lg:p-8" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, #332C60 48%, #4B428A 100%)` }}>
          <h2 id="sp-timed-popup-heading" className="mb-3 font-[800] text-2xl leading-tight tracking-[-0.03em] sm:text-3xl" style={{ fontFamily: "var(--sp-fh), system-ui, sans-serif" }}>
            Get your free manuscript review
          </h2>
          <div className="mb-6 space-y-3 text-sm text-white/80">
            <div>
              <p className="font-bold text-white">Call Us</p>
              <a href={PHONE_HREF} className="hover:underline" style={{ color: CYAN }}>
                {PHONE_DISPLAY}
              </a>
            </div>
            <div>
              <p className="font-bold text-white">Email</p>
              <a href={`mailto:${EMAIL}`} className="break-all hover:underline" style={{ color: CYAN }}>
                {EMAIL}
              </a>
            </div>
          </div>
          <p className="mt-auto text-sm leading-relaxed text-white/75">
            An editor reads your pages and calls you with an honest next step — navy, not noise.
          </p>
          <span
            className="mt-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
            style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})` }}
          >
            30% off this month
          </span>
        </div>

        <div className="p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <form
            onSubmit={(e) => {
              void handleLeadFormSubmit(e, "/self-publishing/lp-popup");
            }}
            className="space-y-3"
          >
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#5B6E8A]">Full name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Alex Moreno"
                className="h-12 w-full rounded-[10px] border-[1.5px] border-[#DDD9EC] bg-[#F6F4FA] px-4 text-[15px] text-[#1A1730] outline-none transition focus:border-[#E96659] focus:bg-white focus:shadow-[0_0_0_4px_rgba(233,102,89,.18)]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#5B6E8A]">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className="h-12 w-full rounded-[10px] border-[1.5px] border-[#DDD9EC] bg-[#F6F4FA] px-4 text-[15px] text-[#1A1730] outline-none transition focus:border-[#E96659] focus:bg-white focus:shadow-[0_0_0_4px_rgba(233,102,89,.18)]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#5B6E8A]">Phone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(424) 282-3304"
                className="h-12 w-full rounded-[10px] border-[1.5px] border-[#DDD9EC] bg-[#F6F4FA] px-4 text-[15px] text-[#1A1730] outline-none transition focus:border-[#E96659] focus:bg-white focus:shadow-[0_0_0_4px_rgba(233,102,89,.18)]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-[#5B6E8A]">About your book</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Genre, stage, and what you need help with"
                className="min-h-[96px] w-full resize-y rounded-[10px] border-[1.5px] border-[#DDD9EC] bg-[#F6F4FA] px-4 py-3 text-[15px] text-[#1A1730] outline-none transition focus:border-[#E96659] focus:bg-white focus:shadow-[0_0_0_4px_rgba(233,102,89,.18)]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[#3F3774] text-[15px] font-bold text-white shadow-[0_12px_26px_-12px_rgba(63,55,116,.7)] transition hover:bg-[#332C60]"
            >
              Submit Now
            </button>
            <p className="flex items-center justify-center gap-2 text-center text-xs text-[#5B6E8A]">
              All enquiries are confidential. No spam, no reselling.
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body,
  );
}
