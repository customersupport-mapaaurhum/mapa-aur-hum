import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQs | MaPa-Aur-Hum - Childcare App Questions</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about MaPa-Aur-Hum childcare app for parents and caregivers."
        />
        <link rel="canonical" href="https://www.mapaaurhum.com/faq" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1 pt-20">
          <FAQ />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
