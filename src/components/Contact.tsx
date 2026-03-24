import { lazy, Suspense } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeedbackDialog = lazy(() => import("@/components/FeedbackDialog").then(m => ({ default: m.FeedbackDialog })));

export const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Contact Us</h2>
          
          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
            We also provide training on how to use the app for your caregivers. Reach out to us if your maid/babysitter/relative needs support.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm md:text-base text-muted-foreground mb-6">
            <Mail className="h-4 w-4 text-primary" />
            <span>For questions or feedback, email us at </span>
            <a href="mailto:customer.support@mapaaurhum.com" className="text-primary hover:underline font-medium">
              customer.support@mapaaurhum.com
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">Want more features? Share your thoughts with us.</p>
          
          </div>
        </div>
      </div>
    </section>
  );
};
