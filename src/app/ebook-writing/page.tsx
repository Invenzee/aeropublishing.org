import type { Metadata } from "next";
import {
  BookOpen,
  FileSearch,
  MessageCircle,
  PencilLine,
  Search,
  Tablet,
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
  title: "Ebook Writing | Aero Publishing",
  description:
    "Professional eBook writing services from Aero Publishing to transform your ideas into engaging digital content ready for publishing and distribution.",
};

export default function EbookWritingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Ebook Writing</Accent>
          </>
        }
        description={
          <>
            <p>
              eBooks are one of the most effective ways to share expertise, build authority,
              generate leads, and connect with readers worldwide. At Aero Publishing, we help
              authors, entrepreneurs, coaches, and businesses transform ideas into professionally
              written eBooks that inform, engage, and deliver value.
            </p>
            <p className="mt-4">
              Whether you have a rough concept, detailed outline, or simply an idea worth
              sharing, our experienced writers create compelling eBooks tailored to your goals
              and audience.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Ebook writing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Ebook Writing</Accent> Designed Around Your Vision
          </>
        }
        description="Creating a successful eBook requires more than great ideas. It requires research, structure, engaging content, and a clear understanding of your audience. Our eBook writing services are designed to help you publish professional digital content that delivers real impact."
        features={[
          {
            title: "Professionally Written Content",
            description:
              "Transform your expertise, ideas, or experiences into an engaging eBook crafted by experienced writers.",
            icon: PencilLine,
          },
          {
            title: "Audience-Focused Storytelling",
            description:
              "Create content that resonates with readers, communicates value, and encourages meaningful engagement.",
            icon: BookOpen,
          },
          {
            title: "Ready For Digital Publishing",
            description:
              "Receive a professionally written manuscript prepared for formatting, publishing, and distribution across major platforms.",
            icon: Tablet,
          },
        ]}
        imageSrc="/ebook-writing-1.webp"
        imageAlt="Professional ebook writing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Ebook Writing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that every eBook serves a unique purpose. Some authors want to educate, others want to establish authority, generate leads, share knowledge, or create new revenue streams.",
          "Our writing specialists work closely with clients to understand their objectives, audience, and message before developing compelling content that aligns with their vision. From research and outlining to writing and revision, we manage the entire process with professionalism and attention to detail.",
          "Whether you're creating a business guide, self-help book, educational resource, industry report, or digital publication, we help transform your ideas into a polished eBook readers will value.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced ebook writing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Ebook Writing?</Accent>
          </>
        }
        description="A successful eBook combines valuable content, strategic structure, and engaging writing. Our team brings together professional writers, researchers, and publishing experts to help you create content that stands out in today's digital marketplace."
        cards={[
          {
            title: "Free Project Consultation",
            description:
              "Discuss your goals, audience, and ideas with experienced professionals before starting your project.",
            icon: MessageCircle,
          },
          {
            title: "Experienced eBook Writers",
            description:
              "Work with skilled writers capable of transforming complex ideas into engaging and accessible content.",
            icon: FileSearch,
          },
          {
            title: "Research-Driven Content Creation",
            description:
              "Every project is supported by thorough research to ensure credibility, relevance, and reader value.",
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
