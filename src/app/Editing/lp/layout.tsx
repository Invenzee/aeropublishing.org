import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editing LP",
  description:
    "Professional book editing and proofreading from Aero Publishing. Developmental editing, line and copy editing, and precision proofreading that keep your author voice intact.",
  keywords: [
    "book editing services",
    "manuscript editing",
    "proofreading services",
    "developmental editing",
    "line editing",
    "copy editing",
    "Aero Publishing",
  ],
  alternates: {
    canonical: "https://aeropublishing.org/Editing/lp",
  },
  openGraph: {
    title: "Editing LP",
    description:
      "Genre specialist editors, line by line precision, and on time delivery. Publish with confidence through Aero Publishing book editing services.",
    type: "website",
    url: "https://aeropublishing.org/Editing/lp",
    siteName: "Aero Publishing",
  },
};

export default function BookEditingLpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lp-standalone min-h-screen overflow-x-clip bg-white text-[#111] font-sans">
      {children}
    </div>
  );
}
