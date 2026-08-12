import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://tilemaster.co.kr", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://tilemaster.co.kr/inquiry", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://tilemaster.co.kr/gallery", lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
