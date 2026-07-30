import { memo } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const UpcomingSection = memo(() => {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 border-b border-border py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary shrink-0" />
            <span className="font-semibold text-foreground text-sm">
              New in Mapa-aur-hum: Money Magic Pilot
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md hidden sm:block">
            A fun new way to help children build healthy money habits early.
          </p>
          <Button
            variant="link"
            size="sm"
            className="h-auto p-0 text-primary font-semibold text-sm group"
            onClick={() => window.open('https://mapaaurhum-money-magic-pilot.lovable.app/', '_blank')}
          >
            Explore
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
});

UpcomingSection.displayName = "UpcomingSection";
