import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppTutorials } from "@/components/AppTutorials";

const TutorialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tutorials | MaPa-Aur-Hum - Learn How to Use the App</title>
        <meta
          name="description"
          content="Watch video tutorials to learn how to use MaPa-Aur-Hum childcare app. Guides for parents and caregivers."
        />
        <link rel="canonical" href="https://mapaaurhum.com/tutorials" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        <AppTutorials />
      </main>

      <Footer />
    </>
  );
};

export default TutorialsPage;
