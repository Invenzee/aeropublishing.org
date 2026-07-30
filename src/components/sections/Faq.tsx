"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How long does it take to publish a book?",
    answer:
      "The publishing timeline depends on the services required, but most projects take between 4–12 weeks. Factors such as editing, formatting, cover design, and final approvals can affect the overall schedule.",
  },
  {
    question: "Do I retain full ownership of my book?",
    answer:
      "Yes. You retain 100% ownership of your manuscript, intellectual property, and publishing rights. We simply help you prepare, publish, and market your work.",
  },
  {
    question: "Can you help if my book is not finished yet?",
    answer:
      "Absolutely. Whether you have a rough draft, an outline, or just an idea, our writing and ghostwriting services can help transform your concept into a professionally written book.",
  },
  {
    question: "Which publishing platforms do you support?",
    answer:
      "We help authors publish on major platforms, including Amazon Kindle Direct Publishing (KDP), paperback and hardcover marketplaces, eBook stores, and audiobook distribution channels.",
  },
  {
    question: "Do I need a professionally designed book cover?",
    answer:
      "Yes. A professionally designed cover helps your book stand out, attracts potential readers, and improves credibility in competitive online marketplaces.",
  },
  {
    question: "What types of books do you work with?",
    answer:
      "We work with a wide range of genres, including fiction, non-fiction, memoirs, business books, self-help, children's books, fantasy, romance, suspense, and more.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading
          eyebrow="How Can We Help yOUR?"
          tone="light"
          title={
            <>
              Your Publishing Questions
              <br />
              <Highlight className="text-secondary">Answered Clearly</Highlight>
            </>
          }
        />

        <div className="mx-auto mt-10 flex max-w-full flex-col gap-3 sm:mt-12 sm:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} variant="up" delay={index * 50}>
                <div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 rounded-lg bg-white/10 px-4 py-4 text-left transition-colors hover:bg-white/15 sm:px-5"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="size-4 shrink-0 text-white" />
                    ) : (
                      <Plus className="size-4 shrink-0 text-white" />
                    )}
                  </button>

                  {isOpen ? (
                    <p className="px-4 py-4 text-sm leading-6 text-white/75 sm:px-5">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
