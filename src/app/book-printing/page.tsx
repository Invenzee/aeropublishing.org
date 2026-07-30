import type { Metadata } from "next";
import {
  BookOpen,
  Layers,
  MessageCircle,
  Printer,
  ShieldCheck,
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
  title: "Book Printing | Aero Publishing",
  description:
    "Premium book printing services from Aero Publishing with exceptional quality, flexible options, and publishing-ready production for paperback and hardcover titles.",
};

export default function BookPrintingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Printing</Accent>
          </>
        }
        description={
          <>
            <p>
              There&apos;s nothing quite like holding your finished book in your hands. At Aero
              Publishing, we provide premium book printing solutions that transform digital
              manuscripts into professionally printed books with exceptional quality, durability,
              and presentation.
            </p>
            <p className="mt-4">
              Whether you&apos;re printing a novel, memoir, business book, children&apos;s title,
              or educational publication, we ensure every copy reflects the professionalism and
              quality your work deserves.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book printing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Printing</Accent> Designed Around Your Needs
          </>
        }
        description="Every author has unique printing requirements. Whether you need a small batch for personal distribution or larger quantities for commercial sales, our printing solutions are designed to deliver exceptional quality while remaining cost-effective."
        features={[
          {
            title: "Premium Print Quality",
            description:
              "Enjoy sharp text, vibrant colors, durable materials, and professional finishes that enhance the overall reading experience.",
            icon: Sparkles,
          },
          {
            title: "Flexible Printing Options",
            description:
              "Choose from paperback, hardcover, custom trim sizes, and a variety of paper and binding options.",
            icon: Layers,
          },
          {
            title: "Publishing-Ready Production",
            description:
              "Receive professionally printed books that meet industry standards and are ready for distribution, sales, or personal use.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/book-printing-1.webp"
        imageAlt="Professional book printing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Printing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that printing is the final step that brings years of hard work to life. That's why we focus on delivering books that not only look professional but also feel exceptional in the hands of readers.",
          "Our printing specialists oversee every stage of production, from file preparation and quality checks to material selection and final printing. We ensure consistency, accuracy, and attention to detail throughout the process.",
          "Whether you're publishing a single title or managing multiple projects, our goal is to provide reliable printing solutions that reflect the quality of your work and strengthen your author brand.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book printing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Printing?</Accent>
          </>
        }
        description="Professional book printing requires precision, quality control, and publishing expertise. Our team works closely with authors to ensure every printed copy meets the highest standards of craftsmanship and presentation."
        cards={[
          {
            title: "Free Printing Consultation",
            description:
              "Receive expert recommendations on formats, materials, quantities, and production options based on your goals.",
            icon: MessageCircle,
          },
          {
            title: "High-Quality Materials",
            description:
              "Choose from premium paper stocks, durable bindings, and professional finishes that enhance the appearance of your book.",
            icon: ShieldCheck,
          },
          {
            title: "Paperback & Hardcover Options",
            description:
              "Print your book in the format that best fits your audience, budget, and publishing objectives.",
            icon: Printer,
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
