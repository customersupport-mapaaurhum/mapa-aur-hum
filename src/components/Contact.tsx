import { Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {

  return (
    <section id="contact" className="py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Contact Us</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>For questions or feedback, email us at </span>
              <a href="mailto:customer.support@mapaaurhum.com" className="text-primary hover:underline font-medium">
                customer.support@mapaaurhum.com
              </a>
            </div>
            <Button asChild variant="default" size="default">
              <a href="https://calendly.com/mapa-aur-hum" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};