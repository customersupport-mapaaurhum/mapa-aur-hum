import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.jpg";

export const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="MaPa-Aur-Hum Logo" className="h-10 w-10 rounded-lg object-cover" />
          <div>
            <h1 className="text-xl font-bold text-foreground">MaPa-Aur-Hum</h1>
            <p className="text-xs text-muted-foreground">Building trust for better childcare</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('why-mapa')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Why MaPa-Aur-Hum
          </button>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            How We Help
          </button>
          <button 
            onClick={() => scrollToSection('champions')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Champions
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </button>
          <button 
            onClick={() => scrollToSection('founder')}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Founder
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="default" 
            size="sm"
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};