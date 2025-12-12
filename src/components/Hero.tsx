import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, HelpCircle, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

// Memoized QR section to prevent re-renders
const QRSection = memo(() => (
  <div className="flex justify-center w-full">
    <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-2xl shadow-trust w-full max-w-[280px] border border-primary/20">
      <p className="text-sm font-semibold text-foreground mb-2 text-center">
        Available on Google Play Store
      </p>
      <div className="bg-white p-2 rounded-xl mx-auto w-fit">
        <img
          src={qrCode}
          alt="QR code to download MaPa-Aur-Hum app"
          className="w-32 h-32 object-contain"
          width="128"
          height="128"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="text-muted-foreground text-center mt-2 font-medium text-xs">
        Scan to Download
      </p>
      <div className="flex flex-col gap-2 mt-3">
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
          variant="default"
          size="default"
          className="w-full text-sm"
        >
          <Smartphone className="w-4 h-4" />
          Download App
        </Button>
        <Link to="/caregiver-game" className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
          >
            <Baby className="w-3 h-3" />
            Play New Caregiver Game
          </Button>
        </Link>
        <Link to="/tutorials" className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
          >
            <PlayCircle className="w-3 h-3" />
            Watch Tutorials
          </Button>
        </Link>
        <Link to="/faq" className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
          >
            <HelpCircle className="w-3 h-3" />
            FAQs
          </Button>
        </Link>
      </div>
    </div>
  </div>
));

QRSection.displayName = "QRSection";

// Desktop QR section with larger sizing
const QRSectionDesktop = memo(() => (
  <div className="hidden lg:flex justify-end w-full">
    <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl shadow-trust max-w-sm border border-primary/20">
      <p className="text-lg font-semibold text-foreground mb-3 text-center">
        Available on Google Play Store
      </p>
      <div className="bg-white p-4 rounded-xl mx-auto w-fit">
        <img
          src={qrCode}
          alt="QR code to download MaPa-Aur-Hum app"
          className="w-56 h-56 object-contain"
          width="224"
          height="224"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="text-muted-foreground text-center mt-3 font-medium text-sm">
        Scan to Download
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
          variant="default"
          size="lg"
          className="w-full"
        >
          <Smartphone className="w-5 h-5" />
          Download App
        </Button>
        <Link to="/caregiver-game" className="w-full">
          <Button
            variant="outline"
            size="default"
            className="w-full"
          >
            <Baby className="w-4 h-4" />
            Play New Caregiver Game
          </Button>
        </Link>
        <Link to="/tutorials" className="w-full">
          <Button
            variant="outline"
            size="default"
            className="w-full"
          >
            <PlayCircle className="w-4 h-4" />
            Watch Tutorials
          </Button>
        </Link>
        <Link to="/faq" className="w-full">
          <Button
            variant="outline"
            size="default"
            className="w-full"
          >
            <HelpCircle className="w-4 h-4" />
            FAQs
          </Button>
        </Link>
      </div>
    </div>
  </div>
));

QRSectionDesktop.displayName = "QRSectionDesktop";

export const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative elements matching logo colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 lg:mb-4 leading-tight">
                Building trust for better childcare
              </h1>
              
              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                The perfect childcare management solution for Indian working parents and home caregivers (maids, babysitters, relatives) managing kids under 5 years. Pilot app available in English for parents and Hindi for caregivers (maids, babysitters, relatives).
              </p>
            </div>
            
            {/* Right side - QR Code for mobile */}
            <div className="lg:hidden mt-4">
              <QRSection />
            </div>
            
            {/* Right side - QR Code for desktop */}
            <QRSectionDesktop />
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
