import {
  BookOpen,
  Globe,
  Megaphone,
  MessageCircle,
  PencilLine,
  Search,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Consultation",
    description: "We listen to your idea and understand your goals.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Manuscript Review",
    description: "Our experts review your manuscript and provide insights.",
    icon: Search,
  },
  {
    number: "03",
    title: "Editing & Design",
    description: "Professional editing, beautiful design and formatting.",
    icon: PencilLine,
  },
  {
    number: "04",
    title: "Publishing",
    description: "We publish your book in print, eBook and audio formats.",
    icon: BookOpen,
  },
  {
    number: "05",
    title: "Distribution",
    description: "Global distribution to leading platforms and bookstores.",
    icon: Globe,
  },
  {
    number: "06",
    title: "Marketing & Promotion",
    description: "We promote your book and help you reach the right readers.",
    icon: Megaphone,
  },
];

export default function Process() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeading
          eyebrow="OUR PROCESS"
          title={
            <>
              Your Journey From
              <br />
              Manuscript To <Highlight className="text-secondary">Masterpiece</Highlight>
            </>
          }
        />

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number} variant="up" delay={index * 70}>
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-20 items-center justify-center rounded-full border border-primary/45 sm:size-26">
                    <Icon className="size-8 text-primary sm:size-10" />
                  </span>
                  <span className="mt-4 text-sm font-bold tracking-[0.2em] text-secondary sm:text-md">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-black sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-black/60">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
