import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppTutorials } from "@/components/AppTutorials";
import { YouTubeFacade } from "@/components/YouTubeFacade";

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
        {/* Website Demo Video */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                App Demo
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Watch a quick demo of MaPa-Aur-Hum in action
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <YouTubeFacade
                    videoId="lyWGdj88Pwc"
                    title="MaPa-Aur-Hum App Demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <AppTutorials />
      </main>

      <Footer />
    </>
  );
};

export default TutorialsPage;
