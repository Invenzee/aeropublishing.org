import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type PortfolioHeroProps = {
  title: string;
  highlight: string;
  description: string;
};

export default function PortfolioHero({
  title,
  highlight,
  description,
}: PortfolioHeroProps) {
  return (
    <section className="bg-primary py-14 lg:py-50">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Reveal variant="up">
            <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[54px]">
              {title}{" "}
              <span className="font-display font-bold italic text-secondary">{highlight}</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <p className="text-base leading-7 text-white/90">{description}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
