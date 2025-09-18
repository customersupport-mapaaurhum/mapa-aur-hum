import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Languages, Camera, Navigation, Volume2, UserCheck, ArrowRight } from "lucide-react";
import appPreview3 from "@/assets/app-preview-3.jpg";

export const Features = () => {
  const features = [
    {
      icon: Languages,
      title: "Local Language Support",
      description: "Communicate with maids and grandparents in their preferred local language for better understanding. Currently available in English and Hindi for the pilot.",
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

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">How We Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our innovative features are designed to address the real challenges faced by modern parents in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features list */}
          <div className="space-y-6">
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
          
          {/* App preview */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={appPreview3} 
                alt="MaPa-Aur-Hum Features Interface" 
                className="w-80 h-auto rounded-2xl shadow-trust"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-warm rounded-full p-3">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Childcare Experience?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our pilot program and be among the first families to experience the future of childcare management.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 border-white/30"
          >
            Register for Pilot Program
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};