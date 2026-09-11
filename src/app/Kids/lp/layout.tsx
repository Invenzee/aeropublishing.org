import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Children's LP",
  description:
    "Publish your children's book with Aero Publishing. Custom illustration, editing, formatting, and global distribution for picture books, early readers, and chapter books.",
  keywords: [
    "children's book publishing",
    "children's book illustration",
    "picture book publishing",
    "kids book publisher",
    "self publish children's book",
    "Aero Publishing",
  ],
  alternates: {
    canonical: "https://aeropublishing.org/Kids/lp",
  },
  openGraph: {
    title: "Children's LP",
    description:
      "Turn your story into a beautifully illustrated children's book with Aero Publishing. Expert illustration, editing, and publishing support for young readers.",
    type: "website",
    url: "https://aeropublishing.org/Kids/lp",
    siteName: "Aero Publishing",
  },
};

export default function ChildrensBookLpLayout({
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
