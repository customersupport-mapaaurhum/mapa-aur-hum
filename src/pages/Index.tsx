import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyMaPa } from "@/components/WhyMaPa";
import { Features } from "@/components/Features";
import { Poll } from "@/components/Poll";
import { Downloads } from "@/components/Downloads";
import { AppTutorials } from "@/components/AppTutorials";
import { Champions } from "@/components/Champions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyMaPa />
        <Features />
        <Poll />
        <Downloads />
        <AppTutorials />
        <Champions />
        {/* <div className="text-center py-6 bg-background">
          <Link 
            to="/founder" 
            className="text-primary hover:underline font-medium text-base"
          >
            Meet Our Founder →
          </Link>
        </div> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
