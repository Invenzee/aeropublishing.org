"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadPopupLoader from "@/components/LeadPopupLoader";

const STANDALONE_LP_PREFIXES = [
  "/cookbook/lp",
  "/kids/lp",
  "/editing/lp",
  "/self-publishing/lp",
];

function isStandaloneLp(pathname: string | null) {
  const path = pathname?.toLowerCase() ?? "";
  return STANDALONE_LP_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (isStandaloneLp(pathname)) {
    return <>{children}</>;
  }

  const hideLeadPopup = pathname?.toLowerCase() === "/thank-you";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      {hideLeadPopup ? null : <LeadPopupLoader />}
    </>
  );
}
