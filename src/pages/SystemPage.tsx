import React from 'react';
import { ShieldCheck, Sparkles, Lock, Users, VolumeX, Car, Award, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, HERO_IMAGE } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

interface SystemPageProps {
  onOpenBooking: () => void;
}

export const SystemPage: React.FC<SystemPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title="건대호빠 W 프리미엄 시스템 & 100인 무한 초이스 | 건대 W 공식"
        description="건대 1등 호스트바 W(더블유)만의 5성급 시스템. 매일 100인 에이스 출근, 최고급 방음 VIP 프라이빗 룸, 1:1 전담 실장 밀착 케어, 철저한 비밀 보장."
        canonicalPath="/system"
        keywords="건대호빠시스템, 건대호스트바시스템, 건대W초이스, 호빠무한초이스, 건대호빠룸, 건대호빠방음"
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" /> 5-STAR HOSPITALITY
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          건대 W 프리미엄 5대 시스템
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          고객님의 프라이버시를 최우선으로 생각하는 최고급 시설과
          품격 있는 에이스 라인업으로 비교할 수 없는 감동을 선사합니다.
        </p>
      </div>

      {/* Hero Visual Block */}
      <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-[#2b334d]">
        <img
          src={HERO_IMAGE}
          alt="건대호빠 W VIP 럭셔리 라운지 룸"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c13] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="px-3 py-1 text-xs font-bold rounded-lg bg-[#d4af37] text-black">
            VIP PRIVATE ROOM
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
            최신식 이중 방음과 호텔 라운지급 인테리어
          </h2>
        </div>
      </div>

      {/* 5 Systems Detailed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: Users,
            title: '1. 100인 대형 무한 초이스 시스템',
            desc: '건대 및 강북권 최다 인원 출근! 매일 80~100여 명의 20대 에이스 선수들이 대기하며, 고객님이 만족하실 때까지 횟수 제한 없이 마음껏 초이스가 가능합니다.',
          },
          {
            icon: VolumeX,
            title: '2. 최신 흡음 & 이중 방음 VIP 룸',
            desc: '모든 룸에 스튜디오급 방음 자재와 최고급 최신 사운드 우퍼를 탑재하여, 외부 소음 간섭 없이 프라이빗하게 대화와 가무를 즐기실 수 있습니다.',
          },
          {
            icon: ShieldCheck,
            title: '3. 1:1 전담 실장 책임 케어제',
            desc: '입장부터 퇴실까지 단 한 명의 실장이 모든 과정을 1:1로 책임집니다. 고객님의 선호 스타일 사전 매칭, 정찰제 요금 관리, 귀가 서비스까지 완벽 지원합니다.',
          },
          {
            icon: Lock,
            title: '4. 철저한 프라이버시 100% 비밀 보장',
            desc: '철저한 보안 규정과 단독 동선 설계로 고객님의 방문 사실과 대화 내용에 대해 100% 철저한 기밀을 유지하며 안심할 수 있는 공간을 제공합니다.',
          },
          {
            icon: Car,
            title: '5. 서울 전역 무료 외제 세단 픽업',
            desc: '건대, 성수, 구의, 군자, 잠실, 천호 등 출발 위치만 알려주시면 고급 세단으로 1:1 무료 픽업과 안전한 귀가 샌딩을 도와드립니다.',
          },
          {
            icon: Award,
            title: '6. 엄격한 선수 수질 & 위생 관리',
            desc: '매주 서비스 마인드 교육, 스타일링 코칭, 인성 면접을 거친 검증된 인력만 투입되며, 매일 룸 전체 방역 소독을 실시합니다.',
          },
        ].map((sys, idx) => {
          const Icon = sys.icon;
          return (
            <div
              key={idx}
              className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-3 hover:border-[#d4af37]/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 text-[#edd98f] flex items-center justify-center border border-[#d4af37]/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">{sys.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{sys.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#121522] border border-[#252c42] rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">건대 W 시스템을 지금 직접 경험해보세요</h3>
        <p className="text-xs text-gray-400">당일 방문 30분 전 예약 시 즉시 입장 가능합니다</p>
        <button
          onClick={onOpenBooking}
          className="bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3.5 px-8 rounded-xl hover:brightness-110 shadow-lg text-sm"
        >
          VIP 룸 실시간 예약하기
        </button>
      </div>
    </div>
  );
};
