import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield } from "lucide-react";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export const PrivacyPolicyDialog = ({ children }: PrivacyPolicyDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Privacy Policy
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <div className="text-center text-muted-foreground">
              Last updated: 20/09/2025
            </div>
            
            <p className="text-muted-foreground">
              At MaPaAurHum, we respect your privacy and are committed to keeping your family's information safe. 
              This policy explains what information we collect, how we use it, and how we protect it.
            </p>

            <div className="space-y-4">
              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. What Information We Collect</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Basic details you share: Name, email address, phone number, or anything you provide while using our website.</li>
                  <li>Usage data: Pages you visit, device type, and general browsing information.</li>
                  <li>Cookies: Small files that help us remember your preferences and improve your experience (you can switch these off in your browser).</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. How We Use Your Information</h3>
                <p className="text-muted-foreground mb-2">We use the information to:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Provide and improve our website and services.</li>
                  <li>Respond to your questions or feedback.</li>
                  <li>Send important updates (only if you choose to receive them).</li>
                  <li>Keep the website safe and secure.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Sharing of Information</h3>
                <p className="text-muted-foreground mb-2">We do not sell or rent your information to anyone. We may share it only if:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Needed with trusted service providers (like hosting or email tools) to run our website.</li>
                  <li>Required by law or government authorities.</li>
                  <li>To protect our rights, safety, or that of others.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">4. Data Storage & Security</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>We keep your information only as long as needed for the purpose you gave it.</li>
                  <li>We use reasonable security measures to protect it, but no system is 100% secure.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">5. Your Choices & Rights</h3>
                <p className="text-muted-foreground mb-2">As a parent, you can:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Ask us what information we have about you.</li>
                  <li>Request corrections or deletion of your information.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">6. Children's Privacy</h3>
                <p className="text-muted-foreground">
                  Our site is meant for parents and caregivers, not children. We do not knowingly collect data from 
                  children under 18. If we learn that a child's information has been shared, we will delete it.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">7. Changes to This Policy</h3>
                <p className="text-muted-foreground">
                  We may update this policy occasionally. If we make major changes, we will let you know on the website.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-foreground mb-2">8. Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have questions or requests about your information, please reach out:
                </p>
                <p className="text-muted-foreground mt-2">
                  📧 Email: <a href="mailto:customer.support@mapaaurhum.com" className="text-primary hover:underline">
                    customer.support@mapaaurhum.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </ScrollArea>
        
        <div className="flex justify-end pt-4">
          <Button onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};