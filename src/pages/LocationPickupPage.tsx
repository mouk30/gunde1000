import React, { useState } from 'react';
import { MapPin, Car, Phone, Navigation, Clock, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS_TEXT, KAKAO_OPEN_CHAT_URL } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';

export const LocationPickupPage: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupSent, setPickupSent] = useState(false);

  const handlePickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation || !phone) return;
    setPickupSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
      <SEOHead
        title="오시는 길 & 서울 전역 무료 외제 세단 픽업 | 건대 W"
        description="건대호빠 W 오시는 길 안내. 건대입구역 1번/2번 출구 도보 3분. 무료 발렛 파킹 제공. 성수, 구의, 군자, 잠실, 천호, 왕십리 등 1:1 최고급 세단 무료 픽업."
        canonicalPath="/location-pickup"
        keywords="건대호빠위치, 건대호빠오시는길, 건대호빠픽업, 건대호빠주차, 건대호스트바위치"
      />

      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
          <Car className="w-3.5 h-3.5" /> VIP PICKUP & LOCATION
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          오시는 길 & 무료 픽업 서비스
        </h1>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          건대입구역 1번/2번 출구에서 도보 3분 초역세권!
          <br />
          서울 및 수도권 어디서든 전화 한 통이면 최고급 세단으로 모시러 갑니다.
        </p>
      </div>

      {/* Subway & Address Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#edd98f] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">지하철 이용 시</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            <strong className="text-white">2호선 / 7호선 건대입구역</strong> 1번 또는 2번 출구로 나오신 후 먹자골목 방향으로 도보 3분 거리입니다.
          </p>
        </div>

        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">자차 이용 시 (무료 발렛)</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            매장 도착 5분 전 실장에게 전화 주시면 전담 발렛 직원이 대기하여 안전하게 무료 주차를 도와드립니다.
          </p>
        </div>

        <div className="bg-[#0e111a] border border-[#23293e] rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white text-base">24시간 상시 픽업</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            술자리가 끝난 후 안전한 귀가를 위한 샌딩 및 대리운전 신속 배차 서비스도 무상 지원해 드립니다.
          </p>
        </div>
      </div>

      {/* Visual Map Representation */}
      <div className="bg-[#0e111a] border border-[#23293e] rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#1f2538] gap-2">
          <div>
            <span className="text-xs text-[#d4af37] font-semibold">초역세권 중심가</span>
            <h3 className="text-lg font-bold text-white">{ADDRESS_TEXT}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`}
              className="flex items-center gap-1.5 bg-[#d4af37] text-black font-bold py-2.5 px-4 rounded-xl text-xs self-start sm:self-auto hover:brightness-110"
            >
              <Phone className="w-3.5 h-3.5 fill-black" />
              <span>실장 직통 전화</span>
            </a>
            <a
              href={KAKAO_OPEN_CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-[#fee500] text-black font-bold py-2.5 px-4 rounded-xl text-xs self-start sm:self-auto hover:brightness-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>카톡 1:1 상담</span>
            </a>
          </div>
        </div>

        {/* Map Blueprint Box */}
        <div className="h-64 sm:h-80 w-full bg-[#131622] rounded-2xl border border-[#262c41] relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative text-center space-y-3 p-6 max-w-md">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#edd98f] flex items-center justify-center animate-bounce">
              <Navigation className="w-8 h-8" />
            </div>
            <div className="text-white font-bold text-base">
              건대입구역 1번 / 2번 출구 도보 3분
            </div>
            <p className="text-xs text-gray-400">
              네비게이션 또는 택시 기사님께 &ldquo;건대입구역 1번 출구 먹자골목 입구&rdquo;를 말씀하시면 가장 가깝습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Pickup Request Form */}
      <div className="bg-gradient-to-br from-[#121522] to-[#0c0e17] border border-[#2c334b] rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            FREE VIP SEDAN PICKUP
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            서울 전 지역 1:1 무료 세단 픽업 신청
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            계신 위치와 연락처를 남겨주시면 5분 내로 배차 후 전담 기사가 출발합니다.
          </p>
        </div>

        {pickupSent ? (
          <div className="bg-[#171c2b] border border-emerald-500/40 rounded-2xl p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-white">픽업 신청이 접수되었습니다!</h4>
            <p className="text-xs text-gray-300">
              담당 실장이 확인 후 3분 내로 전화드려 정확한 픽업 위치와 차량 번호를 안내해 드립니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handlePickupSubmit} className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            <div className="sm:col-span-5">
              <input
                type="text"
                required
                placeholder="현재 계신 장소 (예: 성수역 3번출구, 방이먹자 입구 등)"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full bg-[#181d2e] border border-[#303852] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="sm:col-span-4">
              <input
                type="tel"
                required
                placeholder="연락처 (010-0000-0000)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#181d2e] border border-[#303852] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
              />
            </div>
            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full h-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold py-3 px-4 rounded-xl transition text-xs flex items-center justify-center gap-1.5"
              >
                <Car className="w-4 h-4 fill-black" />
                <span>무료 픽업 차량 부르기</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
