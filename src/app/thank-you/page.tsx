import type { Metadata } from "next";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Aero Publishing",
  description:
    "Your message has reached Aero Publishing. Our publishing experts will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouClient />;
}
