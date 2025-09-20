import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { ArrowRight, Smartphone, Instagram, Linkedin } from "lucide-react";
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
                  Register for Free Pilot Run
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

            {/* Social Media Follow Section */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/90 text-lg mb-4 text-center lg:text-left">Follow us on social media:</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.instagram.com/mapaaurhum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white hover:text-primary-glow transition-all"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/mapaaurhum/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white hover:text-primary-glow transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Right side - App preview placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={appPreview1} 
                alt="MaPa-Aur-Hum App Preview"
                className="w-80 h-auto rounded-2xl shadow-trust"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};