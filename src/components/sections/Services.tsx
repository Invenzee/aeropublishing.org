import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Feather,
  FileText,
  Megaphone,
  Palette,
  PencilLine,
  Printer,
  Tablet,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Service = {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Book Marketing",
    href: "/book-marketing",
    image: "/Book-Marketing.webp",
    icon: Megaphone,
    description:
      "Connect your book with the readers who matter most through strategic marketing campaigns, author branding, Amazon optimization, targeted advertising, social media promotion, and audience-building strategies designed to increase visibility, drive sales, and establish your long-term author presence.",
  },
  {
    title: "Book Formatting",
    href: "/book-formatting",
    image: "/Book-Formatting.webp",
    icon: FileText,
    description:
      "Present your book with professional formatting that delivers a flawless reading experience across print and digital platforms. We create industry-standard layouts for paperbacks, hardcovers, and eBooks that enhance readability while meeting all major publishing requirements.",
  },
  {
    title: "Book Editing",
    href: "/book-editing",
    image: "/Book-Editing.webp",
    icon: PencilLine,
    description:
      "Transform your manuscript into a polished, publication-ready book with expert editing services focused on clarity, consistency, grammar, structure, tone, and overall readability. We refine your writing while preserving your voice, helping your story or message connect with readers professionally.",
  },
  {
    title: "Book Cover Design",
    href: "/book-cover-design",
    image: "/Book-Cover-Design.webp",
    icon: Palette,
    description:
      "Make a powerful first impression with a custom-designed cover that captures attention and communicates the essence of your book. Our designers create market-ready covers that attract readers, strengthen your brand, and help your book stand out in competitive marketplaces.",
  },
  {
    title: "Book Printing",
    href: "/book-printing",
    image: "/Book-Printing.webp",
    icon: Printer,
    description:
      "Bring your book to life with premium printing solutions that combine exceptional quality, durability, and professional presentation. From paper selection to final production, every detail is carefully managed to ensure your finished book exceeds expectations.",
  },
  {
    title: "Book Publishing",
    href: "/book-publishing",
    image: "/Book-Publishing.webp",
    icon: BookOpen,
    description:
      "Navigate the publishing process with confidence through comprehensive publishing solutions designed for modern authors. We manage everything from setup and distribution to platform compliance, helping your book reach major bookstores and online retailers worldwide.",
  },
  {
    title: "Ebook Writing",
    href: "/ebook-writing",
    image: "/Ebook-Writing.webp",
    icon: Tablet,
    description:
      "Create engaging digital content crafted specifically for today's eBook readers. Our writing team develops informative, entertaining, and professionally structured eBooks that build authority, connect with audiences, and perform across leading digital publishing platforms.",
  },
  {
    title: "Fiction Writing",
    href: "/fiction-writing",
    image: "/Fiction-Writing.webp",
    icon: Feather,
    description:
      "Bring unforgettable characters, immersive worlds, and captivating storylines to life with professional fiction writing services. From romance and fantasy to thrillers and literary fiction, we help transform creative concepts into polished manuscripts that keep readers turning pages.",
  },
];

export default function Services() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeading
          eyebrow="OUR PUBLISHING SERVICES"
          title={
            <>
              Everything You Need To
              <br />
              Publish <Highlight className="text-secondary">With Confidence</Highlight>
            </>
          }
        />

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                variant="up"
                delay={(index % 2) * 100}
                className="h-full"
              >
                <article className="relative h-full overflow-hidden rounded-xl bg-primary">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/85" />

                  <div className="relative flex h-full flex-col items-center justify-center gap-4 px-5 py-8 text-center sm:px-7 sm:py-10 lg:px-10">
                    <span className="flex size-14 items-center justify-center rounded-full border border-white/40">
                      <Icon className="size-6 text-white" />
                    </span>

                    <h3 className="text-2xl font-bold text-white sm:text-[28px]">
                      {service.title}
                    </h3>

                    <p className="mx-auto max-w-xl text-sm leading-6 text-white/75">
                      {service.description}
                    </p>

                    <Button
                      href={service.href}
                      variant="secondary-on-primary"
                      className="mt-2 px-5 py-2.5"
                    >
                      Explore More
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
