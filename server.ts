import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';
const APP_URL = process.env.APP_URL || 'https://kondaew.com';

app.use(express.json());

// List of all SEO Routes for Sitemap & Bot Crawling
export const SEO_ROUTES = [
  { path: '/', title: '건대호빠 W 더블유 | 1등 공식 메인', priority: '1.0', changefreq: 'daily' },
  { path: '/price', title: '건대호빠 정찰제 주대 및 투명 가격표', priority: '0.9', changefreq: 'daily' },
  { path: '/system', title: '건대 호스트바 W 시스템 & 100인 무한 초이스', priority: '0.9', changefreq: 'weekly' },
  { path: '/guide', title: '초보자 첫방문 필독 가이드 & 7대 꿀팁', priority: '0.9', changefreq: 'weekly' },
  { path: '/hosts', title: '에이스 선수 라인업 & 스타일별 초이스', priority: '0.9', changefreq: 'daily' },
  { path: '/party-events', title: '생일파티 & VIP 럭셔리 단체룸 이벤트', priority: '0.8', changefreq: 'weekly' },
  { path: '/reviews', title: '리얼 방문 고객 솔직 후기 & 생생 리뷰', priority: '0.8', changefreq: 'daily' },
  { path: '/faq', title: '자주 묻는 질문 BEST 15 (혼술/픽업/주대)', priority: '0.8', changefreq: 'weekly' },
  { path: '/location-pickup', title: '오시는 길 & 서울 전역 무료 외제차 픽업', priority: '0.8', changefreq: 'weekly' },
  { path: '/calculator', title: '실시간 정찰제 주대 계산기', priority: '0.8', changefreq: 'daily' },
  { path: '/booking', title: '실시간 VIP 룸 예약 & 빠른 문의', priority: '0.9', changefreq: 'daily' },
  { path: '/recruit', title: '선수 구인구직 & 상시 캐스팅 (당일지급/숙소지원)', priority: '0.7', changefreq: 'weekly' },
  // Regional Target SEO Pages
  { path: '/area/konkuk', title: '건대입구역 맛집거리 1등 호빠 W', priority: '0.9', changefreq: 'daily' },
  { path: '/area/seongsu', title: '성수동 서울숲 핫플레이스 호스트바 추천', priority: '0.9', changefreq: 'weekly' },
  { path: '/area/guui', title: '구의동 아차산 광진구 프리미엄 호빠', priority: '0.8', changefreq: 'weekly' },
  { path: '/area/gunja', title: '군자역 중곡동 여성전용 클럽 호스트바', priority: '0.8', changefreq: 'weekly' },
  { path: '/area/jamsil', title: '잠실 방이동 송파 호스트바 무료 픽업', priority: '0.8', changefreq: 'weekly' },
  { path: '/area/cheonho', title: '천호 강동구 호빠 정찰제 예약', priority: '0.8', changefreq: 'weekly' },
  { path: '/area/wangsimni', title: '왕십리 한양대 성동구 대표 호빠 W', priority: '0.8', changefreq: 'weekly' },
  { path: '/area/dongdaemun', title: '동대문 장한평 답십리 호스트바 추천', priority: '0.8', changefreq: 'weekly' },
];

// 1. Dynamic Robots.txt for Googlebot, Naver Yeti, Daumoa, Bingbot
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /
Sitemap: ${APP_URL}/sitemap.xml

User-agent: Yeti
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Daumoa
Allow: /

User-agent: Bingbot
Allow: /
`);
});

// 2. Dynamic XML Sitemap for Google Search Console & Naver Search Advisor
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  res.type('application/xml');
  const now = new Date().toISOString().split('T')[0];
  const urlEntries = SEO_ROUTES.map((route) => {
    return `  <url>
    <loc>${APP_URL}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`);
});

// 3. RSS Feed for Naver Blog/Webmaster RSS reader
app.get(['/feed.xml', '/rss.xml'], (_req: Request, res: Response) => {
  res.type('application/xml');
  const now = new Date().toUTCString();
  const items = SEO_ROUTES.map((route) => {
    return `    <item>
      <title><![CDATA[${route.title}]]></title>
      <link>${APP_URL}${route.path}</link>
      <description><![CDATA[건대호빠 1등 W(더블유) ${route.title} - 정찰제 주대, 100여명 에이스 출근, 무료 픽업]]></description>
      <pubDate>${now}</pubDate>
      <guid>${APP_URL}${route.path}</guid>
    </item>`;
  }).join('\n');

  res.send(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>건대호빠 W 더블유 공식 피드</title>
    <link>${APP_URL}</link>
    <description>건대 1등 호스트바 W 실시간 주대, 예약 및 가이드 피드</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`);
});

