import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { Smartphone, PlayCircle, HelpCircle, Star, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/mapa-aur-hum-hero-background.jpg";
import qrCode from "@/assets/mapa-aur-hum-qr-code-download.jpeg";

export const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left relative z-20">
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Building trust for better childcare
            </h1>
            
            <p className="text-xl text-white/90 mb-3 max-w-xl">
              The perfect childcare management solution for Indian working parents and home caregivers (maids, babysitters, relatives) managing kids under 5 years. Pilot app available in English for parents and Hindi for caregivers (maids, babysitters, relatives).
            </p>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-white mb-3">
                Available on Google Play Store
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Button
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum&pcampaignid=web_share', '_blank')}
                  variant="hero"
                  size="lg"
                  className="text-lg"
                >
                  <Smartphone className="w-5 h-5" />
                  Download MaPa-Aur-Hum
                </Button>
                <Link to="/caregiver-game">
                  <Button
                    variant="hero"
                    size="lg"
                    className="text-lg w-full sm:w-auto"
                  >
                    <Baby className="w-5 h-5" />
                    Play Detective Game
                  </Button>
                </Link>
                <Button
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.mapaaurhum', '_blank')}
                  variant="outline"
                  size="lg"
                  className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  <Star className="w-5 h-5" />
                  Review Us
                </Button>
                <Link to="/tutorials">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white w-full sm:w-auto"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Tutorials
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white w-full sm:w-auto"
                  >
                    <HelpCircle className="w-5 h-5" />
                    FAQs
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <p className="text-white/90 text-base">
                  Want more features? Share your thoughts with us.
                </p>
                
                <FeedbackDialog>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                  >
                    Share Feedback
                  </Button>
                </FeedbackDialog>
              </div>
            </div>
          
          {/* Right side - QR Code Download */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-trust">
              <div className="bg-white p-4 rounded-xl">
                <img
                  src={qrCode}
                  alt="QR code to download MaPa-Aur-Hum app from Google Play Store"
                  className="w-56 h-56 object-contain"
                  width="224"
                  height="224"
                />
              </div>
              <p className="text-white text-center mt-4 font-medium">
                Scan to Download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
