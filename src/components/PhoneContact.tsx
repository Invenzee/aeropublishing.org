import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ButtonVariant } from "@/components/ui/Button";
import { SITE_PHONES } from "@/lib/site-contact";

type PhoneLinksProps = {
  variant?: "inline" | "stack";
  className?: string;
  linkClassName?: string;
  showRegion?: boolean;
};

/** Inline or stacked text links (footer, policies, popup). */
export function PhoneLinks({
  variant = "inline",
  className = "",
  linkClassName = "",
  showRegion = false,
}: PhoneLinksProps) {
  const Wrapper = variant === "stack" ? "div" : "span";

  return (
    <Wrapper className={className}>
      {SITE_PHONES.map((phone, index) => (
        <span key={phone.region} className={variant === "stack" ? "block" : undefined}>
          {variant === "inline" && index > 0 ? (
            <span className="mx-1.5 opacity-70">|</span>
          ) : null}
          <a href={phone.href} className={linkClassName}>
            {showRegion ? `${phone.region}: ` : ""}
            {phone.display}
          </a>
        </span>
      ))}
    </Wrapper>
  );
}

type PhoneCallButtonsProps = {
  variant?: ButtonVariant;
  className?: string;
  buttonClassName?: string;
  fullWidth?: boolean;
};

/** Paired call CTAs for heroes and sections. */
export function PhoneCallButtons({
  variant = "secondary",
  className = "flex flex-wrap gap-3 sm:gap-4",
  buttonClassName = "",
  fullWidth = false,
}: PhoneCallButtonsProps) {
  return (
    <div className={className}>
      {SITE_PHONES.map((phone) => (
        <Button
          key={phone.region}
          href={phone.href}
          variant={variant}
          fullWidth={fullWidth}
          className={buttonClassName}
        >
          <Phone className="size-4 shrink-0" />
          <span className="whitespace-nowrap">{phone.display}</span>
        </Button>
      ))}
    </div>
  );
}
