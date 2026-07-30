import type { Metadata } from "next";
import {
  BookOpen,
  CheckCircle,
  Feather,
  FileSearch,
  PencilLine,
  Text,
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
  title: "Book Editing | Aero Publishing",
  description:
    "Professional book editing services from Aero Publishing to improve clarity, strengthen structure, eliminate errors, and prepare your manuscript for publication.",
};

export default function BookEditingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Editing</Accent>
          </>
        }
        description={
          <>
            <p>
              Every great book begins with a powerful idea, but professional editing is what
              transforms a manuscript into a polished, publish-ready work. At Aero Publishing,
              our experienced editors help authors improve clarity, strengthen structure,
              eliminate errors, and enhance the overall reading experience.
            </p>
            <p className="mt-4">
              Whether you&apos;re preparing a novel, memoir, business book, or nonfiction
              manuscript, we provide expert editing services designed to elevate your writing
              while preserving your unique voice.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book editing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Editing</Accent> Designed Around Your Vision
          </>
        }
        description="A well-edited book builds credibility, improves readability, and creates a stronger connection with readers. Our editing services focus on refining your manuscript while maintaining the authenticity of your message and storytelling style."
        features={[
          {
            title: "Improve Clarity & Readability",
            description:
              "Strengthen sentence structure, flow, and organization to create a smooth reading experience.",
            icon: Text,
          },
          {
            title: "Eliminate Errors & Inconsistencies",
            description:
              "Correct grammar, spelling, punctuation, formatting inconsistencies, and language issues throughout your manuscript.",
            icon: CheckCircle,
          },
          {
            title: "Prepare For Professional Publishing",
            description:
              "Ensure your book meets professional publishing standards before moving to design, formatting, and distribution.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/book-editing-1.webp"
        imageAlt="Professional book editing services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Editing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that editing is one of the most important stages of the publishing process. A professionally edited manuscript not only improves quality but also enhances reader engagement and overall credibility.",
          "Our editors carefully review every chapter, paragraph, and sentence to identify areas for improvement. From developmental editing and manuscript evaluation to line editing and proofreading, we provide comprehensive support designed to strengthen your book at every level.",
          "Whether you're a first-time author or an experienced writer, our goal is to help your manuscript reach its highest potential before publication.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book editing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Editing?</Accent>
          </>
        }
        description="Professional editing requires more than correcting mistakes—it requires understanding story structure, reader expectations, and publishing standards. Our experienced editors work closely with authors to deliver manuscripts that are polished, professional, and publication-ready."
        cards={[
          {
            title: "Free Manuscript Assessment",
            description:
              "Receive expert feedback and recommendations before beginning the editing process.",
            icon: FileSearch,
          },
          {
            title: "Experienced Professional Editors",
            description:
              "Work with skilled editors who understand multiple genres, writing styles, and publishing requirements.",
            icon: PencilLine,
          },
          {
            title: "Preserve Your Unique Voice",
            description:
              "We enhance clarity and quality while ensuring your original message and writing style remain intact.",
            icon: Feather,
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
