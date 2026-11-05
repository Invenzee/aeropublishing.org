import type { Metadata } from "next";
import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  MapPin,
  Megaphone,
  MessageCircle,
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
  title: "Book Signing | Aero Publishing",
  description:
    "Plan a memorable book signing with Aero Publishing. Get support with venue outreach, event promotion, signing preparation, and reader engagement.",
};

export default function BookSigningPage() {
  return (
    <>
      <Hero
        variant="background"
        eyebrow="Turn Your Book Into A Memorable Event"
        title={
          <>
            Your Story.
            <br />
            Their Signed Copy.
            <br />
            <Accent>Book Signing Services</Accent>
          </>
        }
        description={
          <>
            <p>
              A signed book is more than a keepsake. It is a personal connection between
              an author and a reader. At Aero Publishing, we help you plan book signing
              events that celebrate your work and bring your story closer to its audience.
            </p>
            <p className="mt-4">
              From venue outreach and promotional planning to book preparation and event
              coordination, we help you organize the details so you can focus on sharing
              your story and meeting your readers.
            </p>
          </>
        }
        imageSrc="/book-signing-hero.webp"
        formTitle="Let’s Plan Your Book Signing"
        formSubmitLabel="Plan My Book Signing"
        ctaLabel="Discuss My Event"
      />

      <OurMission
        imageClassname="h-[600px]"
        title={
          <>
            Memorable <Accent>Book Signings</Accent> Built Around Your Story
          </>
        }
        description="Whether you are celebrating a debut, launching a new release, or reconnecting with your audience, your signing should reflect your book and your goals. We help shape a practical event plan around your genre, preferred location, timeline, and budget, with clear guidance at each stage."
        features={[
          {
            title: "Personalized Event Planning",
            description:
              "Define your event format, schedule, and preparation checklist, from a focused signing to a reading and audience Q&A.",
            icon: CalendarDays,
          },
          {
            title: "Venue Outreach & Coordination",
            description:
              "Identify suitable bookstores, libraries, and community spaces, and coordinate requirements subject to venue availability and approval.",
            icon: MapPin,
          },
          {
            title: "Reader-Focused Promotion",
            description:
              "Build awareness with event announcements, social content, and invitations tailored to your book and local readership.",
            icon: Megaphone,
          },
        ]}
        imageSrc="/book-signing-details.webp"
        imageAlt="Books, bookmarks, invitation cards, and a fountain pen arranged on an empty signing table"
        imagePosition="left"
      />

      <ServiceExperience
        title={
          <>
            Thoughtful Support For Your <Accent>Book Signing</Accent>
          </>
        }
        paragraphs={[
          "A successful signing starts well before the first book is opened. We work with you to understand your audience, select an event format, and map out the steps needed to bring your plans together.",
          "Our preparation covers venue communication, promotional materials, book quantities, table presentation, and a clear event schedule. We also help you prepare for readings, reader questions, and personal dedications so you can approach the day with confidence.",
          "After the event, we help you consider reader feedback and follow-up opportunities to keep the conversation going. From the first planning conversation to the final signed copy, our focus is on making your event feel organized, personal, and true to your book.",
        ]}
        imageSrc="/book-signing-details.webp"
        imageAlt="An open book and fountain pen beside neatly arranged books at a prepared signing table"
      />

      <WhyChoose
        title={
          <>
            Why Choose Aero Publishing For <Accent>Book Signing?</Accent>
          </>
        }
        description="Your event deserves the same care as your manuscript. We combine publishing knowledge with organized planning to help you create a welcoming, professional experience for your readers."
        cards={[
          {
            title: "A Clear Starting Point",
            description:
              "Discuss your book, audience, and event ideas in a consultation, then explore a plan that fits your goals and budget.",
            icon: MessageCircle,
          },
          {
            title: "Attention To Every Detail",
            description:
              "Stay organized with guidance on event logistics, signing supplies, promotional assets, and the practical details that shape the day.",
            icon: ClipboardList,
          },
          {
            title: "Your Book At The Center",
            description:
              "Create an event that reflects your author voice, gives readers a reason to connect, and celebrates the work behind every page.",
            icon: BookOpen,
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
