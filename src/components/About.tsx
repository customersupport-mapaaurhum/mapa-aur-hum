import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Clock, MapPin, Smartphone, Camera, Navigation, Languages, Volume2, UserCheck, Heart } from "lucide-react";

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
            Set clear personalized and structured instructions for your caregivers (maids, babysitters, daycares, relatives) based on your home needs. 
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

        {/* Three main tenets - Prominent Display */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
            <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Build Better Trust</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Transparent communication and real-time updates foster trust between parents and caregivers (maids, babysitters, daycares, relatives)</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Parent Closely Even in Physical Absence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Stay connected with your child's daily activities through picture evidence and real-time updates</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-muted/20">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Navigation className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">Save Time</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Streamlined communication and standardized routines save valuable time</p>
          </Card>
        </div>
        
        <Carousel className="w-full mx-auto">
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-warm transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">For Working Indian Families</h3>
                <p className="text-xs text-muted-foreground">
                  Specialized childcare app designed for urban working parents managing home-based childcare with trusted babysitters and family caregivers (maids, babysitters, daycares, relatives)
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-trust transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Picture Updates & Real-time Communication</h3>
                <p className="text-xs text-muted-foreground">
                  Get instant photo evidence and real-time babysitter updates about your child's activities with secure communication features
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-elegant transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Hindi Language Childcare Support</h3>
                <p className="text-xs text-muted-foreground">
                  Audio instructions and Hindi language support specifically designed for Indian households with local caregivers (maids, babysitters, daycares, relatives) and grandparents
                </p>
              </Card>
            </CarouselItem>
            
            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-warm transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Easy to Use</h3>
                <p className="text-xs text-muted-foreground">
                  Intuitive interface designed for all family members and caregivers (maids, babysitters, daycares, relatives)
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-elegant transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Languages className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Local Language Support</h3>
                <p className="text-xs text-muted-foreground">
                  Communicate with maids and grandparents in their preferred local language for better understanding. Currently available in English and Hindi for the free pilot.
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-trust transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Volume2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Audio & Visual Support</h3>
                <p className="text-xs text-muted-foreground">
                  Audio instructions and visual guides to help users with varying literacy levels navigate easily.
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-warm transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Picture Evidence</h3>
                <p className="text-xs text-muted-foreground">
                  Real-time photo updates and evidence to build trust and keep you informed about your child's activities.
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-elegant transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Navigation className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Easy Navigation</h3>
                <p className="text-xs text-muted-foreground">
                  Intuitive interface designed for all family members, from grandparents to professional caregivers (maids, babysitters, daycares, relatives).
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-trust transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Standardized Care</h3>
                <p className="text-xs text-muted-foreground">
                  Consistent childcare standards and routines maintained even when parents are away.
                </p>
              </Card>
            </CarouselItem>

            <CarouselItem className="pl-1 md:basis-1/3 lg:basis-1/4">
              <Card className="p-3 text-center hover:shadow-elegant transition-all duration-300 border-border/50 h-full min-h-[200px]">
                <div className="w-10 h-10 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Express Daily Gratitude</h3>
                <p className="text-xs text-muted-foreground">
                  Show appreciation to caregivers (maids, babysitters, daycares, relatives) with daily gratitude messages to build positive relationships.
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