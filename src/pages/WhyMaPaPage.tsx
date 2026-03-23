import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Link } from "react-router-dom";

const WhyMaPaPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Why MaPa-Aur-Hum | Complete Childcare Management Solution for Indian Parents</title>
        <meta
          name="description"
          content="Discover why MaPa-Aur-Hum is the trusted childcare platform for Indian working parents. Build trust, stay connected, and save time with our complete management solution."
        />
        <link rel="canonical" href="https://www.mapaaurhum.com/why-mapa" />
      </Helmet>

      <Header />

      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default WhyMaPaPage;
