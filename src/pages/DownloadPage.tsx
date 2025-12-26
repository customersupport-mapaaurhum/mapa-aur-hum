import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

const DownloadPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Download MaPa-Aur-Hum | Childcare App for Indian Working Parents</title>
        <meta
          name="description"
          content="Download MaPa-Aur-Hum app from Google Play Store. The trusted childcare management app for Indian working parents with real-time updates and Hindi language support."
        />
        <link rel="canonical" href="https://mapa-aur-hum.lovable.app/download" />
      </Helmet>

      <Header />

      <main className="flex-1 pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Download MaPa-Aur-Hum
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get the trusted childcare management app for Indian working parents. Available now on Google Play Store.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border">
                <p className="text-lg font-semibold text-foreground mb-4 text-center">
                  Available on Google Play Store
                </p>
                
                <div className="bg-white p-4 rounded-xl mx-auto w-fit mb-4">
                  <img
                    src={qrCode}
                    alt="QR code to download MaPa-Aur-Hum app"
                    className="w-48 h-48 object-contain"
                    width="192"
                    height="192"
                  />
                </div>
                
                <p className="text-muted-foreground text-center mb-6 font-medium">
                  Scan QR code to download
                </p>
                
                <Button
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  <Smartphone className="w-5 h-5" />
                  Download from Play Store
                </Button>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h2 className="text-lg font-semibold text-foreground mb-3">App Features</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Real-time babysitter communication</li>
                    <li>✓ Picture evidence updates</li>
                    <li>✓ Hindi language support for caregivers</li>
                    <li>✓ Personalized care instructions</li>
                    <li>✓ Gratitude and rewards for caregivers</li>
                  </ul>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-6">
                  Pilot app available in English for parents and Hindi for caregivers (maid, babysitter, relative)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadPage;
