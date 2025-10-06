import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyMaPa } from "@/components/WhyMaPa";

const WhyMaPaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <WhyMaPa />
      </main>
      <Footer />
    </div>
  );
};

export default WhyMaPaPage;
