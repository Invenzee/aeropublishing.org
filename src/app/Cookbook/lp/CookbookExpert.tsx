import Image from "next/image";
import Reveal from "./Reveal";

export default function CookbookExpert() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1140px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-4">
        <Reveal className="max-w-[520px]" x={-24}>
          <p className="font-sans text-[14px] text-black">
            Why Choose Aero Publishing
          </p>
          <h2 className="mt-2 font-sans text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#e96659] sm:text-[48px] lg:text-[60px]">
            <span className="text-[#3f3774]">Expert</span> Support From
            First Draft to Bestseller
          </h2>
          <p className="mt-4 font-sans text-[14px] leading-[1.7] text-black">
            Aero Publishing offers complete cookbook publishing solutions tailored
            to your goals. Our team helps you refine recipes, design eye catching
            layouts, and publish your cookbook worldwide. With professional food
            photography support, skilled editors, and proven marketing strategies,
            we help your cookbook stand out. Join authors who have published with
            Aero Publishing and share your recipes with kitchens around the globe.
          </p>
        </Reveal>

        <Reveal delay={0.12} x={24} className="relative mx-auto w-full max-w-[min(100%,340px)] sm:max-w-[400px]">
          <div className="absolute -left-4 top-10 size-[140px] sm:size-[180px] lg:-left-5 lg:size-[200px]">
            <Image
              src="/cookbook/lp/expert-blob.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="relative ml-auto aspect-[679/848] w-[88%] overflow-hidden rounded-[20px]">
            <Image
              src="/cookbook/lp/expert-chef.webp"
              alt="Chef writing recipes for an Aero Publishing cookbook"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 360px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
