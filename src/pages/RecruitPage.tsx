import React, { useState } from 'react';
import { Briefcase, CheckCircle2, Phone, DollarSign, Home, Shield, Award, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

export const RecruitPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">
      <SEOHead
        title="건대호빠 선수 구인구직 & 2026 에이스 상시 캐스팅 | 건대 W"
        description="건대 1등 호스트바 W(더블유) 선수 상시 모집. TC 당일 100% 현금 지급, 풀옵션 전용 숙소 지원, 텃세 0%, 초보자 1:1 맞춤 교육. 건대호빠 구인 1위."
        canonicalPath="/recruit"
        keywords="건대호빠구인, 건대호빠선수모집, 호스트바구인, 호빠알바, 건대호빠알바, 건대W구인"
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" /> 2026 HOST CASTING
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          건대 W 에이스 선수 상시 모집
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          강북 최다 손님 유치 &bull; 일한 만큼 100% 당일 정산 &bull; 텃세 없는 가족 같은 분위기.
          <br />
          당신의 끼와 매력을 최고 대우로 인정해 드립니다.
        </p>
      </div>

      {/* 4 Benefits Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <DollarSign className="w-5 h-5" /> 1. 당일 TC 100% 현금 / 즉시 계좌 이체
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            퇴근 시 일한 시간만큼 단 1원의 누락 없이 당일 즉시 전액 지급해 드립니다. 꽁비 없음, 정직한 정산.
          </p>
        </div>

        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <Home className="w-5 h-5" /> 2. 매장 인근 풀옵션 숙소 무상 지원
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            지방 거주자 및 자취 희망자를 위해 건대입구역 인근 쾌적하고 깔끔한 전용 원룸 숙소를 지원합니다.
          </p>
        </div>

        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-[#edd98f] font-bold text-sm">
            <Shield className="w-5 h-5" /> 3. 텃세 0% &bull; 신규자 전담 보호 시스템
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            기존 선수들의 텃세나 부당한 대우를 철저히 금지하며, 신규자가 빠르게 적응할 수 있도록 실장이 직접 방을 챙겨드립니다.
          </p>
        </div>

        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-2">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
            <Award className="w-5 h-5" /> 4. 초보자 1:1 맞춤 스타일링 & 대화 코칭
          </div>
          <p className="text-xs text-gray-300 leading-relaxed">
            호빠 경험이 없으셔도 괜찮습니다. 헤어, 패션, 룸 대화법, 테이블 매너까지 친절하게 코칭해 드립니다.
          </p>
        </div>
      </div>

      {/* Qualifications */}
      <div className="bg-[#121522] border border-[#252c42] rounded-2xl p-6 space-y-3 text-xs text-gray-300">
        <h3 className="text-sm font-bold text-white">지원 자격 & 우대 조건</h3>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>만 20세 이상 군필 또는 면제자 (대학생, 휴학생, 투잡 알바 환영)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>신장 175cm 이상, 단정하고 깔끔한 외모와 밝은 성격을 소유하신 분</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>친구와 동반 입사 대환영 (함께 초이스 들어갈 수 있도록 배려)</span>
          </div>
        </div>
      </div>

      {/* Simple Apply Box */}
      <div className="bg-[#0e111a] border border-[#23293e] rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-lg font-bold text-white">비공개 1:1 면접 지원서 작성</h3>
        {submitted ? (
          <div className="bg-[#161a29] border border-emerald-500/40 rounded-xl p-5 text-center text-xs text-emerald-400">
            지원서가 접수되었습니다. 면접 담당 실장이 연락드리겠습니다.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <input
              type="text"
              required
              placeholder="이름 (또는 가명)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#151825] border border-[#2b3248] rounded-xl px-3.5 py-2.5 text-white"
            />
            <input
              type="tel"
              required
              placeholder="연락처 (010-0000-0000)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-[#151825] border border-[#2b3248] rounded-xl px-3.5 py-2.5 text-white"
            />
            <input
              type="text"
              placeholder="나이 (예: 24세)"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="bg-[#151825] border border-[#2b3248] rounded-xl px-3.5 py-2.5 text-white"
            />
            <input
              type="text"
              placeholder="키 (예: 182cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="bg-[#151825] border border-[#2b3248] rounded-xl px-3.5 py-2.5 text-white"
            />
            <button
              type="submit"
              className="sm:col-span-2 bg-[#d4af37] text-black font-bold py-3 rounded-xl hover:brightness-110 text-xs"
            >
              면접 지원서 전송
            </button>
          </form>
        )}

        <div className="pt-3 text-center text-xs text-gray-400 space-y-2">
          <p>빠른 면접은 전화나 카톡으로 연락 주시면 당일 바로 면접 가능합니다.</p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="inline-flex items-center gap-1.5 bg-[#d4af37] text-black font-bold py-2 px-4 rounded-xl hover:brightness-110 text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>실장 직통 전화 면접</span>
            </a>
            <a
              href={KAKAO_OPEN_CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#fee500] text-black font-bold py-2 px-4 rounded-xl hover:brightness-95 text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>카톡 1:1 면접 상담</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
