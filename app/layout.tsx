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
  description: "충청도 전지역·경기 남부 타일 시공 및 보수. 욕실, 주방, 상가, 베란다, 현관까지 현장에 맞춰 슬아타일이 직접 상담·시공합니다. 무료 사진상담과 방문견적.",
  alternates: { canonical: "/" },
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
    areaServed: ["충청도", "경기 남부"],
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
