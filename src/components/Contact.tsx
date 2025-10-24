import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { FeedbackDialog } from "@/components/FeedbackDialog";

export const Contact = () => {

  return (
    <section id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to partner with us or have any questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact information */}
          <Card className="p-8 border-border/50 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-trust rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">customer.support@mapaaurhum.com</p>
                </div>
              </div>
            
            {/* Feedback Button */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <FeedbackDialog>
                <Button variant="outline" size="sm" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Share Feedback
                </Button>
              </FeedbackDialog>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};