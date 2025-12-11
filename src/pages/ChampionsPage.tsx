import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Champions } from "@/components/Champions";

const ChampionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You Champions | MaPa-Aur-Hum</title>
        <meta
          name="description"
          content="Meet our MaPa-Aur-Hum champions - parents and caregivers who trust and support our childcare app."
        />
        <link rel="canonical" href="https://mapaaurhum.com/champions" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        <Champions />
      </main>

      <Footer />
    </>
  );
};

export default ChampionsPage;
