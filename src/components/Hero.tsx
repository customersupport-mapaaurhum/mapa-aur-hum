import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, HelpCircle, Star, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/mapa-aur-hum-hero-background.jpg";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

// Memoized QR section to prevent re-renders
const QRSection = memo(() => (
  <div className="flex justify-center w-full">
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-trust w-full max-w-[280px]">
      <p className="text-sm font-semibold text-white mb-2 drop-shadow-md text-center">
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
      <p className="text-white text-center mt-2 font-medium text-xs">
        Scan to Download
      </p>
      <div className="flex flex-col gap-2 mt-3">
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
          variant="hero"
          size="default"
          className="w-full text-sm"
        >
          <Smartphone className="w-4 h-4" />
          Download App
        </Button>
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum', '_blank')}
          variant="outline"
          size="sm"
          className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white text-xs"
        >
          <Star className="w-3 h-3" />
          Review Us
        </Button>
        <Link to="/tutorials" className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white text-xs"
          >
            <PlayCircle className="w-3 h-3" />
            Watch Tutorials
          </Button>
        </Link>
        <Link to="/faq" className="w-full">
          <Button
            variant="outline"
            size="sm"
            className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white text-xs"
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
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-trust max-w-sm">
      <p className="text-lg font-semibold text-white mb-3 drop-shadow-md text-center">
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
      <p className="text-white text-center mt-3 font-medium text-sm">
        Scan to Download
      </p>
      <div className="flex flex-col gap-2 mt-4">
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
          variant="hero"
          size="lg"
          className="w-full"
        >
          <Smartphone className="w-5 h-5" />
          Download App
        </Button>
        <Button
          onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum', '_blank')}
          variant="outline"
          size="default"
          className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
        >
          <Star className="w-4 h-4" />
          Review Us
        </Button>
        <Link to="/tutorials" className="w-full">
          <Button
            variant="outline"
            size="default"
            className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
          >
            <PlayCircle className="w-4 h-4" />
            Watch Tutorials
          </Button>
        </Link>
        <Link to="/faq" className="w-full">
          <Button
            variant="outline"
            size="default"
            className="w-full border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 lg:mb-4 leading-tight drop-shadow-lg">
                Building trust for better childcare
              </h1>
              
              <p className="text-sm sm:text-base lg:text-xl text-white mb-4 lg:mb-6 drop-shadow-md max-w-xl mx-auto lg:mx-0">
                The perfect childcare management solution for Indian working parents and home caregivers (maids, babysitters, relatives) managing kids under 5 years. Pilot app available in English for parents and Hindi for caregivers (maids, babysitters, relatives).
              </p>
              
              {/* Play Detective Game button only */}
              <div className="flex justify-center lg:justify-start">
                <Link to="/caregiver-game" className="w-full sm:w-auto">
                  <Button variant="hero" size="default" className="w-full sm:w-auto text-sm lg:text-lg">
                    <Baby className="w-4 h-4 lg:w-5 lg:h-5" />
                    Play Detective Game
                  </Button>
                </Link>
              </div>
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
