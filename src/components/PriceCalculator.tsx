import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, Sparkles, HelpCircle, Wine, ArrowRight } from 'lucide-react';

interface PriceCalculatorProps {
  onBookWithQuote?: (quoteDetails: { liquor: string; guests: number; totalPrice: number }) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onBookWithQuote }) => {
  const [guests, setGuests] = useState(2);
  const [hours, setHours] = useState(2);
  const [liquorType, setLiquorType] = useState<'whiskey12' | 'whiskey17' | 'single_malt' | 'champagne'>('whiskey12');
  const [extraBottles, setExtraBottles] = useState(0);

  const liquorOptions = [
    {
      id: 'whiskey12' as const,
      name: '기본 양주 12년산 세트',
      sub: '골든블루 / 윈저 12 + 과일안주 + 음료/맥주',
      price: 140000,
      badge: '가장 인기',
    },
    {
      id: 'whiskey17' as const,
      name: '프리미엄 17년산 세트',
      sub: '윈저 17 / 임페리얼 17 + 특선과일 + 음료 무제한',
      price: 180000,
      badge: '추천',
    },
    {
      id: 'champagne' as const,
      name: 'VIP 샴페인 세트',
      sub: '모엣샹동 / 뵈브클리코 + 모듬치즈 과일플래터',
      price: 210000,
      badge: '생일/파티 추천',
    },
    {
      id: 'single_malt' as const,
      name: '싱글몰트 프리미엄',
      sub: '발베니 12 / 맥캘란 12 + 특선 카나페',
      price: 240000,
      badge: '럭셔리',
    },
  ];

  const selectedLiquor = liquorOptions.find((l) => l.id === liquorType)!;
  const baseLiquorPrice = selectedLiquor.price;
  const extraBottlePrice = extraBottles * (baseLiquorPrice * 0.7);
  const tcRate = 50000;
  const totalTc = guests * hours * tcRate;
  const roomFee = 0; // W(더블유)는 룸비 무료!
  const waiterTip = 50000;
  const totalPrice = baseLiquorPrice + extraBottlePrice + totalTc + roomFee + waiterTip;
  const perPerson = Math.round(totalPrice / Math.max(1, guests));

  return (
    <div className="bg-[#0f121d] border border-[#23293e] rounded-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1f2538] gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" /> 투명한 실시간 자동 견적기
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            건대 W 100% 정찰제 주대 계산기
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            바가지 요금 0%! 방문 인원과 주류를 선택하시면 실제 청구되는 총액을 1원 단위까지 투명하게 확인하실 수 있습니다.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-xs font-semibold self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4" /> 룸비 전액 면제 (0원)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        {/* Left: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Guest Count */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-gray-200">
                1. 방문 인원수: <span className="text-[#edd98f] font-bold text-base">{guests}명</span>
              </label>
              <span className="text-xs text-gray-400">
                {guests === 1 ? '🌟 1인 혼술 (전용 프라이빗룸)' : '단체/친구 방문'}
              </span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((g) => (
                <button
                  key={g}
                  onClick={() => setGuests(g)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                    guests === g
                      ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20'
                      : 'bg-[#171a27] text-gray-300 hover:bg-[#202538] border border-[#282f45]'
                  }`}
                >
                  {g === 1 ? '1인 (혼술)' : `${g}인`}
                </button>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-gray-200">
                2. 이용 예정 시간: <span className="text-[#edd98f] font-bold text-base">{hours}시간</span>
              </label>
              <span className="text-xs text-gray-400">선수 봉사료(TC) 기준</span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((h) => (
                <button
                  key={h}
                  onClick={() => setHours(h)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                    hours === h
                      ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20'
                      : 'bg-[#171a27] text-gray-300 hover:bg-[#202538] border border-[#282f45]'
                  }`}
                >
                  {h}시간
                </button>
              ))}
            </div>
          </div>

          {/* Liquor Set Selection */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-200 mb-2">
              3. 기본 주류 세트 선택
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {liquorOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setLiquorType(opt.id)}
                  className={`cursor-pointer p-3 rounded-xl border text-left transition ${
                    liquorType === opt.id
                      ? 'bg-[#1e2336] border-[#d4af37] ring-1 ring-[#d4af37]'
                      : 'bg-[#151825] border-[#262c41] hover:border-[#384160]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs sm:text-sm text-white">{opt.name}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#edd98f]">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mb-2">{opt.sub}</p>
                  <div className="text-sm font-extrabold text-[#edd98f]">
                    {opt.price.toLocaleString()}원
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extra bottles */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs sm:text-sm font-semibold text-gray-200">
                4. 추가 주문 양주/주류: <span className="text-[#edd98f] font-bold">{extraBottles}병</span>
              </label>
              <span className="text-xs text-emerald-400">추가 바틀 30% 할인 적용</span>
            </div>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((b) => (
                <button
                  key={b}
                  onClick={() => setExtraBottles(b)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold transition ${
                    extraBottles === b
                      ? 'bg-[#2b334d] text-white border border-[#d4af37]'
                      : 'bg-[#151825] text-gray-400 border border-[#252b3e] hover:bg-[#1c2132]'
                  }`}
                >
                  {b === 0 ? '추가 없음' : `+${b}병`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Price Breakdown Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#141826] to-[#0e111a] border border-[#2d344d] rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-3 border-b border-[#232a3e] text-xs text-gray-400">
              <Wine className="w-4 h-4 text-[#d4af37]" />
              <span className="text-white font-semibold">{selectedLiquor.name}</span>
            </div>

            <div className="space-y-3 py-4 text-xs">
              <div className="flex justify-between text-gray-300">
                <span>기본 주류 세트 ({selectedLiquor.name}):</span>
                <span className="font-mono text-white">{baseLiquorPrice.toLocaleString()}원</span>
              </div>

              {extraBottles > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>추가 바틀 ({extraBottles}병, 30% 할인):</span>
                  <span className="font-mono text-white">+{extraBottlePrice.toLocaleString()}원</span>
                </div>
              )}

              <div className="flex justify-between text-gray-300">
                <div>
                  선수 TC ({guests}명 &times; {hours}시간):
                  <div className="text-[10px] text-gray-400">시간당 50,000원 정찰제</div>
                </div>
                <span className="font-mono text-white">+{totalTc.toLocaleString()}원</span>
              </div>

              <div className="flex justify-between text-emerald-400 font-medium">
                <span>VIP 룸 이용료 (룸비/룸티):</span>
                <span className="font-mono">0원 (전액 무료!)</span>
              </div>

              <div className="flex justify-between text-gray-300">
                <div>
                  웨이터 서빙 팁:
                  <div className="text-[10px] text-gray-400">룸당 1회 고정 (시간 무관)</div>
                </div>
                <span className="font-mono text-white">+{waiterTip.toLocaleString()}원</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#232a3e] space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-bold text-gray-200">총 예상 금액:</span>
                <span className="text-2xl sm:text-3xl font-black text-gold-gradient font-mono">
                  {totalPrice.toLocaleString()}
                  <span className="text-sm text-[#edd98f] ml-1 font-sans">원</span>
                </span>
              </div>

              {guests > 1 && (
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1인당 부담 금액:</span>
                  <span className="text-[#edd98f] font-mono font-semibold">
                    약 {perPerson.toLocaleString()}원
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-5 space-y-2">
            <button
              onClick={() => {
                if (onBookWithQuote) {
                  onBookWithQuote({
                    liquor: selectedLiquor.name,
                    guests,
                    totalPrice,
                  });
                }
              }}
              className="w-full bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3.5 rounded-xl hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition flex items-center justify-center gap-2 text-sm"
            >
              <span>이 견적으로 실시간 룸 예약하기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              당일 방문 시 추가 금액 절대 없음 (100% 환불 보증)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
