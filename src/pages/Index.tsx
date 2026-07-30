import { lazy, Suspense, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UpcomingSection } from "@/components/UpcomingSection";
import { LazySection } from "@/components/LazySection";
import { PartnerCTA } from "@/components/PartnerCTA";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";
import { SupportChatButton } from "@/components/SupportChatButton";

// Lazy load below-the-fold components
const WhyMaPa = lazy(() => import("@/components/WhyMaPa").then(m => ({ default: m.WhyMaPa })));

// Lazy load Footer - below fold
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

// Loading skeleton for WhyMaPa section
const WhyMaPaSkeleton = () => (
  <section className="py-8 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-6">
        <div className="h-8 w-64 bg-muted animate-pulse rounded mx-auto mb-3" />
        <div className="h-4 w-96 max-w-full bg-muted animate-pulse rounded mx-auto" />
      </div>
      <div className="flex gap-4 overflow-hidden px-8 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-w-[200px] h-[200px] bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 50);
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>MaPa-Aur-Hum - Building Trust for Better Childcare in India</title>
        <meta name="description" content="Mapaaurhum Mapa-aur-hum - Trusted childcare app for Indian working parents and maids" />
        <meta property="og:title" content="MaPa-Aur-Hum - Building Trust for Better Childcare" />
        <meta property="og:description" content="Real-time babysitter communication app with picture updates and audio instructions for working parents in India." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
        <AnnouncementTicker />
        <Header />
        <main>
          <Hero />
          <LazySection rootMargin="400px">
            <Suspense fallback={<WhyMaPaSkeleton />}>
              <WhyMaPa />
            </Suspense>
          </LazySection>
          <PartnerCTA />
        </main>
        <LazySection>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
        <SupportChatButton />
      </div>
    </>
  );
};

export default memo(Index);
