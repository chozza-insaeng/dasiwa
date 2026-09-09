import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  // 47장의 사진을 배열로 만들기
  const photos = Array.from({ length: 47 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/tile-${num}.jpg`;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50">
      <main className="flex-1 px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          {/* 상단 헤드라인 */}
          <div className="text-center mb-10">
            <p className="text-sm tracking-widest text-teal-600 font-medium mb-3">
              타일마스터 · 슬아타일 직접 시공
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              시공 사례 갤러리
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              실제 시공한 현장 47곳의 사진입니다
            </p>
          </div>

          {/* 메인 페이지로 돌아가기 버튼 */}
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
            >
              ← 메인으로 돌아가기
            </Link>
          </div>

          {/* 사진 그리드 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {photos.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square bg-white rounded-2xl border border-teal-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <Image
                  src={src}
                  alt={`타일 시공 사례 ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* 하단 행동 유도 */}
          <div className="bg-teal-600 rounded-2xl p-6 sm:p-8 text-center text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              마음에 드는 시공 스타일을 찾으셨나요?
            </h2>
            <p className="text-teal-100 mb-6 text-sm sm:text-base">
              현장 사진과 간단한 정보만 보내주시면 빠르게 견적 안내드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/inquiry"
                className="px-6 py-3 bg-white text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
              >
                📷 사진 보내고 견적 받기
              </Link>
              <a
                href="tel:01034464858"
                className="px-6 py-3 bg-teal-800 text-white rounded-xl font-semibold hover:bg-teal-900 transition-colors"
              >
                📞 010-3446-4858 바로 전화
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* 푸터 */}
      <footer className="px-6 py-8 border-t border-teal-100/60 bg-white">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500 space-y-2">
          <p className="font-semibold text-gray-700">타일마스터 · 슬아타일 직접 시공</p>
          <p>타일 시공 문의: 010-3446-4858</p>
          <p>출장 상담 지역: 증평 · 청주 · 괴산 · 음성 · 진천 · 보은 · 충주 · 제천 · 세종 · 대전</p>
          <p className="text-xs text-gray-400 pt-2">© 2026 타일마스터. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
