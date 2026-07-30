import type { Metadata } from "next";
import {
  Clapperboard,
  Film,
  MessageCircle,
  Share2,
  Sparkles,
  Video,
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
  title: "Video Trailer | Aero Publishing",
  description:
    "Professional book trailer video production from Aero Publishing to showcase your book, strengthen your author brand, and increase engagement across platforms.",
};

export default function VideoTrailerPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Video Trailer</Accent>
          </>
        }
        description={
          <>
            <p>
              A compelling book trailer can capture attention, generate excitement, and inspire
              readers to discover your story. At Aero Publishing, we create professional book
              trailer videos designed to showcase your book, strengthen your author brand, and
              increase engagement across websites, social media platforms, and online marketplaces.
            </p>
            <p className="mt-4">
              Whether you&apos;re promoting a novel, memoir, children&apos;s book, business title,
              or upcoming release, our creative team produces visually engaging trailers that bring
              your story to life and leave a lasting impression.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Video trailer services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Video Trailer</Accent> Designed Around Your Vision
          </>
        }
        description="A professionally produced book trailer can help readers connect with your book before they ever turn the first page. Our trailer services are designed to build anticipation, increase visibility, and enhance your overall marketing efforts."
        features={[
          {
            title: "Cinematic Storytelling",
            description:
              "Transform your book's message, themes, and characters into an engaging visual experience that captures attention.",
            icon: Film,
          },
          {
            title: "Multi-Platform Promotion",
            description:
              "Use your trailer across social media, author websites, online advertisements, email campaigns, and publishing platforms.",
            icon: Share2,
          },
          {
            title: "Professional Video Production",
            description:
              "Receive a polished, high-quality trailer designed to reflect the professionalism and value of your book.",
            icon: Video,
          },
        ]}
        imageSrc="/video-trailer-1.webp"
        imageAlt="Professional video trailer services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Video Trailer</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that readers are increasingly drawn to visual content. That's why our creative team develops book trailers that combine compelling visuals, engaging storytelling, professional editing, and strategic messaging.",
          "From concept development and script creation to video production, motion graphics, voiceovers, and final delivery, we manage every stage of the process. Our goal is to create trailers that spark curiosity, communicate your book's value, and encourage readers to take action.",
          "Whether you're launching a new release or promoting an existing title, we help you create a powerful marketing asset that expands your reach and strengthens your author brand.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced video trailer services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Video Trailer?</Accent>
          </>
        }
        description="An effective book trailer requires more than great visuals—it requires storytelling, creativity, and marketing expertise. Our team creates professional promotional videos designed to capture attention and drive reader interest."
        cards={[
          {
            title: "Free Creative Consultation",
            description:
              "Discuss your book, target audience, marketing goals, and creative vision with our video specialists.",
            icon: MessageCircle,
          },
          {
            title: "Professional Video Production",
            description:
              "Receive high-quality trailers created using cinematic visuals, motion graphics, and professional editing techniques.",
            icon: Clapperboard,
          },
          {
            title: "Custom Trailer Concepts",
            description:
              "Every video is tailored to your book's genre, message, audience, and promotional objectives.",
            icon: Sparkles,
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
