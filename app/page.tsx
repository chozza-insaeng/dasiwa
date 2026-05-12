"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { num: "01", title: "화장실 리모델링", desc: "철거부터 마감까지 전체 시공" },
    { num: "02", title: "욕실 타일 시공", desc: "벽·바닥 타일 시공과 줄눈 마감" },
    { num: "03", title: "주방 타일 시공", desc: "싱크대 벽면·바닥 타일" },
    { num: "04", title: "베란다 · 현관 타일", desc: "공간에 맞는 자재와 마감" },
    { num: "05", title: "상가 · 매장 타일", desc: "영업 일정에 맞춘 빠른 시공" },
    { num: "06", title: "타일 하자 보수", desc: "깨짐·들뜸·줄눈 문제 보수" },
    { num: "07", title: "수전 교체", desc: "세면대·샤워기·주방 수전" },
    { num: "08", title: "천정돔 시공", desc: "방수 천정 단단한 마감" },
    { num: "09", title: "싱크대 전체 시공", desc: "협력 업체와 함께 진행" },
  ];

  const promises = [
    { num: "01", text: "현장 사진 확인 후 예상 견적 안내" },
    { num: "02", text: "작업 범위와 추가 비용 사전 설명" },
    { num: "03", text: "철거 필요 여부 정확히 확인" },
    { num: "04", text: "자재 선택과 시공 방식 상담" },
    { num: "05", text: "시공 후 하자 상담 가능" },
  ];

  const featuredPhotos = [
    "/tile-09.jpg",
    "/tile-16.jpg",
    "/tile-19.jpg",
    "/tile-25.jpg",
    "/tile-33.jpg",
    "/tile-47.jpg",
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      
      {/* 풀스크린 히어로 */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: mounted ? `translateY(${scrollY * 0.4}px)` : "none",
          }}
        >
          <img
            src="/tile-09.jpg"
            alt="타일 시공"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* 상단 미니 네비 */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-12 py-6 flex justify-between items-center text-xs sm:text-sm tracking-[0.2em] uppercase">
          <span className="text-white/90 font-light">Tile Master</span>
          <span className="text-white/70 font-light hidden sm:block">EST. 2024</span>
        </div>

        {/* 히어로 콘텐츠 */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="text-xs sm:text-sm tracking-[0.5em] text-teal-300 font-light mb-8 uppercase">
            Premium Tile Craft
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-light text-white mb-8 leading-[1.05] tracking-tight">
            끝까지 책임지는
            <br />
            <span className="italic font-extralight">타일 시공</span>
          </h1>
          <div className="w-16 h-px bg-teal-400 mx-auto mb-8" />
          <p className="text-base sm:text-lg text-white/80 font-light tracking-wide leading-relaxed max-w-xl mx-auto">
            철거부터 마감까지, 시공 후 하자까지.
            <br />
            현장 사진 한 장으로 시작합니다.
          </p>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.3em] uppercase">
            <span>Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* 시공 가능 지역 */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-teal-400 mb-6 uppercase">Service Area</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-light mb-10 tracking-wide">
            시공 가능 지역
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#0f0f0f] p-8 sm:p-10">
              <p className="text-teal-300 text-xs tracking-[0.3em] uppercase mb-3">Chungcheong</p>
              <p className="text-white text-base sm:text-lg font-light leading-relaxed">
                충청도 전지역<br />
                대전 · 세종 · 천안 · 청주
              </p>
            </div>
            <div className="bg-[#0f0f0f] p-8 sm:p-10">
              <p className="text-teal-300 text-xs tracking-[0.3em] uppercase mb-3">Gyeonggi South</p>
              <p className="text-white text-base sm:text-lg font-light leading-relaxed">
                경기 남부<br />
                평택 · 용인 · 안산 · 수원
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 행동 버튼 */}
      <section className="relative py-16 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => (window.location.href = "/inquiry")}
              className="flex-1 group px-8 py-6 bg-white text-[#0a0a0a] rounded-none font-light text-sm sm:text-base tracking-[0.2em] uppercase hover:bg-teal-400 transition-all duration-500"
            >
              사진 보내고 견적 받기
              <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button
              onClick={() => (window.location.href = "tel:01034464858")}
              className="flex-1 group px-8 py-6 bg-transparent text-white border border-white/30 rounded-none font-light text-sm sm:text-base tracking-[0.2em] uppercase hover:border-teal-400 hover:text-teal-400 transition-all duration-500"
            >
              010-3446-4858 전화
              <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 시공 분야 */}
      <section className="relative py-24 sm:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 sm:mb-20 text-center">
            <p className="text-xs tracking-[0.4em] text-teal-400 mb-6 uppercase">Services</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-6 tracking-tight">
              시공 분야
            </h2>
            <div className="w-16 h-px bg-teal-400 mx-auto mb-6" />
            <p className="text-white/60 font-light leading-relaxed max-w-xl mx-auto">
              욕실 · 주방 · 상가 · 베란다 · 현관까지<br />
              현장 상황에 맞춰 철거, 시공, 보수 작업을 진행합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[#0a0a0a] p-8 sm:p-10 hover:bg-[#111] transition-all duration-500 cursor-default"
              >
                <p className="text-xs tracking-[0.3em] text-teal-400/60 mb-6 font-light">
                  {s.num}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {s.desc}
                </p>
                <div className="w-8 h-px bg-teal-400/30 mt-8 group-hover:w-16 group-hover:bg-teal-400 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 견적 전 안내 */}
      <section className="relative py-24 sm:py-32 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.4em] text-teal-400 mb-6 uppercase">Promise</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white mb-6 tracking-tight leading-tight">
              견적 전<br />
              꼭 확인하고 안내드립니다
            </h2>
            <div className="w-16 h-px bg-teal-400 mx-auto" />
          </div>

          <div className="space-y-px bg-white/5">
            {promises.map((p) => (
              <div
                key={p.num}
                className="group bg-[#0f0f0f] p-8 sm:p-10 flex items-start gap-6 sm:gap-10 hover:bg-[#151515] transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-serif font-extralight text-teal-400/70 flex-shrink-0">
                  {p.num}
                </span>
                <p className="text-white/90 font-light text-base sm:text-lg leading-relaxed pt-1">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시공 사례 갤러리 */}
      <section className="relative py-24 sm:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs tracking-[0.4em] text-teal-400 mb-6 uppercase">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-6 tracking-tight">
              시공 사례
            </h2>
            <div className="w-16 h-px bg-teal-400 mx-auto mb-6" />
            <p className="text-white/60 font-light leading-relaxed">
              실제 시공한 현장 47곳의 사진을 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-12">
            {featuredPhotos.map((src, i) => (
              <div
                key={src}
                className="group aspect-[4/5] bg-black overflow-hidden cursor-pointer relative"
                onClick={() => (window.location.href = "/gallery")}
              >
                <img
                  src={src}
                  alt={`타일 시공 사례 ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-xs text-white/60 tracking-[0.3em] uppercase mb-1 font-light">
                    Project {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => (window.location.href = "/gallery")}
              className="group px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase font-light hover:border-teal-400 hover:text-teal-400 transition-all"
            >
              전체 시공 사례 보기
              <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 하단 콜투액션 */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-teal-400 mb-6 uppercase">Get a Quote</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white mb-8 tracking-tight leading-tight">
            지금 바로<br />
            견적 받으세요
          </h2>
          <div className="w-16 h-px bg-teal-400 mx-auto mb-8" />
          <p className="text-white/60 font-light mb-12 leading-relaxed max-w-xl mx-auto">
            현장 사진과 간단한 정보만 보내주시면<br />
            빠르게 연락드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button
              onClick={() => (window.location.href = "/inquiry")}
              className="group px-8 py-5 bg-white text-[#0a0a0a] text-xs tracking-[0.3em] uppercase font-medium hover:bg-teal-400 transition-all"
            >
              사진 견적
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={() => (window.location.href = "tel:01034464858")}
              className="group px-8 py-5 bg-transparent border border-white/30 text-white text-xs tracking-[0.3em] uppercase font-medium hover:border-teal-400 hover:text-teal-400 transition-all"
            >
              바로 전화
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black border-t border-white/10 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <p className="text-xs tracking-[0.5em] text-teal-400 uppercase">Tile Master</p>
            <div className="w-12 h-px bg-white/20 mx-auto" />
            <p className="text-white font-serif text-2xl font-light">타일 마스터</p>
            <div className="space-y-2 text-white/50 text-sm font-light pt-4">
              <p>타일 시공 문의 · <span className="text-teal-400">010-3446-4858</span></p>
              <p>시공 가능 지역 · 충청도 전지역 · 경기 남부</p>
            </div>
            <p className="text-xs text-white/30 font-light pt-8 tracking-wider">
              © 2026 TILE MASTER · ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
