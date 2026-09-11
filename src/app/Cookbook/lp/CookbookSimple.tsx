import Image from "next/image";
import Reveal, { RevealItem, RevealStagger } from "./Reveal";

const cards = [
  {
    title: (
      <>
        Expert
        Design
      </>
    ),
    body: "Showcase your recipes with beautiful layouts, elegant fonts, and high quality photo options crafted by the Aero Publishing design team.",
  },
  {
    title: <>Premium Binding Options</>,
    body: "Choose from durable binding styles that give your cookbook a professional finish for gifts, retail, and personal collections.",
  },
  {
    title: <>Clear, Affordable Pricing</>,
    body: "Get professional quality cookbook printing at transparent prices, whether you need a single copy or a large print run. No hidden fees, just great value.",
  },
];

export default function CookbookSimple() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-[30%] top-[10%] size-[520px] opacity-40 lg:size-[700px]">
        <Image src="/cookbook/lp/deco-circle.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute -right-[25%] top-[20%] size-[520px] opacity-40 lg:size-[700px]">
        <Image src="/cookbook/lp/deco-circle.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-4">
        <Reveal>
          <h2 className="mx-auto max-w-[700px] text-center font-syne text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#3f3774] sm:text-[48px] lg:text-[60px]">
            We Make
            <br />
            <span className="text-[#e96659]">Publishing</span> Simple
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-center font-poppins text-[14px] text-black">
            Flexible cookbook publishing solutions for every need and budget
          </p>
        </Reveal>

        <RevealStagger className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {cards.map((card, i) => (
            <RevealItem
              key={i}
              className="mx-auto flex max-w-[280px] flex-col items-center text-center"
            >
              <div className="relative size-[72px] sm:size-[88px]">
                <Image
                  src="/cookbook/lp/check.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-syne text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#3f3774] sm:text-[22px]">
                {card.title}
              </h3>
              <p className="mt-2.5 font-poppins text-[14px] leading-[1.7] text-black">
                {card.body}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
