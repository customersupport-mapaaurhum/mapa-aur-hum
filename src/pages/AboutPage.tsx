import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Champions } from "@/components/Champions";
import { Helmet } from "react-helmet";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About MaPa-Aur-Hum | India's Trusted Childcare Management Platform</title>
        <meta name="description" content="Learn about MaPa-Aur-Hum, the childcare solution designed for Indian working parents and home caregivers. Building trust for better childcare." />
        <meta name="keywords" content="about MaPa-Aur-Hum, childcare platform India, parenting solution, working parents India, childcare management" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                About MaPa-Aur-Hum
              </h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                India's comprehensive childcare management solution for working parents and caregivers.
              </p>
            </div>
          </section>
          <About />
          <Champions />
        </main>
        <Footer />
      </div>
    </>
  );
}
