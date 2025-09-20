import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { RegistrationDialog } from "@/components/RegistrationDialog";

export const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join our pilot program or have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border/50 shadow-elegant">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">(91)-7217615508</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">customer.support@mapaaurhum.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      Sector 4, Urban Estate<br />
                      Gurgaon, Haryana - 122001
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick registration CTA */}
            <Card className="p-8 bg-gradient-hero border-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Our Pilot Program
              </h3>
              <p className="text-white/90 mb-6">
                Be among the first families to experience the future of childcare management. 
                Limited spots available for our pilot run.
              </p>
              <RegistrationDialog>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full bg-white/20 hover:bg-white/30 border-white/30"
                >
                  Register Now
                  <Send className="h-5 w-5" />
                </Button>
              </RegistrationDialog>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};