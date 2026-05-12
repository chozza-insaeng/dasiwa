"use client";

export default function Home() {
  const services = [
    { icon: "🚿", title: "화장실 리모델링", desc: "철거부터 마감까지 전체 시공" },
    { icon: "🧱", title: "욕실 타일 시공", desc: "벽·바닥 타일 시공과 줄눈 마감" },
    { icon: "🍳", title: "주방 타일 시공", desc: "싱크대 벽면·바닥 타일" },
    { icon: "🌿", title: "베란다 · 현관 타일", desc: "공간에 맞는 자재와 마감" },
    { icon: "🏪", title: "상가 · 매장 타일", desc: "영업 일정에 맞춘 빠른 시공" },
    { icon: "🔧", title: "타일 하자 보수", desc: "깨짐·들뜸·줄눈 문제 보수" },
    { icon: "💧", title: "수전 교체", desc: "세면대·샤워기·주방 수전" },
    { icon: "🏠", title: "천정돔 시공", desc: "방수 천정 단단한 마감" },
    { icon: "🛁", title: "싱크대 전체 시공", desc: "협력 업체와 함께 진행" },
  ];

  const promises = [
    "현장 사진 확인 후 예상 견적 안내",
    "작업 범위와 추가 비용 사전 설명",
    "철거 필요 여부 정확히 확인",
    "자재 선택과 시공 방식 상담",
    "시공 후 하자 상담 가능",
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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50/30">

      {/* 상단 미니 헤더 */}
      <div className="bg-slate-900 text-white py-2 px-6 text-center text-xs sm:text-sm">
        <span className="hidden sm:inline">📞 시공 문의 010-3446-4858 · </span>
        <span>충청도 · 경기 남부 출장 시공</span>
      </div>

      <main className="flex-1 px-6 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto">

          {/* 상단 히어로 섹션 */}
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-teal-700 font-semibold mb-6 uppercase">
              TILE MASTER · 타일 마스터
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              끝까지 책임지는<br />
              <span className="bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                타일 시공
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-2 max-w-2xl mx-auto">
              철거부터 마감까지, 시공 후 하자까지.
            </p>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              현장 사진 한 장이면 빠른 견적 안내드립니다.
            </p>
          </div>

          {/* 시공 가능 지역 */}
          <div className="rounded-3xl bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 p-6 mb-10 text-center shadow-sm">
            <p className="text-xs sm:text-sm font-bold text-teal-700 mb-3 tracking-wider">
              📍 시공 가능 지역
            </p>
            <div className="text-sm sm:text-base text-slate-700 space-y-1">
              <p>충청도 전지역 · 대전 · 세종 · 천안 · 청주</p>
              <p>경기 남부 · 평택 · 용인 · 안산 · 수원</p>
            </div>
          </div>

          {/* 메인 행동 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-20">
            <button
              onClick={() => (window.location.href = "/inquiry")}
              className="flex-1 group px-6 py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl font-semibold text-base sm:text-lg hover:from-teal-700 hover:to-teal-800 transition-all shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5"
            >
              <span className="block">📷 사진 보내고 견적 받기</span>
            </button>
            <button
              onClick={() => (window.location.href = "tel:01034464858")}
              className="flex-1 group px-6 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-semibold text-base sm:text-lg hover:border-teal-600 hover:text-teal-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="block">📞 010-3446-4858 바로 전화</span>
            </button>
          </div>

          {/* 시공 분야 */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.25em] text-teal-700 font-semibold mb-3 uppercase">
                Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                시공 분야
              </h2>
              <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
                욕실 · 주방 · 상가 · 베란다 · 현관까지<br />
                현장 상황에 맞춰 철거, 시공, 보수 작업을 진행합니다
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform" aria-hidden>
                    {s.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-snug">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 견적 전 안내 */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.25em] text-teal-700 font-semibold mb-3 uppercase">
                Promise
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                견적 전 꼭 확인하고 안내드립니다
              </h2>
              <p className="text-slate-500">
                궁금하신 점은 언제든 물어봐주세요
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <ul className="space-y-4">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <span className="text-slate-700 leading-relaxed pt-0.5">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 시공 사례 */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.25em] text-teal-700 font-semibold mb-3 uppercase">
                Portfolio
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                시공 사례
              </h2>
              <p className="text-slate-500">
                실제 시공한 현장 47곳의 사진을 확인하세요
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {featuredPhotos.map((src, i) => (
                <div
                  key={src}
                  className="group aspect-square bg-slate-100 rounded-2xl overflow-hidden cursor-pointer relative"
                  onClick={() => (window.location.href = "/gallery")}
                >
                  <img
                    src={src}
                    alt={`타일 시공 사례 ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={() => (window.location.href = "/gallery")}
                className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-300 rounded-full font-semibold hover:border-teal-600 hover:text-teal-700 transition-all hover:shadow-md"
              >
                시공 사례 보기 →
              </button>
            </div>
          </section>

          {/* 하단 행동 유도 — 임팩트 강화 */}
          <div className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 rounded-3xl p-10 sm:p-14 text-center text-white overflow-hidden mb-8 shadow-2xl">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -ml-32 -mb-32" />
            
            <div className="relative">
              <p className="text-xs tracking-[0.3em] text-teal-300 font-semibold mb-4 uppercase">
                Get a Quote
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                지금 바로 견적 받으세요
              </h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                현장 사진과 간단한 정보만 보내주시면 빠르게 연락드립니다
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
                <button
                  onClick={() => (window.location.href = "/inquiry")}
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-teal-50 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  📷 사진 보내고 견적 받기
                </button>
                <button
                  onClick={() => (window.location.href = "tel:01034464858")}
                  className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-500 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  📞 바로 전화
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-slate-900 text-slate-300 px-6 py-10">
        <div className="max-w-5xl mx-auto text-center space-y-3 text-sm">
          <p className="text-white font-bold text-lg tracking-wide">TILE MASTER · 타일 마스터</p>
          <p>타일 시공 문의: <span className="text-teal-300 font-semibold">010-3446-4858</span></p>
          <p>시공 가능 지역: 충청도 전지역 · 경기 남부</p>
          <p className="text-xs text-slate-500 pt-3 border-t border-slate-800 mt-4">
            © 2026 Tile Master. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
