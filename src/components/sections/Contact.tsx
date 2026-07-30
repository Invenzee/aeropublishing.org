"use client";

import Link from "next/link";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FormFeedback from "@/components/ui/FormFeedback";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import { useLeadForm } from "@/hooks/useLeadForm";

type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const details: ContactDetail[] = [
  {
    label: "Email Us",
    value: "info@aeropublishing.org",
    href: "mailto:info@aeropublishing.org",
    icon: Mail,
  },
  {
    label: "Call Us",
    value: "+1 424 282 3304",
    href: "tel:+14242823304",
    icon: Phone,
  },
  {
    label: "Working Hours",
    value: "Mon-Friday: 9:00 AM - 6:00 PM",
    icon: Clock,
  },
  {
    label: "Location",
    value: "One Towne Square, Suite 1835, Southfield, MI 48076",
    icon: MapPin,
  },
];

const fieldStyles =
  "w-full border-b border-black/15 bg-transparent py-2.5 text-md text-black outline-none placeholder:text-black/45 focus:border-secondary";

export default function Contact() {
  const { handleSubmit, isLoading, isSuccess, errorMessage } = useLeadForm("contact-section");

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start gap-3.5">
          <Reveal variant="fade">
            <Eyebrow>Let&apos;s Connect</Eyebrow>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[50px]">
              Get In Touch
              <br />
              <Highlight className="text-secondary">
                We&apos;d Love To Hear From You
              </Highlight>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="max-w-2xl text-base leading-7 text-black/65">
              Whether you have a completed manuscript, an unfinished draft, or just an
              idea, our publishing specialists are here to help you take the next step
              toward becoming a published author.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <ul className="flex flex-col gap-4">
            {details.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <Reveal key={detail.label} variant="left" delay={index * 70} as="li">
                  <div className="flex items-start gap-4 rounded-xl border border-black/25 bg-white px-4 py-4 sm:px-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="size-6 text-primary" />
                    </span>
                    <div>
                      <h3 className="text-sm text-black">{detail.label}</h3>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 block text-md font-bold leading-6 transition-colors hover:text-secondary"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-md font-bold leading-6">{detail.value}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>

          <Reveal variant="right" delay={120}>
            <div className="rounded-xl border border-black/25 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
              <h3 className="text-2xl font-bold tracking-tight text-black sm:text-3xl lg:text-4xl">
                Send Us A <Highlight className="text-secondary">Message</Highlight>
              </h3>

              <form className="mt-7 flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className={fieldStyles}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={fieldStyles}
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={fieldStyles}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={fieldStyles}
                  />
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-md border border-black/15 bg-transparent px-4 py-3 text-sm text-black outline-none placeholder:text-black/45 focus:border-secondary"
                />

                <p className="text-[11px] leading-5 text-black/55">
                  By submitting this form, you agree that Aero Publishing (Solar Thirty LLC)
                  may contact you via email or phone regarding our self-publishing services.
                  Your data is strictly managed in accordance with our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-secondary">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="underline hover:text-secondary"
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>

                <FormFeedback isSuccess={isSuccess} errorMessage={errorMessage} />

                <Button
                  type="submit"
                  variant="secondary"
                  fullWidth
                  className="rounded-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
