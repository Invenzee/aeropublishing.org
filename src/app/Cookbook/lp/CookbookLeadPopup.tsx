"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FaEnvelope, FaPhone, FaXmark } from "react-icons/fa6";
import { handleLeadFormSubmit } from "@/lib/submit-form";

const DELAY_MS = 60000;
const SESSION_KEY = "cookbook-lp-popup-dismissed";
const PHONE_HREF = "tel:(424) 282-3304";
const PHONE_DISPLAY = "(424) 282-3304";
const EMAIL = "info@aeropublishing.org";
const WINE = "#3f3774";
const ORANGE = "#e96659";

const FIELD =
  "h-11 w-full border border-[#818181] bg-transparent px-3 font-poppins text-[14px] text-black transition-colors placeholder:font-light placeholder:text-[#a0a0a0] focus:border-[#e96659] focus:outline-none";

export default function CookbookLeadPopup() {
  const reduceMotion = useReducedMotion();
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

  if (!open || !mounted) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/55 px-4 pt-10 pb-6 backdrop-blur-sm sm:items-center sm:overflow-hidden sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cbk-popup-heading"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={reduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative my-auto grid w-full max-w-[920px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.25)] max-md:max-h-[calc(100dvh-2rem)] max-md:overflow-y-auto md:max-h-[90vh] md:grid-cols-[42%_58%]"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
        animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={close}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-md bg-[#111] text-white hover:bg-[#333] sm:top-4 sm:right-4"
          aria-label="Close popup"
        >
          <FaXmark className="h-3.5 w-3.5" />
        </button>

        <div className="flex min-h-[280px] flex-col p-6 pr-12 text-white lg:p-8" style={{ backgroundColor: WINE }}>
          <h2 id="cbk-popup-heading" className="mb-3 font-syne text-2xl font-bold leading-tight sm:text-3xl">
            Publish Your Cookbook with Aero Publishing
          </h2>
          <div className="mb-6 space-y-3 font-poppins text-sm text-white/90">
            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 h-4 w-4 shrink-0" style={{ color: ORANGE }} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-white">Call Us</h3>
                <a href={PHONE_HREF} className="hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 h-4 w-4 shrink-0" style={{ color: ORANGE }} aria-hidden="true" />
              <div>
                <h3 className="font-bold text-white">Discuss your recipes</h3>
                <a href={`mailto:${EMAIL}`} className="break-all hover:underline">
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div className="mt-auto flex justify-center">
            <img
              src="/cookbook/lp/cover-1.webp"
              alt="Aero Publishing cookbook cover"
              className="max-h-[200px] w-full max-w-[180px] rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto">
          <form
            onSubmit={(e) => {
              void handleLeadFormSubmit(e, "/Cookbook/lp-popup");
            }}
            className="space-y-3"
          >
            <input name="name" type="text" required placeholder="First Name" className={FIELD} />
            <input name="email" type="email" required placeholder="Email Address" className={FIELD} />
            <input name="phone" type="tel" required placeholder="Phone Number" className={FIELD} />
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your cookbook"
              className={`${FIELD} min-h-[88px] resize-y py-2.5`}
            />
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center rounded-full px-6 font-syne text-[15px] font-bold text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
              style={{ backgroundColor: ORANGE }}
            >
              Submit Now
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
