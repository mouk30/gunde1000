import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL, ADDRESS_TEXT } from '../data/seoContent';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const mainPages = [
    { label: '홈 공식 메인', path: '/' },
    { label: '정찰제 주대 & 가격표', path: '/price' },
    { label: 'W 프리미엄 시스템', path: '/system' },
    { label: '초보자 첫방문 필독 가이드', path: '/guide' },
    { label: '에이스 선수 라인업 & 스타일', path: '/hosts' },
    { label: '생일파티 & VIP 룸 이벤트', path: '/party-events' },
    { label: '고객 리얼 생생 후기', path: '/reviews' },
    { label: '자주 묻는 질문 FAQ 15선', path: '/faq' },
    { label: '오시는 길 & 무료 픽업 안내', path: '/location-pickup' },
    { label: '실시간 정찰제 견적 계산기', path: '/calculator' },
    { label: '선수 구인구직 & 상시 캐스팅', path: '/recruit' },
  ];

  const regionalPages = [
    { label: '건대입구 & 화양동 호빠', path: '/area/konkuk' },
    { label: '성수동 & 서울숲 호빠', path: '/area/seongsu' },
    { label: '구의동 & 아차산 호빠', path: '/area/guui' },
    { label: '군자역 & 중곡동 호빠', path: '/area/gunja' },
    { label: '잠실 & 방이동 호빠', path: '/area/jamsil' },
    { label: '천호 & 강동구 호빠', path: '/area/cheonho' },
    { label: '왕십리 & 한양대 호빠', path: '/area/wangsimni' },
    { label: '동대문 & 장한평 호빠', path: '/area/dongdaemun' },
  ];

  const keywordTags = [
    '건대호빠', '건대호스트바', '건대W', '건대호빠더블유', '건대호빠가격', '건대호빠주대',
    '건대호빠초이스', '건대호빠후기', '건대여성전용룸', '구의호빠', '성수호빠', '서울숲호빠',
    '군자호빠', '잠실호빠', '방이동호빠', '천호호빠', '왕십리호빠', '동대문호빠', '호빠초보자가이드',
    '호스트바시스템', '건대호빠예약', '건대생일파티룸', '건대호빠선수구인',
  ];

  return (
    <footer className="bg-[#050608] border-t border-[#1a1e2b] text-gray-400 text-xs pt-12 pb-28 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Brand & Contact Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#171b26]">
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#8c6d1f] flex items-center justify-center font-serif font-black text-black text-lg">
                W
              </div>
              <span className="text-xl font-black text-white">
                건대호빠 <span className="text-[#d4af37]">W (더블유)</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              건대입구역 1번/2번 출구 도보 3분. 강북 최대 규모 100인 에이스 출근, 투명 정찰제 주대 및 전액 무료 룸비 정책을 고수하는 프리미엄 공식 호스트바입니다.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>사업자 정식 등록 & 합법 주류 판매 & 바가지 근절 보증</span>
            </div>
          </div>

          {/* Quick Contact Col */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">24시간 예약 & 1:1 상담</h4>
            <div className="space-y-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#edd98f] transition group"
              >
                <div className="p-2 rounded-xl bg-[#161a27] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400">대표 실장 직통 전화</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#edd98f] transition">지금 바로 전화 연결</div>
                </div>
              </a>
              <a
                href={KAKAO_OPEN_CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-gray-300 hover:text-[#fee500] transition group"
              >
                <div className="p-2 rounded-xl bg-[#161a27] text-[#fee500] group-hover:bg-[#fee500] group-hover:text-black transition">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400">카카오톡 1:1 오픈채팅</div>
                  <div className="text-sm font-bold text-[#fee500]">실시간 상담 바로가기</div>
                </div>
              </a>
            </div>
          </div>

          {/* Operating & Location Col */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide">영업시간 및 오시는 길</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>영업시간: 매일 저녁 20:00 ~ 익일 오전 08:00 (365일 연중무휴)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{ADDRESS_TEXT}</span>
              </div>
              <div className="text-emerald-400 pl-6">
                &bull; 건대, 성수, 구의, 군자, 잠실, 천호 전 지역 무료 세단 픽업 지원
              </div>
            </div>
          </div>
        </div>

        {/* Complete Sitemap Links for Maximum SEO Crawling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-[#171b26]">
          {/* Main Services */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
              건대 W 주요 안내 페이지 (Sitemap)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {mainPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => onNavigate(page.path)}
                  className="text-left text-xs text-gray-400 hover:text-[#edd98f] flex items-center gap-1 transition"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>{page.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Regional Landing Pages */}
          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
              지역별 맞춤 픽업 & SEO 허브
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
              {regionalPages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => onNavigate(page.path)}
                  className="text-left text-xs text-gray-400 hover:text-[#edd98f] flex items-center gap-1 transition"
                >
                  <ChevronRight className="w-3 h-3 text-[#d4af37]" />
                  <span>{page.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Keywords Tag Cloud */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            구글 & 네이버 검색 인기 키워드 (SEO Keywords)
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {keywordTags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded bg-[#10131d] border border-[#1e2333] text-gray-400 hover:text-white"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="text-[11px] text-gray-400 space-y-1 text-center md:text-left">
          <p>
            상호: 건대호빠 W 더블유 | 대표 담당자: 강실장 | 24시간 실시간 예약센터 | 위치: 서울특별시 광진구 능동로 건대입구역 도보 3분
          </p>
          <p>
            본 웹사이트는 청소년 보호법에 따라 성인(만 19세 이상)을 대상으로 정보를 제공하며, 허위 광고 및 바가지 요금 없는 투명한 정찰제 운영을 준수합니다.
          </p>
          <p className="text-gray-400 pt-2">
            &copy; 2026 KONDAE W HOST BAR. All Rights Reserved. Designed for Maximum Search Visibility & Premium Customer Experience.
          </p>
        </div>
      </div>
    </footer>
  );
};
