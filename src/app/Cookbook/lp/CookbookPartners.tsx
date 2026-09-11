import Image from "next/image";
import { RevealItem, RevealStagger } from "./Reveal";

const partners = [
  { src: "/cookbook/lp/partner-1.webp", alt: "Chronicle Books", w: 295, h: 123 },
  { src: "/cookbook/lp/partner-2.webp", alt: "HGTV", w: 230, h: 95 },
  { src: "/cookbook/lp/partner-3.webp", alt: "Food Network", w: 205, h: 85 },
  { src: "/cookbook/lp/partner-4.webp", alt: "Rachael Ray", w: 270, h: 113 },
  { src: "/cookbook/lp/partner-5.webp", alt: "Good Housekeeping", w: 306, h: 127 },
];

export default function CookbookPartners() {
  return (
    <section className="bg-[#ffd6c9] py-6 sm:py-8">
      <RevealStagger className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 opacity-70 sm:gap-x-8 lg:justify-between lg:px-4">
        {partners.map((p) => (
          <RevealItem
            key={p.alt}
            className="relative flex h-[48px] w-[100px] items-center justify-center sm:h-[60px] sm:w-[140px] lg:h-[70px] lg:w-[160px]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              className="max-h-full w-auto object-contain grayscale transition-transform duration-300 hover:scale-105"
            />
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
