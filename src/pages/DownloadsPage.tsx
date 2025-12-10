import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, ExternalLink } from "lucide-react";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const DownloadsPage = () => {
  return (
    <>
      <Helmet>
        <title>Download MaPa-Aur-Hum App | Google Play Store</title>
        <meta
          name="description"
          content="Download the MaPa-Aur-Hum childcare app from Google Play Store. Scan the QR code or click to download."
        />
        <link rel="canonical" href="https://mapaaurhum.com/downloads" />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Download MaPa-Aur-Hum
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scan the QR code below or click the link to download MaPa-Aur-Hum from the Google Play Store
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="flex-shrink-0">
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <img
                          src={qrCode}
                          alt="QR code to download MaPa-Aur-Hum app from Google Play Store"
                          className="w-72 h-72 object-contain"
                          width="288"
                          height="288"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-semibold">MaPa-Aur-Hum mobile app</h2>
                      </div>
                      <p className="text-lg mb-6">
                        Available now on the Google Play Store
                      </p>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Download from Play Store
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-xs bg-primary-foreground/20 px-2 py-0.5 rounded">Click here</span>
                      </a>
                      <p className="text-sm text-muted-foreground mt-6">
                        Scan the QR code with your phone's camera or tap the button above to download directly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DownloadsPage;
