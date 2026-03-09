import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Mail } from "lucide-react";
import founderImg from "@/assets/mapa-aur-hum-sumita-linkedin.png";

export const Founder = () => {
  return (
    <section id="founder" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet the Founder</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-border/50 shadow-elegant">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Founder image */}
              <div className="flex-shrink-0">
                <img 
                  src={founderImg} 
                  alt="Mapaaurhum Sumita Sarkar, Founder of MaPa-Aur-Hum - experienced mother and IT professional creating childcare solutions for Indian families"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover shadow-elegant"
                  width="256"
                  height="256"
                  loading="lazy"
                />
              </div>
              
              {/* Founder content */}
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">Sumita Sarkar</h3>
                <p className="text-lg text-primary font-medium mb-6">Founder</p>
                
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
                    onClick={() => window.open('https://www.linkedin.com/in/sumitasarkar/', '_blank')}
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