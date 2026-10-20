import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppTutorials } from "@/components/AppTutorials";

const TutorialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Tutorials | Mapa-aur-hum - Learn How to Use the App</title>
        <meta
          name="description"
          content="Watch video tutorials to learn how to use Mapa-aur-hum childcare app. Guides for parents and caregivers."
        />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/tutorials" />
      </Helmet>

      <Header />

      <main className="flex-1 pt-20">
        <AppTutorials />
      </main>

      <Footer />
    </div>
  );
};

export default TutorialsPage;
