import type { Metadata } from "next";
import {
  BookOpen,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
} from "lucide-react";
import Hero from "@/components/sections/Hero";
import OurMission from "@/components/sections/OurMission";
import ServiceExperience from "@/components/sections/ServiceExperience";
import WhyChoose from "@/components/sections/WhyChoose";
import Portfolio from "@/components/sections/Portfolio";
import Genres from "@/components/sections/Genres";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="font-display font-bold italic text-secondary">{children}</span>;
}

export const metadata: Metadata = {
  title: "Book Cover Design | Aero Publishing",
  description:
    "Professional book cover design services from Aero Publishing to create compelling, genre-appropriate covers optimized for print and digital marketplaces.",
};

export default function BookCoverDesignPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Cover Design</Accent>
          </>
        }
        description={
          <>
            <p>
              Your book cover is often the first thing potential readers notice. A
              professionally designed cover can capture attention, communicate your
              story&apos;s essence, and influence purchasing decisions within seconds. At Aero
              Publishing, we create compelling book covers that help authors stand out in
              competitive marketplaces and leave a lasting impression.
            </p>
            <p className="mt-4">
              Whether you&apos;re publishing fiction, nonfiction, memoirs, children&apos;s books,
              or business titles, our designers craft covers that reflect your vision while
              appealing to your target audience.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book cover design services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Cover Design</Accent> Designed Around Your Vision
          </>
        }
        description="A great cover does more than look beautiful—it communicates value, builds credibility, and encourages readers to learn more. Our custom design services focus on creating covers that are visually striking, genre-appropriate, and optimized for both print and digital marketplaces."
        features={[
          {
            title: "Custom Designs Tailored To Your Book",
            description:
              "Every cover is created from scratch to reflect your story, audience, and publishing goals.",
            icon: Palette,
          },
          {
            title: "Genre-Focused Creative Direction",
            description:
              "We design covers that align with reader expectations while helping your book stand out from competing titles.",
            icon: Sparkles,
          },
          {
            title: "Print & Digital Ready Files",
            description:
              "Receive professional design files optimized for Amazon Kindle, paperback, hardcover, and major publishing platforms.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/book-cover-design-1.webp"
        imageAlt="Professional book cover design services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Cover Design</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that readers often judge a book by its cover. That's why our design team combines creativity, market research, and publishing expertise to create covers that capture attention and drive engagement.",
          "From typography and imagery to color selection and layout composition, every element is carefully crafted to create a professional and memorable visual identity for your book. We work closely with authors throughout the design process to ensure the final cover accurately represents their story and brand.",
          "Whether you're launching your first book or expanding your author portfolio, we help you make a powerful first impression.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book cover design services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Cover Design?</Accent>
          </>
        }
        description="An effective cover requires more than artistic talent—it requires understanding publishing trends, reader psychology, and marketplace expectations. Our designers create covers that are visually appealing, professionally executed, and strategically designed to attract readers."
        cards={[
          {
            title: "Free Design Consultation",
            description:
              "Discuss your vision, genre, audience, and design preferences with our experienced creative team.",
            icon: MessageCircle,
          },
          {
            title: "Custom Professional Designs",
            description:
              "Receive a unique cover designed specifically for your book, not a generic template.",
            icon: Palette,
          },
          {
            title: "Market & Genre Research",
            description:
              "We analyze current design trends and reader expectations to create covers that perform in your niche.",
            icon: Search,
          },
        ]}
      />

      <Portfolio />
      <Genres />
      <Services />
      <Contact />
    </>
  );
}
