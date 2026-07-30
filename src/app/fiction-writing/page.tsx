import type { Metadata } from "next";
import {
  BookOpen,
  Feather,
  Globe,
  MessageCircle,
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
  title: "Fiction Writing | Aero Publishing",
  description:
    "Professional fiction writing services from Aero Publishing to help authors create immersive stories with compelling characters, engaging plots, and publishing-ready manuscripts.",
};

export default function FictionWritingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Fiction Writing</Accent>
          </>
        }
        description={
          <>
            <p>
              Every great novel begins with an idea, but transforming that idea into a compelling
              story requires creativity, structure, and expert storytelling. At Aero Publishing,
              we help aspiring and established authors create immersive fiction that captivates
              readers, builds emotional connections, and leaves a lasting impression.
            </p>
            <p className="mt-4">
              Whether you&apos;re developing a fantasy epic, romance novel, thriller, mystery,
              science fiction adventure, or literary masterpiece, our fiction writing specialists
              help turn your vision into a professionally crafted manuscript.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Fiction writing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Fiction Writing</Accent> Designed Around Your Vision
          </>
        }
        description="Writing fiction requires more than imagination. It requires compelling characters, engaging dialogue, meaningful conflict, and a storyline that keeps readers invested from beginning to end. Our fiction writing services are designed to help authors create stories that entertain, inspire, and resonate."
        features={[
          {
            title: "Captivating Story Development",
            description:
              "Transform ideas into structured narratives with engaging plots, memorable characters, and meaningful story arcs.",
            icon: Sparkles,
          },
          {
            title: "Genre-Specific Expertise",
            description:
              "Create fiction tailored to your chosen genre while meeting reader expectations and market standards.",
            icon: Feather,
          },
          {
            title: "Publishing-Ready Manuscripts",
            description:
              "Receive professionally written content prepared for editing, publishing, and distribution.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/fiction-writing-1.webp"
        imageAlt="Professional fiction writing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Fiction Writing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that every story is unique. That's why our fiction writers work closely with authors to understand their vision, characters, themes, and goals before crafting a manuscript that reflects their creative direction.",
          "From concept development and world-building to dialogue creation and plot refinement, we focus on every aspect of storytelling to ensure a rich and engaging reader experience. Our process is collaborative, allowing authors to remain involved while benefiting from professional writing expertise.",
          "Whether you're creating your first novel or expanding an existing series, we help bring your fictional world to life with creativity, precision, and professionalism.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced fiction writing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Fiction Writing?</Accent>
          </>
        }
        description="Exceptional fiction combines imagination with expert storytelling. Our team of experienced writers understands how to create narratives that capture attention, build emotional investment, and keep readers turning pages until the very end."
        cards={[
          {
            title: "Free Story Consultation",
            description:
              "Discuss your concept, genre, characters, and publishing goals with experienced fiction specialists.",
            icon: MessageCircle,
          },
          {
            title: "Experienced Fiction Writers",
            description:
              "Work with professionals skilled in crafting compelling stories across multiple fiction genres.",
            icon: Users,
          },
          {
            title: "Character & World Development",
            description:
              "Create believable characters, immersive settings, and engaging storylines that resonate with readers.",
            icon: Globe,
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
