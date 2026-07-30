import { BadgeCheck, Globe, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    title: "Professional Publishing Solutions",
    description:
      "Work with experienced publishing professionals dedicated to delivering exceptional results.",
    icon: BadgeCheck,
  },
  {
    title: "Global Distribution Network",
    description:
      "Make your book available to readers worldwide through trusted publishing channels.",
    icon: Globe,
  },
];

export default function ReadyToPublish() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(50%,560px)] lg:block">
        <img
          src="/ready-to-publish-img.webp"
          alt="Author ready to publish their book"
          className="absolute -right-20 max-w-none lg:-right-40 xl:-right-120"
          loading="lazy"
        />
      </div>

      <Container className="relative">
        <div className="grid gap-10 py-12 sm:gap-12 sm:py-16 lg:gap-16 lg:py-20">
          <div className="flex flex-col items-start gap-5 sm:gap-6 lg:pr-10">
            <Reveal variant="fade">
              <Eyebrow>READY TO PUblish?</Eyebrow>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[50px]">
                Your Story Deserved To
                <br />
                Be <Highlight className="text-secondary">Published</Highlight>
              </h2>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <p className="max-w-xl text-base leading-7 text-black/65">
                Publishing a book shouldn&apos;t be complicated. Our team simplifies the
                entire process from manuscript development and design to publishing,
                distribution, and marketing so you can focus on what matters most: your
                story.
              </p>
            </Reveal>

            <ul className="flex flex-col gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <Reveal key={feature.title} variant="left" delay={180 + index * 80} as="li">
                    <div className="flex items-start gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-black">{feature.title}</h3>
                        <p className="mt-1 max-w-md text-sm leading-6 text-black/60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal variant="up" delay={360}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button href="tel:+14242823304" variant="secondary">
                  <Phone className="size-4" />
                  +1 424 282 3304
                </Button>
                <Button href="/contact-us" variant="primary">
                  <MessageCircle className="size-4" />
                  Publish My Book
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
