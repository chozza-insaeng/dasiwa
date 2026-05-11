"use client";

export default function Home() {
  const promises = [
    { icon: "🔧", title: "약속 챙기기", desc: "시공·A/S 약속이 흐트러지지 않도록." },
    { icon: "📅", title: "일정 채우기", desc: "비어버린 시간도 매출이 되도록." },
    { icon: "🤝", title: "다시 부르기", desc: "한 번 만난 고객이 다시 찾도록." },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50">
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm tracking-widest text-teal-600 font-medium mb-4">
            TILE MASTER · 타일 마스터
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 whitespace-nowrap">
            Welcome to <span className="text-teal-600">타일 마스터</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            1인 타일 시공자를 위한 의뢰·고객 관리 도구.
            <br />
            매일의 운영을, 조금 더 단단하게.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {promises.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white/70 backdrop-blur border border-teal-100 p-5 shadow-sm"
              >
                <div className="text-3xl mb-2" aria-hidden>
                  {p.icon}
                </div>
                <h2 className="text-base font-semibold text-gray-900 mb-1">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-500 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => (window.location.href = "/inquiry")}
              className="flex-1 px-6 py-4 bg-teal-600 text-white rounded-2xl font-semibold text-lg hover:bg-teal-700 transition-colors shadow-md"
            >
              📝 의뢰 문의 보내기
            </button>
            <button
              onClick={() => (window.location.href = "tel:01034464858")}
              className="flex-1 px-6 py-4 bg-white text-teal-700 border-2 border-teal-600 rounded-2xl font-semibold text-lg hover:bg-teal-50 transition-colors shadow-md"
            >
              📞 바로 전화 010-3446-4858
            </button>
          </div>

          <p className="text-xs text-gray-400">
            v0.2 · 1인 타일 시공자를 위한 의뢰·고객 관리 도구
          </p>
        </div>
      </main>
      <footer className="px-6 py-8 border-t border-teal-100/60">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 text-xs text-gray-500">
          <p>© 2026 타일 마스터</p>
          <p>Made with <span className="text-teal-600">❤️</span> by chozza-insaeng</p>
          <p>Day 1 launched on 2026-05-11</p>
          <p className="text-gray-400">v0.2</p>
        </div>
      </footer>
    </div>
  );
}
