type ImagePlaceholderProps = {
  label: string;
  /** `dark` for placement on light backgrounds, `light` for placement on dark backgrounds. */
  tone?: "dark" | "light";
  className?: string;
};

const toneStyles = {
  dark: "border-primary/25 bg-primary/5 text-primary/60",
  light: "border-white/30 bg-white/10 text-white/70",
} as const;

export default function ImagePlaceholder({
  label,
  tone = "dark",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <span
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex items-center justify-center border border-dashed px-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] ${toneStyles[tone]} ${className}`}
    >
      {label}
    </span>
  );
}