// 4. API Endpoints
// Live Status: on-duty host count, room availability, special notice
app.get('/api/live-status', (_req: Request, res: Response) => {
  // Realistic dynamic range based on hour
  const hour = new Date().getHours();
  const isNight = hour >= 19 || hour < 6;
  const onDutyHosts = isNight ? Math.floor(88 + Math.random() * 15) : 75;
  const availableRooms = isNight ? Math.max(2, Math.floor(6 - Math.random() * 4)) : 8;

  res.json({
    status: 'ONLINE',
    onDutyHosts,
    availableRooms,
    totalRooms: 16,
    avgChoiceTimeMins: '3분 내 즉시',
    pickupReadyCars: 3,
    currentTime: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    managerHotline: '010-7700-9100',
    kakaoUrl: 'https://open.kakao.com/o/snjsbdKi',
    notice: '오늘 에이스 선수 대거 출근 완료! 단체룸 & 생일 이벤트 샴페인 서비스 진행 중',
  });
});

// Price Calculator Endpoint
app.post('/api/calculate', (req: Request, res: Response) => {
  const { guests = 1, hours = 2, liquorType = 'whiskey12', extraBottles = 0 } = req.body;

  let baseLiquorPrice = 140000;
  let liquorName = '기본 양주 12년산 세트 (골든블루/윈저 1병 + 과일안주 + 음료/맥주)';

  if (liquorType === 'whiskey17') {
    baseLiquorPrice = 180000;
    liquorName = '프리미엄 17년산 세트 (윈저17/임페리얼17 + 고급과일 + 음료 무제한)';
  } else if (liquorType === 'single_malt') {
    baseLiquorPrice = 240000;
    liquorName = '싱글몰트 세트 (발베니/맥캘란 + 특선 카나페 + 음료 무제한)';
  } else if (liquorType === 'champagne') {
    baseLiquorPrice = 210000;
    liquorName = 'VIP 샴페인 세트 (모엣샹동/뵈브클리코 + 모듬과일 치즈플래터)';
  }

  const extraBottlePrice = extraBottles * (baseLiquorPrice * 0.7);
  const tcRatePerHour = 50000;
  const totalTc = guests * hours * tcRatePerHour;
  const roomFee = 0; // W(더블유)는 룸비 전액 무료!
  const waiterTip = 50000; // 방 1회 고정 팁
  const totalPrice = baseLiquorPrice + extraBottlePrice + totalTc + roomFee + waiterTip;

  res.json({
    guests,
    hours,
    liquorName,
    baseLiquorPrice,
    extraBottles,
    extraBottlePrice,
    totalTc,
    tcRatePerHour,
    roomFee,
    roomFeeDiscount: '룸 이용료 전액 면제 (0원 이벤트)',
    waiterTip,
    totalPrice,
    perPersonAvg: Math.round(totalPrice / Math.max(1, guests)),
  });
});

// Reservation Endpoint
const memoryReservations: any[] = [];
app.post('/api/reserve', (req: Request, res: Response) => {
  const { name, phone, date, time, guests, notes, pickupNeeded, pickupLocation } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ success: false, message: '예약자 성함과 연락처를 입력해주세요.' });
  }

  const reservation = {
    id: 'RES-' + Date.now().toString().slice(-6),
    name,
    phone,
    date: date || new Date().toISOString().split('T')[0],
    time: time || '21:00',
    guests: guests || 2,
    notes: notes || '',
    pickupNeeded: Boolean(pickupNeeded),
    pickupLocation: pickupLocation || '',
    createdAt: new Date().toISOString(),
    status: 'CONFIRMED_PENDING_CALL',
  };

  memoryReservations.push(reservation);

  return res.json({
    success: true,
    message: '예약 신청이 접수되었습니다. 담당 실장이 3분 내로 안내 전화를 드립니다.',
    reservation,
  });
});

// Reviews API
app.get('/api/reviews', (_req: Request, res: Response) => {
  res.json({
    totalCount: 486,
    avgRating: 4.9,
    categories: ['전체', '혼술 방문', '생일/파티', '첫방문', '친구모임'],
  });
});

// Vite Middleware for Dev / Static Files for Prod
async function startServer() {
  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[SEO-Fullstack] Konkuk Hostbar W Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
