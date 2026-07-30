import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

export const UpcomingSection = memo(() => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-6 md:p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                New in Mapa-aur-hum
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Money Magic Pilot
              </h2>
              
              <p className="text-base text-muted-foreground">
                We're exploring a fun new way to help children build healthy money habits early. 
                Try the Money Magic pilot and share your feedback with us.
              </p>
            </div>
            
            <Button
              size="lg"
              className="w-full md:w-auto min-w-[200px] group"
              onClick={() => window.open('https://mapaaurhum-money-magic-pilot.lovable.app/', '_blank')}
            >
              Explore Money Magic
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
});

UpcomingSection.displayName = "UpcomingSection";
