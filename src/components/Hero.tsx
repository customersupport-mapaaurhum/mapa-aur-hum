import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { ArrowRight, Smartphone, Heart, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import appPreview1 from "@/assets/app-preview-1.jpg";
import appPreview2 from "@/assets/app-preview-2.jpg";
import appPreview3 from "@/assets/app-preview-3.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const appImages = [appPreview1, appPreview2, appPreview3];
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % appImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + appImages.length) % appImages.length);
  };

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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Trust for 
              <span className="text-primary-glow"> Better Childcare</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              We understand managing childcare for urban working parents is a daily challenge. 
              Join us in our journey to ease personalised day-to-day childcare management with tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RegistrationDialog>
                <Button 
                  variant="hero" 
                  size="lg"
                  className="text-lg"
                >
                  Register for Pilot Run
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </RegistrationDialog>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg border-white/30 text-primary bg-white/10 hover:bg-white/20 hover:text-primary"
              >
                <Smartphone className="h-5 w-5" />
                Learn More
              </Button>
            </div>
            
          </div>
          
          {/* Right side - App previews carousel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={appImages[currentImageIndex]} 
                alt={`MaPa-Aur-Hum App Preview ${currentImageIndex + 1}`}
                className="w-80 h-auto rounded-2xl shadow-trust transition-all duration-500"
              />
              
              {/* Carousel controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {appImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};