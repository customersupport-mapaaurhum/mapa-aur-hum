import { lazy, Suspense, useEffect, memo } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LazySection } from "@/components/LazySection";
import { AnnouncementTicker } from "@/components/AnnouncementTicker";

// Lazy load below-the-fold components
const WhyMaPa = lazy(() => import("@/components/WhyMaPa").then(m => ({ default: m.WhyMaPa })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
// Lazy load Footer - below fold
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
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
        <meta name="description" content="Trusted childcare app for Indian working parents and secondary caregivers. Communication with picture updates, Hindi language support, and modules for personalized home-based care." />
        <meta property="og:title" content="MaPa-Aur-Hum - Building Trust for Better Childcare" />
        <meta property="og:description" content="Real-time babysitter communication app with picture updates and audio instructions for working parents in India." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
        <AnnouncementTicker />
        <Header />
        <main>
          <Hero />
          <LazySection>
            <Suspense fallback={null}>
              <WhyMaPa />
            </Suspense>
          </LazySection>
          <LazySection>
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </LazySection>
        </main>
        <LazySection>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </LazySection>
      </div>
    </>
  );
};

export default memo(Index);
