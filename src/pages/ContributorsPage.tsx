import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Champions } from "@/components/Champions";

const ContributorsPage = () => {
  return (
    <>
      <Helmet>
        <title>Contributors - MaPa-Aur-Hum | Thank You to Our Community</title>
        <meta name="description" content="Meet the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights and contributions to our childcare app." />
        <meta property="og:title" content="Contributors - MaPa-Aur-Hum" />
        <meta property="og:description" content="Meet the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights and contributions to our childcare app." />
        <link rel="canonical" href="https://www.mapa-aur-hum.lovable.app/contributors" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <Champions />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContributorsPage;
