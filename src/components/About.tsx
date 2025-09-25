import { Card } from "@/components/ui/card";
import { Users, Clock, MapPin, Smartphone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted Childcare Management App for Indian Working Parents</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            MaPa-Aur-Hum is a specialized childcare coordination platform designed for working parents in India. 
            Get real-time babysitter updates with picture evidence, Hindi language support, and emergency childcare management - all in one trusted app.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">For Working Indian Families</h3>
            <p className="text-muted-foreground text-sm">
              Specialized childcare app designed for urban working parents managing home-based childcare with trusted babysitters and family caregivers
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-trust transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Picture Updates & Real-time Communication</h3>
            <p className="text-muted-foreground text-sm">
              Get instant photo evidence and real-time babysitter updates about your child's activities with secure communication features
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Hindi Language Childcare Support</h3>
            <p className="text-muted-foreground text-sm">
              Audio instructions and Hindi language support specifically designed for Indian households with local caregivers and grandparents
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Easy to Use</h3>
            <p className="text-muted-foreground text-sm">
              Intuitive interface designed for all family members and caregivers
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};