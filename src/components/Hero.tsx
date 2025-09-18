import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Heart, Shield } from "lucide-react";
import appPreview1 from "@/assets/app-preview-1.jpg";
import appPreview2 from "@/assets/app-preview-2.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">Trusted by Indian families</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building Trust for 
              <span className="text-primary-glow"> Better Childcare</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              We understand managing childcare for urban working parents is a daily challenge. 
              Join us in our journey to ease day-to-day childcare management with local language support, 
              audio guides, and picture evidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg"
              >
                Register for Pilot Run
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg border-white/30 text-white hover:bg-white/10"
              >
                <Smartphone className="h-5 w-5" />
                Learn More
              </Button>
            </div>
            
            {/* Features highlights */}
            <div className="grid grid-cols-2 gap-4 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Shield className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Picture Evidence</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Heart className="h-8 w-8 text-primary-glow mx-auto mb-2" />
                <p className="text-white text-sm font-medium">Local Language</p>
              </div>
            </div>
          </div>
          
          {/* Right side - App previews */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={appPreview1} 
                alt="MaPa-Aur-Hum App Interface" 
                className="w-64 h-auto rounded-2xl shadow-trust transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <img 
                src={appPreview2} 
                alt="MaPa-Aur-Hum Features" 
                className="w-56 h-auto rounded-2xl shadow-warm absolute -bottom-8 -left-8 transform -rotate-6 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};