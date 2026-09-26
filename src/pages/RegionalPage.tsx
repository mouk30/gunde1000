import React from 'react';
import { MapPin, Car, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { REGIONAL_SEO_PAGES, PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { PriceCalculator } from '../components/PriceCalculator';
import { SEOHead } from '../components/SEOHead';

interface RegionalPageProps {
  slug: string;
  onOpenBooking: () => void;
  onBookWithQuote: (quote: any) => void;
}

export const RegionalPage: React.FC<RegionalPageProps> = ({
  slug,
  onOpenBooking,
  onBookWithQuote,
}) => {
  const data = REGIONAL_SEO_PAGES[slug] || REGIONAL_SEO_PAGES['konkuk'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title={data.title}
        description={data.metaDesc}
        canonicalPath={`/area/${data.slug}`}
        keywords={data.localKeywords.join(', ')}
      />

      {/* Hero / Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#edd98f] text-xs font-semibold">
          <MapPin className="w-3.5 h-3.5" />
          <span>{data.areaName} 전담 1:1 무료 세단 픽업 지원</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          {data.title}
        </h1>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {data.metaDesc}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1">
            <Car className="w-3.5 h-3.5" /> {data.pickupTime}
          </span>
          <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            {data.subwayInfo}
          </span>
          <span className="px-3 py-1 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
            100인 에이스 무한 초이스
          </span>
        </div>
      </div>

      {/* Regional Overview Box */}
      <div className="bg-[#0e111a] border border-[#23293e] rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="border-b border-[#1e2436] pb-4">
          <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
            LOCAL HIGHLIGHT
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            {data.tagline}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          {data.overview}
        </p>

        {/* Special Benefits */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-white">
            {data.areaName} 고객님만을 위한 맞춤 특전:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.specialBenefits.map((ben, idx) => (
              <div
                key={idx}
                className="bg-[#141724] border border-[#232a3f] rounded-xl p-3.5 flex items-center gap-2.5 text-xs text-gray-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Quote Calculator for Local Visitors */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {data.areaName} 방문 고객 실시간 정찰제 견적 계산기
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            정찰제 주대(14만원~)와 룸비 0원 혜택이 적용된 실시간 견적입니다.
          </p>
        </div>
        <PriceCalculator onBookWithQuote={onBookWithQuote} />
      </section>

      {/* Local FAQ */}
      <div className="bg-[#10131e] border border-[#232a3f] rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white">
          {data.areaName} 고객님 자주 묻는 질문
        </h3>
        <div className="space-y-3">
          {data.faq.map((item, idx) => (
            <div key={idx} className="bg-[#151928] rounded-xl p-4 space-y-1.5 text-xs">
              <div className="font-bold text-[#edd98f]">Q. {item.q}</div>
              <div className="text-gray-300 leading-relaxed pl-3 border-l-2 border-[#d4af37]/40">
                A. {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Keyword Cloud */}
      <div className="text-xs text-gray-400 space-y-2">
        <div className="font-semibold text-gray-300">관련 지역 검색 키워드:</div>
        <div className="flex flex-wrap gap-1.5">
          {data.localKeywords.map((kw, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-[#0e111a] border border-[#21273c] text-gray-400"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#17140a] via-[#241c08] to-[#17140a] border border-[#d4af37]/40 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-white">
          {data.areaName}에서 지금 바로 출발하시겠습니까?
        </h3>
        <p className="text-xs sm:text-sm text-amber-200/90">
          전화 한 통이면 최고급 세단이 5분 내로 모시러 갑니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="bg-[#d4af37] text-black font-extrabold py-3 px-6 rounded-xl hover:brightness-110 text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>{data.areaName} 무료 픽업 요청</span>
          </a>
          <a
            href={KAKAO_OPEN_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#fee500] text-black font-extrabold py-3 px-6 rounded-xl hover:brightness-95 text-xs sm:text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>카톡 1:1 상담</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-[#171b28] border border-[#37405c] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#22283a] text-xs sm:text-sm"
          >
            VIP 룸 예약하기
          </button>
        </div>
      </div>
    </div>
  );
};
