"use client";

import Link from "next/link";
import Image from "next/image";

const phoneDisplay = "010-3446-4858";
const phoneHref = "tel:01034464858";

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://tilemaster.co.kr/#website",
  name: "타일마스터",
  alternateName: "슬아타일",
  url: "https://tilemaster.co.kr/",
};

const services = [
  { title: "욕실", desc: "욕실 전체 리모델링, 타일 덧방, 도기·수전 교체" },
  { title: "주방", desc: "싱크대 벽면·바닥 타일과 부분 보수" },
  { title: "상가", desc: "영업 일정과 동선을 고려한 바닥·벽 타일 시공" },
  { title: "베란다", desc: "들뜸·깨짐 보수부터 바닥 타일 전체 시공" },
  { title: "현관", desc: "공간과 현장 상태에 맞춘 타일 교체·보수" },
  { title: "하자 보수", desc: "깨짐, 들뜸, 줄눈 등 필요한 부분만 정확히 보수" },
];

const trustPoints = [
  ["직접 상담 · 직접 시공", "상담부터 현장 확인, 시공까지 슬아타일이 직접 진행합니다."],
  ["확정 견적 후 추가비용 없음", "현장을 확인하고 작업 범위를 정한 뒤 정확한 금액을 안내합니다."],
  ["47개 현장 사진 공개", "말보다 실제 시공 결과를 먼저 확인하실 수 있습니다."],
  ["시공 후 하자 상담", "공사가 끝난 뒤에도 불편한 점을 상담해드립니다."],
];

