import React from 'react';
import { Users, Sparkles, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { PHONE_NUMBER, HOST_STYLES, HOST_MODEL_IMAGE } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

interface HostsPageProps {
  onOpenBooking: () => void;
}

export const HostsPage: React.FC<HostsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title="건대호빠 에이스 선수 라인업 & 스타일별 초이스 가이드 | 건대 W"
        description="매일 80~100명 출근! 건대 W 에이스 선수 스타일 분류. 20대 아이돌형, 183cm+ 모델 피지컬, 댄디 젠틀 훈남, 위트 분위기 메이커 라인업 및 초이스 팁."
        canonicalPath="/hosts"
        keywords="건대호빠선수, 건대호빠초이스, 건대호스트바에이스, 호빠선수스타일, 건대호빠선수사이즈, 건대W선수"
      />

      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
          <Users className="w-3.5 h-3.5" /> 100+ ACE ROSTER
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          건대 W 에이스 선수 라인업 & 스타일 가이드
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          매일 80~100여 명 이상의 20대 엄선된 선수들이 출근합니다.
          <br />
          비주얼, 피지컬, 매너, 입담까지 고객님의 취향에 꼭 맞춘 무한 맞춤 초이스를 경험하세요.
        </p>
      </div>

      {/* Host Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HOST_STYLES.map((host) => (
          <div
            key={host.id}
            className="bg-[#0e111a] border border-[#23293e] rounded-3xl overflow-hidden hover:border-[#d4af37]/50 transition group flex flex-col sm:flex-row"
          >
            <div className="sm:w-1/2 relative aspect-[3/4] sm:aspect-auto">
              <img
                src={host.imageUrl}
                alt={`${host.category} - 건대호빠 W`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#d4af37] text-black">
                  {host.badge}
                </span>
              </div>
            </div>

            <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs text-[#edd98f] font-mono">
                  출근 대기 인원: {host.count}명
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#edd98f] transition">
                  {host.category}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">{host.description}</p>
                <div className="pt-2 space-y-1">
                  {host.traits.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-[#191d2e] hover:bg-[#d4af37] text-gray-200 hover:text-black font-bold text-xs transition"
              >
                이 스타일 초이스 예약하기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Choice Tips Banner */}
      <div className="bg-[#121520] border border-[#252c42] rounded-3xl p-6 sm:p-10 space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">
          W 실장이 알려주는 실패 없는 초이스 3계명
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-gray-300">
          <div className="bg-[#0b0c13] p-5 rounded-2xl border border-[#1e2334] space-y-2">
            <div className="font-bold text-sm text-[#edd98f]">1. 원하는 취향 구체적으로 말하기</div>
            <p className="text-gray-400 leading-relaxed">
              &ldquo;키 183 이상 슬림한 수트핏&rdquo;, &ldquo;말 잘 들어주는 다정한 스타일&rdquo; 등 취향을 명확히 말씀해주시면 실장이 1차로 쏙 골라 보여드립니다.
            </p>
          </div>
          <div className="bg-[#0b0c13] p-5 rounded-2xl border border-[#1e2334] space-y-2">
            <div className="font-bold text-sm text-[#edd98f]">2. 첫인상 느낌과 대화 케미 확인하기</div>
            <p className="text-gray-400 leading-relaxed">
              룸에 들어왔을 때 인사하는 눈빛과 말투에서 호감이 가는 선수를 선택하세요. 눈치 보실 필요 없이 마음에 닿는 분을 고르시면 됩니다.
            </p>
          </div>
          <div className="bg-[#0b0c13] p-5 rounded-2xl border border-[#1e2334] space-y-2">
            <div className="font-bold text-sm text-[#edd98f]">3. 마음 안 들면 주저 없이 체인지</div>
            <p className="text-gray-400 leading-relaxed">
              함께 시간을 보내다가 조금 어색하거나 맞지 않으면 실장에게 조용히 말씀해 주세요. 자연스럽고 매너 있게 다른 에이스로 즉시 교체해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
