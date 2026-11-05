"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FormFeedback from "@/components/ui/FormFeedback";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import { useLeadForm } from "@/hooks/useLeadForm";
import { PhoneCallButtons } from "@/components/PhoneContact";

const inputStyles =
  "w-full rounded-md bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 outline-none ring-1 ring-inset ring-white/20 focus:ring-secondary";

export type HeroProps = {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  formTitle?: string;
  formSubmitLabel?: string;
  classname?: string;
  variant?: "default" | "background";
  ctaLabel?: string;
};

const defaultTitle = (
  <>
    We Publish
    <br />
    More Than Books,
    <br />
    <Highlight className="text-secondary">We Publish Legacies</Highlight>
  </>
);

const defaultDescription = (
  <>
    Whether you&apos;re writing your first book or expanding your author brand, our publishing
    experts help you transform your manuscript into a professionally published book that stands
    out in today&apos;s competitive marketplace. From editing and design to publishing,
    distribution, and marketing we handle every step of the journey.
  </>
);

export default function Hero({
  eyebrow = "Your Story Has The Power To Inspire Millions",
  title = defaultTitle,
  description = defaultDescription,
  imageSrc = "/hero-bg.webp",
  imageAlt = "Aero Publishing professional book publishing",
  formTitle = "Start Your Publishing Journey Today",
  formSubmitLabel = "Request Consultation",
  classname = "",
  variant = "default",
  ctaLabel = "Publish My Book",
}: HeroProps) {
  const { handleSubmit, isLoading, isSuccess, errorMessage } = useLeadForm("hero");
  const hasBackground = variant === "background";

  return (
    <section className={`relative overflow-hidden ${hasBackground ? "bg-primary" : "bg-white"}`}>
      {hasBackground ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={imageSrc}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[65%_center]"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/40 to-transparent" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0 max-lg:hidden" aria-hidden>
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`absolute right-0 ${classname}`}
            width={800}
          />
        </div>
      )}

      <Container className="relative">
        <div className="grid gap-10 section-y-content md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-5 sm:gap-6 lg:pr-10">
            <Reveal variant="fade" delay={0}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h1 className={`text-[2rem] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[54px] ${hasBackground ? "text-white" : "text-black"}`}>
                {title}
              </h1>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <div className={`max-w-xl text-base leading-7 ${hasBackground ? "text-white/90" : "text-black"}`}>{description}</div>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <PhoneCallButtons />
                <Button href="/contact-us" variant={hasBackground ? "light" : "primary"}>
                  <MessageCircle className="size-4" />
                  {ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={180} className="lg:pl-6">
            <div className={`rounded-xl bg-primary/95 p-5 shadow-xl sm:p-6 ${hasBackground ? "border border-white/20 backdrop-blur-sm" : ""}`}>
              <h2 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {formTitle}
              </h2>

              <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className={inputStyles}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className={inputStyles}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className={inputStyles}
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your book"
                  className={`${inputStyles} resize-none`}
                />

                <p className="text-[11px] leading-5 text-white/65">
                  By submitting this form, you agree that Aero Publishing (Solar Thirty LLC) may
                  contact you via email or phone regarding our self-publishing services. Your
                  data is strictly managed in accordance with our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-white">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-and-conditions" className="underline hover:text-white">
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>

                <FormFeedback
                  isSuccess={isSuccess}
                  errorMessage={errorMessage}
                  variant="on-dark"
                />

                <Button
                  type="submit"
                  variant="secondary-on-primary"
                  fullWidth
                  className="rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : formSubmitLabel}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
