export default function Home() {
  const promises = [
    { title: "노쇼 줄이기", desc: "예약은 지켜지는 것이 기본이 되도록." },
    { title: "빈자리 채우기", desc: "비어버린 시간도 매출이 되도록." },
    { title: "재방문 늘리기", desc: "한 번 온 손님이 다시 오도록." },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-50 via-white to-amber-50 px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        <p className="text-sm tracking-widest text-rose-500 font-medium mb-4">
          DASIWA · 다시와
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-rose-500">다시와</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          1인 뷰티샵 사장님을 위한 예약·고객 관리 도구.
          <br />
          매일의 운영을, 조금 더 단단하게.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {promises.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/70 backdrop-blur border border-rose-100 p-5 shadow-sm"
            >
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
  );
}
