import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-primary section-y-about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative z-10 flex flex-col gap-5">
            <Reveal variant="up">
              <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[54px]">
                About{" "}
                <span className="font-display font-bold italic text-secondary">Us</span>
              </h1>
            </Reveal>

            <Reveal variant="up" delay={60}>
              <p className="text-base leading-7 text-white/90">
                Aero Publishing is a brand operated by SOLAR THIRTY LLC. Our Aero Publishing
                team is dedicated to helping authors at every stage of the publishing journey.
              </p>
            </Reveal>

            <Reveal variant="up" delay={120}>
              <p className="text-base leading-7 text-white/90">
                Founded with a passion for storytelling and publishing excellence, Aero
                Publishing was created to help authors transform ideas, experiences, and
                manuscripts into professionally published books. We believe every story has the
                power to inspire, educate, and leave a lasting impact, and our mission is to
                make the publishing journey accessible, seamless, and rewarding for writers at
                every stage.
              </p>
            </Reveal>

            <Reveal variant="up" delay={180}>
              <p className="text-base leading-7 text-white/90">
                Our team of publishing professionals, editors, designers, marketers, and
                creative specialists works closely with authors to provide comprehensive
                publishing solutions tailored to their unique goals. From manuscript
                development and editing to cover design, publishing, distribution, and
                marketing, we manage every detail with precision and care.
              </p>
            </Reveal>

            <Reveal variant="up" delay={240}>
              <p className="text-base leading-7 text-white/90">
                Whether you&apos;re publishing your first book or expanding an established
                author brand, we are committed to helping you navigate the publishing process
                with confidence. Every project is approached with professionalism,
                transparency, and a dedication to delivering exceptional quality.
              </p>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <p className="text-base leading-7 text-white">
                For corporate billing and business inquiries:{" "}
                <Link
                  href="mailto:kelly@solarthirty.online"
                  className="text-secondary transition-colors hover:text-white"
                >
                  kelly@solarthirty.online
                </Link>{" "}
                |{" "}
                <Link
                  href="tel:+19477685974"
                  className="text-secondary transition-colors hover:text-white"
                >
                  (947) 768-5974
                </Link>
              </p>
            </Reveal>
          </div>
            <img
              src="/about-hero.webp"
              alt="Aero Publishing about us"
              className="absolute right-0 bottom-0 max-sm:hidden"
              width={560}
              height={640}
            />
        </div>
      </Container>
    </section>
  );
}
