import Image from "next/image";
import { RevealItem, RevealStagger } from "./Reveal";

const features = [
  {
    line1: "Timeless",
    line2: "Appeal",
    src: "/cookbook/lp/feature-1.jpg",
    alt: "Fresh ingredients and cookbook styling for timeless recipe books",
  },
  {
    line1: "Engaging",
    line2: "Content",
    src: "/cookbook/lp/feature-2.jpg",
    alt: "Colorful plated dishes that make cookbook content more engaging",
  },
  {
    line1: "Increase",
    line2: "Sales",
    src: "/cookbook/lp/feature-3.jpg",
    alt: "Professional kitchen cooking scene for market ready cookbooks",
  },
  {
    line1: "Vibrant",
    line2: "Color",
    src: "/cookbook/lp/feature-4.jpg",
    alt: "Vibrant food photography style for cookbook covers and pages",
  },
];

function Arrow() {
  return (
    <span
      aria-hidden
      className="hidden shrink-0 text-[22px] font-light leading-none text-white lg:inline"
    >
      →
    </span>
  );
}

export default function CookbookFeatures() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#3f3774] py-12 pb-28 sm:py-14 sm:pb-28 lg:py-16 lg:pb-32"
    >
      <Image
        src="/cookbook/lp/feature-pattern.webp"
        alt=""
        fill
        className="object-cover opacity-[0.13] mix-blend-multiply"
        sizes="100vw"
      />

      <RevealStagger className="relative z-10 mx-auto flex max-w-[1140px] flex-wrap items-center justify-center gap-x-2 gap-y-24 px-4 sm:px-6 lg:flex-nowrap lg:justify-between lg:gap-x-2 lg:gap-y-8 lg:px-4">
        {features.map((feature, index) => (
          <div key={feature.line2} className="contents">
            <RevealItem className="relative w-[42%] max-w-[200px] sm:w-[180px] lg:w-[200px]">
              <div className="relative mx-auto aspect-square w-[90%] overflow-hidden rounded-full">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="200px"
                />
              </div>

              <div className="absolute -bottom-20 left-1/2 flex h-[150px] w-4/5 -translate-x-1/2 flex-col items-center justify-center rounded-full border-[4px] border-[#e96659] bg-white text-center sm:border-[5px]">
                <p className="font-syne text-[12px] capitalize leading-[1.2] text-black">
                  {feature.line1}
                </p>
                <p className="mt-0.5 font-syne text-[20px] font-bold capitalize leading-[1.15] text-black sm:text-[22px]">
                  {feature.line2}
                </p>
              </div>
            </RevealItem>

            {index < features.length - 1 ? <Arrow /> : null}
          </div>
        ))}
      </RevealStagger>
    </section>
  );
}
