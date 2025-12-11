import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyMaPa } from "@/components/WhyMaPa";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
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
      }, 100);
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
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WhyMaPa />
          <About />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
