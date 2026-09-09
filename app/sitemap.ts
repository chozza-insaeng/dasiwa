import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tilemaster.co.kr", changeFrequency: "weekly", priority: 1 },
    { url: "https://tilemaster.co.kr/inquiry", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://tilemaster.co.kr/gallery", changeFrequency: "monthly", priority: 0.7 },
  ];
}