const featuredPhotos = [
  "/tile-09.jpg",
  "/tile-16.jpg",
  "/tile-19.jpg",
  "/tile-25.jpg",
  "/tile-33.jpg",
  "/tile-47.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-stone-50 pb-20 text-stone-950 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 bg-stone-950/35 text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-lg font-black tracking-tight">타일마스터</p>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-white/70">TILE &amp; REMODELING</p>
          </div>
          <a
            href={phoneHref}
            className="rounded-full border border-white/60 px-4 py-2 text-sm font-bold transition hover:bg-white hover:text-stone-950"
            aria-label={`${phoneDisplay}로 전화 상담`}
          >
            전화 상담 {phoneDisplay}
          </a>
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-stone-900 text-white sm:min-h-[820px]">
        <Image
          src="/tile-09.jpg"
          alt="슬아타일 욕실 타일 시공 현장"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20" />

        <div className="mx-auto flex min-h-[760px] max-w-6xl items-center px-5 pb-16 pt-28 sm:min-h-[820px] sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              증평·청주 등 10개 지역 무료 상담
            </div>

            <p className="mb-4 text-sm font-black tracking-[0.22em] text-amber-300">현장에 맞춰, 필요한 만큼 정확하게</p>
            <h1 className="text-balance text-4xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              욕실부터 주방·상가·<br className="hidden sm:block" />베란다·현관까지
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/90 sm:text-2xl">
              타일 시공과 부분 보수, 철거부터 마감까지.<br />
              슬아타일이 직접 확인하고 끝까지 책임집니다.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <Link
                href="/inquiry"
                className="group flex min-h-16 items-center justify-center rounded-xl bg-amber-400 px-6 py-4 text-base font-black text-stone-950 shadow-xl transition hover:bg-amber-300"
              >
                사진으로 무료 견적받기
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href={phoneHref}
                className="flex min-h-16 items-center justify-center rounded-xl border-2 border-white bg-white/10 px-6 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white hover:text-stone-950"
              >
                지금 전화 상담
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-white/85">
              <span>✓ 사진상담 무료</span>
              <span>✓ 방문견적 무료</span>
              <span>✓ 직접 상담·시공</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-3">
          <div className="border-b border-stone-200 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs font-black tracking-[0.18em] text-amber-700">대표 욕실 시공가</p>
            <p className="mt-2 text-3xl font-black">225만원부터</p>
            <p className="mt-1 text-sm font-medium text-stone-500">안방 욕실 · 덧방 기준</p>
          </div>
          <div className="border-b border-stone-200 p-6 sm:border-b-0 sm:border-r">
            <p className="text-xs font-black tracking-[0.18em] text-amber-700">기본 포함</p>
            <p className="mt-2 text-lg font-black">철거 · 타일 · 세면대 · 양변기</p>
            <p className="mt-1 text-sm font-medium text-stone-500">현장 상태에 따라 범위 확인</p>
          </div>
          <div className="p-6">
            <p className="text-xs font-black tracking-[0.18em] text-amber-700">정확한 견적</p>
            <p className="mt-2 text-lg font-black">현장 확인 후 금액 확정</p>
            <p className="mt-1 text-sm font-medium text-stone-500">확정 뒤에는 안내 없는 추가비용 없음</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.2em] text-amber-700">시공 분야</p>
            <h2 className="mt-3 text-balance text-3xl font-black tracking-tight sm:text-5xl">
              화장실만 하는 타일 업체가 아닙니다
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-stone-600">
              욕실 · 주방 · 상가 · 베란다 · 현관까지, 현장을 먼저 보고 전체 시공과 필요한 부분 보수를 나눠 안내합니다.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-xs font-black tracking-[0.2em] text-amber-700">0{index + 1}</span>
                <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
                <p className="mt-3 font-medium leading-relaxed text-stone-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black tracking-[0.2em] text-amber-300">왜 슬아타일인가요?</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">전화하기 전에<br />불안한 것부터 줄였습니다</h2>
            <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-white/65">
              가격이 더 붙을까, 누가 시공할까, 끝난 뒤에도 연락이 될까. 고객이 가장 걱정하는 부분을 먼저 설명합니다.
            </p>
          </div>
          <div className="divide-y divide-white/15 border-y border-white/15">
            {trustPoints.map(([title, desc], index) => (
              <div key={title} className="grid gap-2 py-6 sm:grid-cols-[56px_1fr] sm:gap-4">
                <span className="font-black text-amber-300">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-2 font-medium leading-relaxed text-white/65">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-amber-700">실제 시공 사례</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">결과를 사진으로 확인하세요</h2>
              <p className="mt-4 text-lg font-medium text-stone-600">실제 현장 47곳의 시공 사진을 공개합니다.</p>
            </div>
            <Link href="/gallery" className="font-black text-stone-900 underline decoration-amber-400 decoration-4 underline-offset-8">
              전체 시공사진 보기 →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {featuredPhotos.map((src, index) => (
              <Link key={src} href="/gallery" className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-stone-200">
                <Image
                  src={src}
                  alt={`슬아타일 실제 시공 사례 ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 to-transparent p-4 pt-12 text-xs font-black tracking-[0.18em] text-white">
                  실제 현장 {String(index + 1).padStart(2, "0")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-amber-400 p-8 sm:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-stone-700">상담은 어렵지 않습니다</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">현장 사진과 지역만 알려주세요</h2>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-stone-800">
                욕실·주방·상가·베란다·현관 어디든 괜찮습니다. 사진을 보고 가능한 작업과 다음 절차부터 안내해드립니다.
              </p>
            </div>
            <div className="flex min-w-64 flex-col gap-3">
              <Link href="/inquiry" className="rounded-xl bg-stone-950 px-7 py-4 text-center text-base font-black text-white transition hover:bg-stone-800">
                무료 견적 요청하기
              </Link>
              <a href={phoneHref} className="rounded-xl border-2 border-stone-950 px-7 py-4 text-center text-base font-black text-stone-950 transition hover:bg-white">
                {phoneDisplay} 전화
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xl font-black">타일마스터</p>
            <p className="mt-1 text-xs font-bold tracking-[0.12em] text-amber-700">슬아타일 직접 시공</p>
            <p className="mt-2 text-sm font-medium text-stone-500">욕실 · 주방 · 상가 · 베란다 · 현관 타일 시공 및 보수</p>
            <p className="mt-1 text-sm font-medium text-stone-500">출장 상담 지역: 증평 · 청주 · 괴산 · 음성 · 진천 · 보은 · 충주 · 제천 · 세종 · 대전</p>
          </div>
          <a href={phoneHref} className="text-lg font-black text-stone-950">{phoneDisplay}</a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-stone-200 bg-white p-2 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] md:hidden">
        <a href={phoneHref} className="flex min-h-14 items-center justify-center rounded-lg text-sm font-black text-stone-950">
          전화 상담
        </a>
        <Link href="/inquiry" className="flex min-h-14 items-center justify-center rounded-lg bg-amber-400 text-sm font-black text-stone-950">
          사진 견적받기
        </Link>
      </div>
    </main>
  );
}
