import { type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type WhyChooseCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WhyChooseProps = {
  title: React.ReactNode;
  description: string;
  cards: WhyChooseCard[];
};

export default function WhyChoose({ title, description, cards }: WhyChooseProps) {
  return (
    <section className="bg-white section-y">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Reveal variant="up">
            <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[50px]">
              {title}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p className="text-base leading-7 text-black/65">{description}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <Reveal key={card.title} variant="up" delay={index * 90}>
                <div className="flex h-full flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-primary to-primary-light px-5 py-8 text-center sm:px-6 sm:py-10">
                  <span className="flex size-16 items-center justify-center rounded-full border border-white/25">
                    <Icon className="size-8 text-white" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-sm leading-6 text-white/85">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
