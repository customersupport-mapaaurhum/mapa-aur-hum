import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Downloads } from "@/components/Downloads";
import { Helmet } from "react-helmet";

export default function DownloadsPage() {
  return (
    <>
      <Helmet>
        <title>Download MaPa-Aur-Hum | Android Childcare App on Google Play Store</title>
        <meta name="description" content="Download MaPa-Aur-Hum childcare management app for Android from Google Play Store. Available in English for parents and Hindi for caregivers." />
        <meta name="keywords" content="download childcare app, MaPa-Aur-Hum download, parenting app Android, Google Play Store, childcare app India" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Download MaPa-Aur-Hum
              </h1>
              <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                Get started with India's trusted childcare management solution. Available now on Google Play Store.
              </p>
            </div>
          </section>
          <Downloads />
        </main>
        <Footer />
      </div>
    </>
  );
}
