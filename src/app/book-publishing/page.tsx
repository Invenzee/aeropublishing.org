import type { Metadata } from "next";
import {
  BookOpen,
  Globe,
  MessageCircle,
  Monitor,
  Rocket,
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
  title: "Book Publishing | Aero Publishing",
  description:
    "Professional book publishing services from Aero Publishing to help authors publish in print and digital formats with global distribution and expert support.",
};

export default function BookPublishingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Publishing</Accent>
          </>
        }
        description={
          <>
            <p>
              Publishing a book should be exciting, not overwhelming. At Aero Publishing, we
              simplify the publishing process by helping authors transform completed manuscripts
              into professionally published books available to readers worldwide.
            </p>
            <p className="mt-4">
              From platform setup and publishing compliance to distribution and launch
              preparation, our team manages every detail so you can focus on sharing your story
              with the world.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book publishing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Publishing</Accent> Designed Around Your Vision
          </>
        }
        description="Every author deserves a straightforward path to publication. Our publishing services are designed to help writers launch their books professionally while maximizing visibility, accessibility, and long-term growth opportunities."
        features={[
          {
            title: "Print & Digital Publishing",
            description:
              "Publish your work in paperback, hardcover, and eBook formats to reach readers wherever they prefer to read.",
            icon: BookOpen,
          },
          {
            title: "Global Publishing Opportunities",
            description:
              "Make your book available to readers through leading online bookstores and publishing platforms around the world.",
            icon: Globe,
          },
          {
            title: "Professional Publishing Support",
            description:
              "Navigate the publishing process with confidence through expert guidance and personalized assistance.",
            icon: Users,
          },
        ]}
        imageSrc="/book-publishing-1.webp"
        imageAlt="Professional book publishing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Publishing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that publishing is one of the most important milestones in an author's journey. That's why we provide comprehensive support designed to make the process simple, efficient, and stress-free.",
          "Our publishing specialists assist with platform requirements, metadata optimization, ISBN guidance, category selection, distribution setup, and launch preparation. Every detail is carefully managed to ensure your book is positioned for success from day one.",
          "Whether you're publishing your first book or expanding your catalog, we help you navigate the publishing landscape with confidence and professionalism.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book publishing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Publishing?</Accent>
          </>
        }
        description="Successful publishing requires more than uploading a manuscript. It requires expertise, strategic planning, and a deep understanding of today's publishing ecosystem. Our team helps authors publish professionally while avoiding common mistakes and unnecessary complications."
        cards={[
          {
            title: "Free Publishing Consultation",
            description:
              "Receive personalized guidance and recommendations tailored to your book, goals, and publishing plans.",
            icon: MessageCircle,
          },
          {
            title: "Publishing Platform Expertise",
            description:
              "Work with professionals experienced in publishing across major print and digital marketplaces.",
            icon: Monitor,
          },
          {
            title: "Worldwide Distribution",
            description:
              "Expand your reach and make your book accessible to readers across multiple countries and platforms.",
            icon: Rocket,
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
