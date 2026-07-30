"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Button from "@/components/ui/Button";
import FormFeedback from "@/components/ui/FormFeedback";
import Highlight from "@/components/ui/Highlight";
import { useLeadForm } from "@/hooks/useLeadForm";

const POPUP_DELAY_MS = 2500;
const STORAGE_PREFIX = "aero-lead-popup-dismissed";

const fieldStyles =
  "w-full rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-primary";

function getStorageKey(pathname: string) {
  return `${STORAGE_PREFIX}:${pathname || "/"}`;
}

export default function LeadPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { handleSubmit, isLoading, isSuccess, errorMessage } = useLeadForm("lead-popup");

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    setIsOpen(false);

    try {
      if (sessionStorage.getItem(getStorageKey(pathname))) return;
    } catch {
      // sessionStorage unavailable — still show popup
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname, isReady]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const close = () => {
    try {
      sessionStorage.setItem(getStorageKey(pathname), "true");
    } catch {
      // ignore
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        className="relative w-full max-w-[920px] overflow-hidden rounded-sm bg-white shadow-2xl max-sm:overflow-auto max-sm:w-full max-sm:max-w-none max-sm:h-[90vh]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close popup"
          className="absolute right-0 top-0 z-10 flex size-9 cursor-pointer items-center justify-center bg-black text-white transition-colors hover:bg-black/85"
        >
          <X className="size-4" strokeWidth={2.5} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative flex flex-col bg-primary px-6 py-6 max-sm:px-4 max-sm:py-4">
            <h2
              id="lead-popup-title"
              className="text-[1.75rem] font-bold leading-tight text-white sm:text-[2rem]"
            >
              Publish Your Book on Amazon With
              <br />
              <Highlight className="text-secondary">Aero Publishing</Highlight>
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="size-4 shrink-0" />
                  <span className="text-sm font-normal">Call Us</span>
                </div>
                <a
                  href="tel:+14242823304"
                  className="mt-1 block text-lg text-white transition-colors hover:text-secondary"
                >
                  +1 424 282 3304
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="size-4 shrink-0" />
                  <span className="text-sm font-normal">Discuss your ideas</span>
                </div>
                <a
                  href="mailto:info@aeropublishing.org"
                  className="mt-1 block text-lg text-white transition-colors hover:text-secondary"
                >
                  info@aeropublishing.org
                </a>
              </div>
            </div>

            <img
              src="/menu-img.png"
              alt="Publish Your Book on Amazon With Aero Publishing"
              className="absolute bottom-0 left-[50%] w-80 -translate-x-1/2 max-sm:hidden"
            />
          </div>

          <div className="px-8 py-10 md:px-10 md:py-12">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="lead-popup-name" className="mb-2 block text-sm font-semibold text-black">
                  Name
                </label>
                <input
                  id="lead-popup-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className={fieldStyles}
                />
              </div>

              <div>
                <label htmlFor="lead-popup-email" className="mb-2 block text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  id="lead-popup-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className={fieldStyles}
                />
              </div>

              <div>
                <label htmlFor="lead-popup-phone" className="mb-2 block text-sm font-semibold text-black">
                  Phone
                </label>
                <input
                  id="lead-popup-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={fieldStyles}
                />
              </div>

              <div>
                <label
                  htmlFor="lead-popup-message"
                  className="mb-2 block text-sm font-semibold text-black"
                >
                  Message
                </label>
                <textarea
                  id="lead-popup-message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className={`${fieldStyles} resize-none`}
                />
              </div>

              <FormFeedback isSuccess={isSuccess} errorMessage={errorMessage} />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                className="mt-1 font-bold"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Get Started"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
