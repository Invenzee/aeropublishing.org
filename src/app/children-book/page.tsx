import type { Metadata } from "next";
import {
  BookOpen,
  Globe,
  MessageCircle,
  Palette,
  Sparkles,
  Users,
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
  title: "Children's Book | Aero Publishing",
  description:
    "Professional children's book publishing services from Aero Publishing to help authors create engaging stories, beautiful illustrations, and books young readers will love.",
};

export default function ChildrenBookPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Children&apos;s Book</Accent>
          </>
        }
        description={
          <>
            <p>
              Children&apos;s books have the power to educate, inspire, and spark imagination for
              generations. At Aero Publishing, we help authors bring their ideas to life through
              professionally crafted children&apos;s books that engage young readers while
              delivering meaningful stories and memorable experiences.
            </p>
            <p className="mt-4">
              Whether you&apos;re creating picture books, early reader stories, educational books,
              or imaginative adventures, our team helps transform your vision into a beautifully
              crafted book children will love.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Children's book publishing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Children&apos;s Book</Accent> Designed Around Your Vision
          </>
        }
        description="Creating a successful children's book requires more than a great story. It requires engaging storytelling, age-appropriate content, captivating visuals, and professional publishing expertise. Our services help authors create books that educate, entertain, and leave a lasting impression."
        features={[
          {
            title: "Engaging Stories For Young Readers",
            description:
              "Develop age-appropriate content that captures attention, encourages imagination, and keeps children engaged from beginning to end.",
            icon: Sparkles,
          },
          {
            title: "Beautiful Illustrations & Design",
            description:
              "Create visually appealing books with professional layouts, colorful illustrations, and reader-friendly designs.",
            icon: Palette,
          },
          {
            title: "Publishing & Distribution Support",
            description:
              "Prepare your children's book for print and digital publication while reaching readers through major distribution channels.",
            icon: Globe,
          },
        ]}
        imageSrc="/children-book-1.webp"
        imageAlt="Professional children's book publishing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Children&apos;s Book</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand the unique challenges and opportunities involved in children's publishing. Our specialists work closely with authors to create books that connect with young audiences while meeting industry standards and parent expectations.",
          "From story development and editing to illustration, formatting, publishing, and marketing, we provide comprehensive support throughout the entire process. Every project is approached with creativity, care, and a commitment to delivering exceptional quality.",
          "Whether you're a first-time author or an experienced storyteller, we help bring your children's book to life in a way that resonates with readers and families alike.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced children's book publishing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Children&apos;s Book?</Accent>
          </>
        }
        description="Creating a successful children's book requires specialized expertise in storytelling, design, and audience engagement. Our team combines creative talent with publishing experience to help authors create books that inspire and delight young readers."
        cards={[
          {
            title: "Free Children's Book Consultation",
            description:
              "Discuss your story idea, target age group, and publishing goals with experienced children's publishing specialists.",
            icon: MessageCircle,
          },
          {
            title: "Child-Focused Story Development",
            description:
              "Create engaging narratives designed to educate, entertain, and inspire young readers.",
            icon: BookOpen,
          },
          {
            title: "Professional Illustration Support",
            description:
              "Bring your story to life with high-quality artwork and visual storytelling tailored to your audience.",
            icon: Users,
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
