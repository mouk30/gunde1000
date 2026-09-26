import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, Sparkles, MapPin, ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areaDropdownOpen, setAreaDropdownOpen] = useState(false);

  const navLinks = [
    { label: '홈', path: '/' },
    { label: '정찰제 주대', path: '/price' },
    { label: 'W 시스템', path: '/system' },
    { label: '초보자 가이드', path: '/guide' },
    { label: '에이스 라인업', path: '/hosts' },
    { label: '생일/파티 이벤트', path: '/party-events' },
    { label: '고객 리얼 후기', path: '/reviews' },
    { label: '자주 묻는 질문', path: '/faq' },
    { label: '무료 픽업 & 위치', path: '/location-pickup' },
    { label: '견적 계산기', path: '/calculator' },
    { label: '선수 구인구직', path: '/recruit' },
  ];

  const regionalLinks = [
    { name: '건대입구 & 화양동', path: '/area/konkuk' },
    { name: '성수동 & 서울숲', path: '/area/seongsu' },
    { name: '구의동 & 아차산', path: '/area/guui' },
    { name: '군자역 & 중곡동', path: '/area/gunja' },
    { name: '잠실 & 방이동 & 송파', path: '/area/jamsil' },
    { name: '천호 & 강동구', path: '/area/cheonho' },
    { name: '왕십리 & 한양대', path: '/area/wangsimni' },
    { name: '동대문 & 장한평', path: '/area/dongdaemun' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setAreaDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#08090d]/95 backdrop-blur-md border-b border-[#222533]">
      {/* Top micro bar for high-conversion trust elements */}
      <div className="bg-gradient-to-r from-[#171407] via-[#2c2207] to-[#171407] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-[#e6ca65]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>🔴 오늘 출근 선수 98명 | VIP 룸 대기 가능 | 룸비 0원 전액 면제</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-amber-200/90">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> 100% 바가지 요금 없는 정찰제 보장
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" /> 건대입구역 1번·2번 출구 도보 3분
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#f3e7b3] to-[#8c6d1f] p-[2px] shadow-lg shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0f17] rounded-[10px] flex items-center justify-center">
              <span className="text-xl font-black text-gold-gradient font-serif tracking-tighter">W</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#edd98f] transition-colors">
                건대호빠 <span className="text-[#d4af37]">W 더블유</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-[#d4af37]/20 text-[#edd98f] rounded border border-[#d4af37]/40">
                공식 1등
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">
              프리미엄 호스트바 &bull; 100인 에이스 &bull; 24시간 실시간 예약
            </p>
          </div>
        </div>

        {/* Desktop Quick Contacts */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="flex items-center gap-2 bg-[#171923] hover:bg-[#202434] border border-[#2d3248] text-white px-4 py-2 rounded-xl text-sm font-semibold transition shadow hover:border-[#d4af37]"
          >
            <Phone className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#f1dc96]">실장 직통 전화</span>
          </a>
          <a
            href={KAKAO_OPEN_CHAT_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#fee500]/10 hover:bg-[#fee500]/20 border border-[#fee500]/30 text-[#fee500] px-4 py-2 rounded-xl text-sm font-semibold transition hover:border-[#fee500]"
          >
            <MessageCircle className="w-4 h-4 fill-[#fee500]" />
            <span>카톡 1:1 상담</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-bold px-4 py-2 rounded-xl text-sm hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition"
          >
            <Calendar className="w-4 h-4" />
            <span>실시간 VIP 룸 예약</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Call */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
            className="bg-[#d4af37] text-black p-2 rounded-lg font-bold text-xs flex items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xs:inline">전화</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white bg-[#171923] rounded-lg border border-[#2d3248]"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:block bg-[#0e1017] border-t border-[#1b1f2e]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`px-3.5 py-2.5 font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#edd98f] font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#edd98f]" />
                  )}
                </button>
              );
            })}

            {/* Regional Dropdown for high-SEO discoverability */}
            <div className="relative">
              <button
                onClick={() => setAreaDropdownOpen(!areaDropdownOpen)}
                className={`flex items-center gap-1 px-3.5 py-2.5 font-medium transition-colors ${
                  currentPath.startsWith('/area/')
                    ? 'text-[#edd98f] font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>지역별 맞춤 픽업 (성수/구의/잠실/천호 등)</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {areaDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-[#141724] border border-[#2c324a] rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-gray-400 border-b border-[#23283b] uppercase">
                    지역별 1:1 무료 세단 픽업 안내
                  </div>
                  {regionalLinks.map((r) => (
                    <button
                      key={r.path}
                      onClick={() => handleNav(r.path)}
                      className="w-full text-left px-4 py-2 text-xs text-gray-200 hover:bg-[#202538] hover:text-[#edd98f] flex items-center justify-between"
                    >
                      <span>{r.name}</span>
                      <span className="text-[10px] text-emerald-400">무료 픽업</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="text-xs text-gray-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>24시간 연중무휴 상시 영업</span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f17] border-b border-[#23283b] px-4 py-4 space-y-3">
          <div className="grid grid-cols-3 gap-2 pb-3 border-b border-[#1f2334]">
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="flex items-center justify-center gap-1.5 bg-[#d4af37] text-black font-bold py-2.5 rounded-xl text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-black" /> 실장 직통 전화
            </a>
            <a
              href={KAKAO_OPEN_CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#fee500] text-black font-bold py-2.5 rounded-xl text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" /> 카톡 1:1 상담
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-1.5 bg-[#1f2436] border border-[#333a54] text-white font-bold py-2.5 rounded-xl text-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" /> 실시간 예약
            </button>
          </div>

          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">주요 메뉴</div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium ${
                  currentPath === link.path
                    ? 'bg-[#d4af37]/20 text-[#edd98f] border border-[#d4af37]/30'
                    : 'text-gray-300 hover:bg-[#161a29]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1f2334]">
            <div className="text-xs font-semibold text-[#d4af37] mb-2 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 지역별 맞춤 SEO 페이지 (무료 픽업)
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {regionalLinks.map((r) => (
                <button
                  key={r.path}
                  onClick={() => handleNav(r.path)}
                  className="text-left px-3 py-1.5 rounded-lg text-xs text-gray-300 hover:bg-[#161a29] hover:text-[#edd98f]"
                >
                  &bull; {r.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
