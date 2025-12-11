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
        <link rel="canonical" href="https://mapaaurhum.com/faq" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        <FAQ />
      </main>

      <Footer />
    </>
  );
};

export default FAQPage;
