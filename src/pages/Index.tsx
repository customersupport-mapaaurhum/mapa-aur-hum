import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhoShouldUse } from "@/components/WhoShouldUse";
import { Features } from "@/components/Features";
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
        <WhoShouldUse />
        <Features />
        <Founder />
        <Champions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
