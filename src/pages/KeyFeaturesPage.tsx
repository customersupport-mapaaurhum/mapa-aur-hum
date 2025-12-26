import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";

const KeyFeaturesPage = () => {
  return (
    <>
      <Helmet>
        <title>Benefits of MaPa-Aur-Hum | Childcare Management for Indian Parents</title>
        <meta name="description" content="Discover the benefits of MaPa-Aur-Hum: training support, structured communication, emergency guidance, and personalized care alignment for parents and caregivers." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/key-features" />
      </Helmet>
      <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-full">
        <Header />
        <main className="pt-20">
          <Benefits />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default KeyFeaturesPage;
