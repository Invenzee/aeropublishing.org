"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from "@/components/ScrollReveal";
import {
  fadeLeft, fadeRight, motionTransition, motionViewport, scaleIn, staggerContainer, staggerItem,
} from "@/lib/motion";
import { handleLeadFormSubmit } from "@/lib/submit-form";
import { OPEN_QUOTE_POPUP_EVENT, openLiveChat, openQuotePopup } from "@/lib/lead-actions";
import {
  FaBookOpen, FaBook, FaBullhorn, FaCheck, FaComments, FaEnvelope, FaGlobe, FaHeadset, FaImages, FaPaintbrush, FaPenToSquare, FaPencil, FaPhone, FaPlus, FaTrophy, FaUser, FaXmark, FaMinus,
} from "react-icons/fa6";

const PHONE = "(424) 282-3304";
const PHONE_HREF = "tel:(424) 282-3304";
const PHONE_DISPLAY = "(424) 282-3304";
const EMAIL = "info@aeropublishing.org";
const POPUP_DELAY_MS = 60000;
const POPUP_SESSION_KEY = "childrens-book-lp-popup-dismissed";

const PRIMARY = "#3F3774";
const ORANGE = "#E96659";
const RED = "#E96659";
const CYAN = "#4B428A";
const YELLOW = "#E96659";
const GREEN = "#3F3774";
const PURPLE = PRIMARY;
const LOGO_SRC = "/logo.webp";

const GENRE_OPTIONS = [
  "Fiction", "Non-Fiction", "Children's Book", "Memoir", "Self-Help", "Business", "Poetry", "Audiobook", "Other",
];

const NAV_LINKS = [
  { label: "Services", href: "#services" }, { label: "Portfolio", href: "#portfolio" }, { label: "Pricing", href: "#mid-cta" }, { label: "Contact Us", href: "#contact" },
];


const HERO_CHECKS = [
  "End to end children's book publishing from manuscript to finished book", "Custom illustrations matched to your story tone and young readers", "Professional editing, formatting, and global distribution", "Clear pricing with affordable packages at every stage", "A collaborative process that keeps you in control of your vision",
];

const FEATURE_CHECKS = [
  "Custom children's book illustrations", "Vibrant, kid friendly designs", "Age appropriate visual storytelling", "Fast, reliable delivery timelines", "Affordable quality publishing service", "Fully collaborative author process",
];

const WHY_STATS = [
  {
    icon: FaUser, end: 1850, suffix: "+", useComma: true, label: "5 Star Author Reviews", }, {
    icon: FaTrophy, end: 99, suffix: "%", useComma: false, label: "Positive Reviews", }, {
    icon: FaBook, end: 250, suffix: "+", useComma: false, label: "Books Published", },
];

const SERVICE_CARDS = [
  {
    icon: FaPencil,
    title: "Story Development",
    description:
      "We shape age appropriate plots, characters, and themes that captivate young readers while keeping your creative voice intact.",
  },
  {
    icon: FaPaintbrush,
    title: "Custom Illustrations",
    description:
      "Vibrant professional artwork for whimsical picture books, early readers, and educational children's titles.",
  },
  {
    icon: FaPenToSquare,
    title: "Editing & Proofreading",
    description:
      "Expert editors polish your children's manuscript so it is clear, engaging, and ready for young readers.",
  },
  {
    icon: FaImages,
    title: "Cover & Layout Design",
    description:
      "Eye catching covers and clean interior layouts built to stand out in bookstores and online marketplaces.",
  },
  {
    icon: FaGlobe,
    title: "Publishing & Distribution",
    description:
      "Paperback, hardcover, and eBook formats with distribution across Amazon, Barnes & Noble, and global channels.",
  },
  {
    icon: FaBullhorn,
    title: "Book Marketing",
    description:
      "Targeted campaigns that put your children's book in front of parents, teachers, and young readers.",
  },
  {
    icon: FaUser,
    title: "Author Branding",
    description:
      "Build a memorable author presence with branded assets, bio copy, and a launch ready online footprint.",
  },
  {
    icon: FaHeadset,
    title: "Ongoing Support",
    description:
      "Stay supported after launch with guidance on reviews, sequels, school outreach, and long term visibility.",
  },
];

const WORK_CAROUSEL_IMAGES = [
  { src: "/book-marketing-lp/Graphic-Google.webp", alt: "Children's book publishing showcase" }, { src: "/book-marketing-lp/Graphic-Google-02.webp", alt: "Children's book publishing showcase 2" }, { src: "/book-marketing-lp/Graphic-Google-03-1-scaled.webp", alt: "Children's book publishing showcase 3" }, { src: "/book-marketing-lp/Graphic-Google-07.webp", alt: "Children's book publishing showcase 4" }, { src: "/book-marketing-lp/Graphic-Google-08.webp", alt: "Children's book publishing showcase 5" }, { src: "/book-marketing-lp/Graphic-Google-09-scaled.webp", alt: "Children's book publishing showcase 6" }, { src: "/childrens-book-lp/Graphic-Google-04-669x1024.webp", alt: "Children's book cover showcase" }, { src: "/childrens-book-lp/Graphic-Google-05-669x1024.webp", alt: "Children's book cover showcase 2" },
];

