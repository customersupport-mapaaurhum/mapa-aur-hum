import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Mail } from "lucide-react";
import founderImg from "@/assets/founder-sumita-new.jpg";

export const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Meet the Founder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by a mother's concern and backed by industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-border/50 shadow-elegant">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Founder image */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <img 
                    src={founderImg} 
                    alt="Sumita Sarkar, Founder of MaPa-Aur-Hum" 
                    className="w-64 h-64 rounded-2xl object-cover mx-auto shadow-warm"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-gradient-warm rounded-full p-3">
                    <ExternalLink className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Founder content */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Sumita Sarkar</h3>
                <p className="text-lg text-primary font-medium mb-6">Founder & CEO</p>
                
                <div className="space-y-4 text-muted-foreground mb-8">
                  <p>
                    Sumita is a mum to a joyful 9-year-old son and is based in Gurgaon.
                  </p>
                  <p>
                    With an experience of two decades in the IT industry with various well-known firms 
                    and multiple marquee clients, she is now trying to solve a problem closer to her heart.
                  </p>
                  <p>
                    Like most mums, knowing exactly how her child was being taken care of at home was 
                    always a nagging concern. Join her in this journey to simplify this problem and 
                    be a relaxed, joyful parent.
                  </p>
                </div>

                {/* Contact buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default"
                    onClick={() => window.open('https://linkedin.com/in/sumita-sarkar', '_blank')}
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('mailto:customer.support@mapaaurhum.com', '_blank')}
                  >
                    <Mail className="h-4 w-4" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};