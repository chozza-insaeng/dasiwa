"use client";

import { useState } from "react";

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqvaylr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("제출 중 문제가 발생했습니다. 전화로 연락주세요.");
      }
    } catch {
      alert("제출 중 문제가 발생했습니다. 전화로 연락주세요.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50">
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-md w-full text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              문의 접수 완료
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              빠른 시간 안에 연락드리겠습니다.<br />
              감사합니다.
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
            >
              메인으로 돌아가기
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50">
      <main className="flex-1 px-6 py-12">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              시공 의뢰 문의
            </h1>
            <p className="text-gray-600">
              아래 정보를 남겨주시면 빠르게 연락드립니다.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                작업 종류 <span className="text-teal-600">*</span>
              </label>
              <select
                name="작업종류"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="화장실 리모델링">화장실 리모델링</option>
                <option value="타일 시공">타일 시공</option>
                <option value="하자 보수">하자 보수</option>
                <option value="수전 교체">수전 교체</option>
                <option value="천정돔 시공">천정돔 시공</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                작업 지역 <span className="text-teal-600">*</span>
              </label>
              <input
                type="text"
                name="지역"
                required
                placeholder="예: 청주시 흥덕구"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                희망 시기 <span className="text-teal-600">*</span>
              </label>
              <select
                name="희망시기"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="빠른 시일 내">빠른 시일 내</option>
                <option value="1주일 내">1주일 내</option>
                <option value="2주일 내">2주일 내</option>
                <option value="한 달 내">한 달 내</option>
                <option value="상관없음">상관없음</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                현장 사진 (선택)
              </label>
              <input
                type="file"
                name="사진"
                accept="image/*"
                multiple
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-sm"
              />
              <p className="text-xs text-gray-500 mt-1">
                최대 3장, 시공 부위 사진이 있으면 빠른 견적이 가능합니다
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름 <span className="text-teal-600">*</span>
              </label>
              <input
                type="text"
                name="이름"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                연락처 <span className="text-teal-600">*</span>
              </label>
              <input
                type="tel"
                name="연락처"
                required
                placeholder="010-0000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                추가 메모 (선택)
              </label>
              <textarea
                name="메모"
                rows={4}
                placeholder="궁금하신 점이나 전달 사항을 자유롭게 적어주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 bg-teal-600 text-white rounded-xl font-semibold text-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "제출 중..." : "문의 보내기"}
              </button>
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => (window.location.href = "/")}
                className="text-sm text-gray-500 hover:text-teal-600 transition-colors"
              >
                ← 메인으로 돌아가기
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