const DETAILED_SERVICES = [
  {
    icon: FaPencil,
    title: "Ghostwriting Services",
    description:
      "Have a story to tell but need help writing it? Our ghostwriters develop your idea into a finished children's manuscript in your voice, with you as the credited author.",
  },
  {
    icon: FaBookOpen,
    title: "Book Publishing",
    description:
      "We manage the full children's book publishing process including writing support, editing, formatting, and distribution so your book reaches readers on the platforms you choose.",
  },
  {
    icon: FaPenToSquare,
    title: "Editing & Proofreading",
    description:
      "Expert editors refine your manuscript so it is error free, engaging, and perfectly suited for young readers before print or digital release.",
  },
  {
    icon: FaPaintbrush,
    title: "Illustration Services",
    description:
      "Custom illustrations bring your characters and world to life with vibrant, age appropriate artwork matched to your story and audience.",
  },
  {
    icon: FaGlobe,
    title: "Distribution",
    description:
      "Get your children's book into major online and retail channels including Amazon, Barnes & Noble, and international marketplaces so families can discover it anywhere.",
  },
  {
    icon: FaBullhorn,
    title: "Book Marketing",
    description:
      "Promotion strategies for children's titles including social campaigns, launch support, and school and library outreach that put your book in front of the right readers.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Aero Publishing turned my bedtime story idea into a beautifully illustrated book my kids are proud of. The team understood the audience and guided me every step of the way.", author: "Adam Mitchell", role: "Children's Author", image: "/about-1.webp", }, {
    quote:
      "From illustrations to marketing, everything felt professional and personal. My picture book is now reaching families I never thought I could connect with on my own.", author: "James Rodriguez", role: "Picture Book Author", image: "/user.jpg", },
];

const FAQ_ITEMS = [
  {
    question: "What children's book formats do you publish?",
    answer:
      "Aero Publishing supports picture books, early readers, chapter books, coloring books, and educational titles in paperback, hardcover, and eBook formats.",
  },
  {
    question: "Do you provide illustration services for children's books?",
    answer:
      "Yes. Our illustrators create custom artwork matched to your age group, style, and characters so every page feels cohesive from cover to cover.",
  },
  {
    question: "How long does children's book publishing take?",
    answer:
      "Timelines vary by illustration complexity and project scope. Most projects move from manuscript to published book on a clear milestone based schedule we share upfront.",
  },
  {
    question: "Can I keep creative control of my children's story?",
    answer:
      "Absolutely. We collaborate closely while keeping your voice, characters, and vision at the center of every creative decision.",
  },
  {
    question: "Do you help market children's books after publishing?",
    answer:
      "Yes. We offer children's book marketing support including online campaigns, launch promotion, and strategies to reach parents, teachers, and young readers.",
  },
];

const CONTACT_BENEFITS = [
  "Submit Your Manuscript and Ideas: Share your manuscript, story concept, or visual ideas. We review your goals and match you with the right children's book publishing team.",
  "Editing and Illustration Planning: Work with dedicated editors to polish your story while our creative team sets art direction, visual style, and character concepts.",
  "Custom Artwork and Page Layout: Review sketches, illustration proofs, and interior layouts. You approve every page before final production.",
  "Formatting and Print Prep: We prepare print ready hardcover and paperback files plus eBook formats optimized for Amazon KDP, IngramSpark, and Apple Books.",
  "Final Publishing and Global Distribution: We publish across major digital and physical sales channels worldwide with full ownership, royalties, and ongoing promotion support.",
];

const FOOTER_QUICK_LINKS = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about-us" }, { label: "Contact Us", href: "#contact" },
];

const FOOTER_ADDRESS = "One Towne Square, Suite 1835, Southfield, MI 48076";

const SECTION_PADDING = "py-10 sm:py-16 lg:py-20";
const SECTION_HEADING =
  "text-[22px] sm:text-3xl lg:text-[40px] font-bold text-[#111] leading-tight break-words";
const CONTAINER = "max-w-[1140px] mx-auto w-full px-4 sm:px-6 min-w-0";

function StatCounter({
  end, suffix = "", useComma = false, className = "",
}: {
  end: number;
  suffix?: string;
  useComma?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(end);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, isInView, reduceMotion]);

  const display = useComma ? count.toLocaleString() : String(count);

  return (
    <p ref={ref} className={className} style={{ color: PURPLE }}>
      {display}
      {suffix}
    </p>
  );
}

