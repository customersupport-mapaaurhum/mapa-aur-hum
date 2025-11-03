import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MaPa-Aur-Hum | India's Trusted Childcare Management App for Working Parents</title>
        <meta name="description" content="MaPa-Aur-Hum is India's comprehensive childcare solution for working parents and home caregivers managing kids under 5. Build trust, parent closely, save time." />
        <meta name="keywords" content="childcare app India, parenting app, working parents, home caregivers, child safety, routine management, Hindi app" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
