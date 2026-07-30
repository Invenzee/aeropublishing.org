import type { Metadata } from "next";
import {
  BookOpen,
  CheckCircle,
  FileSearch,
  PencilLine,
  ShieldCheck,
  SpellCheck,
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
  title: "Proof Reading | Aero Publishing",
  description:
    "Professional proofreading services from Aero Publishing to eliminate errors, improve consistency, and prepare your manuscript for publication.",
};

export default function ProofReadingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Proof Reading</Accent>
          </>
        }
        description={
          <>
            <p>
              Even the strongest manuscripts can contain small errors that affect credibility
              and reader experience. At Aero Publishing, our professional proofreading services
              provide the final quality check before publication, ensuring your book is polished,
              accurate, and ready for readers.
            </p>
            <p className="mt-4">
              From grammar and spelling corrections to punctuation and formatting consistency,
              our proofreaders carefully review every page to eliminate distractions and help
              your book make the best possible impression.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Proof reading services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Proof Reading</Accent> Designed Around Your Vision
          </>
        }
        description="The final stage of manuscript preparation is often the most important. Our proofreading services focus on identifying and correcting overlooked errors while ensuring consistency, professionalism, and readability throughout your book."
        features={[
          {
            title: "Eliminate Grammar & Spelling Errors",
            description:
              "Correct typos, grammatical mistakes, punctuation issues, and language inconsistencies that can affect reader confidence.",
            icon: SpellCheck,
          },
          {
            title: "Improve Consistency & Accuracy",
            description:
              "Ensure names, dates, formatting, capitalization, and stylistic elements remain consistent throughout your manuscript.",
            icon: CheckCircle,
          },
          {
            title: "Publication-Ready Quality",
            description:
              "Receive a thoroughly reviewed manuscript prepared for publishing, printing, and reader distribution.",
            icon: BookOpen,
          },
        ]}
        imageSrc="/proof-reading-1.webp"
        imageAlt="Professional proof reading services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Proof Reading</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that readers expect professionally written books free from distracting errors. That's why our proofreading specialists carefully review every chapter, paragraph, sentence, and page before publication.",
          "Our process focuses on correcting technical errors while preserving your original voice, message, and writing style. We pay close attention to grammar, punctuation, spelling, formatting consistency, and overall presentation to ensure your manuscript meets professional publishing standards.",
          "Whether you're publishing fiction, nonfiction, memoirs, business books, educational content, or children's literature, we help deliver a polished final product readers can enjoy with confidence.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced proof reading services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Proof Reading?</Accent>
          </>
        }
        description="Professional proofreading is the final safeguard between your manuscript and your readers. Our experienced proofreaders provide meticulous attention to detail to ensure your book is polished, accurate, and ready for publication."
        cards={[
          {
            title: "Free Manuscript Review",
            description:
              "Receive expert feedback and recommendations before beginning the proofreading process.",
            icon: FileSearch,
          },
          {
            title: "Experienced Proofreading Specialists",
            description:
              "Work with professionals trained to identify errors, inconsistencies, and overlooked issues throughout your manuscript.",
            icon: PencilLine,
          },
          {
            title: "Comprehensive Quality Assurance",
            description:
              "Every page is reviewed carefully to ensure accuracy, consistency, and professional presentation.",
            icon: ShieldCheck,
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
