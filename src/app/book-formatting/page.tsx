
import type { Metadata } from "next";
import {
  BarChart3,
  BookOpen,
  FileSearch,
  Globe,
  Headphones,
  Megaphone,
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
  title: "Book Marketing | Aero Publishing",
  description:
    "Increase visibility, build credibility, and connect with readers through strategic book marketing solutions from Aero Publishing.",
};

export default function BookMarketingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Formatting</Accent>
          </>
        }
        description={
          <>
            <p>
            A professionally formatted book does more than look good—it enhances readability, strengthens credibility, and ensures your work meets industry publishing standards. At Aero Publishing, we transform manuscripts into beautifully structured books optimized for print, eBooks, and major publishing platforms.
            </p>
            <p className="mt-4">
            From typography and page layout to chapter organization and publishing compliance, our formatting specialists ensure your book delivers a seamless reading experience from the first page to the last.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book marketing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Formatting</Accent> Designed Around Your Goals
          </>
        }
        description="Every manuscript deserves a polished presentation. Our book formatting services ensure your content is organized, visually appealing, and optimized for both digital and print publishing. We focus on creating layouts that enhance readability while maintaining a professional publishing standard."
        features={[
          {
            title: "Professional Interior Layouts",
            description:
              "Clean, organized, and reader-friendly formatting designed to create an enjoyable reading experience.",
            icon: Megaphone,
          },
          {
            title: "Print & eBook Compatibility",
            description:
              "Prepare your book for Amazon Kindle, paperback, hardcover, Apple Books, and other leading publishing platforms.",
            icon: Globe,
          },
          {
            title: "Publishing-Ready Files",
            description:
              "Receive professionally formatted files that meet industry requirements and are ready for immediate publication.",
            icon: BarChart3,
          },
        ]}
        imageSrc="/book-formatting-1.webp"
        imageAlt="Authors growing their book marketing reach"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Formatting</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that formatting is one of the most important steps in the publishing process. Even the best-written books can appear unprofessional if the layout is inconsistent or difficult to read.",
          "Our formatting specialists carefully structure every page, chapter, heading, image, table, and design element to ensure your book meets professional publishing standards. Whether you’re publishing fiction, nonfiction, children’s books, memoirs, business books, or educational content, we create layouts that reflect the quality of your work.",
          "From eBook formatting to print-ready interior design, we help authors publish with confidence and professionalism.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book marketing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Formatting?</Accent>
          </>
        }
        description="Professional formatting can significantly improve reader experience, publishing approval, and overall book quality. Our team combines technical expertise with publishing knowledge to ensure your manuscript looks exceptional across every format."
        cards={[
          {
            title: "Free Expert Consultation",
            description:
              "Receive expert guidance on the best formatting approach for your book, audience, and publishing goals.",
            icon: BookOpen,
          },
          {
            title: "Industry-Standard Layout Design",
            description:
              "We follow professional publishing standards to create polished, organized, and visually appealing interiors.",
            icon: FileSearch,
          },
          {
            title: "Print & Digital Expertise",
            description:
              "Our team formats books for Kindle, paperback, hardcover, Apple Books, Barnes & Noble, and other major platforms.",
            icon: Headphones,
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
