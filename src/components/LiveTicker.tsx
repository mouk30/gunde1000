import React, { useEffect, useState } from 'react';
import { Sparkles, Car, Users, CheckCircle2, Gift } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const [messages] = useState([
    { icon: Users, text: '🔴 실시간 현황: 오늘 출근 에이스 선수 98명 대기 중 (무한 초이스 보장)' },
    { icon: Gift, text: '🎁 9월 특별 혜택: 생일 & 단체 고객 사전 예약 시 고급 샴페인 무료 증정' },
    { icon: Car, text: '🚗 무료 픽업: 성수·잠실·구의·천호·왕십리 전 지역 고급 세단 상시 대기' },
    { icon: CheckCircle2, text: '💎 투명 정찰제: 양주세트 14만원대부터 / 룸비 전액 무료(0원) / 바가지 근절' },
    { icon: Sparkles, text: '✨ 1인 혼술 환영: 여성 고객 40% 이상 혼술 방문, 1:1 전담 실장 편안한 힐링 케어' },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  const CurrentIcon = messages[currentIndex].icon;

  return (
    <div className="bg-[#10131d] border-b border-[#202538] py-2 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-gray-300 transition-all duration-500 ease-in-out">
          <span className="p-1 rounded-md bg-[#d4af37]/20 text-[#edd98f]">
            <CurrentIcon className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium text-gray-200">{messages[currentIndex].text}</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[11px] text-gray-400">
          <span className="text-emerald-400 font-semibold">● 예약 접수 중</span>
          <span>담당 실장 24시간 대기</span>
        </div>
      </div>
    </div>
  );
};
