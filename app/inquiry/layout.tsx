import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "타일 시공 무료 사진견적 | 타일마스터";
const description = "타일 시공·부분 보수·욕실 리모델링 무료 견적 상담. 작업 종류와 지역, 연락받을 번호를 남겨주세요. 현장 사진은 선택이며 정확한 금액은 현장 확인 후 안내합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/inquiry" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/inquiry",
    siteName: "타일마스터",
    title,
    description,
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "타일마스터 무료 사진 견적 상담" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function InquiryLayout({ children }: { children: ReactNode }) {
  return children;
}
