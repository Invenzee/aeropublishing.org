import type { MetadataRoute } from "next";

const SITE_URL = "https://aeropublishing.org";

const ROUTES: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-publishing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/book-editing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/book-marketing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ghost-writing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-cover-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-formatting", changeFrequency: "monthly", priority: 0.8 },
  { path: "/book-printing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/proof-reading", changeFrequency: "monthly", priority: 0.8 },
  { path: "/children-book", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ebook-writing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/fiction-writing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/audio-book-narration", changeFrequency: "monthly", priority: 0.7 },
  { path: "/authors-website", changeFrequency: "monthly", priority: 0.7 },
  { path: "/video-trailer", changeFrequency: "monthly", priority: 0.7 },
  { path: "/Cookbook/lp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/Kids/lp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/Editing/lp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/self-publishing/lp", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/return-and-refund-policies", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
