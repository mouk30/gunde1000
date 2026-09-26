import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Car,
  Wine,
  Users,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
  Award,
  ChevronRight,
  HelpCircle,
  PartyPopper,
} from 'lucide-react';
import {
  PHONE_NUMBER,
  KAKAO_OPEN_CHAT_URL,
  HERO_IMAGE,
  HOST_MODEL_IMAGE,
  PARTY_ROOM_IMAGE,
  HOST_STYLES,
  REVIEWS,
  FAQS,
} from '../data/seoContent';
import { PriceCalculator } from '../components/PriceCalculator';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
  onBookWithQuote: (quote: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onBookWithQuote,
}) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      <SEOHead
        title="건대호빠 W 더블유 | 1등 건대호스트바 공식 예약 & 주대 안내"
        description="건대호빠 1위 W(더블유) 공식 사이트. 건대입구역 3분, 매일 80~100명 에이스 출근, 투명 정찰제 주대 및 무료 픽업, 생일/단체 이벤트 혜택 제공."
        canonicalPath="/"
        keywords="건대호빠, 건대호스트바, 건대W, 건대호빠더블유, 건대호스트클럽, 구의호빠, 성수호빠, 군자호빠, 잠실호빠, 천호호빠, 왕십리호빠, 건대호빠가격, 건대호빠주대"
      />

      {/* Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center overflow-hidden rounded-b-3xl border-b border-[#252b3e]">
        {/* Background Image with Dark Vignette & Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="건대호빠 W 더블유 럭셔리 VIP 라운지 룸 인테리어"
            className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/80 to-[#08090d]/40" />
          <div className="absolute inset-0 bg-radial-glow opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b1e2c]/90 border border-[#d4af37]/40 shadow-lg backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-[#edd98f] tracking-wide">
              건대 1등 공식 프리미엄 호스트바 W &bull; 매일 100인 에이스 출근
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            압도적 수질과 투명한 정찰제,
            <br />
            <span className="text-gold-gradient font-serif">건대호빠 W (더블유)</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
            바가지 요금 없는 정찰제 주대 (14만원대~), 룸비 전액 면제(0원).
            <br className="hidden sm:inline" />
            건대입구역 도보 3분 &bull; 성수·구의·잠실·천호 서울 전역 무료 최고급 세단 픽업.
          </p>

          {/* Core USP Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 pt-2">
            {[
              '💎 100% 정찰제 주대',
              '👑 룸 이용료(룸티) 0원 면제',
              '🚗 서울 전역 무료 외제차 픽업',
              '✨ 100인 무한 초이스 보장',
              '🔒 1:1 완벽 프라이빗 비밀 보장',
            ].map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-lg bg-[#141724]/80 border border-[#2b3249] text-gray-200"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3.5 px-6 rounded-xl hover:brightness-110 shadow-xl shadow-[#d4af37]/25 transition text-sm sm:text-base"
            >
              <Sparkles className="w-4 h-4 fill-black" />
              <span>실시간 VIP 룸 예약</span>
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#161a29] hover:bg-[#202538] border border-[#3b4363] text-white font-bold py-3.5 px-6 rounded-xl transition text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>실장 직통 전화</span>
            </a>
          </div>

          {/* Quick Notice */}
          <p className="text-xs text-gray-400">
            💬 첫 방문 및 1인 혼술 환영 &bull; 24시간 실장 직통 전화 및 카톡 1:1 상담 환영
          </p>
        </div>
      </section>

      {/* 4 Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            WHY KONDAE W?
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            왜 수많은 고객님들이 건대 W를 선택할까요?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            강남보다 합리적인 가격, 강남 이상의 압도적 에이스 라인업과 세심한 케어
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0e111a] border border-[#20263b] rounded-2xl p-5 hover:border-[#d4af37]/40 transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#edd98f]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">100인 무한 초이스</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              매일 80~100여 명 이상의 20대 아이돌형, 모델형, 댄디 훈남형 에이스가 풀타임 출근. 마음에 드실 때까지 횟수 제한 없이 초이스 가능합니다.
            </p>
          </div>

          <div className="bg-[#0e111a] border border-[#20263b] rounded-2xl p-5 hover:border-[#d4af37]/40 transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">투명한 정찰제 주대</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              기본 양주 14만원대부터 시작! 룸 이용료(룸티)는 전액 면제(0원)이며, 선수 TC는 시간당 5만원 정찰제. 입장 전 총 견적 100% 명시.
            </p>
          </div>

          <div className="bg-[#0e111a] border border-[#20263b] rounded-2xl p-5 hover:border-[#d4af37]/40 transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">서울 전역 무료 픽업</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              건대입구역은 물론 성수, 구의, 군자, 잠실, 방이동, 천호, 왕십리 등 최고급 세단으로 1:1 왕복/편도 픽업을 전액 무료로 지원합니다.
            </p>
          </div>

          <div className="bg-[#0e111a] border border-[#20263b] rounded-2xl p-5 hover:border-[#d4af37]/40 transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">1:1 전담 실장 케어</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              첫 방문 고객도, 1인 혼술 고객도 어색하지 않게 입구부터 선호 스타일 매칭, 룸 진행, 안전한 귀가까지 실장이 1:1로 밀착 케어해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Price Calculator Section */}
      <section className="max-w-7xl mx-auto px-4">
        <PriceCalculator onBookWithQuote={onBookWithQuote} />
      </section>

      {/* Host Styles & Lineup Spotlight */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              ACE HOST LINEUP
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              건대 W 에이스 선수 스타일 분류
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              다양한 취향을 만족시키는 엄선된 라인업 &bull; 매일 신규 프로필 업데이트
            </p>
          </div>
          <button
            onClick={() => onNavigate('/hosts')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#edd98f] hover:text-white transition"
          >
            <span>에이스 라인업 전체보기</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOST_STYLES.map((host) => (
            <div
              key={host.id}
              className="bg-[#0e111a] border border-[#22283d] rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#161a29]">
                  <img
                    src={host.imageUrl}
                    alt={`${host.category} - 건대호빠 W 에이스`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#d4af37] text-black">
                      {host.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-gray-300 font-mono">
                      현재 출근 대기: <strong className="text-white">{host.count}명</strong>
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-white text-base group-hover:text-[#edd98f] transition">
                    {host.category}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                    {host.description}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {host.traits.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#161a27] text-gray-300 border border-[#232a3f]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 rounded-xl bg-[#191d2e] hover:bg-[#d4af37] text-gray-200 hover:text-black font-semibold text-xs transition"
                >
                  이 스타일로 초이스 예약
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIP Party Room & Birthday Feature Banner */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-[#2b334c] bg-[#0c0f18]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-6 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <PartyPopper className="w-3.5 h-3.5" />
                <span>생일파티 & 단체 VIP 모임 특전</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                생일파티, 브라이덜 샤워,
                <br />
                <span className="text-gold-gradient font-serif">특별한 날을 더욱 눈부시게</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                호텔 라운지급 감각적인 인테리어와 최고급 최신 사운드 방음 시설.
                사전 예약 시 <strong className="text-[#edd98f]">프리미엄 샴페인 1병 무료</strong> +
                파티 네온 레터링 장식 + 축하 기념 촬영 케어를 지원해 드립니다.
              </p>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>최대 10~15인 수용 가능한 대형 파티룸 구비</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>사전 예약 시 케이크 보관 및 깜짝 서프라이즈 세팅</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>단체 방문 시 무료 픽업 차량 2대 이상 동시 배차 가능</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('/party-events')}
                  className="bg-[#d4af37] text-black font-bold px-5 py-3 rounded-xl text-xs sm:text-sm hover:brightness-110 transition"
                >
                  파티룸 혜택 자세히 보기
                </button>
                <button
                  onClick={onOpenBooking}
                  className="bg-[#181d2c] border border-[#303854] text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm hover:bg-[#22293e] transition"
                >
                  생일 파티룸 바로 예약
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[300px]">
              <img
                src={PARTY_ROOM_IMAGE}
                alt="건대호빠 W VIP 생일파티 전용 룸"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0c0f18] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Beginner 4-Step Guide Teaser */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0e111a] border border-[#23293e] rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
                FIRST-TIME VISITOR GUIDE
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                호빠가 처음이신가요? 4단계로 안심하고 즐기는 W 이용법
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/guide')}
              className="text-xs sm:text-sm font-semibold text-[#edd98f] hover:text-white flex items-center gap-1 self-start sm:self-auto"
            >
              <span>초보자 필독 가이드 전문 보기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: '전화 / 카톡 편안한 문의',
                desc: '방문 인원, 시간, 무료 픽업 여부를 실장에게 가볍게 말씀해 주세요. 1분 만에 예약 완료!',
              },
              {
                step: '02',
                title: 'VIP 룸 배정 & 실장 미팅',
                desc: '도착하시면 전담 실장이 아늑한 룸으로 안내하며, 당일 주대와 선호하시는 선수 스타일을 조율합니다.',
              },
              {
                step: '03',
                title: '선수 무한 초이스',
                desc: '마음에 드실 때까지 에이스 선수를 편하게 초이스. 눈치 보실 필요 전혀 없습니다.',
              },
              {
                step: '04',
                title: '투명한 정찰제 결제',
                desc: '사전에 안내받은 금액 그대로만 깔끔하게 결제. 안전한 귀가 차량까지 실장이 끝까지 케어합니다.',
              },
            ].map((st) => (
              <div
                key={st.step}
                className="bg-[#141724] border border-[#232a3f] rounded-2xl p-5 relative space-y-2"
              >
                <span className="text-2xl font-black text-gold-gradient font-serif">
                  {st.step}
                </span>
                <h3 className="font-bold text-white text-sm">{st.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Customer Reviews Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
              REAL VERIFIED REVIEWS
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              리얼 방문 고객 생생 후기 (평점 4.9 ★★★★★)
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              실제 방문하신 고객님들의 100% 솔직한 내돈내산 평가
            </p>
          </div>
          <button
            onClick={() => onNavigate('/reviews')}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#edd98f] hover:text-white transition"
          >
            <span>리뷰 50+ 건 전체보기</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e111a] border border-[#22283d] rounded-2xl p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#edd98f] font-semibold text-[10px]">
                    {rev.tag}
                  </span>
                  <span className="text-amber-400 font-bold">★★★★★ 5.0</span>
                </div>
                <h3 className="font-bold text-white text-sm line-clamp-1">{rev.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-4">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#1e2436] flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-medium text-gray-300">{rev.author}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional SEO Fast Selector (Crucial for Google/Naver search rankings) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            REGIONAL COVERAGE
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            서울 전역 어디서든 1:1 무료 세단 픽업
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            방문 전 픽업 요청 시 전담 기사가 계신 곳까지 안전하게 모시러 갑니다
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { name: '건대입구 & 화양동', path: '/area/konkuk', sub: '도보 3분 / 즉시 픽업' },
            { name: '성수동 & 서울숲', path: '/area/seongsu', sub: '차량 5분 무료 세단' },
            { name: '구의동 & 아차산', path: '/area/guui', sub: '차량 3분 즉시 도착' },
            { name: '군자역 & 중곡동', path: '/area/gunja', sub: '차량 4분 무료 픽업' },
            { name: '잠실 & 방이동 & 송파', path: '/area/jamsil', sub: '영동대교 건너 8분' },
            { name: '천호 & 강동구', path: '/area/cheonho', sub: '천호대교 건너 10분' },
            { name: '왕십리 & 한양대', path: '/area/wangsimni', sub: '지하철 3정거장 7분' },
            { name: '동대문 & 장한평', path: '/area/dongdaemun', sub: '심야 피크 6~12분' },
          ].map((area) => (
            <div
              key={area.path}
              onClick={() => onNavigate(area.path)}
              className="cursor-pointer bg-[#0e111a] border border-[#21263a] hover:border-[#d4af37] rounded-xl p-3.5 transition group text-left"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs sm:text-sm text-white group-hover:text-[#edd98f] transition">
                  {area.name}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#edd98f]" />
              </div>
              <div className="text-[11px] text-emerald-400 font-medium">{area.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top 3 FAQs Accordion Teaser */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="text-2xl font-extrabold text-white">가장 자주 묻는 질문 BEST</h2>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 3).map((f) => (
            <div
              key={f.id}
              className="bg-[#0e111a] border border-[#21263b] rounded-2xl p-5 space-y-2 text-left"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <HelpCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{f.question}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed pl-6">
                {f.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <button
            onClick={() => onNavigate('/faq')}
            className="text-xs sm:text-sm font-semibold text-[#edd98f] hover:underline"
          >
            질문과 답변 15가지 전체 확인하기 &rarr;
          </button>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-[#17140a] via-[#2c2207] to-[#17140a] border border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              오늘 밤, 가장 특별한 주인공은 <br className="sm:hidden" />
              <span className="text-gold-gradient font-serif">당신입니다</span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80">
              투명한 정찰제, 서울 전역 무료 픽업, 100인 에이스 라인업이 준비되어 있습니다.
              부담 없이 지금 바로 문의하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#d4af37] via-[#edd98f] to-[#aa801a] text-black font-extrabold py-3.5 px-6 rounded-xl hover:brightness-110 shadow-xl shadow-[#d4af37]/30 transition text-sm"
            >
              실시간 VIP 룸 예약하기
            </button>
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="w-full sm:w-auto flex-1 bg-[#12141f] border border-[#d4af37]/50 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-[#1b1f2e] transition text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>실장 직통 전화 연결</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
