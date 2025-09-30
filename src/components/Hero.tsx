import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { ArrowRight, Smartphone } from "lucide-react";
import appPreview1 from "@/assets/app-preview-1.jpg";
import heroBackground from "@/assets/hero-background.jpg";
import logoImg from "@/assets/logo.jpg";

export const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building trust for better childcare
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              The perfect childcare solution for Indian working parents and home caregivers. Our pilot offers English support for parents and Hindi for caregivers, with more languages coming soon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RegistrationDialog>
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg"
                >
                  Register for Free Pilot Run
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </RegistrationDialog>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
              >
                <Smartphone className="h-5 w-5" />
                Learn More
              </Button>
              
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
          
          {/* Right side - App preview placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={appPreview1} 
                alt="MaPa-Aur-Hum mobile app interface showing childcare management features for Indian parents"
                className="w-80 h-auto rounded-2xl shadow-trust"
                width="320"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};