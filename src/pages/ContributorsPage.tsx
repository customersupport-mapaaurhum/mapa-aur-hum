import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Champions } from "@/components/Champions";

const ContributorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Contributors - MaPa-Aur-Hum | Thank You to Our Community</title>
        <meta name="description" content="Meet the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights and contributions to our childcare app." />
        <meta property="og:title" content="Contributors - MaPa-Aur-Hum" />
        <meta property="og:description" content="Meet the parents and caregivers who helped shape MaPa-Aur-Hum with their valuable insights and contributions to our childcare app." />
        <link rel="canonical" href="https://www.mapaaurhum.com/contributors" />
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
