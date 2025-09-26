import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Languages, Camera, Navigation, Volume2, UserCheck, ArrowRight, ZoomIn } from "lucide-react";
import { useState } from "react";

// Feature images
import featureRoutine from "@/assets/feature-routine.png";
import featureHealth from "@/assets/feature-health.png";
import featureScreentime from "@/assets/feature-screentime.png";
import featureFood from "@/assets/feature-food.png";
import featureVideo from "@/assets/feature-video.png";
import featureStreamlined from "@/assets/feature-streamlined.png";
import featureReadiness from "@/assets/feature-readiness.png";
import featureInsights from "@/assets/feature-insights.png";
import featureFoodplans from "@/assets/feature-foodplans.png";
import featureEmergencies from "@/assets/feature-emergencies.png";

export const Features = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: Languages,
      title: "Local Language Support",
      description: "Communicate with maids and grandparents in their preferred local language for better understanding. Currently available in English and Hindi for the free pilot.",
      color: "bg-gradient-warm"
    },
    {
      icon: Volume2,
      title: "Audio & Visual Support", 
      description: "Audio instructions and visual guides to help users with varying literacy levels navigate easily.",
      color: "bg-gradient-trust"
    },
    {
      icon: Camera,
      title: "Picture Evidence",
      description: "Real-time photo updates and evidence to build trust and keep you informed about your child's activities.",
      color: "bg-accent"
    },
    {
      icon: Navigation,
      title: "Easy Navigation",
      description: "Intuitive interface designed for all family members, from grandparents to professional caregivers.",
      color: "bg-secondary"
    },
    {
      icon: UserCheck,
      title: "Standardized Care",
      description: "Consistent childcare standards and routines maintained even when parents are away.",
      color: "bg-gradient-warm"
    }
  ];

  const featureImages = [
    {
      src: featureRoutine,
      alt: "MaPa-Aur-Hum routine management screen showing daily childcare tasks with audio guidance for caregivers",
      title: "Routine Management"
    },
    {
      src: featureHealth,
      alt: "Health emergency preparedness interface with medicine plans and visual aids for child safety",
      title: "Health Emergency Preparedness"
    },
    {
      src: featureScreentime,
      alt: "Screen time management dashboard tracking children's device usage for healthy digital balance",
      title: "Screen Time Management"
    },
    {
      src: featureFood,
      alt: "Food plan management system with meal scheduling and audio instructions for Indian families",
      title: "Food Plan Management"
    },
    {
      src: featureStreamlined,
      alt: "Streamlined childcare interface showing task notifications and activity tracking for babysitters",
      title: "Streamlined Care"
    },
    {
      src: featureReadiness,
      alt: "Emergency readiness dashboard with medicine plans and alert system for child safety",
      title: "Emergency Readiness"
    },
    {
      src: featureInsights,
      alt: "Weekly childcare insights and reports providing actionable data for better parenting decisions",
      title: "Weekly Insights"
    },
    {
      src: featureFoodplans,
      alt: "Comprehensive food plan database with nutritional guidance for Indian children's meal planning",
      title: "Food Plans"
    },
    {
      src: featureEmergencies,
      alt: "Emergency management system with first aid guides and video calling for immediate childcare support",
      title: "Emergency Support"
    }
  ];

  return (
    <section id="features" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Complete Childcare Management Solution for Working Parents</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Our innovative babysitter communication features with picture updates and Hindi language support address the real challenges faced by working parents managing home-based childcare in India.
          </p>
          
          {/* Three main tenets */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Build Better Trust</h3>
              <p className="text-muted-foreground">Transparent communication and real-time updates foster trust between parents and caregivers</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Parent Closely Even in Physical Absence</h3>
              <p className="text-muted-foreground">Stay connected with your child's daily activities through picture evidence and real-time updates</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Save Time</h3>
              <p className="text-muted-foreground">Streamlined communication and standardized routines save valuable time</p>
            </Card>
          </div>
        </div>

        {/* Features list */}
        <div className="space-y-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Full-width Features Image Carousel */}
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {featureImages.map((image, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-trust">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage(image.src)}>
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full min-h-[600px] h-auto object-contain rounded-lg transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="400"
                        height="600"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <ZoomIn className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                          <h4 className="text-white font-medium text-sm">{image.title}</h4>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        {/* Image Zoom Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-4">
            {selectedImage && (
              <div className="flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Detailed view of MaPa-Aur-Hum childcare app feature for better understanding"
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Childcare Experience?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our free pilot program and be among the first families to experience the future of childcare management.
          </p>
          <RegistrationDialog>
            <Button 
              variant="hero" 
              size="lg"
              className="bg-white/20 hover:bg-white/30 border-white/30"
            >
              Register for Free Pilot Program
              <ArrowRight className="h-5 w-5" />
            </Button>
          </RegistrationDialog>
        </div>
      </div>
    </section>
  );
};