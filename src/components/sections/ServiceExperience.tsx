import { BookOpen, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type ServiceExperienceProps = {
  title: React.ReactNode;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export default function ServiceExperience({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
}: ServiceExperienceProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
            <Reveal variant="up">
              <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[50px]">
                {title}
              </h2>
            </Reveal>

            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} variant="up" delay={80 + index * 70}>
                <p className="text-base leading-7 text-white/90">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal variant="up" delay={80 + paragraphs.length * 70}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button href="tel:+14242823304" variant="secondary">
                  <Phone className="size-4" />
                  +1 424 282 3304
                </Button>
                <Button href="/contact-us" variant="light">
                  <BookOpen className="size-4" />
                  Publish My Book
                </Button>
              </div>
            </Reveal>
          </div>

            <img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-0 w-full max-w-md justify-self-end lg:absolute lg:right-0 lg:bottom-0 lg:w-160 lg:max-w-none"
              width={560}
              height={640}
              loading="lazy"
            />
        </div>
      </Container>
    </section>
  );
}
