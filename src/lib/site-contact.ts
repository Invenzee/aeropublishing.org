export const US_PHONE_DISPLAY = "(424) 282-3304";
export const US_PHONE_TEL = "+14242823304";
export const US_PHONE_HREF = `tel:${US_PHONE_TEL}`;

export type SitePhone = {
  region: "US";
  display: string;
  tel: string;
  href: string;
};

export const SITE_PHONES: SitePhone[] = [
  { region: "US", display: US_PHONE_DISPLAY, tel: US_PHONE_TEL, href: US_PHONE_HREF },
];
