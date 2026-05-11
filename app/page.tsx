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
          <p className="text-xs text-gray-400">
            v0.1 · 첫 페이지가 켜졌습니다. 여기서부터 시작해요.
          </p>
        </div>
      </main>
      <footer className="px-6 py-8 border-t border-teal-100/60">
        <div className="max-w-2xl mx-auto text-center space-y-1.5 text-xs text-gray-500">
          <p>© 2026 타일 마스터</p>
          <p>
            Made with <span className="text-teal-600">❤️</span> by{" "}
            
              href="https://github.com/chozza-insaeng"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              chozza-insaeng
            </a>
          </p>
          <p>Day 1 launched on 2026-05-11</p>
          <p className="text-gray-400">v0.1</p>
          <p className="pt-2">
            
              href="https://github.com/chozza-insaeng/dasiwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub 저장소 열기"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-teal-600 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.03 11.03 0 012.9-.39c.98.01 1.97.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.14 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              <span>GitHub</span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
