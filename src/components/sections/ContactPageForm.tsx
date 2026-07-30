"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FormFeedback from "@/components/ui/FormFeedback";
import { useLeadForm } from "@/hooks/useLeadForm";

const fieldStyles =
  "w-full rounded-md border border-black/15 bg-white px-4 py-3 text-md text-black outline-none placeholder:text-black/45 focus:border-secondary";

export default function ContactPageForm() {
  const { handleSubmit, isLoading, isSuccess, errorMessage } = useLeadForm("contact-page");

  return (
    <section className="bg-white section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-4 text-md leading-6 text-black/80">
            <p>
              <span className="font-semibold text-black">Brand Operations:</span> Aero
              Publishing
            </p>
            <p>
              <span className="font-semibold text-black">Parent Legal Entity:</span> SOLAR
              THIRTY LLC
            </p>
            <p>
              <span className="font-semibold text-black">Corporate Billing Contact:</span>{" "}
              <Link
                href="mailto:kelly@solarthirty.online"
                className="text-secondary transition-colors hover:text-primary"
              >
                kelly@solarthirty.online
              </Link>{" "}
              |{" "}
              <Link
                href="tel:+19477685974"
                className="text-secondary transition-colors hover:text-primary"
              >
                (947) 768-5974
              </Link>
            </p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-black">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={fieldStyles}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className={fieldStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-medium text-black"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  className={fieldStyles}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-black"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell us about your project"
                className={`${fieldStyles} resize-none`}
              />
            </div>

            <p className="text-[12px] leading-5 text-black/55">
              By submitting this form, you agree that Aero Publishing (Solar Thirty LLC) may
              contact you via email or phone regarding our self-publishing services. Your data
              is strictly managed in accordance with our{" "}
              <Link href="/privacy-policy" className="underline hover:text-secondary">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-and-conditions" className="underline hover:text-secondary">
                Terms &amp; Conditions
              </Link>
              .
            </p>

            <FormFeedback isSuccess={isSuccess} errorMessage={errorMessage} />

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Get Started"}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
