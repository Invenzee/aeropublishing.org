import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3.5 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <Reveal variant="fade" delay={0}>
          <Eyebrow align={align}>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}
      <Reveal variant="up" delay={80}>
        <h2
          className={`text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[50px] ${
            tone === "light" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal variant="up" delay={160}>
          <p
            className={`max-w-3xl text-base leading-7 ${
              tone === "light" ? "text-white/75" : "text-black/65"
            }`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
