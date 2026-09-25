export const US_PHONE_DISPLAY = "(424) 282-3304";
export const US_PHONE_TEL = "+14242823304";
export const US_PHONE_HREF = `tel:${US_PHONE_TEL}`;

export const UK_PHONE_DISPLAY = "+44 020 3314 8312";
export const UK_PHONE_TEL = "+442033148312";
export const UK_PHONE_HREF = `tel:${UK_PHONE_TEL}`;

export type SitePhone = {
  region: "US" | "UK";
  display: string;
  tel: string;
  href: string;
};

export const SITE_PHONES: SitePhone[] = [
  { region: "US", display: US_PHONE_DISPLAY, tel: US_PHONE_TEL, href: US_PHONE_HREF },
  { region: "UK", display: UK_PHONE_DISPLAY, tel: UK_PHONE_TEL, href: UK_PHONE_HREF },
];
