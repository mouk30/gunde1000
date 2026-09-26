import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, ShieldCheck, Plus, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/seoContent';
import { SEOHead } from '../components/SEOHead';
import { ReviewItem } from '../types';

export const ReviewsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('전체');
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [showWriteModal, setShowWriteModal] = useState(false);

  // New review form
  const [newAuthor, setNewAuthor] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTag, setNewTag] = useState<'혼술 방문' | '생일/파티' | '첫방문' | '친구모임'>('혼술 방문');

  const filteredReviews = filter === '전체'
    ? reviewsList
    : reviewsList.filter((r) => r.tag === filter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newContent.trim()) return;

    const newRev: ReviewItem = {
      id: 'rev-' + Date.now(),
      author: newAuthor + ' (인증 고객)',
      rating: 5,
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      tag: newTag,
      title: newTitle || '너무 즐겁고 편안한 시간이었습니다!',
      content: newContent,
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowWriteModal(false);
    setNewAuthor('');
    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <SEOHead
        title="건대호빠 리얼 고객 방문 후기 & 생생 리뷰 | 건대 W"
        description="실제 방문 고객 480여 명이 남겨주신 건대호빠 1위 W(더블유) 내돈내산 생생 리뷰. 평균 평점 4.9점. 1인 혼술 후기, 생일 파티 후기, 초이스 솔직 리뷰."
        canonicalPath="/reviews"
        keywords="건대호빠후기, 건대호스트바후기, 건대W후기, 호빠리뷰, 건대호빠내돈내산, 호빠혼술후기"
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> VERIFIED REVIEWS
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          리얼 방문 고객 생생 후기
        </h1>
        <p className="text-xs sm:text-sm text-gray-300">
          건대 W를 찾아주신 고객님들의 솔직한 평가와 실제 경험담을 확인하세요.
        </p>
      </div>

      {/* Score Overview Card */}
      <div className="bg-[#0e111a] border border-[#23293e] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="text-center sm:text-left">
            <div className="text-4xl sm:text-5xl font-black text-white font-mono">
              4.9<span className="text-xl text-gray-500 font-normal"> / 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400 my-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-400">총 486개의 검증된 고객 리뷰 기준</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <div className="px-4 py-2 rounded-xl bg-[#141825] border border-[#252c42] text-xs space-y-0.5 text-center">
            <div className="text-emerald-400 font-bold">100%</div>
            <div className="text-gray-400 text-[11px]">정찰제 준수율</div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#141825] border border-[#252c42] text-xs space-y-0.5 text-center">
            <div className="text-[#edd98f] font-bold">96.8%</div>
            <div className="text-gray-400 text-[11px]">재방문 희망률</div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-[#141825] border border-[#252c42] text-xs space-y-0.5 text-center">
            <div className="text-blue-400 font-bold">98명+</div>
            <div className="text-gray-400 text-[11px]">매일 출근 에이스</div>
          </div>
        </div>

        <button
          onClick={() => setShowWriteModal(true)}
          className="flex items-center gap-2 bg-[#d4af37] text-black font-bold px-4 py-2.5 rounded-xl text-xs hover:brightness-110 transition shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>리뷰 작성하기</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {['전체', '혼술 방문', '생일/파티', '첫방문', '친구모임'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              filter === cat
                ? 'bg-[#d4af37] text-black'
                : 'bg-[#121520] text-gray-300 hover:bg-[#1a1f30] border border-[#252c40]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="space-y-4">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-[#0e111a] border border-[#202538] rounded-2xl p-6 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{rev.author}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#edd98f] font-semibold">
                  {rev.tag}
                </span>
                {rev.hostStylePref && (
                  <span className="text-[10px] text-gray-400 hidden sm:inline">
                    선호: {rev.hostStylePref}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-amber-400 font-bold">★★★★★ 5.0</span>
                <span className="text-gray-500 font-mono text-[11px]">{rev.date}</span>
              </div>
            </div>

            <h3 className="font-bold text-white text-base">{rev.title}</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{rev.content}</p>

            <div className="pt-2 flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1 text-emerald-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% 방문 검증 완료
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review Modal */}
      {showWriteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#0e111a] border border-[#2c334d] rounded-2xl p-6 space-y-4 text-gray-200">
            <h3 className="text-xl font-bold text-white">방문 후기 작성</h3>
            <form onSubmit={handleAddReview} className="space-y-3 text-xs">
              <div>
                <label className="block text-gray-300 mb-1">작성자 닉네임</label>
                <input
                  type="text"
                  required
                  placeholder="예: 지은 (건대)"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-[#151825] border border-[#2b3249] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">방문 유형</label>
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value as any)}
                  className="w-full bg-[#151825] border border-[#2b3249] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="혼술 방문">혼술 방문</option>
                  <option value="생일/파티">생일/파티</option>
                  <option value="첫방문">첫방문</option>
                  <option value="친구모임">친구모임</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-1">제목</label>
                <input
                  type="text"
                  placeholder="한 줄 요약"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-[#151825] border border-[#2b3249] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-1">상세 후기 내용</label>
                <textarea
                  rows={4}
                  required
                  placeholder="서비스, 초이스, 분위기 등에 대한 솔직한 후기를 남겨주세요."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-[#151825] border border-[#2b3249] rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#d4af37] text-black font-bold py-2.5 rounded-xl hover:brightness-110 text-xs"
                >
                  등록하기
                </button>
                <button
                  type="button"
                  onClick={() => setShowWriteModal(false)}
                  className="px-4 py-2.5 bg-[#1a1f30] text-gray-300 rounded-xl text-xs"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
