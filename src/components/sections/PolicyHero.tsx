import { Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type PolicyHeroProps = {
  title: string;
  highlight: string;
  effectiveDate: string;
  lastUpdated: string;
};

export default function PolicyHero({
  title,
  highlight,
  effectiveDate,
  lastUpdated,
}: PolicyHeroProps) {
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
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
              <p className="flex items-center justify-center gap-2 text-sm text-white/90 sm:text-base">
                <Calendar className="size-4 shrink-0 text-secondary" />
                <span>Effective Date: {effectiveDate}</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-sm text-white/90 sm:text-base">
                <Calendar className="size-4 shrink-0 text-secondary" />
                <span>Last Updated: {lastUpdated}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
