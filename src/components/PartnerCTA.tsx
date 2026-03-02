import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const PartnerCTA = memo(() => (
  <section className="py-16 lg:py-20 bg-primary/5">
    <div className="max-w-3xl mx-auto px-4">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          Are you a caregiver agency or staffing firm?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md">
          Partner with us to offer a seamless childcare experience to your customers and stand out in the market.
        </p>
        <div className="pt-4">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 rounded-full"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
));

PartnerCTA.displayName = "PartnerCTA";
