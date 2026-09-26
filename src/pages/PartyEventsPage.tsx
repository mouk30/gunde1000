import React from 'react';
import { PartyPopper, Gift, CheckCircle2, Phone, Calendar, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, PARTY_ROOM_IMAGE } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

interface PartyEventsPageProps {
  onOpenBooking: () => void;
}

export const PartyEventsPage: React.FC<PartyEventsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title="건대호빠 생일파티 & VIP 럭셔리 단체룸 이벤트 | 건대 W"
        description="특별한 날을 위한 건대 W 파티 전용 VIP 룸! 생일 파티 사전 예약 시 고급 샴페인 1병 무료 + 파티 네온 레터링 장식 + 케이크 보관 및 컷팅 지원."
        canonicalPath="/party-events"
        keywords="건대호빠생일, 건대호빠파티, 건대호스트바파티룸, 건대생일파티룸, 건대여성전용파티, 건대W이벤트"
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
          <PartyPopper className="w-3.5 h-3.5" /> VIP PARTY SUITE
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          생일파티 & 단체 VIP 룸 이벤트
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          1년에 한 번뿐인 소중한 생일, 친구들과의 잊지 못할 특별한 밤.
          <br />
          화려한 조명과 호텔급 라운지 룸에서 럭셔리한 파티를 선사합니다.
        </p>
      </div>

      {/* Hero Visual */}
      <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-[#2b334d]">
        <img
          src={PARTY_ROOM_IMAGE}
          alt="건대호빠 W 생일파티 럭셔리 전용 룸"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b11] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="px-3 py-1 text-xs font-bold rounded-lg bg-purple-500 text-white">
            SPECIAL BIRTHDAY BENEFIT
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">
            생일 고객 사전 예약 시 프랑스 정품 샴페인 무료 증정!
          </h2>
        </div>
      </div>

      {/* 4 Special Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: '1. 고급 샴페인 1병 무료 증정',
            desc: '생일자 포함 2인 이상 사전 예약 시 축하 샴페인(모엣/뵈브급) 1병을 테이블에 무료로 선물해 드립니다.',
          },
          {
            title: '2. 파티 감성 네온 레터링 & 풍선 세팅',
            desc: '인스타 및 사진 촬영에 완벽한 축하 문구와 감각적인 앰비언트 LED 조명으로 룸을 꾸며드립니다.',
          },
          {
            title: '3. 생일 케이크 보관 및 컷팅 서프라이즈',
            desc: '가져오신 케이크를 냉장 보관해 드리며, 타이밍에 맞춰 초 점화와 축하 BGM 세팅을 함께 진행합니다.',
          },
          {
            title: '4. 단체 손님 무료 세단 픽업 2대 배차',
            desc: '인원이 많으실 경우 최고급 세단 2대를 동시에 배차하여 친구분들 모두 편안하게 모셔옵니다.',
          },
        ].map((ben, idx) => (
          <div
            key={idx}
            className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-2 hover:border-purple-500/40 transition"
          >
            <div className="flex items-center gap-2 text-purple-400 font-bold text-base">
              <Gift className="w-5 h-5 shrink-0" />
              <span>{ben.title}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-7">{ben.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#121520] border border-[#272e44] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">생일 파티룸 사전 예약하기</h3>
        <p className="text-xs text-gray-300">
          파티 룸은 금/토 주말 조기 마감될 수 있으니 최소 1일 전 예약을 추천합니다.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3.5 px-8 rounded-xl hover:brightness-110 shadow-lg text-sm"
          >
            생일 파티룸 바로 예약하기
          </button>
        </div>
      </div>
    </div>
  );
};
