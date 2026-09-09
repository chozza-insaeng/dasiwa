import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "타일 시공 사례 | 타일마스터";
const description = "욕실·주방·상가·베란다·현관 타일 시공과 보수 현장 사진을 확인하세요. 슬아타일 직접 상담·시공, 무료 사진견적을 안내합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/gallery",
    siteName: "타일마스터",
    title,
    description,
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "타일마스터 타일 시공 사례" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children;
}
