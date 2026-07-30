import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact-us" },
];

const footerServices = [
  { label: "Book Marketing", href: "/book-marketing" },
  { label: "Book Formatting", href: "/book-formatting" },
  { label: "Book Editing", href: "/book-editing" },
  { label: "Book Cover Design", href: "/book-cover-design" },
  { label: "Book Printing", href: "/book-printing" },
  { label: "Book Publishing", href: "/book-publishing" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Return & Refund Policies", href: "/return-and-refund-policies" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.webp"
              alt="Aero Publishing"
              width={100}
              height={40}
              className="w-48"
            />
            <p className="max-w-xs text-sm leading-6 text-white/75">
              Don&apos;t hide your story when the world is waiting to hear it. Show your
              creativity with confidence and let us guide you through every step.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group relative flex items-center pl-0 text-md text-white/80 transition-all duration-300 hover:pl-5 hover:text-secondary"
                  >
                    <MoveRight
                      className="absolute left-0 size-4 shrink-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="flex flex-col gap-3.5">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group relative flex items-center pl-0 text-md text-white/80 transition-all duration-300 hover:pl-5 hover:text-secondary"
                  >
                    <MoveRight
                      className="absolute left-0 size-4 shrink-0 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-3.5 text-md text-white/80">
              <li>
                <a
                  href="mailto:info@aeropublishing.org"
                  className="flex items-start gap-2.5 transition-colors hover:text-secondary"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" />
                  info@aeropublishing.org
                </a>
              </li>
              <li>
                <a
                  href="tel:+14242823304"
                  className="flex items-start gap-2.5 transition-colors hover:text-secondary"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" />
                  +1 424 282 3304
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span className="max-w-[15rem] leading-6">
                  One Towne Square, Suite 1835, Southfield, MI 48076
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 py-3">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-sm text-white/70">
            <span>&copy; 2026 Aero Publishing</span>
            <span aria-hidden className="text-white/30">
              |
            </span>
            <span>A brand of SOLAR THIRTY LLC. All Rights Reserved.</span>
            {legalLinks.map((link) => (
              <span key={link.label} className="flex items-center gap-3">
                <span aria-hidden className="text-white/30">
                  |
                </span>
                <Link href={link.href} className="transition-colors hover:text-secondary">
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
