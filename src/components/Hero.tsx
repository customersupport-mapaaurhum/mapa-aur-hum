import { lazy, Suspense, memo } from "react";
import { Button } from "@/components/ui/button";
import { Smartphone, PlayCircle, HelpCircle, Star, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/mapa-aur-hum-hero-background.jpg";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

// Lazy load FeedbackDialog since it's not immediately needed
const FeedbackDialog = lazy(() => import("@/components/FeedbackDialog").then(m => ({ default: m.FeedbackDialog })));

// Memoized QR section to prevent re-renders
const QRSection = memo(() => (
  <div className="relative flex justify-center lg:justify-end z-10">
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-trust">
      <p className="text-lg font-semibold text-white mb-3 drop-shadow-md text-center">
        Available on Google Play Store
      </p>
      <div className="bg-white p-4 rounded-xl">
        <img
          src={qrCode}
          alt="QR code to download MaPa-Aur-Hum app"
          className="w-56 h-56 object-contain"
          width="224"
          height="224"
          loading="eager"
          decoding="async"
          fetchPriority="high"
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
      </div>
    </div>
  </div>
));

QRSection.displayName = "QRSection";

export const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left relative z-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Building trust for better childcare
            </h1>
            
            <p className="text-xl text-white mb-3 max-w-xl drop-shadow-md">
              The perfect childcare management solution for Indian working parents and home caregivers (maids, babysitters, relatives) managing kids under 5 years. Pilot app available in English for parents and Hindi for caregivers (maids, babysitters, relatives).
            </p>
            
            <div className="mb-6">
              <div className="flex flex-row gap-3 flex-wrap justify-center lg:justify-start">
                <Link to="/caregiver-game">
                  <Button variant="hero" size="lg" className="text-lg">
                    <Baby className="w-5 h-5" />
                    Play Detective Game
                  </Button>
                </Link>
                <Link to="/tutorials">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Tutorials
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                  >
                    <HelpCircle className="w-5 h-5" />
                    FAQs
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 items-center lg:items-start">
              <p className="text-white text-base drop-shadow-md text-center lg:text-left">
                Want more features? Share your thoughts with us.
              </p>
              
              <Suspense fallback={
                <Button variant="outline" size="lg" className="text-lg border-white/30 text-white bg-white/10">
                  Share Feedback
                </Button>
              }>
                <FeedbackDialog>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                  >
                    Share Feedback
                  </Button>
                </FeedbackDialog>
              </Suspense>
            </div>
          </div>
          
          {/* Right side - QR Code Download with buttons */}
          <QRSection />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
