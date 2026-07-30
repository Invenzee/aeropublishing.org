import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Genres = dynamic(() => import("@/components/sections/Genres"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Portfolio = dynamic(() => import("@/components/sections/Portfolio"));
const Process = dynamic(() => import("@/components/sections/Process"));
const ReadyToPublish = dynamic(() => import("@/components/sections/ReadyToPublish"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <Genres />
      <Services />
      <Portfolio />
      <Process />
      <ReadyToPublish />
      <Faq />
      <Contact />
    </>
  );
}
