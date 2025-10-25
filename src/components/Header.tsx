import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImg from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Fixed header height + padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoImg} alt="MaPa-Aur-Hum childcare app logo for Indian parents and families" className="h-10 w-10 rounded-lg object-cover" width="40" height="40" />
          <div>
            <h2 className="text-xl font-bold text-foreground">MaPa-Aur-Hum</h2>
            <p className="text-xs text-muted-foreground">Building trust for better childcare</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <Button
              variant="ghost"
              className="font-medium"
              onMouseEnter={() => setActiveMenu('why')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              Why MaPa-Aur-Hum
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'why' && (
              <div 
                className="absolute top-full left-0 mt-1 flex gap-4 bg-background border border-border rounded-md shadow-lg p-2 whitespace-nowrap"
                onMouseEnter={() => setActiveMenu('why')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection('why-mapa')}
                >
                  Why MaPa-Aur-Hum
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection('features')}
                >
                  Key Features
                </Button>
              </div>
            )}
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              className="font-medium"
              onMouseEnter={() => setActiveMenu('resources')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'resources' && (
              <div 
                className="absolute top-full left-0 mt-1 flex gap-4 bg-background border border-border rounded-md shadow-lg p-2 whitespace-nowrap"
                onMouseEnter={() => setActiveMenu('resources')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection('downloads')}
                >
                  Downloads
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection('tutorials')}
                >
                  Video Tutorials
                </Button>
              </div>
            )}
          </div>

          <div className="relative">
            <Button
              variant="ghost"
              className="font-medium"
              onMouseEnter={() => setActiveMenu('about')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              About Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'about' && (
              <div 
                className="absolute top-full left-0 mt-1 flex gap-4 bg-background border border-border rounded-md shadow-lg p-2 whitespace-nowrap"
                onMouseEnter={() => setActiveMenu('about')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/founder">Founder</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/jobs">Careers</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection('champions')}
                >
                  Contributors
                </Button>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            className="font-medium"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};