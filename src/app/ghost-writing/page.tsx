import type { Metadata } from "next";
import {
  BookOpen,
  Feather,
  Lock,
  MessageCircle,
  PencilLine,
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
  title: "Ghost Writing | Aero Publishing",
  description:
    "Professional ghostwriting services from Aero Publishing to transform your ideas into polished manuscripts while preserving your unique voice and message.",
};

export default function GhostWritingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Ghost Writing</Accent>
          </>
        }
        description={
          <>
            <p>
              Not everyone has the time, experience, or resources to write a book, but that
              shouldn&apos;t stop great ideas from being shared. At Aero Publishing, our
              professional ghostwriting services help transform your knowledge, experiences, and
              vision into a polished manuscript while preserving your unique voice and message.
            </p>
            <p className="mt-4">
              Whether you&apos;re writing a memoir, business book, self-help guide, fiction novel,
              or thought leadership publication, our experienced ghostwriters help bring your
              book to life with professionalism and discretion.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Ghost writing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Ghost Writing</Accent> Designed Around Your Vision
          </>
        }
        description="Every great book begins with a powerful idea. Our ghostwriting services are designed to help authors, entrepreneurs, professionals, and storytellers transform their expertise and experiences into compelling books without the challenges of writing everything themselves."
        features={[
          {
            title: "Turn Ideas Into Professional Manuscripts",
            description:
              "Transform concepts, notes, recordings, or outlines into engaging and professionally written content.",
            icon: PencilLine,
          },
          {
            title: "Maintain Your Unique Voice",
            description:
              "Our writers carefully capture your tone, perspective, and message to ensure the book feels authentically yours.",
            icon: Feather,
          },
          {
            title: "Publishing-Ready Content",
            description:
              "Receive a polished manuscript prepared for editing, publishing, and distribution across major platforms.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/ghost-writing-1.webp"
        imageAlt="Professional ghost writing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Ghost Writing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that every author has a unique story worth sharing. Our ghostwriters work closely with clients to understand their goals, experiences, and intended audience before crafting a manuscript that accurately reflects their vision.",
          "From initial research and outlining to writing, revisions, and final manuscript preparation, we manage every stage of the process with professionalism and confidentiality. Our collaborative approach ensures your ideas remain at the center of the project while benefiting from expert writing support.",
          "Whether you're creating a memoir, business book, self-help guide, leadership book, or fictional work, we help transform your ideas into a compelling publication readers will value.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced ghost writing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Ghost Writing?</Accent>
          </>
        }
        description="Successful ghostwriting requires more than strong writing skills. It requires research, storytelling expertise, collaboration, and the ability to authentically represent another person's voice and vision. Our team is dedicated to helping authors create books they can proudly call their own."
        cards={[
          {
            title: "Free Project Consultation",
            description:
              "Discuss your ideas, goals, audience, and publishing plans with experienced ghostwriting specialists.",
            icon: MessageCircle,
          },
          {
            title: "Experienced Professional Ghostwriters",
            description:
              "Work with skilled writers capable of creating engaging manuscripts across multiple genres and industries.",
            icon: Users,
          },
          {
            title: "Confidential & Collaborative Process",
            description:
              "Your ideas, ownership rights, and privacy remain protected throughout the entire project.",
            icon: Lock,
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
