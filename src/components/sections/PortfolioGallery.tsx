import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const books = Array.from({ length: 8 }, (_, index) => ({
  src: `/cover-${index + 1}.webp`,
  alt: `Published book cover ${index + 1}`,
}));

export default function PortfolioGallery() {
  return (
    <section className="bg-white section-y">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 md:gap-8">
          {books.map((book, index) => (
            <Reveal key={book.src} variant="up" delay={(index % 4) * 70}>
              <div className="overflow-hidden rounded-sm shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                <Image
                  src={book.src}
                  alt={book.alt}
                  width={280}
                  height={420}
                  className="aspect-[2/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
