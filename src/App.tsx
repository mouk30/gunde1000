import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LiveTicker } from './components/LiveTicker';
import { FloatingActionBar } from './components/FloatingActionBar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { PricePage } from './pages/PricePage';
import { SystemPage } from './pages/SystemPage';
import { GuidePage } from './pages/GuidePage';
import { HostsPage } from './pages/HostsPage';
import { PartyEventsPage } from './pages/PartyEventsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { LocationPickupPage } from './pages/LocationPickupPage';
import { RecruitPage } from './pages/RecruitPage';
import { RegionalPage } from './pages/RegionalPage';
import { PriceCalculator } from './components/PriceCalculator';
import { SEOHead } from './components/SEOHead';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  const [bookingOpen, setBookingOpen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<{ liquor: string; guests: number; totalPrice: number } | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Internal router navigation function
  const handleNavigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
  };

  const handleBookWithQuote = (quote: { liquor: string; guests: number; totalPrice: number }) => {
    setQuoteDetails(quote);
    setBookingOpen(true);
  };

  const renderContent = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={handleNavigate}
          onOpenBooking={() => setBookingOpen(true)}
          onBookWithQuote={handleBookWithQuote}
        />
      );
    }

    if (currentPath === '/price') {
      return (
        <PricePage
          onOpenBooking={() => setBookingOpen(true)}
          onBookWithQuote={handleBookWithQuote}
        />
      );
    }

    if (currentPath === '/system') {
      return <SystemPage onOpenBooking={() => setBookingOpen(true)} />;
    }

    if (currentPath === '/guide') {
      return <GuidePage onOpenBooking={() => setBookingOpen(true)} />;
    }

    if (currentPath === '/hosts') {
      return <HostsPage onOpenBooking={() => setBookingOpen(true)} />;
    }

    if (currentPath === '/party-events') {
      return <PartyEventsPage onOpenBooking={() => setBookingOpen(true)} />;
    }

    if (currentPath === '/reviews') {
      return <ReviewsPage />;
    }

    if (currentPath === '/faq') {
      return <FaqPage />;
    }

    if (currentPath === '/location-pickup') {
      return <LocationPickupPage />;
    }

    if (currentPath === '/recruit') {
      return <RecruitPage />;
    }

    if (currentPath === '/calculator') {
      return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
          <SEOHead
            title="실시간 건대호빠 주대 및 정찰제 견적 계산기 | 건대 W"
            description="인원과 시간, 주류를 선택하시면 실제 청구되는 총액을 1원 단위까지 투명하게 산출해 드립니다. 룸비 0원 전액 무료 면제."
            canonicalPath="/calculator"
            keywords="건대호빠계산기, 건대호빠견적, 건대호빠주대계산, 호스트바가격비교"
          />
          <PriceCalculator onBookWithQuote={handleBookWithQuote} />
        </div>
      );
    }

    if (currentPath.startsWith('/area/')) {
      const slug = currentPath.replace('/area/', '');
      return (
        <RegionalPage
          slug={slug}
          onOpenBooking={() => setBookingOpen(true)}
          onBookWithQuote={handleBookWithQuote}
        />
      );
    }

    // Default fallback to Home
    return (
      <HomePage
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingOpen(true)}
        onBookWithQuote={handleBookWithQuote}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090d] text-[#e2e8f0]">
      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* Real-time Ticker */}
      <LiveTicker />

      {/* Main Dynamic Page Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Comprehensive Footer with all Sitemap URLs */}
      <Footer onNavigate={handleNavigate} />

      {/* Bottom Sticky Action Bar */}
      <FloatingActionBar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenCalculator={() => handleNavigate('/calculator')}
      />

      {/* VIP Room Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setQuoteDetails(null);
        }}
        prefillLiquor={quoteDetails?.liquor}
        prefillGuests={quoteDetails?.guests}
      />
    </div>
  );
}