function MotionColumn({
  children, from = "left", className = "",
}: {
  children: ReactNode;
  from?: "left" | "right";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const variants = from === "left" ? fadeLeft : fadeRight;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={motionViewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function FaqAnswer({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="px-4 py-4 text-sm leading-relaxed text-[#444] sm:px-5 sm:py-4 bg-[#F3F1F8]">
        {children}
      </div>
    </motion.div>
  );
}

const HERO_FORM_FIELD =
  "w-full px-4 py-3 border border-[#CCCCCC] rounded-xl bg-white text-[#111] text-sm outline-none focus:border-[#3F3774] placeholder:text-[#757575] transition-all duration-300";

const HERO_FORM_SELECT = `${HERO_FORM_FIELD} form-select form-select-arrow-dark`;

const FIELD_CLASS =
  "w-full px-4 py-3 border border-black/50 rounded-lg outline-none focus:border-[#3F3774] bg-white text-[#111] placeholder:text-[#999] text-sm transition-all duration-300";

const SELECT_CLASS = `${FIELD_CLASS} form-select form-select-arrow-muted`;

function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
  return handleLeadFormSubmit(e, "/Kids/lp");
}

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold rounded-full px-5 py-3 text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95";

function PurpleButton({
  children, href, type = "button", className = "", onClick,
}: {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}) {
  const classes = `${BTN_BASE} bg-gradient-to-r from-[#3F3774] to-[#4B428A] text-white hover:from-[#332C60] hover:to-[#3F3774] ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

function BlackButton({
  children, href, className = "", onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const classes = `${BTN_BASE} bg-[#111] text-white hover:bg-[#333] ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return <button type="button" className={classes} onClick={onClick}>{children}</button>;
}

function BlueButton({
  children, href, className = "", onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  const classes = `${BTN_BASE} text-white ${className}`;
  const style = { backgroundColor: ORANGE };
  if (href) {
    return (
      <a href={href} className={`${classes} hover:brightness-95`} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`${classes} hover:brightness-95`} style={style} onClick={onClick}>
      {children}
    </button>
  );
}

function DetailedServiceCard({
  icon: Icon, title, description,
}: {
  icon: typeof FaPencil;
  title: string;
  description: string;
}) {
  return (
    <ScrollStaggerItem>
      <article className="group rounded-[28px] border border-[#3F3774] bg-white p-6 text-center transition-all duration-300 hover:border-[#332C60] hover:bg-[#332C60] hover:-translate-y-1 hover:shadow-lg sm:p-8 lg:p-10">
        <Icon
          className="mx-auto mb-4 h-9 w-9 text-[#3F3774] transition-all duration-300 group-hover:scale-110 group-hover:text-white sm:mb-5 sm:h-11 sm:w-11"
          aria-hidden="true"
        />
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#111] transition-colors duration-300 group-hover:text-white sm:mb-4 sm:text-base">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#444] transition-colors duration-300 group-hover:text-white">
          {description}
        </p>
      </article>
    </ScrollStaggerItem>
  );
}

function WorksCarousel() {
  const gapPx = 16;
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(5);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(2);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, WORK_CAROUSEL_IMAGES.length - visibleCount);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    }, [maxIndex], );

  const cardWidth = `calc((100% - ${(visibleCount - 1) * gapPx}px) / ${visibleCount})`;
  const slideOffset = `calc(-${activeIndex} * (${cardWidth} + ${gapPx}px))`;
  const dotCount = maxIndex + 1;

  return (
    <div aria-label="Our works carousel">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            gap: `${gapPx}px`, transform: `translateX(${slideOffset})`, }}
        >
          {WORK_CAROUSEL_IMAGES.map((image) => (
            <div
              key={image.src}
              className="shrink-0 rounded-xl overflow-hidden shadow-md bg-white transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
              style={{ width: cardWidth }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {dotCount > 1 && (
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Carousel navigation"
        >
          {Array.from({ length: dotCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "h-2.5 w-8 bg-[#3F3774]"
                  : "h-2.5 w-2.5 bg-[#3F3774]/30 hover:bg-[#3F3774]/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceGridCard({
  icon: Icon, title, description, mirrored,
}: {
  icon: typeof FaPencil;
  title: string;
  description: string;
  mirrored: boolean;
}) {
  const iconBox = (
    <div
      className={`z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:scale-105 sm:absolute sm:top-1/2 sm:h-[60px] sm:w-[60px] sm:-translate-y-1/2 ${
        mirrored
          ? "sm:left-0 sm:-translate-x-1/2"
          : "sm:right-0 sm:translate-x-1/2"
      }`}
    >
      <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: PURPLE }} aria-hidden="true" />
    </div>
  );

  if (mirrored) {
    return (
      <ScrollStaggerItem>
        <article className="group relative flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:min-h-[120px] sm:flex-row sm:items-center sm:gap-3 sm:rounded-[30px] sm:py-7 sm:pl-10 sm:pr-7 md:pl-12 md:pr-9 md:py-8">
          <div className="flex items-center gap-3 sm:contents">
            {iconBox}
            <h3 className="text-[15px] font-bold leading-snug text-[#222] sm:w-[88px] sm:shrink-0 md:w-[105px] sm:text-base">
              {title}
            </h3>
          </div>
          <p className="min-w-0 flex-1 text-sm leading-relaxed text-[#666] sm:text-[15px]">
            {description}
          </p>
        </article>
      </ScrollStaggerItem>
    );
  }

  return (
    <ScrollStaggerItem>
      <article className="group relative flex flex-col gap-4 rounded-[24px] bg-white p-5 shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] sm:min-h-[120px] sm:flex-row sm:items-center sm:gap-3 sm:rounded-[30px] sm:py-7 sm:pl-7 sm:pr-10 md:pl-9 md:pr-12 md:py-8">
        <p className="order-2 min-w-0 flex-1 text-sm leading-relaxed text-[#666] sm:order-1 sm:text-right sm:text-[15px]">
          {description}
        </p>
        <div className="order-1 flex items-center justify-between gap-3 sm:order-2 sm:contents">
          <h3 className="text-[15px] font-bold leading-snug text-[#222] sm:w-[88px] sm:shrink-0 sm:text-right md:w-[105px] sm:text-base">
            {title}
          </h3>
          {iconBox}
        </div>
      </article>
    </ScrollStaggerItem>
  );
}

function HeroLeadForm({ id }: { id?: string }) {
  return (
    <form id={id} onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input type="text" name="name" placeholder="Name" required className={HERO_FORM_FIELD} />
        <input type="email" name="email" placeholder="Email" required className={HERO_FORM_FIELD} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          required
          className={HERO_FORM_FIELD}
        />
        <select name="genre" className={HERO_FORM_SELECT} defaultValue="Audiobook">
          {GENRE_OPTIONS.map((genre) => (
            <option key={genre} value={genre}>
              {genre === "Audiobook" ? "Audio Book" : genre}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        name="bookTitle"
        placeholder="Book Title"
        className={HERO_FORM_FIELD}
      />
      <textarea
        name="aboutBook"
        placeholder="Tell Us About Your Book"
        rows={5}
        className={`${HERO_FORM_FIELD} min-h-[100px] resize-y`}
      />
      <button
        type="submit"
        className="w-full rounded-full py-2 px-6 text-sm font-bold uppercase tracking-wide text-white bg-[#3F3774] hover:bg-[#332C60] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Submit Now
      </button>
    </form>
  );
}

function LeadForm({ id, submitLabel = "Submit Now" }: { id?: string; submitLabel?: string }) {
  return (
    <form id={id} onSubmit={handleFormSubmit} className="space-y-3">
      <input type="text" name="name" placeholder="Name" required className={FIELD_CLASS} />
      <input type="email" name="email" placeholder="Email" required className={FIELD_CLASS} />
      <input type="tel" name="phone" placeholder="Phone" required className={FIELD_CLASS} />
      <select name="service" className={SELECT_CLASS} defaultValue="">
        <option value="" disabled>
          Select a Service
        </option>
        <option value="publishing">Children&apos;s Book Publishing</option>
        <option value="illustration">Illustration</option>
        <option value="marketing">Book Marketing</option>
        <option value="full">Full Publishing Package</option>
      </select>
      <textarea
        name="message"
        placeholder="Tell us about your book project"
        rows={4}
        className={`${FIELD_CLASS} resize-y min-h-[100px]`}
      />
      <PurpleButton type="submit" className="w-full uppercase tracking-wide">
        {submitLabel}
      </PurpleButton>
    </form>
  );
}

export default function ChildrensBookLpPage() {
  const reduceMotion = useReducedMotion();
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMounted, setPopupMounted] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setPopupMounted(true);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(POPUP_SESSION_KEY)) return;
    } catch {
      // ignore
    }
    const timer = window.setTimeout(() => setPopupOpen(true), POPUP_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const open = () => setPopupOpen(true);
    window.addEventListener(OPEN_QUOTE_POPUP_EVENT, open);
    return () => window.removeEventListener(OPEN_QUOTE_POPUP_EVENT, open);
  }, []);

  const closePopup = () => {
    setPopupOpen(false);
    try {
      sessionStorage.setItem(POPUP_SESSION_KEY, "1");
    } catch {
      // ignore
    }
  };

  const popupModal =
    popupOpen && popupMounted
      ? createPortal(
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/55 px-4 pt-10 pb-6 backdrop-blur-sm sm:items-center sm:overflow-hidden sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cb-popup-heading"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative my-auto grid w-full max-w-[920px] rounded-2xl bg-white shadow-[0_24px_64px_rgba(0,0,0,0.25)] max-md:max-h-[calc(100dvh-2rem)] max-md:overflow-y-auto md:max-h-[90vh] md:grid-cols-[42%_58%] md:overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={closePopup}
              className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-md bg-[#111] text-white hover:bg-[#333] sm:top-4 sm:right-4"
              aria-label="Close popup"
            >
              <FaXmark className="h-3.5 w-3.5" />
            </button>
            <div
              className="flex min-h-[280px] flex-col p-6 pr-12 lg:p-8"
              style={{ backgroundColor: YELLOW }}
            >
              <h2
                id="cb-popup-heading"
                className="text-2xl sm:text-3xl font-bold text-[#111] mb-3 leading-tight"
              >
                Publish Your Children&apos;s Book with Aero Publishing
              </h2>
              <div className="space-y-3 text-sm text-[#111] mb-6">
                <div className="flex items-start gap-3">
                  <FaPhone className="w-4 h-4 mt-1 shrink-0" style={{ color: CYAN }} aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <a href={PHONE_HREF} className="hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-4 h-4 mt-1 shrink-0" style={{ color: RED }} aria-hidden="true" />
                  <div>
                    <h3 className="font-bold">Discuss your story</h3>
                    <a href={`mailto:${EMAIL}`} className="hover:underline break-all">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-auto flex justify-center">
                <img
                  src="/children-book-1.webp"
                  alt="Aero Publishing children's book publishing"
                  className="w-full max-w-[280px] rounded-xl object-cover max-h-[200px]"
                />
              </div>
            </div>
            <div className="p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto">
              <form
                onSubmit={(e) => {
                  void handleLeadFormSubmit(e, "/Kids/lp-popup");
                }}
                className="space-y-3"
              >
                <input type="text" name="name" placeholder="Name" required className={FIELD_CLASS} />
                <input type="email" name="email" placeholder="Email" required className={FIELD_CLASS} />
                <input type="tel" name="phone" placeholder="Phone" required className={FIELD_CLASS} />
                <textarea
                  name="message"
                  placeholder="Tell us about your children's book"
                  rows={4}
                  className={`${FIELD_CLASS} resize-y`}
                />
                <PurpleButton type="submit" className="w-full uppercase tracking-wide">
                  Submit Now
                </PurpleButton>
              </form>
            </div>
          </motion.div>
        </motion.div>, document.body, )
      : null;

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={reduceMotion ? false : { y: -24, opacity: 0 }}
        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-clip transition-all duration-300 ${
          headerScrolled ? "bg-[#3F3774] shadow-md" : "bg-[#3F3774] shadow-sm"
        }`}
      >
        <div className={`${CONTAINER} py-2.5 sm:py-3`}>
          <div className="flex min-w-0 items-center justify-between gap-2 sm:gap-4">
            <a href="/" className="min-w-0 shrink transition-opacity duration-300 hover:opacity-80" aria-label="Aero Publishing">
              <img
                src={LOGO_SRC}
                alt="Aero Publishing"
                width={150}
                height={150}
                className="h-10 w-auto max-w-[140px] object-contain sm:h-12 sm:max-w-none"
              />
            </a>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <BlackButton
                onClick={openLiveChat}
                className="shrink-0 px-3.5 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm"
              >
                Chat Now
              </BlackButton>
              <span className="hidden lg:inline-flex">
                <BlueButton
                  onClick={openQuotePopup}
                  className="shrink-0 px-4 py-2.5 text-sm"
                >
                  Get Started
                </BlueButton>
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="overflow-x-clip">
        {/* Hero */}
        <section
          className="relative overflow-hidden bg-[url('/kids-hero-banner.jpg')] bg-cover bg-center bg-no-repeat pt-[4.5rem] pb-10 sm:pt-24 sm:pb-12 lg:bg-right lg:pt-32 lg:pb-20"
          aria-labelledby="cb-hero-heading"
        >
          <div className={`${CONTAINER} relative z-10`}>
            <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="min-w-0"
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? undefined : "visible"}
                variants={staggerContainer}
              >
                <motion.h1
                  id="cb-hero-heading"
                  variants={staggerItem}
                  className="mb-4 text-[22px] font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                >
                  Children&apos;s Book Publishing Services That Bring Stories to Life
                </motion.h1>
                <motion.p
                  variants={staggerItem}
                  className="mb-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]"
                >
                  Aero Publishing helps authors turn manuscripts into beautifully illustrated children&apos;s books with custom art, professional editing, formatting, and publishing support. From picture books to chapter books, we guide you through every stage so your story delights young readers and stands out on the shelf.
                </motion.p>

                <motion.ul variants={staggerItem} className="mb-8 max-w-xl list-none space-y-3">
                  {HERO_CHECKS.map((item) => (
                    <motion.li
                      key={item}
                      variants={staggerItem}
                      className="flex items-start gap-3 text-sm font-medium text-white"
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
                        style={{ backgroundColor: GREEN }}
                      >
                        <FaCheck className="h-2.5 w-2.5" aria-hidden="true" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={staggerItem} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <BlackButton onClick={openQuotePopup} className="w-full sm:w-auto">
                    Get Kids Book Illustration
                  </BlackButton>
                  <PurpleButton onClick={openLiveChat} className="w-full sm:w-auto">
                    Talk To The Expert
                  </PurpleButton>
                </motion.div>
              </motion.div>

              <ScrollReveal variants={scaleIn} delay={0.15}>
                <div className="rounded-2xl border-2 border-[#E96659] bg-white p-5 transition-shadow duration-300 hover:shadow-xl sm:p-6 lg:p-8">
                  <h2 className="mb-2 text-left text-xl font-bold leading-tight text-[#111] sm:text-2xl lg:text-[26px]">
                    Claim 30% OFF Children&apos;s Book Publishing
                  </h2>
                  <p className="mb-6 text-left text-sm leading-relaxed text-[#111] sm:text-[15px]">
                    Claim your limited time discount on children&apos;s book publishing and illustration packages.
                  </p>
                  <HeroLeadForm id="hero-form" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Feature focus */}
        <section
          className="bg-[url('/kids-banner.jpg')] bg-cover bg-center bg-no-repeat py-12 sm:py-20 lg:py-28"
          aria-labelledby="cb-leading-heading"
        >
          <div className={CONTAINER}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <MotionColumn from="left">
                <ScrollReveal>
                  <h2 id="cb-leading-heading" className={`${SECTION_HEADING} mb-4 text-white!`}>
                    Turning Your Manuscript Into a Published Children&apos;s Book
                  </h2>
                  <p className="mb-5 text-sm leading-relaxed text-white/90">
                    Ready to publish your children&apos;s book? Aero Publishing takes your story from manuscript to market with professional editing, formatting, and custom illustrations. Whether you want a whimsical picture book, a magical adventure, or a heartwarming tale, we make sure text and art work together to engage young readers and parents.
                  </p>
                </ScrollReveal>
                <ScrollStagger className="mb-6 grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  {FEATURE_CHECKS.map((item) => (
                    <ScrollStaggerItem key={item}>
                      <li className="flex items-start gap-3 text-sm font-medium text-white">
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 hover:scale-110"
                          style={{ backgroundColor: PRIMARY }}
                        >
                          <FaCheck className="h-2.5 w-2.5" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    </ScrollStaggerItem>
                  ))}
                </ScrollStagger>
                <ScrollReveal delay={0.1}>
                  <BlackButton onClick={openQuotePopup} className="w-full sm:w-auto">
                    Get Kids Book Illustration
                  </BlackButton>
                </ScrollReveal>
              </MotionColumn>
              <MotionColumn from="right">
                <img
                  src="/childrens-book-lp/sec-2-img.webp"
                  alt="Child discovering books with Aero Publishing children's book services"
                  className="h-[280px] w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02] sm:h-[380px] lg:h-[500px]"
                />
              </MotionColumn>
            </div>
          </div>
        </section>

        {/* Why authors choose us */}
        <section className={SECTION_PADDING} aria-labelledby="cb-why-heading">
          <div className={CONTAINER}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <MotionColumn from="left" className="order-2 lg:order-1">
                <img
                  src="/childrens-book-lp/global-sec.webp"
                  alt="Young child reading a colorful picture book from Aero Publishing"
                  className="h-[280px] w-full rounded-2xl border-4 border-[#3F3774]/20 object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02] sm:h-[380px] lg:h-[500px]"
                />
              </MotionColumn>
              <MotionColumn from="right" className="order-1 lg:order-2">
                <ScrollReveal>
                  <h2 id="cb-why-heading" className={`${SECTION_HEADING} mb-4`}>
                    Why Authors Choose Aero Publishing
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#444]">
                    Aero Publishing has helped hundreds of authors publish children&apos;s books that connect with young readers. From manuscript development to final distribution, we manage every detail so you can focus on the story only you can tell.
                  </p>
                </ScrollReveal>
                <ScrollStagger className="mb-8 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
                  {WHY_STATS.map((stat) => (
                    <ScrollStaggerItem key={stat.label}>
                      <div className="text-center transition-transform duration-300 hover:-translate-y-1">
                        <stat.icon
                          className="mx-auto mb-3 h-8 w-8 transition-transform duration-300 hover:scale-110 sm:mb-4 sm:h-10 sm:w-10"
                          style={{ color: PURPLE }}
                          aria-hidden="true"
                        />
                        <StatCounter
                          end={stat.end}
                          suffix={stat.suffix}
                          useComma={stat.useComma}
                          className="mb-2 text-3xl font-bold leading-none sm:text-4xl lg:text-[42px]"
                        />
                        <p className="mx-auto max-w-[9rem] text-xs leading-snug text-[#111] sm:text-sm">{stat.label}</p>
                      </div>
                    </ScrollStaggerItem>
                  ))}
                </ScrollStagger>
                <ScrollReveal delay={0.1}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <BlackButton onClick={openLiveChat} className="w-full sm:w-auto">
                      Hire Our Expert
                    </BlackButton>
                    <PurpleButton onClick={openQuotePopup} className="w-full sm:w-auto">
                      Claim Free Consultation
                    </PurpleButton>
                  </div>
                </ScrollReveal>
              </MotionColumn>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-[url('/kids-banner.jpg')] bg-cover bg-center bg-no-repeat py-12 sm:py-20 lg:py-28"
          aria-labelledby="cb-services-heading"
        >
          <div className={CONTAINER}>
            <ScrollReveal className="mb-8 text-center sm:mb-10">
              <h2 id="cb-services-heading" className={`${SECTION_HEADING} mx-auto mb-3 max-w-2xl text-white!`}>
                Comprehensive Children&apos;s Book Publishing Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-white/90">
                Aero Publishing has helped hundreds of authors publish children&apos;s books that connect with young readers. From manuscript development to final distribution, we manage every detail so you can focus on the story only you can tell.
              </p>
            </ScrollReveal>
            <ScrollStagger className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-x-12 xl:gap-x-20">
              {SERVICE_CARDS.map((card, index) => (
                <ServiceGridCard
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  mirrored={index % 2 === 1}
                />
              ))}
            </ScrollStagger>
          </div>
        </section>

        {/* Our Works */}
        <section id="portfolio" className={SECTION_PADDING} aria-labelledby="cb-works-heading">
          <div className={CONTAINER}>
            <ScrollReveal className="mb-8 text-center sm:mb-10">
              <h2 id="cb-works-heading" className={`${SECTION_HEADING} mb-3`}>
                Our Children&apos;s Book Portfolio
              </h2>
              <p className="mx-auto max-w-xl text-sm text-[#555]">
                Explore children&apos;s books and publishing campaigns Aero Publishing has helped bring to market with creativity, quality, and results across genres and platforms.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <WorksCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* Mid page CTA */}
        <section
          id="mid-cta"
          className={`${SECTION_PADDING} relative overflow-hidden bg-[url('/kids-yellow-banner.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed`}
          aria-labelledby="cb-mid-cta-heading"
        >
          <div className={`${CONTAINER} relative z-10 text-center`}>
            <ScrollReveal>
              <h2 id="cb-mid-cta-heading" className={`${SECTION_HEADING} mx-auto mb-3 max-w-2xl`}>
                Bring Your Story to Life Save 25% Today!
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-sm text-[#222]">
                Partner with Aero Publishing&apos;s children&apos;s book experts and get 25% OFF full publishing and illustration packages. Turn your manuscript into a beautifully illustrated book young readers will love.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <BlueButton onClick={openQuotePopup} className="w-full sm:w-auto">
                  Get Kids Book Illustration
                </BlueButton>
                <PurpleButton onClick={openLiveChat} className="w-full sm:w-auto">
                  Talk To An Expert
                </PurpleButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Detailed services */}
        <section className={SECTION_PADDING} aria-labelledby="cb-detailed-heading">
          <div className={CONTAINER}>
            <ScrollReveal className="mb-8 text-center sm:mb-10">
              <h2 id="cb-detailed-heading" className={`${SECTION_HEADING} mb-3`}>
                Our Full Range of Publishing Solutions
              </h2>
              <p className="mx-auto max-w-xl text-sm text-[#555]">
                Complete children&apos;s book publishing services crafted for authors at every stage.
              </p>
            </ScrollReveal>
            <ScrollStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {DETAILED_SERVICES.map((item) => (
                <DetailedServiceCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ScrollStagger>
          </div>
        </section>

        {/* Showcase offer */}
        <section
          className={`${SECTION_PADDING} bg-[url('/kids-banner.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed`}
          aria-labelledby="cb-showcase-heading"
        >
          <div className={CONTAINER}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <MotionColumn from="left">
                <ScrollReveal>
                  <h2 id="cb-showcase-heading" className={`${SECTION_HEADING} mb-4 text-white!`}>
                    Publish Your Children&apos;s Book with Aero Publishing and Get 25% OFF
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-white/90">
                    Take advantage of our limited time offer and get 25% OFF complete children&apos;s book publishing packages. From manuscript editing and custom illustration to formatting and global distribution, Aero Publishing handles everything under one roof.
                  </p>
                  <PurpleButton onClick={openQuotePopup} className="w-full sm:w-auto">
                    Get Kids Book Illustration
                  </PurpleButton>
                </ScrollReveal>
              </MotionColumn>
              <MotionColumn from="right">
                <img
                  src="/childrens-book-lp/showcase-1.webp"
                  alt="Children's book mockup showcase"
                  className="mx-auto w-full max-w-md object-contain transition-transform duration-500 hover:scale-[1.02] lg:-my-16"
                />
              </MotionColumn>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={SECTION_PADDING} aria-labelledby="cb-testimonials-heading">
          <div className={CONTAINER}>
            <ScrollReveal className="mb-8 text-center sm:mb-10">
              <h2 id="cb-testimonials-heading" className={SECTION_HEADING}>
                What Our Clients Say
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-[#222]">
                Authors trust Aero Publishing for children&apos;s book illustration, editing, and publishing. Read what our clients say about working with our team.
              </p>
            </ScrollReveal>
            <ScrollStagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {TESTIMONIALS.map((item) => (
                <ScrollStaggerItem key={item.author}>
                  <article className="flex h-full flex-col rounded-2xl border-2 border-[#E96659] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-[#333]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex flex-col items-center gap-2">
                      <img
                        src={item.image}
                        alt={item.author}
                        className="h-14 w-14 rounded-full border-2 border-[#3F3774]/30 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <p className="text-sm font-bold text-[#111]">{item.author}</p>
                      <p className="text-xs text-[#666]">{item.role}</p>
                    </div>
                  </article>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        </section>

        {/* Secondary CTA */}
        <section
          className={`${SECTION_PADDING} bg-[url('/kids-yellow-banner.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed`}
          aria-labelledby="cb-idea-heading"
        >
          <div className={CONTAINER}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <MotionColumn from="left" className="order-2 lg:order-1">
                <img
                  src="/childrens-book-lp/showcase-2.webp"
                  alt="Children's book mockup showcase"
                  className="mx-auto w-full max-w-lg object-contain transition-transform duration-500 hover:scale-[1.02] lg:-my-16"
                />
              </MotionColumn>
              <MotionColumn from="right" className="order-1 lg:order-2">
                <ScrollReveal>
                  <h2 id="cb-idea-heading" className={`${SECTION_HEADING} mb-4`}>
                    Turn Your Story Idea into a Published Children&apos;s Book
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#222]">
                    Bring your characters off the page and onto the shelves. Claim 25% OFF full service children&apos;s book publishing and work with experienced editors, illustrators, and publishing strategists at Aero Publishing.
                  </p>
                  <BlackButton onClick={openLiveChat} className="w-full sm:w-auto">
                    Chat With Expert
                  </BlackButton>
                </ScrollReveal>
              </MotionColumn>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={SECTION_PADDING} aria-labelledby="cb-faq-heading">
          <div className={`${CONTAINER} max-w-3xl`}>
            <ScrollReveal className="mb-8 text-center">
              <h2 id="cb-faq-heading" className={`${SECTION_HEADING} inline-block`}>
                Frequently Asked Questions
              </h2>
              <motion.div
                className="mx-auto mt-2 h-1 w-24 rounded-full"
                style={{ backgroundColor: PURPLE }}
                initial={reduceMotion ? false : { width: 0 }}
                whileInView={reduceMotion ? undefined : { width: 96 }}
                viewport={motionViewport}
                transition={{ duration: 0.6, delay: 0.2 }}
                aria-hidden="true"
              />
            </ScrollReveal>
            <ScrollStagger className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <ScrollStaggerItem key={item.question}>
                    <div
                      className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                        isOpen ? "border-transparent" : "border-[#e5e5e5]"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className={`flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold transition-all duration-300 sm:px-5 ${
                          isOpen
                            ? "text-white"
                            : "bg-white text-[#111] hover:bg-[#fafafa]"
                        }`}
                        style={isOpen ? { backgroundColor: PURPLE } : undefined}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <motion.span
                          animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0"
                        >
                          {isOpen ? (
                            <FaMinus className="h-3.5 w-3.5" aria-hidden="true" />
                          ) : (
                            <FaPlus className="h-3.5 w-3.5 text-[#3F3774]" aria-hidden="true" />
                          )}
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && <FaqAnswer>{item.answer}</FaqAnswer>}
                      </AnimatePresence>
                    </div>
                  </ScrollStaggerItem>
                );
              })}
            </ScrollStagger>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className={SECTION_PADDING}
          style={{ backgroundColor: PURPLE }}
          aria-labelledby="cb-contact-heading"
        >
          <div className={CONTAINER}>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              <ScrollReveal variants={scaleIn}>
                <div className="rounded-2xl bg-white p-5 shadow-xl transition-shadow duration-300 hover:shadow-2xl sm:p-6 lg:p-8">
                  <h3 className="mb-4 text-center text-3xl font-bold text-[#111]">Contact Us</h3>
                  <LeadForm submitLabel="Send Message" />
                </div>
              </ScrollReveal>
              <MotionColumn from="right">
                <h2
                  id="cb-contact-heading"
                  className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                >
                  How to Publish Your Children&apos;s Book with Aero Publishing
                </h2>
                <ScrollStagger className="mb-8 list-none space-y-3">
                  {CONTACT_BENEFITS.map((benefit) => (
                    <ScrollStaggerItem key={benefit}>
                      <li className="flex items-start gap-3 text-[13px] font-normal leading-relaxed text-white break-words">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 hover:scale-110">
                          <FaCheck className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {benefit}
                      </li>
                    </ScrollStaggerItem>
                  ))}
                </ScrollStagger>
              </MotionColumn>
            </div>
          </div>
        </section>
      </div>

      <footer className="pb-0" aria-label="Site footer">
        <div className="border-b border-white/15 bg-[#3F3774]">
          <div className={`${CONTAINER} py-8 sm:py-10 lg:py-14`}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
              <ScrollReveal>
                <img
                  src={LOGO_SRC}
                  alt="Aero Publishing"
                  className="mb-5 w-40 transition-transform duration-300 hover:scale-105 sm:w-48"
                />
                <p className="mb-1 text-sm text-white/80">
                  <a href={PHONE_HREF} className="transition-opacity duration-300 hover:opacity-80">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <p className="mb-1 text-sm text-white/80">
                  <a href={`mailto:${EMAIL}`} className="break-all transition-opacity duration-300 hover:opacity-80">
                    {EMAIL}
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-white/80">{FOOTER_ADDRESS}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h3 className="mb-4 text-base font-bold text-white">Quick Links</h3>
                <ul className="list-none space-y-3">
                  {FOOTER_QUICK_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/80 transition-all duration-300 hover:translate-x-1 hover:text-[#E96659]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>

        <div className="border-t border-black bg-black py-3 text-center">
          <p className="text-xs leading-relaxed text-white sm:text-sm">
            &copy; 2026 Aero Publishing
            <br />
            A brand of SOLAR THIRTY LLC. All Rights Reserved.
          </p>
          <p className="mt-1.5 flex flex-col items-center gap-2 text-xs text-white/80 sm:flex-row sm:flex-wrap sm:justify-center sm:text-sm">
            <a href="/privacy-policy" className="whitespace-nowrap transition-colors hover:text-[#E96659]">
              Privacy Policy
            </a>
            <span aria-hidden className="mx-3 hidden text-white/40 sm:inline">
              |
            </span>
            <a href="/terms-and-conditions" className="whitespace-nowrap transition-colors hover:text-[#E96659]">
              Terms &amp; Conditions
            </a>
            <span aria-hidden className="mx-3 hidden text-white/40 sm:inline">
              |
            </span>
            <a href="/return-and-refund-policies" className="whitespace-nowrap transition-colors hover:text-[#E96659]">
              Return &amp; Refund Policies
            </a>
          </p>
        </div>
      </footer>

      {popupModal}
    </>
  );
}
