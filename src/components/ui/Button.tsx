import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "secondary-on-primary" | "light";

type ButtonProps = {
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-hover btn-hover-primary",
  secondary: "btn-hover btn-hover-secondary",
  "secondary-on-primary": "btn-hover btn-hover-secondary-on-primary",
  light: "btn-hover btn-hover-light",
};

const baseStyles = "rounded-lg px-6 py-3.5 text-sm font-semibold";

function isExternalHref(href: string) {
  return (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://")
  );
}

export default function Button({
  href,
  type = "button",
  variant = "primary",
  children,
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const classes = `${baseStyles} ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`;
  const content = <span className="btn-hover-content">{children}</span>;

  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
