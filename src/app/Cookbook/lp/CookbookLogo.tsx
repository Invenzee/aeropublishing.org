import Image from "next/image";

type CookbookLogoProps = {
  variant?: "header" | "footer";
  className?: string;
};

export default function CookbookLogo({
  variant = "header",
  className = "",
}: CookbookLogoProps) {
  if (variant === "footer") {
    return (
      <Image
        src="/logo.webp"
        alt="Aero Publishing"
        width={180}
        height={60}
        className={`h-auto w-[180px] ${className}`}
      />
    );
  }

  return (
    <Image
      src="/logo.webp"
      alt="Aero Publishing"
      width={144}
      height={48}
      priority
      className={`h-10 w-auto sm:h-12 ${className}`}
    />
  );
}
