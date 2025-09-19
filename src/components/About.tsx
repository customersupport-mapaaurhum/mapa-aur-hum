import { Card } from "@/components/ui/card";
import { Users, Clock, MapPin, Smartphone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About MaPa-Aur-Hum</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand managing childcare for urban working parents is a daily challenge. 
            MaPa-Aur-Hum is built to tackle daily parenting challenges faced by parents of young kids 
            and babysitters in India. We invite you to join us in our journey to ease day-to-day 
            childcare management and standardize childcare in your absence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">For Families</h3>
            <p className="text-muted-foreground text-sm">
              Designed for urban working parents delegating childcare at home
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-trust transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Updates</h3>
            <p className="text-muted-foreground text-sm">
              Stay informed about your child's activities with instant notifications
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Made for India</h3>
            <p className="text-muted-foreground text-sm">
              Built specifically for Indian families with local language support
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