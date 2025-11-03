import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppTutorials } from "@/components/AppTutorials";
import { Helmet } from "react-helmet";

export default function TutorialsPage() {
  return (
    <>
      <Helmet>
        <title>Video Tutorials | Learn How to Use MaPa-Aur-Hum Childcare App</title>
        <meta name="description" content="Watch step-by-step video tutorials to master MaPa-Aur-Hum childcare app features. Learn routine management, health tracking, and communication tools." />
        <meta name="keywords" content="childcare app tutorials, MaPa-Aur-Hum guide, parenting app how to, video tutorials, app training" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Video Tutorials
              </h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                Learn how to use MaPa-Aur-Hum effectively with our comprehensive video guides for parents and caregivers.
              </p>
            </div>
          </section>
          <AppTutorials />
        </main>
        <Footer />
      </div>
    </>
  );
}
