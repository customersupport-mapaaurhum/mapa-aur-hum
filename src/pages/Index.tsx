import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyMaPa } from "@/components/WhyMaPa";
import { Features } from "@/components/Features";
import { Downloads } from "@/components/Downloads";
import { AppTutorials } from "@/components/AppTutorials";
import { Founder } from "@/components/Founder";
import { Champions } from "@/components/Champions";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyMaPa />
        <Features />
        <Downloads />
        <AppTutorials />
        <Champions />
        <Contact />
        <Founder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
