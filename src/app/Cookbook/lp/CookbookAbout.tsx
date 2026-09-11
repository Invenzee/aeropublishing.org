import Image from "next/image";
import Reveal from "./Reveal";

const thumbs = [
  {
    src: "/cookbook/lp/about-thumb-1.webp",
    className: "right-0 top-0 lg:-right-2 lg:top-2",
  },
  {
    src: "/cookbook/lp/about-thumb-2.webp",
    className: "right-2 top-[42%] lg:-right-6 lg:top-[38%]",
  },
  {
    src: "/cookbook/lp/about-thumb-3.webp",
    className: "bottom-2 right-0 lg:bottom-4 lg:-right-2",
  },
];

export default function CookbookAbout() {
  return (
    <section id="about" className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1140px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-4">
        <Reveal className="max-w-[520px]" x={-24}>
          <p className="font-sans text-[14px] text-black">
            About Aero Publishing
          </p>
          <h2 className="mt-2 font-sans text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[48px] lg:text-[60px]">
            <span className="text-[#3f3774]">Aero</span>{" "}
            <span className="text-[#e96659]">Publishing</span>
            <br />
            <span className="text-[#e96659]">For Cookbooks</span>
          </h2>
          <p className="mt-4 font-sans text-[14px] leading-[1.7] text-black">
            Aero Publishing offers complete cookbook publishing services for
            homestyle recipes, restaurant collections, family compilations, and
            global cuisines. Our team guides you through cookbook self publishing
            with professional editing, design, and production support. Entrust us
            with your recipes and we will craft a beautifully published cookbook
            that captivates food lovers everywhere.
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          x={24}
          className="relative mx-auto aspect-square w-full max-w-[min(100%,340px)] sm:max-w-[380px] lg:max-w-[420px]"
        >
          <Image
            src="/cookbook/lp/about-ring.svg"
            alt=""
            fill
            className="object-contain opacity-90"
          />
          <div className="absolute inset-[8%] overflow-hidden rounded-full">
            <Image
              src="/cookbook/lp/about-main.webp"
              alt="Spiral bound cookbook from Aero Publishing"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 560px"
            />
          </div>

          {thumbs.map((thumb) => (
            <div
              key={thumb.src}
              className={`absolute size-[72px] sm:size-[96px] lg:size-[110px] ${thumb.className}`}
            >
              <Image
                src="/cookbook/lp/thumb-ring.svg"
                alt=""
                fill
                className="object-contain"
              />
              <div className="absolute inset-[7%] overflow-hidden rounded-full">
                <Image
                  src={thumb.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
