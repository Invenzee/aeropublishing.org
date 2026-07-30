import {
  BarChart3,
  Globe,
  MessageCircle,
  PenLine,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type MissionFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OurMissionProps = {
  title?: React.ReactNode;
  description?: string;
  features?: MissionFeature[];
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  imageClassname?: string;
};

const defaultFeatures: MissionFeature[] = [
  {
    title: "Professional Publishing Solutions",
    description:
      "From editing and design to publishing, marketing, and distribution, we provide end-to-end services that help authors bring their vision to life with confidence and professionalism.",
    icon: PenLine,
  },
  {
    title: "Global Reach & Distribution",
    description:
      "We help authors connect with readers around the world through strategic publishing, distribution, and marketing solutions designed to maximize visibility and accessibility.",
    icon: Globe,
  },
  {
    title: "Building Lasting Author Success",
    description:
      "Our goal extends beyond publishing a single book. We help authors strengthen their brand, grow their readership, and create opportunities for long-term success in today's competitive publishing landscape.",
    icon: BarChart3,
  },
];

export default function OurMission({
  title = "Our Mission",
  description = "Our mission is to empower authors by providing professional publishing services that simplify the journey from manuscript to marketplace. We are dedicated to helping writers publish with confidence, reach readers worldwide, and achieve their publishing goals through expert guidance, creative excellence, and industry-leading support.",
  features = defaultFeatures,
  imageSrc = "/about-2.webp",
  imageAlt = "Author selecting a book from a bookshelf",
  imagePosition = "right",
  imageClassname = "",
}: OurMissionProps) {
  const content = (
    <div className="flex flex-col gap-3">
      <Reveal variant="up">
        <h2 className="text-[2rem] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[50px]">
          {title}
        </h2>
      </Reveal>

      <Reveal variant="up" delay={80}>
        <p className="max-w-xl text-[15px] leading-7 text-black/90">{description}</p>
      </Reveal>

      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Reveal key={feature.title} variant="left" delay={140 + index * 80} as="li">
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

      <Reveal variant="up" delay={400}>
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
  );

  const image = (
    <Reveal
      variant={imagePosition === "left" ? "left" : "right"}
      delay={120}
      className={imagePosition === "left" ? "order-2 lg:order-1" : "order-2"}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`h-[300px] w-full rounded-[24px] object-cover sm:h-[400px] sm:rounded-[32px] lg:h-[500px] ${imageClassname}`}
        width={480}
        height={800}
        loading="lazy"
      />
    </Reveal>
  );

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div className={imagePosition === "left" ? "order-1 lg:order-2" : "order-1"}>
            {content}
          </div>
          {image}
        </div>
      </Container>
    </section>
  );
}
