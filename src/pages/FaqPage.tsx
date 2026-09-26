import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { FAQS, PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

export const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2', 'faq-3']);
  const [categoryFilter, setCategoryFilter] = useState<string>('전체');

  const toggleOpen = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCategory = categoryFilter === '전체' || f.category === categoryFilter;
    const matchesSearch =
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      <SEOHead
        title="건대호빠 자주 묻는 질문 FAQ BEST 15 | 건대 W"
        description="건대호빠 이용 전 가장 많이 하시는 질문과 답변. 주대 추가금 여부, 선수 TC 기준, 1인 혼술 방문 팁, 무료 픽업 신청 방법, 영업시간 안내."
        canonicalPath="/faq"
        keywords="건대호빠FAQ, 건대호빠질문, 건대호빠가격궁금증, 호빠혼술가능여부, 건대W질문"
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#edd98f] text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          자주 묻는 질문 (FAQ)
        </h1>
        <p className="text-xs sm:text-sm text-gray-300">
          방문 전 궁금하신 점들을 명쾌하게 정리해 드립니다.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="궁금한 내용을 검색해보세요 (예: 주대, TC, 픽업, 혼술, 카드결제 등)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0e111a] border border-[#23293e] rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {['전체', '주대/가격', '시스템/초이스', '첫방문/혼술', '픽업/위치'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                categoryFilter === cat
                  ? 'bg-[#d4af37] text-black'
                  : 'bg-[#121520] text-gray-300 hover:bg-[#1a1f30] border border-[#252c40]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#0e111a] border border-[#21263b] rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#131725] transition"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#1c2235] text-[#edd98f] border border-[#2d3652]">
                      {faq.category}
                    </span>
                    <span className="text-sm font-bold text-white">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1a1f30] mt-2 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 text-gray-400 text-sm">
            검색 결과가 없습니다. 실장 직통 전화로 문의하시면 즉시 안내해 드립니다.
          </div>
        )}
      </div>

      {/* Help Hotline Banner */}
      <div className="bg-[#121522] border border-[#252c42] rounded-2xl p-6 text-center space-y-3">
        <h3 className="text-base font-bold text-white">
          찾으시는 내용이 없으신가요?
        </h3>
        <p className="text-xs text-gray-400">
          24시간 열려 있는 담당 실장 직통 전화로 문의해 주시면 친절하게 설명해 드립니다.
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-1">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="inline-flex items-center gap-2 bg-[#d4af37] text-black font-bold py-2.5 px-6 rounded-xl hover:brightness-110 text-xs"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span>실장 직통 전화 연결</span>
          </a>
          <a
            href={KAKAO_OPEN_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#fee500] text-black font-bold py-2.5 px-6 rounded-xl hover:brightness-95 text-xs"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>카톡 1:1 상담</span>
          </a>
        </div>
      </div>
    </div>
  );
};
