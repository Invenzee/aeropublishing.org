"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Check, Clock, Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Highlight from "@/components/ui/Highlight";

const ease = [0.22, 1, 0.36, 1] as const;

const nextSteps = [
  {
    icon: Clock,
    title: "We review your request",
    body: "A publishing consultant reads your details and prepares the right next step for your manuscript.",
  },
  {
    icon: Phone,
    title: "We reach out personally",
    body: "Expect a call or email shortly so we can talk through your goals, timeline, and publishing options.",
  },
  {
    icon: BookOpen,
    title: "Your book moves forward",
    body: "From editing to design, printing, and distribution, we guide you through every stage with clarity.",
  },
];

export default function ThankYouClient() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute -left-24 top-10 size-[280px] rounded-full bg-primary/10 blur-3xl sm:size-[380px] lg:size-[460px]"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 28, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-32 size-[240px] rounded-full bg-secondary/15 blur-3xl sm:size-[340px] lg:size-[420px]"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -22, 0], y: [0, 26, 0], scale: [1, 1.12, 1] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 size-[200px] rounded-full bg-primary/10 blur-3xl sm:size-[280px]"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -20, 0], opacity: [0.5, 0.85, 0.5] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative">
        <div className="flex min-h-[calc(100svh-8rem)] flex-col items-center justify-center py-16 sm:py-20 lg:py-24">
          <motion.div
            className="relative mb-8 flex size-24 items-center justify-center sm:mb-10 sm:size-28"
            initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.08 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-secondary/40"
              initial={reduceMotion ? false : { scale: 0.7, opacity: 0.8 }}
              animate={reduceMotion ? undefined : { scale: [1, 1.35, 1.35], opacity: [0.7, 0, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            />
            <motion.span
              className="absolute inset-[-10px] rounded-full bg-secondary/15"
              animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative flex size-full items-center justify-center rounded-full bg-secondary text-white shadow-[0_18px_40px_-16px_rgba(233,102,89,0.8)]">
              <motion.span
                initial={reduceMotion ? false : { scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 16, delay: 0.28 }}
              >
                <Check className="size-11 stroke-[2.5] sm:size-12" aria-hidden />
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            className="max-w-2xl text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.22 }}
          >
            <Eyebrow align="center">Submission received</Eyebrow>
            <h1 className="mt-4 text-[2rem] font-bold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-[56px]">
              Thank You
              <br />
              <Highlight className="text-secondary">We&apos;ve Got Your Story</Highlight>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-black/70 sm:text-lg">
              Your message reached Aero Publishing safely. Our publishing experts are
              already reviewing your request and will be in touch shortly to help you
              take the next step.
            </p>
          </motion.div>

          <div className="mt-10 grid w-full max-w-4xl gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
            {nextSteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="rounded-2xl border border-primary/10 bg-white/80 p-5 text-left shadow-sm backdrop-blur-sm sm:p-6"
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.38 + index * 0.12 }}
                whileHover={reduceMotion ? undefined : { y: -6, boxShadow: "0 18px 40px -24px rgba(63,55,116,0.45)" }}
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-full bg-primary text-white">
                  <step.icon className="size-5" aria-hidden />
                </span>
                <h2 className="text-base font-semibold text-primary sm:text-lg">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-black/65">{step.body}</p>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="mt-10 flex w-full max-w-xl flex-col items-center gap-3 sm:mt-12 sm:flex-row sm:justify-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.78 }}
          >
            <Button href="/" variant="primary" className="w-full sm:w-auto">
              Back to Home
            </Button>
            <Button href="tel:+14242823304" variant="secondary" className="w-full sm:w-auto">
              <Phone className="size-4" />
              (424) 282-3304
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-center text-sm text-black/55"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.95 }}
          >
            Prefer email? Write to{" "}
            <a
              href="mailto:info@aeropublishing.org"
              className="font-semibold text-primary underline-offset-2 transition-colors hover:text-secondary hover:underline"
            >
              <Mail className="mr-1 inline size-3.5 align-[-2px]" aria-hidden />
              info@aeropublishing.org
            </a>
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
