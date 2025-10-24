import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Clock, MapPin, Smartphone, Camera, Navigation } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Complete Childcare Management Solution for Indian Working Parents
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            MaPa-Aur-Hum is a trusted, specialized childcare platform designed for working parents in India. 
            Set clear personalized and structured instructions for your caregivers based on your home needs. 
            Get real-time babysitter updates with picture evidence, Hindi language support, and emergency childcare management - all in one app.
          </p>
          <p className="text-sm font-medium text-primary">
            Available on Google Play Store.{" "}
            <button
              onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
              className="underline hover:opacity-80 transition-opacity cursor-pointer"
            >
              Download MaPa-Aur-Hum
            </button>
          </p>
        </div>

        {/* Three main tenets */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
          <Card className="p-4 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Build Better Trust</h3>
            <p className="text-sm text-muted-foreground">Transparent communication and real-time updates foster trust between parents and caregivers</p>
          </Card>
          
          <Card className="p-4 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Parent Closely Even in Physical Absence</h3>
            <p className="text-sm text-muted-foreground">Stay connected with your child's daily activities through picture evidence and real-time updates</p>
          </Card>
          
          <Card className="p-4 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
              <Navigation className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">Save Time</h3>
            <p className="text-sm text-muted-foreground">Streamlined communication and standardized routines save valuable time</p>
          </Card>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2">
            <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 text-center hover:shadow-warm transition-all duration-300 border-border/50 h-full">
                <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">For Working Indian Families</h3>
                <p className="text-xs text-muted-foreground">
                  Specialized childcare app designed for urban working parents managing home-based childcare with trusted babysitters and family caregivers
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 text-center hover:shadow-trust transition-all duration-300 border-border/50 h-full">
                <div className="w-10 h-10 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Picture Updates & Real-time Communication</h3>
                <p className="text-xs text-muted-foreground">
                  Get instant photo evidence and real-time babysitter updates about your child's activities with secure communication features
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 text-center hover:shadow-elegant transition-all duration-300 border-border/50 h-full">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Hindi Language Childcare Support</h3>
                <p className="text-xs text-muted-foreground">
                  Audio instructions and Hindi language support specifically designed for Indian households with local caregivers and grandparents
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-2 md:basis-1/2 lg:basis-1/3">
              <Card className="p-4 text-center hover:shadow-warm transition-all duration-300 border-border/50 h-full">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Easy to Use</h3>
                <p className="text-xs text-muted-foreground">
                  Intuitive interface designed for all family members and caregivers
                </p>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};