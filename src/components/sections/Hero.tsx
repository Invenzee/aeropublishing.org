"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FormFeedback from "@/components/ui/FormFeedback";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import { useLeadForm } from "@/hooks/useLeadForm";

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
}: HeroProps) {
  const { handleSubmit, isLoading, isSuccess, errorMessage } = useLeadForm("hero");

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 max-lg:hidden" aria-hidden>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`absolute right-0 ${classname}`}
          width={800}
        />
      </div>

      <Container className="relative">
        <div className="grid gap-10 py-12 md:gap-12 md:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="flex flex-col items-start gap-5 sm:gap-6 lg:pr-10">
            <Reveal variant="fade" delay={0}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-black sm:text-4xl lg:text-[54px]">
                {title}
              </h1>
            </Reveal>

            <Reveal variant="up" delay={160}>
              <div className="max-w-xl text-base leading-7 text-black">{description}</div>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button href="tel:+14242823304" variant="secondary">
                  <Phone className="size-4" />
                  +1 424 282 3304
                </Button>
                <Button href="/contact-us" variant="primary">
                  <MessageCircle className="size-4" />
                  Publish My Book
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={180} className="lg:pl-6">
            <div className="rounded-xl bg-primary/95 p-5 shadow-xl sm:p-6">
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
