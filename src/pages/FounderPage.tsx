import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import founderSumita from "@/assets/founder-sumita-new.jpg";

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </header>

      {/* Founder Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Founder</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The inspiration and vision behind MaPa-Aur-Hum
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Founder Image */}
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <img 
                      src={founderSumita} 
                      alt="Sumita Ranjan, Founder of MaPa-Aur-Hum childcare app for Indian working parents"
                      className="w-full h-auto rounded-lg shadow-elegant object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Founder Details */}
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Sumita Ranjan</h2>
                    <p className="text-primary font-medium mb-4">Founder, MaPa-Aur-Hum</p>
                    
                    <a 
                      href="https://www.linkedin.com/in/sumita-ranjan-0a6a78/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </div>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed">
                      Sumita brings over 20 years of experience in Product Management and Technology Leadership across domains including Telecom, Retail, and Banking.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      As a working mother herself, Sumita experienced firsthand the challenges of managing childcare while maintaining a demanding career. This personal journey inspired her to create MaPa-Aur-Hum - a solution designed to bridge the communication gap between working parents and their childcare providers.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Her vision is to empower Indian working families with tools that build trust, enable better parenting even in physical absence, and create a standardized approach to home-based childcare management.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
