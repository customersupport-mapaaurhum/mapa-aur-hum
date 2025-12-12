import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import founderImg from "@/assets/mapa-aur-hum-sumita-linkedin.png";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function FounderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Meet Our Founder - Sumita Sarkar | MaPa-Aur-Hum</title>
        <meta name="description" content="Meet Sumita Sarkar, the founder of MaPa-Aur-Hum - a mother and IT professional creating childcare solutions for Indian families." />
        <link rel="canonical" href="https://mapaaurhum.com/founder" />
      </Helmet>

      <Header />

      <main className="flex-1 pt-20">
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
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  {/* Founder Image */}
                  <div className="flex items-center justify-center md:w-1/2">
                    <div className="relative w-full max-w-sm">
                      <img 
                        src={founderImg} 
                        alt="Sumita Sarkar, Founder of MaPa-Aur-Hum - experienced mother and IT professional creating childcare solutions for Indian families"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                        loading="eager"
                        width="256"
                        height="256"
                      />
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="flex flex-col justify-center space-y-4 md:w-1/2">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">Sumita Sarkar</h2>
                      <p className="text-primary font-medium mb-4">Founder, MaPa-Aur-Hum</p>
                      
                      <a 
                        href="https://www.linkedin.com/in/sumitasarkar/" 
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
                        Sumita is a mum to a joyful 9-year-old son and is based in Gurgaon.
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        With an experience of two decades in the IT industry with various well-known firms 
                        and multiple marquee clients, she is now trying to solve a problem closer to her heart.
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        Like most mums, knowing exactly how her child was being taken care of at home was 
                        always a nagging concern. Join her in this journey to simplify this problem and 
                        be a relaxed, joyful parent.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}