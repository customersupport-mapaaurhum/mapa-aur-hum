import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/FeedbackDialog";
import { Smartphone, PlayCircle, HelpCircle, Star, Vote, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/mapa-aur-hum-hero-background.jpg";

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
              The perfect childcare solution for Indian working parents and home caregivers (maids, babysitters, daycares, relatives) managing kids under 5 years. Pilot app available in English for parents and Hindi for caregivers (maids, babysitters, daycares, relatives).
            </p>
            
            <div className="mb-6">
              <p className="text-lg font-medium text-white mb-3">
                Available on Google Play Store
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Button
                  onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
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
                <Button
                  onClick={() => document.getElementById('tutorials')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Tutorials
                </Button>
                <Button
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  <HelpCircle className="w-5 h-5" />
                  FAQs
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 justify-center lg:justify-start">
                <p className="text-white/90 text-base">
                  Want more features? Share your thoughts with us.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <FeedbackDialog>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                    >
                      Share Feedback
                    </Button>
                  </FeedbackDialog>
                  
                  <Button
                    onClick={() => document.getElementById('poll')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    size="lg"
                    className="text-lg border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                  >
                    <Vote className="w-5 h-5" />
                    Vote on New Feature
                  </Button>
                </div>
              </div>
            </div>
          
          {/* Right side - Video */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-xs">
              <iframe
                className="w-full aspect-[9/16] rounded-2xl shadow-trust"
                src="https://www.youtube.com/embed/lyWGdj88Pwc"
                title="MaPa-Aur-Hum App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};