import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You | Aero Publishing",
  description:
    "Your message has reached Aero Publishing. Our publishing experts will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-secondary uppercase">
          Aero Publishing
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-primary sm:text-5xl">
          Thank you
        </h1>
        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
          Your message has reached us safely. Our publishing experts are already
          reviewing your request and will be in touch with you shortly.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Prefer to talk now? Call{" "}
          <a href="tel:+14242823304" className="font-semibold text-primary">
            +1 424 282 3304
          </a>{" "}
          or email{" "}
          <a
            href="mailto:info@aeropublishing.org"
            className="font-semibold text-primary"
          >
            info@aeropublishing.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}
