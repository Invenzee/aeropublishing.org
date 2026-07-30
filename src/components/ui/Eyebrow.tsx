type EyebrowProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Eyebrow({
  children,
  align = "left",
  className = "",
}: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <span aria-hidden className="h-px w-6 bg-secondary" />
      {children}
    </p>
  );
}
