"use client";

import Link from "next/link";
import { useState } from "react";

const phoneDisplay = "010-3446-4858";
const phoneHref = "tel:01034464858";

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/maqvaylr", {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    }).catch(() => null);

    setLoading(false);

    if (response?.ok) {
      setSubmitted(true);
    } else {
      alert(`접수 중 문제가 생겼습니다. ${phoneDisplay}로 전화해주세요.`);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-950 px-5 text-white">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center text-stone-950 shadow-2xl sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-3xl">✓</div>
          <h1 className="mt-6 text-3xl font-black">견적 요청이 접수됐습니다</h1>
          <p className="mt-4 font-medium leading-relaxed text-stone-600">내용을 확인한 뒤 빠르게 연락드리겠습니다.<br />급한 문의는 바로 전화해주세요.</p>
          <a href={phoneHref} className="mt-8 block rounded-xl bg-stone-950 px-6 py-4 font-black text-white">{phoneDisplay} 전화하기</a>
          <Link href="/" className="mt-4 block py-2 text-sm font-bold text-stone-500">메인으로 돌아가기</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 px-5 py-8 text-stone-950 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-black text-stone-600">← 타일마스터 홈</Link>

        <div className="mt-8 grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          <section className="bg-stone-950 p-7 text-white sm:p-10">
            <p className="text-sm font-black tracking-[0.2em] text-amber-300">무료 사진 견적</p>
            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">연락처와 지역만 남겨도<br />상담을 시작할 수 있어요</h1>
            <p className="mt-5 font-medium leading-relaxed text-white/70">사진이 있으면 더 빠르게 안내해드립니다. 정확한 금액은 현장 확인 후 확정합니다.</p>

            <div className="mt-8 space-y-4 border-t border-white/15 pt-8 text-sm font-bold text-white/85">
              <p>✓ 욕실 · 주방 · 상가 · 베란다 · 현관</p>
              <p>✓ 타일 전체 시공 · 부분 보수</p>
              <p>✓ 출장 상담: 증평 · 청주 · 괴산 · 음성 · 진천 · 보은 · 충주 · 제천 · 세종 · 대전</p>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-bold text-white/65">바로 통화하고 싶다면</p>
              <a href={phoneHref} className="mt-2 block text-2xl font-black text-amber-300">{phoneDisplay}</a>
            </div>
          </section>

          <section className="p-7 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="work-type" className="mb-2 block text-sm font-black">어떤 작업이 필요하세요? *</label>
                <select id="work-type" name="작업종류" required defaultValue="" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3.5 font-medium outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100">
                  <option value="" disabled>작업 분야 선택</option>
                  <option>욕실 리모델링·타일</option>
                  <option>주방 타일</option>
                  <option>상가 타일</option>
                  <option>베란다 타일</option>
                  <option>현관 타일</option>
                  <option>타일 하자·부분 보수</option>
                  <option>기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="mb-2 block text-sm font-black">작업 지역 *</label>
                <input id="location" type="text" name="지역" required placeholder="예: 충주시 연수동" className="w-full rounded-xl border border-stone-300 px-4 py-3.5 font-medium outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-black">연락받을 번호 *</label>
                <input id="phone" type="tel" name="연락처" required inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" className="w-full rounded-xl border border-stone-300 px-4 py-3.5 font-medium outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
              </div>

              <div>
                <label htmlFor="photos" className="mb-2 block text-sm font-black">현장 사진 <span className="font-medium text-stone-400">(선택)</span></label>
                <input id="photos" type="file" name="사진" accept="image/*" multiple className="w-full rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-4 text-sm font-medium file:mr-3 file:rounded-lg file:border-0 file:bg-amber-400 file:px-4 file:py-2 file:font-black" />
                <p className="mt-2 text-xs font-medium text-stone-500">시공 부위가 보이는 사진을 첨부하면 상담이 빨라집니다.</p>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-black">궁금한 점 <span className="font-medium text-stone-400">(선택)</span></label>
                <textarea id="message" name="메모" rows={3} placeholder="예: 베란다 바닥 타일이 들떴어요" className="w-full resize-none rounded-xl border border-stone-300 px-4 py-3.5 font-medium outline-none transition placeholder:text-stone-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100" />
              </div>

              <button type="submit" disabled={loading} className="w-full rounded-xl bg-stone-950 px-6 py-4 text-lg font-black text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60">
                {loading ? "접수 중입니다..." : "무료 견적 요청하기"}
              </button>
              <p className="text-center text-xs font-medium leading-relaxed text-stone-400">입력하신 정보는 견적 상담과 연락 목적으로만 사용합니다.</p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
