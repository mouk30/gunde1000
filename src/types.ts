export interface NavItem {
  id: string;
  label: string;
  path: string;
  isRegional?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  tag: '혼술 방문' | '생일/파티' | '첫방문' | '친구모임';
  title: string;
  content: string;
  hostStylePref?: string;
}

export interface HostStyle {
  id: string;
  category: string;
  badge: string;
  description: string;
  traits: string[];
  imageUrl: string;
  count: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: '주대/가격' | '시스템/초이스' | '첫방문/혼술' | '픽업/위치';
}

export interface RegionalSEOData {
  slug: string;
  areaName: string;
  title: string;
  metaDesc: string;
  subwayInfo: string;
  pickupTime: string;
  tagline: string;
  overview: string;
  specialBenefits: string[];
  faq: { q: string; a: string }[];
  localKeywords: string[];
}

export interface LiveStatusData {
  status: string;
  onDutyHosts: number;
  availableRooms: number;
  totalRooms: number;
  avgChoiceTimeMins: string;
  pickupReadyCars: number;
  currentTime: string;
  managerHotline: string;
  kakaoUrl?: string;
  notice: string;
}
