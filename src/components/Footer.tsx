import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import logoImg from "@/assets/logo.jpg";
import { PrivacyPolicyDialog } from "@/components/PrivacyPolicyDialog";
import { TermsDialog } from "@/components/TermsDialog";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImg} alt="MaPa-Aur-Hum Technologies logo - trusted childcare solutions for Indian families" className="h-10 w-10 rounded-lg object-cover" width="40" height="40" loading="lazy" />
              <div>
                <h3 className="text-xl font-bold text-background">Mapaaurhum Technologies</h3>
                <p className="text-sm text-background/70">OPC Pvt Ltd</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://instagram.com/mapaaurhum', '_blank')}
                className="text-background hover:bg-background/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://www.linkedin.com/company/mapaaurhum/', '_blank')}
                className="text-background hover:bg-background/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('https://www.youtube.com/@MaPa-Aur-Hum', '_blank')}
                className="text-background hover:bg-background/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => window.open('mailto:customer.support@mapaaurhum.com', '_blank')}
                className="text-background hover:bg-background/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Contact Details</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">(91)-7217615508</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-background/60 mt-0.5" />
                <span className="text-background/80 text-sm">
                  1490, sector 4, Urban Estate<br />
                  Gurgaon, Haryana - 122001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">@mapaaurhum</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-background/80 text-sm">customer.support@mapaaurhum.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Mapaaurhum Technologies OPC Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <PrivacyPolicyDialog>
                <button className="text-background/60 hover:text-background text-sm transition-colors">
                  Privacy Policy
                </button>
              </PrivacyPolicyDialog>
              <TermsDialog>
                <button className="text-background/60 hover:text-background text-sm transition-colors">
                  Terms of Service
                </button>
              </TermsDialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};