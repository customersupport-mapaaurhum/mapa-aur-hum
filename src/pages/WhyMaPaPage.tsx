import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhyMaPa } from "@/components/WhyMaPa";

const WhyMaPaPage = () => {
  return (
    <>
      <Helmet>
        <title>Why MaPa-Aur-Hum - Problems Faced by Working Parents in India</title>
        <meta name="description" content="Discover common childcare challenges faced by urban working parents in India and how MaPa-Aur-Hum helps solve them with trusted caregiver communication." />
        <meta property="og:title" content="Why MaPa-Aur-Hum - Childcare Challenges for Working Parents" />
        <meta property="og:description" content="Common problems faced by working parents with maids and babysitters, and how MaPa-Aur-Hum provides solutions." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/why-mapa" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <WhyMaPa />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WhyMaPaPage;
