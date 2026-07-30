import type { Metadata } from "next";
import {
  BookOpen,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  UserRound,
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
  title: "Authors Website | Aero Publishing",
  description:
    "Professional author website design from Aero Publishing to showcase your books, build your brand, and connect directly with readers.",
};

export default function AuthorsWebsitePage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Authors Website</Accent>
          </>
        }
        description={
          <>
            <p>
              In today&apos;s publishing world, an author website is more than just an online
              presence—it&apos;s your personal brand, marketing hub, and direct connection to
              readers. At Aero Publishing, we create professional author websites designed to
              showcase your books, grow your audience, and strengthen your credibility as an
              author.
            </p>
            <p className="mt-4">
              Whether you&apos;re a first-time writer or a bestselling author, we build websites
              that help you promote your work, engage readers, and establish a lasting online
              presence.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Professional author website services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Authors Website</Accent> Designed Around Your Vision
          </>
        }
        description="A professional website helps readers discover your books, learn your story, and stay connected with your latest releases. Our author website solutions are designed to provide everything you need to grow your audience and showcase your work online."
        features={[
          {
            title: "Showcase Your Books Professionally",
            description:
              "Highlight your published works with dedicated book pages, descriptions, reviews, and purchase links.",
            icon: BookOpen,
          },
          {
            title: "Build Your Author Brand",
            description:
              "Create a strong online identity that reflects your personality, writing style, and publishing journey.",
            icon: UserRound,
          },
          {
            title: "Connect Directly With Readers",
            description:
              "Grow your audience through newsletters, contact forms, blog content, and reader engagement tools.",
            icon: Mail,
          },
        ]}
        imageSrc="/authors-website-1.webp"
        imageAlt="Professional author website design services"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Authors Website</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that readers often search online before purchasing a book. That's why we create professional author websites designed to make a strong first impression while providing a seamless user experience.",
          "Our websites are visually appealing, mobile-friendly, and optimized for performance. From author biographies and book showcases to blog integration and mailing list growth, every element is strategically designed to support your long-term success.",
          "Whether you're launching your first book or managing a growing catalog of publications, we help create an online platform that supports your career and strengthens your connection with readers.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced author website services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Authors Website?</Accent>
          </>
        }
        description="A successful author website combines professional design, user experience, and marketing functionality. Our team creates websites that not only look exceptional but also help authors build visibility, credibility, and reader engagement."
        cards={[
          {
            title: "Free Website Consultation",
            description:
              "Discuss your goals, branding preferences, and website requirements with experienced professionals.",
            icon: MessageCircle,
          },
          {
            title: "Custom Author-Focused Design",
            description:
              "Receive a website tailored to your books, audience, and personal brand rather than a generic template.",
            icon: Palette,
          },
          {
            title: "Mobile-Friendly Experience",
            description:
              "Ensure readers enjoy a seamless browsing experience across desktop, tablet, and mobile devices.",
            icon: MonitorSmartphone,
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
