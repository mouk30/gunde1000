import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';

interface FloatingActionBarProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({ onOpenBooking, onOpenCalculator }) => {
  return (
    <aside aria-label="빠른 문의 및 예약" className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f17]/95 backdrop-blur-lg border-t border-[#252b40] p-2.5 sm:py-3 shadow-2xl">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Call button (전화번호 텍스트 표시 삭제, tel:01077009100 연결) */}
        <a
          href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3 px-3 rounded-xl shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition text-xs sm:text-sm"
        >
          <Phone className="w-4 h-4 fill-black" />
          <span>실장 직통 전화</span>
        </a>

        {/* Kakao button (카톡아이디 삭제, 오픈채팅 URL 연결) */}
        <a
          href={KAKAO_OPEN_CHAT_URL}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-[#fee500] text-[#191919] font-bold py-3 px-3 rounded-xl shadow hover:bg-[#ebd300] active:scale-95 transition text-xs sm:text-sm"
        >
          <MessageCircle className="w-4 h-4 fill-[#191919]" />
          <span>카톡 1:1 상담</span>
        </a>

        {/* Quote Calculator */}
        <button
          onClick={onOpenCalculator}
          className="hidden sm:flex items-center justify-center gap-1.5 bg-[#171a26] border border-[#2e344d] hover:border-[#d4af37]/50 text-gray-200 font-medium py-3 px-3.5 rounded-xl transition text-xs sm:text-sm"
        >
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
          <span>견적 계산기</span>
        </button>

        {/* Live Booking Modal */}
        <button
          onClick={onOpenBooking}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#1f2438] to-[#131726] border border-[#3b4363] hover:border-[#d4af37] text-white font-bold py-3 px-3 rounded-xl active:scale-95 transition text-xs sm:text-sm"
        >
          <Calendar className="w-4 h-4 text-[#edd98f]" />
          <span>실시간 룸 예약</span>
        </button>
      </div>
    </aside>
  );
};

