import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tilemaster.co.kr"),
  title: "타일마스터 | 욕실·주방·상가·베란다·현관 타일 시공",
  description: "증평·청주·괴산·음성·진천·보은·충주·제천·세종·대전 타일 시공·보수 및 욕실 리모델링. 슬아타일 직접 시공, 무료 사진견적.",
  alternates: { canonical: "/" },
  verification: {
    google: "PuIk9LbEQfgRZjlj3Q9TaecP5ab7zowB_ntM0FGjgZg",
    other: { "naver-site-verification": "e94352012ae2fc6f32414c796ae538814fa8a540" },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "타일마스터",
    title: "타일마스터 | 현장에 맞춘 타일 시공·보수",
    description: "욕실·주방·상가·베란다·현관까지. 무료 사진상담과 방문견적.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "타일마스터 슬아타일 타일 시공 및 보수" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "타일마스터 | 현장에 맞춘 타일 시공·보수",
    description: "욕실·주방·상가·베란다·현관까지. 무료 사진상담과 방문견적.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "타일마스터",
    alternateName: "슬아타일",
    url: "https://tilemaster.co.kr",
    telephone: "+82-10-3446-4858",
    description: "욕실, 주방, 상가, 베란다, 현관 타일 시공 및 보수",
    areaServed: ["증평군", "청주시", "괴산군", "음성군", "진천군", "보은군", "충주시", "제천시", "세종특별자치시", "대전광역시"],
  };

  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
