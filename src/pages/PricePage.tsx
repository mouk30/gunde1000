import React from 'react';
import { ShieldCheck, Wine, CheckCircle2, AlertCircle, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { PriceCalculator } from '../components/PriceCalculator';
import { SEOHead } from '../components/SEOHead';

interface PricePageProps {
  onOpenBooking: () => void;
  onBookWithQuote: (quote: any) => void;
}

export const PricePage: React.FC<PricePageProps> = ({ onOpenBooking, onBookWithQuote }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title="건대호빠 정찰제 주대 및 투명 가격표 | 건대 W 공식"
        description="건대호빠 1위 W(더블유) 정찰제 주대 안내. 양주 12년산 세트 14만원대~, 룸비 전액 무료(0원), 선수 TC 시간당 5만원 정찰제. 바가지 요금 없는 투명 시스템."
        canonicalPath="/price"
        keywords="건대호빠가격, 건대호빠주대, 건대호스트바주대, 건대호빠TC, 건대호빠룸비, 건대W가격, 건대호빠정찰제"
      />

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> 100% 바가지 요금 없는 정찰제 보장
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          건대 W 정찰제 주대 & 투명 가격표
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          건대 W는 불투명한 추가금이나 계산서 장난을 엄격히 배격합니다.
          <br />
          사전에 안내해 드린 금액 외에는 단 1원도 추가되지 않는 투명한 정찰제로 안심하고 즐기실 수 있습니다.
        </p>
      </div>

      {/* Main Liquor Set Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            name: '기본 양주 12년산 세트',
            price: '140,000원~',
            sub: '골든블루 12 / 윈저 12',
            badge: '가장 많은 선택',
            includes: [
              '12년산 정품 위스키 1병',
              '신선한 제철 계절 과일 안주',
              '고급 음료 및 생수 무제한 제공',
              '마른안주 & 스낵 무제한 리필',
            ],
          },
          {
            name: '프리미엄 17년산 세트',
            price: '180,000원~',
            sub: '윈저 17 / 임페리얼 17',
            badge: '부드러운 목넘김',
            includes: [
              '17년산 프리미엄 위스키 1병',
              '특선 모듬 과일 안주',
              '음료 & 토닉워터 무제한',
              '고급 치즈 & 초콜릿 플레이트',
            ],
          },
          {
            name: 'VIP 샴페인 세트',
            price: '210,000원~',
            sub: '모엣샹동 / 뵈브클리코',
            badge: '파티 / 생일 추천',
            includes: [
              '프랑스 샴페인 정품 1병',
              '프리미엄 모듬 치즈 & 카나페',
              '생일 축하 네온 레터링 룸 세팅',
              '생일 케이크 보관 및 컷팅 지원',
            ],
          },
          {
            name: '싱글몰트 하이엔드',
            price: '240,000원~',
            sub: '발베니 12 / 맥캘란 12',
            badge: '미식가를 위한 선택',
            includes: [
              '싱글몰트 위스키 정품 1병',
              '셰프 특선 카나페 플래터',
              '크리스탈 글라스 & 온더락 아이스',
              'VIP 전용 프라이빗 룸 우선 배정',
            ],
          },
        ].map((set, idx) => (
          <div
            key={idx}
            className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-5 flex flex-col justify-between hover:border-[#d4af37]/60 transition"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#edd98f]">
                  {set.badge}
                </span>
                <span className="text-xs text-gray-400 font-mono">{set.sub}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{set.name}</h3>
              <div className="text-2xl font-black text-gold-gradient font-mono pb-4 border-b border-[#1f2538]">
                {set.price}
              </div>

              <div className="py-4 space-y-2 text-xs text-gray-300">
                <div className="font-semibold text-gray-400 mb-1">기본 포함 내역:</div>
                {set.includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-2 py-2.5 rounded-xl bg-[#181c2b] hover:bg-[#d4af37] text-white hover:text-black font-bold text-xs transition"
            >
              이 세트로 룸 예약하기
            </button>
          </div>
        ))}
      </div>

      {/* 3 Non-Negotiable Transparent Rules */}
      <div className="bg-[#121520] border border-[#272e44] rounded-2xl p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white text-center">
          건대 W의 3대 정찰제 약속
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-gray-300">
          <div className="p-4 rounded-xl bg-[#0a0c13] border border-[#1e2334] space-y-2">
            <div className="text-emerald-400 font-bold text-sm flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 1. 룸비 (룸티) 100% 면제
            </div>
            <p className="leading-relaxed text-gray-400">
              일반 업소에서 시간당 3~5만원씩 부과되는 룸 이용료를 전액 면제(0원)하여 고객님의 부담을 덜어드립니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0c13] border border-[#1e2334] space-y-2">
            <div className="text-emerald-400 font-bold text-sm flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 2. 선수 봉사료 (TC) 정찰제
            </div>
            <p className="leading-relaxed text-gray-400">
              선수 TC는 1시간당 50,000원입니다. 이용하신 시간만큼 정직하게 산정되며, 분 단위 억지 반올림 청구가 없습니다.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0c13] border border-[#1e2334] space-y-2">
            <div className="text-emerald-400 font-bold text-sm flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 3. 웨이터 팁 테이블 1회 고정
            </div>
            <p className="leading-relaxed text-gray-400">
              웨이터 서빙 팁(WT)은 시간과 관계없이 퇴실 시 테이블당 1회 50,000원으로 고정되어 있어 안심하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Realistic Real-World Scenarios */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-white">상황별 실제 이용 견적 예시</h2>
          <p className="text-xs text-gray-400">방문 목적에 따른 총 견적을 한눈에 비교해 보세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Scenario 1: 1인 혼술 */}
          <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm">Case 1. 1인 혼술 힐링</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                1명 / 2시간
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-gray-300 border-y border-[#1e2436] py-3">
              <div className="flex justify-between">
                <span>기본 양주 12년산 세트</span>
                <span className="font-mono">140,000원</span>
              </div>
              <div className="flex justify-between">
                <span>선수 TC (1명 &times; 2시간)</span>
                <span className="font-mono">100,000원</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>VIP 룸 이용료</span>
                <span className="font-mono">0원 (면제)</span>
              </div>
              <div className="flex justify-between">
                <span>웨이터 팁 (1회)</span>
                <span className="font-mono">50,000원</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <span className="text-xs font-semibold text-gray-400">총 청구 금액:</span>
              <span className="text-xl font-bold text-[#edd98f] font-mono">290,000원</span>
            </div>
          </div>

          {/* Scenario 2: 친구 2인 */}
          <div className="bg-[#0e111a] border border-[#d4af37]/40 rounded-2xl p-5 space-y-4 relative">
            <div className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded bg-[#d4af37] text-black">
              가장 추천
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm">Case 2. 친구 2인 모임</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-[#edd98f]">
                2명 / 2시간
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-gray-300 border-y border-[#1e2436] py-3">
              <div className="flex justify-between">
                <span>기본 양주 12년산 세트</span>
                <span className="font-mono">140,000원</span>
              </div>
              <div className="flex justify-between">
                <span>선수 TC (2명 &times; 2시간)</span>
                <span className="font-mono">200,000원</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>VIP 룸 이용료</span>
                <span className="font-mono">0원 (면제)</span>
              </div>
              <div className="flex justify-between">
                <span>웨이터 팁 (1회)</span>
                <span className="font-mono">50,000원</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <div>
                <span className="text-xs font-semibold text-gray-400">총 청구 금액:</span>
                <div className="text-[11px] text-emerald-400">1인당 195,000원</div>
              </div>
              <span className="text-xl font-bold text-[#edd98f] font-mono">390,000원</span>
            </div>
          </div>

          {/* Scenario 3: 4인 생일 파티 */}
          <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-white text-sm">Case 3. 4인 생일 파티</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                4명 / 3시간
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-gray-300 border-y border-[#1e2436] py-3">
              <div className="flex justify-between">
                <span>17년산 세트 + 샴페인 1병</span>
                <span className="font-mono">280,000원</span>
              </div>
              <div className="flex justify-between">
                <span>선수 TC (4명 &times; 3시간)</span>
                <span className="font-mono">600,000원</span>
              </div>
              <div className="flex justify-between text-emerald-400">
                <span>대형 파티룸 룸비</span>
                <span className="font-mono">0원 (면제)</span>
              </div>
              <div className="flex justify-between">
                <span>웨이터 팁 (1회)</span>
                <span className="font-mono">50,000원</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline pt-1">
              <div>
                <span className="text-xs font-semibold text-gray-400">총 청구 금액:</span>
                <div className="text-[11px] text-emerald-400">1인당 약 232,000원</div>
              </div>
              <span className="text-xl font-bold text-[#edd98f] font-mono">930,000원</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Real-time Calculator */}
      <PriceCalculator onBookWithQuote={onBookWithQuote} />

      {/* CTA Box */}
      <div className="bg-[#141824] border border-[#282f45] rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">
          원하시는 시간이나 예산에 맞춰 1:1 맞춤 견적이 필요하신가요?
        </h3>
        <p className="text-xs text-gray-300">
          실장에게 전화 한 통만 주시면 정확한 최종 금액을 바로 계산해 안내해 드립니다.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="flex items-center gap-2 bg-[#d4af37] text-black font-bold py-3 px-6 rounded-xl hover:brightness-110 text-xs sm:text-sm"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>실장 직통 전화</span>
          </a>
          <a
            href={KAKAO_OPEN_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#fee500] text-black font-bold py-3 px-6 rounded-xl hover:brightness-95 text-xs sm:text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>카톡 1:1 상담</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-[#202538] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#2c334d] text-xs sm:text-sm"
          >
            VIP 룸 바로 예약하기
          </button>
        </div>
      </div>
    </div>
  );
};
