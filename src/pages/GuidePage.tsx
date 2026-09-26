import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ShieldCheck, Heart, Clock, Phone, AlertCircle, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

interface GuidePageProps {
  onOpenBooking: () => void;
}

export const GuidePage: React.FC<GuidePageProps> = ({ onOpenBooking }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">
      <SEOHead
        title="호빠 초보자 첫방문 가이드 & 7대 꿀팁 | 건대 W 공식"
        description="호스트바 처음 방문하시나요? 건대호빠 W 초보자 필독 가이드. 초이스 요령, 룸 이용 절차, 1인 혼술 안심 팁, 바가지 안 당하는 법까지 상세히 안내해 드립니다."
        canonicalPath="/guide"
        keywords="호빠초보, 호빠처음, 호스트바초보자가이드, 건대호빠이용법, 호빠혼술, 호스트바초이스하는법, 호빠TC계산"
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" /> FIRST TIME VISITOR MANUAL
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          호빠가 처음이신가요? 초보자를 위한 7대 안심 이용 가이드
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          &ldquo;어색하지 않을까?&rdquo;, &ldquo;바가지 쓰면 어쩌지?&rdquo; 걱정 마세요.
          건대 W는 1:1 전담 실장이 입장부터 귀가까지 따뜻하고 편안하게 가이드해 드립니다.
        </p>
      </div>

      {/* 7 Tips Accordion-like cards */}
      <div className="space-y-5">
        {[
          {
            num: '01',
            title: '방문 전 전화/카톡으로 1:1 사전 예약하기',
            content: '당일 불쑥 오시는 것보다 1~2시간 전에 미리 전화나 카톡으로 연락 주시는 것이 훨씬 유리합니다. 선호하시는 선수 스타일(키, 비주얼, 성향)과 방문 인원, 무료 픽업 필요 여부를 말씀해 주시면 도착 즉시 최고의 룸과 에이스 라인업을 미리 세팅해 놓습니다.',
            badge: '필수 팁',
          },
          {
            num: '02',
            title: '초이스는 절대 눈치 보지 말고 당당하게 보기',
            content: '초이스는 손님의 당연한 권리입니다. 5명, 10명이 들어왔는데 마음에 쏙 드는 분이 없다면 눈치 보실 것 없이 실장에게 &ldquo;다른 분들도 더 보여주세요&rdquo;라고 말씀하시면 됩니다. 건대 W는 매일 100여 명이 출근하므로 원하시는 이상형을 찾으실 때까지 무한 초이스가 가능합니다.',
            badge: '가장 중요',
          },
          {
            num: '03',
            title: '혼자(혼술) 가는 것이 전혀 이상하지 않은 이유',
            content: '건대 W 방문 고객의 약 40% 이상이 1인 혼술 여성 고객입니다. 퇴근 후 스트레스가 심한 날, 친구에게도 털어놓지 못할 고민이 있을 때, 조용하고 아늑한 전용 룸에서 맛있는 술과 함께 다정한 대화 친구를 만나 힐링하실 수 있습니다.',
            badge: '혼술러 필독',
          },
          {
            num: '04',
            title: '선수와의 대화가 어색할까 봐 걱정된다면?',
            content: 'W의 에이스 선수들은 철저한 서비스 마인드와 풍부한 대화 매너 교육을 이수했습니다. 손님이 굳이 애써 말을 하지 않아도 편안한 분위기를 유도하며, 음악 선곡부터 가벼운 일상 토크까지 손님의 텐션에 100% 맞춰 드립니다.',
            badge: '매너 보장',
          },
          {
            num: '05',
            title: 'TC(시간당 봉사료) 계산법 정확히 이해하기',
            content: 'TC는 1시간당 50,000원입니다. 1시간 단위로 정산되며, 2시간 이용 시 100,000원입니다. 선수가 룸에 들어온 시점부터 시간이 카운트되며, 종료 15~20분 전에 담당 실장이 노크하고 연장 여부를 정중하게 여쭤보므로 시간 초과 걱정이 없습니다.',
            badge: '비용 팁',
          },
          {
            num: '06',
            title: '성향이 맞지 않을 땐 매너 있는 체인지 요청',
            content: '함께 놀다가 성향이 조금 안 맞거나 다른 스타일과도 대화해 보고 싶으시다면, 담당 실장을 벨로 부르셔서 귓속말이나 문자로 편하게 말씀해 주세요. 선수가 무안하지 않게 자연스러운 핑계로 다른 에이스로 즉시 교체해 드립니다.',
            badge: '실전 노하우',
          },
          {
            num: '07',
            title: '퇴실 시 투명한 정찰제 영수증 확인 & 무료 귀가 픽업',
            content: '자리가 끝나면 처음 고지받은 금액(기본 주류 세트 + 이용한 TC + 웨이터팁 5만)이 정확한지 확인하시고 결제하시면 됩니다. 늦은 시간 귀가하실 때도 실장에게 요청하시면 안전하게 택시 배차 및 인근 무료 픽업 차량으로 편안하게 귀가를 돕습니다.',
            badge: '안전 귀가',
          },
        ].map((guide) => (
          <div
            key={guide.num}
            className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 sm:p-7 space-y-3 relative hover:border-[#d4af37]/40 transition"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-gold-gradient font-serif">
                  {guide.num}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#edd98f]">
                  {guide.badge}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-white">{guide.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{guide.content}</p>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-[#17140a] via-[#241c08] to-[#17140a] border border-[#d4af37]/40 rounded-3xl p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">
          아직도 궁금하거나 망설여지는 부분이 있으신가요?
        </h2>
        <p className="text-xs sm:text-sm text-amber-200/90 max-w-xl mx-auto">
          &ldquo;혼자 가도 되나요?&rdquo;, &ldquo;지금 가면 어떤 선수가 있나요?&rdquo;
          사소한 질문도 언제든 친절하게 답해 드립니다.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="bg-[#d4af37] text-black font-extrabold py-3 px-6 rounded-xl hover:brightness-110 text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>실장 직통 전화 문의</span>
          </a>
          <a
            href={KAKAO_OPEN_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[#fee500] text-black font-extrabold py-3 px-6 rounded-xl hover:brightness-95 text-sm flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>카톡 1:1 상담</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="bg-[#171b28] border border-[#37405c] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#22283a] text-sm"
          >
            초보자 안심 예약하기
          </button>
        </div>
      </div>
    </div>
  );
};
