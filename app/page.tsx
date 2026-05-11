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

  const portfolios = [
    {
      title: "욕실 타일 시공",
      desc: "기존 타일 철거 후 포세린 타일 시공, 배수 구배 조정, 줄눈 마감까지",
    },
    {
      title: "주방 타일 시공",
      desc: "싱크대 벽면 타일 교체, 오염 방지 마감 처리",
    },
    {
      title: "상가 바닥 타일",
      desc: "영업 일정에 맞춘 단기 시공, 단차 보정 및 마감 처리",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50">
      <main className="flex-1 px-6 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">

          {/* 상단 헤드라인 */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-teal-600 font-medium mb-4">
              TILE MASTER · 타일 마스터
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              끝까지 책임지는<br />
              <span className="text-teal-600">타일 시공</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-2">
              철거부터 마감까지, 시공 후 하자까지.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              현장 사진 한 장이면 빠른 견적 안내드립니다.
            </p>
          </div>

          {/* 시공 가능 지역 */}
          <div className="rounded-2xl bg-teal-50 border border-teal-200 p-5 mb-10 text-center">
            <p className="text-sm font-semibold text-teal-700 mb-2">
              📍 시공 가능 지역
            </p>
            <div className="text-sm text-gray-700 space-y-1">
              <p>충청도 전지역 · 대전 · 세종 · 천안 · 청주</p>
              <p>경기 남부 · 평택 · 용인 · 안산 · 수원</p>
            </div>
          </div>

          {/* 큰 행동 버튼 두 개 */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button
              onClick={() => (window.location.href = "/inquiry")}
              className="flex-1 px-6 py-4 bg-teal-600 text-white rounded-2xl font-semibold text-lg hover:bg-teal-700 transition-colors shadow-md"
            >
              📷 사진 보내고 견적 받기
            </button>
            <button
              onClick={() => (window.location.href = "tel:01034464858")}
              className="flex-1 px-6 py-4 bg-white text-teal-700 border-2 border-teal-600 rounded-2xl font-semibold text-lg hover:bg-teal-50 transition-colors shadow-md"
            >
              📞 010-3446-4858 바로 전화
            </button>
          </div>

          {/* 시공 분야 */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              시공 분야
            </h2>
            <p className="text-center text-gray-500 mb-8 leading-relaxed">
              욕실 · 주방 · 상가 · 베란다 · 현관까지<br />
              현장 상황에 맞춰 철거, 시공, 보수 작업을 진행합니다
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white border border-teal-100 p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-2" aria-hidden>
                    {s.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-snug">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 견적 전 안내 */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              견적 전 꼭 확인하고 안내드립니다
            </h2>
            <p className="text-center text-gray-500 mb-8">
              궁금하신 점은 언제든 물어봐주세요
            </p>
            <div className="bg-white rounded-2xl border border-teal-100 p-6 shadow-sm">
              <ul className="space-y-3">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 시공 사례 */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              시공 사례
            </h2>
            <p className="text-center text-gray-500 mb-8">
              실제 시공한 현장 사례입니다
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolios.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-teal-50 to-slate-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">사진 준비 중</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 하단 행동 유도 */}
          <div className="bg-teal-600 rounded-2xl p-8 text-center text-white mb-8">
            <h2 className="text-2xl font-bold mb-3">
              지금 바로 견적 받으세요
            </h2>
            <p className="text-teal-100 mb-6">
              현장 사진과 간단한 정보만 보내주시면 빠르게 연락드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => (window.location.href = "/inquiry")}
                className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
              >
                📷 사진 보내고 견적 받기
              </button>
              <button
                onClick={() => (window.location.href = "tel:01034464858")}
                className="px-6 py-3 bg-teal-800 text-white rounded-xl font-semibold hover:bg-teal-900 transition-colors"
              >
                📞 010-3446-4858 바로 전화
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <footer className="px-6 py-8 border-t border-teal-100/60 bg-white">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 space-y-2">
          <p className="font-semibold text-gray-700">TILE MASTER · 타일 마스터</p>
          <p>타일 시공 문의: 010-3446-4858</p>
          <p>시공 가능 지역: 충청도 전지역 · 경기 남부</p>
          <p className="text-xs text-gray-400 pt-2">© 2026 Tile Master. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
