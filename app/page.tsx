"use client";

export default function Home() {
  const services = [
    { icon: "🚿", title: "화장실 리모델링", desc: "철거부터 마감까지 전체 시공" },
    { icon: "🧱", title: "타일 시공", desc: "욕실·주방·베란다·현관 등 모든 공간" },
    { icon: "🔧", title: "타일 하자 보수", desc: "깨짐·들뜸·줄눈 문제 정확하게 보수" },
    { icon: "💧", title: "수전 교체", desc: "세면대·샤워기·주방 수전 전문" },
    { icon: "🏠", title: "천정돔 시공", desc: "방수 천정 단단하게 마감" },
    { icon: "🍳", title: "주방 타일 시공", desc: "싱크대 벽면·바닥 타일" },
    { icon: "🏪", title: "상가 타일", desc: "영업 일정에 맞춘 시공" },
    { icon: "🌿", title: "베란다 · 현관 타일", desc: "공간에 맞는 자재와 마감" },
  ];

  const promises = [
    "현장 사진 확인 후 예상 견적 안내",
    "작업 범위와 추가 비용 사전 설명",
    "철거 필요 여부 정확히 확인",
    "자재 선택과 시공 방식 상담",
    "시공 후 하자 상담 가능",
  ];

  const regions = [
    "충청도 전지역 (대전 · 세종 · 천안 · 청주 등)",
    "경기 남부 (안산 · 용인 · 수원 · 평택 등)",
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
              {regions.map((r) => (
                <p key={r}>{r}</p>
              ))}
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
            <p className="text-center text-gray-500 mb-8">
              타일과 관련된 거의 모든 작업이 가능합니다
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

          {/* 신뢰 약속 */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              작업 전 약속드립니다
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

          {/* 시공 사례 자리 (사진 추가 예정) */}
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
              시공 사례
            </h2>
            <p className="text-center text-gray-500 mb-8">
              실제 시공한 현장들입니다
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
