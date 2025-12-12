import { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { LazySection } from "@/components/LazySection";

// Lazy load below-the-fold components
const WhyMaPa = lazy(() => import("@/components/WhyMaPa").then(m => ({ default: m.WhyMaPa })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Features = lazy(() => import("@/components/Features").then(m => ({ default: m.Features })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

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
              <About />
            </Suspense>
          </LazySection>
          <LazySection>
            <Suspense fallback={null}>
              <Features />
            </Suspense>
          </LazySection>
          <LazySection>
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </LazySection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
