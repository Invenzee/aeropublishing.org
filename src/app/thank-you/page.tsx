import type { Metadata } from "next";
import Script from "next/script";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Aero Publishing",
  description:
    "Your message has reached Aero Publishing. Our publishing experts will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <Script id="bing-uet-pid">
        {`
          window.uetq = window.uetq || [];
          window.uetq.push('set', { 'pid': {
            'em': 'info@aeropublishing.org',
            'ph': '+1 424 282 3304',
          } });
        `}
      </Script>
      <ThankYouClient />
    </>
  );
}
