"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact-us" },
];

const serviceColumns = [
  [
    { label: "Book Marketing", href: "/book-marketing" },
    { label: "Book Formatting", href: "/book-formatting" },
    { label: "Book Editing", href: "/book-editing" },
    { label: "Book Cover Design", href: "/book-cover-design" },
    { label: "Book Printing", href: "/book-printing" },
    { label: "Book Publishing", href: "/book-publishing" },
    { label: "Proof Reading", href: "/proof-reading" },
  ],
  [
    { label: "Children Book", href: "/children-book" },
    { label: "Ebook Writing", href: "/ebook-writing" },
    { label: "Fiction Writing", href: "/fiction-writing" },
    { label: "Ghost Writing", href: "/ghost-writing" },
    { label: "Audio Book Narration", href: "/audio-book-narration" },
    { label: "Authors Website", href: "/authors-website" },
    { label: "Video Trailer", href: "/video-trailer" },
  ],
];

const PHONE_NUMBER = "+1 424 282 3304";
const PHONE_HREF = "tel:+14242823304";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClass(active: boolean) {
  return `text-[15px] font-medium transition-colors ${
    active ? "text-secondary" : "text-white hover:text-secondary"
  }`;
}

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const isServicesActive = serviceColumns
    .flat()
    .some((service) => isActivePath(pathname, service.href));

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-primary">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20 sm:gap-6">
          <Link href="/" className="shrink-0" aria-label="Aero Publishing home">
            <Image
              src="/logo.webp"
              alt="Aero Publishing"
              width={144}
              height={48}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className={navLinkClass(isActivePath(pathname, "/"))}>
              Home
            </Link>
            <Link
              href="/about-us"
              className={navLinkClass(isActivePath(pathname, "/about-us"))}
            >
              About Us
            </Link>

            <div
              className="flex h-20 items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((open) => !open)}
                className={`flex items-center gap-1.5 ${navLinkClass(isServicesActive)}`}
              >
                Services
                <ChevronDown
                  className={`size-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen ? (
                <div className="fixed inset-x-0 top-20 border-t-2 border-secondary bg-primary">
                  <Container>
                    <div className="relative grid grid-cols-[repeat(2,minmax(0,1fr))_minmax(0,0.9fr)] items-center gap-8 py-8">
                      {serviceColumns.map((column, index) => (
                        <ul key={index} className="flex flex-col gap-4">
                          {column.map((service) => (
                            <li key={service.label}>
                              <Link
                                href={service.href}
                                className="flex items-center gap-3 text-[15px] text-white transition-colors hover:text-secondary"
                              >
                                <ArrowRight className="size-4 shrink-0" />
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                      <img
                        src="/menu-img.png"
                        alt="Aero Publishing professional book publishing"
                        className="absolute bottom-0 right-[5%] w-80 max-lg:hidden"
                      />
                    </div>
                  </Container>
                </div>
              ) : null}
            </div>

            <Link
              href="/portfolio"
              className={navLinkClass(isActivePath(pathname, "/portfolio"))}
            >
              Portfolio
            </Link>
            <Link
              href="/contact-us"
              className={navLinkClass(isActivePath(pathname, "/contact-us"))}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={PHONE_HREF}
              variant="secondary-on-primary"
              className="hidden px-5 py-3 md:inline-flex"
            >
              <Phone className="size-4" />
              {PHONE_NUMBER}
            </Button>

            <button
              type="button"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-canvas-menu"
              onClick={() => setIsMobileOpen((open) => !open)}
              className="text-white lg:hidden"
            >
              {isMobileOpen ? <X className="size-7" /> : <Menu className="size-7" />}
            </button>
          </div>
        </div>
      </Container>
    </header>

      {/* Mobile canvas drawer — slides in from the left */}
      <div
        className={`mobile-drawer-backdrop fixed inset-0 z-[60] bg-black/50 lg:hidden ${
          isMobileOpen ? "is-open" : ""
        }`}
        onClick={closeMobile}
        aria-hidden={!isMobileOpen}
      />

      <aside
        id="mobile-canvas-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`mobile-drawer fixed inset-y-0 left-0 z-[70] flex w-[min(100%,320px)] flex-col bg-primary shadow-2xl lg:hidden ${
          isMobileOpen ? "is-open" : ""
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/15 px-4 sm:h-20">
          <Link href="/" onClick={closeMobile} aria-label="Aero Publishing home">
            <Image
              src="/logo.webp"
              alt="Aero Publishing"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMobile}
            className="text-white"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className={`rounded-md px-3 py-3 ${navLinkClass(isActivePath(pathname, link.href))}`}
                style={{
                  transitionDelay: isMobileOpen ? `${80 + index * 40}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              aria-expanded={isMobileServicesOpen}
              onClick={() => setIsMobileServicesOpen((open) => !open)}
              className={`mt-1 flex items-center justify-between rounded-md px-3 py-3 text-left ${navLinkClass(
                isServicesActive,
              )}`}
            >
              Services
              <ChevronDown
                className={`size-4 transition-transform ${
                  isMobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isMobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 border-l border-white/15 py-1 pl-3">
                  {serviceColumns.flat().map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      onClick={closeMobile}
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-white/90 transition-colors hover:text-secondary"
                    >
                      <ArrowRight className="size-3.5 shrink-0" />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="border-t border-white/15 px-4 py-5">
          <Button href={PHONE_HREF} variant="secondary-on-primary" fullWidth className="px-5 py-3">
            <Phone className="size-4" />
            {PHONE_NUMBER}
          </Button>
        </div>
      </aside>
    </>
  );
}
