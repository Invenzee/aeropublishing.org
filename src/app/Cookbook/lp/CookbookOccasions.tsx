"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";

/** 4 unique cookbook covers — carousel shows 4 at once and repeats these. */
const BOOKS = [
  { src: "/cookbook/lp/cover-1.webp", alt: "Harvest Table seasonal farm cookbook cover" },
  { src: "/cookbook/lp/cover-2.webp", alt: "Sunday Kitchen comfort recipes cookbook cover" },
  { src: "/cookbook/lp/cover-3.webp", alt: "Fire and Spice global flavors cookbook cover" },
  { src: "/cookbook/lp/cover-4.webp", alt: "Sweet Season baking and desserts cookbook cover" },
] as const;

const REPEATS = 3;
const carouselBooks = Array.from({ length: REPEATS }, () => BOOKS).flat();

export default function CookbookOccasions() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.95;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-4">
        <Reveal>
          <h2 className="mx-auto max-w-[820px] text-center font-syne text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#3f3774] sm:text-[48px] lg:text-[60px]">
            A cookbook <span className="text-[#e96659]">for every</span>
            <br />
            <span className="text-[#e96659]">occasion</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-center font-poppins text-[14px] leading-[1.7] text-black">
            Whether you need a gift for family and friends, a showcase for your
            culinary business, a fundraising cookbook for your organization, or a
            corporate team building project, Aero Publishing has a flexible
            cookbook publishing program for every occasion.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mt-12 flex items-center gap-2 sm:gap-4 lg:gap-5">
          <button
            type="button"
            aria-label="Previous cookbooks"
            onClick={() => scrollBy(-1)}
            className="hidden shrink-0 transition-transform duration-300 hover:scale-105 sm:block"
          >
            <Image
              src="/cookbook/lp/arrow-left.svg"
              alt=""
              width={49}
              height={95}
              className="h-[48px] w-auto opacity-70 transition-opacity hover:opacity-100"
            />
          </button>

          <div
            ref={scrollerRef}
            className="flex flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 lg:gap-5 [&::-webkit-scrollbar]:hidden"
          >
            {carouselBooks.map((book, i) => (
              <div
                key={`${book.src}-${i}`}
                className="relative aspect-[3/4] w-[calc((100%-2.25rem)/4)] min-w-[calc((100%-2.25rem)/4)] shrink-0 snap-start overflow-hidden rounded-sm bg-[#f6f6f6] shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.02] max-sm:w-[calc((100%-0.75rem)/2)] max-sm:min-w-[calc((100%-0.75rem)/2)]"
              >
                <Image
                  src={book.src}
                  alt={book.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, 220px"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next cookbooks"
            onClick={() => scrollBy(1)}
            className="hidden shrink-0 transition-transform duration-300 hover:scale-105 sm:block"
          >
            <Image
              src="/cookbook/lp/arrow-right.svg"
              alt=""
              width={49}
              height={95}
              className="h-[48px] w-auto opacity-70 transition-opacity hover:opacity-100"
            />
          </button>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-[720px] text-center font-poppins text-[14px] leading-[1.7] text-black">
            With professionally designed templates, high quality paper, and six
            binding options, Aero Publishing cookbooks look beautiful and are
            made to last.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="#hire-form"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#3f3774] px-6 font-syne text-[15px] font-semibold capitalize text-white transition-all duration-300 hover:opacity-90 hover:brightness-110 active:scale-[0.98]"
            >
              Get Free Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
