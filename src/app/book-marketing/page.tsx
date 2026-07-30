
import type { Metadata } from "next";
import {
  BarChart3,
  BookOpen,
  FileSearch,
  Globe,
  Headphones,
  Megaphone,
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
  title: "Book Marketing | Aero Publishing",
  description:
    "Increase visibility, build credibility, and connect with readers through strategic book marketing solutions from Aero Publishing.",
};

export default function BookMarketingPage() {
  return (
    <>
      <Hero
        classname="-right-100! w-[1000px]"
        eyebrow="Help's Your Book Reach More Readers"
        title={
          <>
            Professional
            <br />
            <Accent>Book Marketing</Accent>
          </>
        }
        description={
          <>
            <p>
              Publishing your book is only the beginning. The real challenge is getting your
              work discovered by the right audience. At Aero Publishing, we help authors
              increase visibility, build credibility, and connect with readers through
              strategic book marketing solutions designed for long-term growth.
            </p>
            <p className="mt-4">
              From Amazon optimization and author branding to promotional campaigns and
              audience engagement, our marketing experts create customized strategies that help
              your book stand out in a crowded marketplace.
            </p>
          </>
        }
        imageSrc="/ready-to-publish-img.webp"
        imageAlt="Book marketing services by Aero Publishing"
        formTitle="Start Your Publishing Journey Today"
        formSubmitLabel="Publish My Book"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Affordable <Accent>Book Marketing</Accent> Designed Around Your Goals
          </>
        }
        description="Every book deserves an audience. Our book marketing services are designed to help authors increase visibility, strengthen their online presence, and generate meaningful engagement. Whether you're launching a new release or promoting an existing title, we create marketing strategies that align with your genre, audience, and publishing objectives."
        features={[
          {
            title: "Strategic Marketing Campaigns",
            description:
              "Custom marketing plans designed to maximize visibility and connect your book with the right readers.",
            icon: Megaphone,
          },
          {
            title: "Global Reader Reach",
            description:
              "Expand your audience through multi-platform promotion, online visibility, and targeted outreach strategies.",
            icon: Globe,
          },
          {
            title: "Author Brand Growth",
            description:
              "Build a recognizable author presence that supports long-term success beyond a single book launch.",
            icon: BarChart3,
          },
        ]}
        imageSrc="/book-marketing-mission.webp"
        imageAlt="Authors growing their book marketing reach"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Experienced <Accent>Book Marketing</Accent> Services!
          </>
        }
        paragraphs={[
          "At Aero Publishing, we understand that great books deserve to be discovered. Our marketing specialists work closely with authors to create customized campaigns that increase awareness, strengthen credibility, and generate reader interest.",
          "From Amazon listing optimization and keyword research to promotional planning, social media marketing, and author branding, we focus on strategies that help your book gain momentum and maintain visibility over time.",
          "Whether you're a first-time author or an established writer, our mission is simple: helping your book reach more readers and achieve its full potential.",
        ]}
        imageSrc="/menu-img.png"
        imageAlt="Experienced book marketing services"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing for <Accent>Book Marketing?</Accent>
          </>
        }
        description="Successful book marketing requires more than promotion—it requires strategy, expertise, and consistency. Our team combines industry knowledge with modern marketing techniques to help authors build visibility and grow their readership."
        cards={[
          {
            title: "Free Expert Consultation",
            description:
              "Receive personalized guidance from experienced publishing and marketing professionals who evaluate your book and recommend the most effective promotional approach.",
            icon: BookOpen,
          },
          {
            title: "AI Marketing Straties",
            description:
              "Our campaigns are built using market research, audience insights, keyword analysis, and proven promotional methods designed to maximize results.",
            icon: FileSearch,
          },
          {
            title: "Dedicated Author Support",
            description:
              "Enjoy responsive communication and ongoing support throughout your marketing journey with a team committed to your success.",
            icon: Headphones,
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
