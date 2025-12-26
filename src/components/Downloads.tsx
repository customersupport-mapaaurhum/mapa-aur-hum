import { Card, CardContent } from "@/components/ui/card";
import { Smartphone } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

export const Downloads = () => {
  return (
    <section id="downloads" className="py-8 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Downloads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scan the QR code below to download MaPa-Aur-Hum from the Google Play Store
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <OptimizedImage 
                      src={qrCode} 
                      alt="QR code to download MaPa-Aur-Hum app from Google Play Store"
                      className="w-64 h-64 object-contain"
                      width={256}
                      height={256}
                      sizes="256px"
                    />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-semibold">MaPa-Aur-Hum mobile app</h3>
                  </div>
                  <p className="text-lg mb-4">
                    Available now on{" "}
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-semibold"
                    >
                      Google Play Store
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Scan the QR code with your phone's camera or download directly from the Google Play Store
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
