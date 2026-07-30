import type { Metadata } from "next";
import {
  Headphones,
  MessageCircle,
  Mic,
  Music,
  Radio,
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
  title: "Audio Book Narration | Aero Publishing",
  description:
    "Professional audiobook narration services from Aero Publishing to transform manuscripts into engaging listening experiences with studio-quality production.",
};

export default function AudioBookNarrationPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Audio Book Narration</Accent>
          </>
        }
        description={
          <>
            <p>
              Audiobooks have become one of the fastest-growing segments of the publishing
              industry, allowing authors to reach readers who prefer listening on the go. At Aero
              Publishing, we provide professional audiobook narration services that transform
              manuscripts into engaging listening experiences that captivate audiences from the
              first chapter to the last.
            </p>
            <p className="mt-4">
              Whether you&apos;re publishing fiction, nonfiction, memoirs, business books, or
              self-help titles, our narration specialists help bring your words to life with
              clarity, emotion, and professionalism.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Audio book narration services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Audio Book Narration</Accent> Designed Around Your Vision
          </>
        }
        description="Audiobooks offer authors an opportunity to connect with a wider audience while creating additional revenue streams. Our narration services focus on delivering professional-quality recordings that engage listeners and enhance the impact of your story."
        features={[
          {
            title: "Professional Voice Narration",
            description:
              "Bring your manuscript to life with clear, expressive narration performed by experienced voice professionals.",
            icon: Mic,
          },
          {
            title: "Enhanced Listener Engagement",
            description:
              "Create an immersive listening experience that keeps audiences engaged from beginning to end.",
            icon: Headphones,
          },
          {
            title: "Distribution-Ready Audio Files",
            description:
              "Receive professionally mastered audio files prepared for leading audiobook platforms and marketplaces.",
            icon: Radio,
          },
        ]}
        imageSrc="/audio-book-narration-1.webp"
        imageAlt="Professional audio book narration services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Audio Book Narration</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that audiobook production requires more than simply reading a manuscript aloud. Successful narration involves pacing, tone, emotion, pronunciation accuracy, and professional audio quality.",
          "Our audiobook specialists carefully adapt your manuscript for audio production and ensure every recording meets industry standards. From narration and recording to editing, mastering, and final delivery, we manage the entire process with precision and attention to detail.",
          "Whether you're creating your first audiobook or expanding your existing catalog, we help you deliver a listening experience that reflects the quality of your work.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced audio book narration services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Audio Book Narration?</Accent>
          </>
        }
        description="Creating a successful audiobook requires professional narration, technical expertise, and a deep understanding of listener expectations. Our team helps authors produce high-quality audiobooks designed to engage audiences and strengthen their publishing presence."
        cards={[
          {
            title: "Free Audiobook Consultation",
            description:
              "Discuss your book, audience, narration preferences, and production goals with our audiobook specialists.",
            icon: MessageCircle,
          },
          {
            title: "Professional Voice Talent",
            description:
              "Work with experienced narrators capable of delivering engaging and polished performances across multiple genres.",
            icon: Users,
          },
          {
            title: "Studio-Quality Production",
            description:
              "Every audiobook is professionally recorded, edited, and mastered to ensure exceptional sound quality.",
            icon: Music,
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
