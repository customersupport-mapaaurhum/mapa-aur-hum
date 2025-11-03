import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Features } from "@/components/Features";
import { Helmet } from "react-helmet";

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>Features | MaPa-Aur-Hum - Childcare Management App for Indian Parents</title>
        <meta name="description" content="Explore MaPa-Aur-Hum's comprehensive childcare features: routine management, health tracking, emergency preparedness, food planning, and more for Indian families." />
        <meta name="keywords" content="childcare app features, parenting app India, routine management, health tracking, emergency preparedness, food planning" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Key Features
              </h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how MaPa-Aur-Hum simplifies childcare management with powerful features designed specifically for Indian working parents and caregivers.
              </p>
            </div>
          </section>
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}
