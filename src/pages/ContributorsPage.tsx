import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Champions } from "@/components/Champions";

const ContributorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contributors - Mapa-aur-hum | Thank You to Our Community</title>
        <meta name="description" content="Meet the parents and caregivers who helped shape Mapa-aur-hum with their valuable insights and contributions to our childcare app." />
        <meta property="og:title" content="Contributors - Mapa-aur-hum" />
        <meta property="og:description" content="Meet the parents and caregivers who helped shape Mapa-aur-hum with their valuable insights and contributions to our childcare app." />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/contributors" />
      </Helmet>
      <Header />
      <main className="flex-1 pt-20">
        <Champions />
      </main>
      <Footer />
    </div>
  );
};

export default ContributorsPage;
