"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Highlight from "@/components/ui/Highlight";
import Reveal from "@/components/ui/Reveal";

const genres = [
  {
    title: "Action",
    tagline: "Adventure. Conflict. Courage. Victory.",
    image: "/genes-action.webp",
  },
  {
    title: "Children",
    tagline: "Wonder. Joy. Learning. Imagination.",
    image: "/genes-children.webp",
  },
  {
    title: "Fantasy",
    tagline: "Magic. Myths. Worlds. Wonder.",
    image: "/genes-fantasy.webp",
  },
  {
    title: "Suspense",
    tagline: "Mystery. Fear. Secrets. Twists.",
    image: "/genes-suspense.webp",
  },
  {
    title: "Drama",
    tagline: "Emotion. Conflict. Truth. Humanity.",
    image: "/genes-drama.webp",
  },
  {
    title: "Novel",
    tagline: "Stories. Characters. Journeys. Meaning.",
    image: "/genes-novel.webp",
  },
  {
    title: "Fiction",
    tagline: "Ideas. Worlds. Voices. Escape.",
    image: "/genes-fiction.webp",
  },
  {
    title: "Romantic",
    tagline: "Love. Passion. Hope. Forever.",
    image: "/genes-romance.webp",
  },
];

export default function Genres() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section className="bg-neutral-100 py-12 sm:py-16 lg:py-20">
      <Container>
        <Reveal variant="up">
          <h2 className="text-center text-[2rem] font-bold leading-[1.15] tracking-tight text-black sm:text-4xl lg:text-[50px]">
            Genres <Highlight className="text-secondary">We Specialize</Highlight> In
          </h2>
        </Reveal>

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            aria-label="Previous genres"
            onClick={() => scrollByCard(-1)}
            className="absolute -left-1 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md transition-colors hover:bg-secondary sm:flex md:-left-3"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          >
            {genres.map((genre, index) => (
              <Reveal
                key={genre.title}
                variant="up"
                delay={index * 60}
                className="w-[calc(100%-1rem)] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
              >
                <article className="relative aspect-square overflow-hidden rounded-lg bg-primary">
                  <Image
                    src={genre.image}
                    alt={`${genre.title} genre`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    quality={75}
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10">
                    <h3 className="text-xl font-semibold text-white">{genre.title}</h3>
                    <p className="mt-1 text-[11px] leading-4 text-white/75">{genre.tagline}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next genres"
            onClick={() => scrollByCard(1)}
            className="absolute -right-1 top-1/2 z-10 hidden size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-md transition-colors hover:bg-secondary sm:flex md:-right-3"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
