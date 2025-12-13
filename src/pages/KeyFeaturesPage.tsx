import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";

const KeyFeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Key Features - MaPa-Aur-Hum Childcare App</title>
        <meta name="description" content="Explore the key features of MaPa-Aur-Hum childcare app: routine management, health emergency preparedness, screen time tracking, food plans, and weekly insights for Indian working parents." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/key-features" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
        <Header />
        <main className="pt-20">
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KeyFeaturesPage;
