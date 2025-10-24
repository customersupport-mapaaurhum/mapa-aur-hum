import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoImg from "@/assets/logo.jpg";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logoImg} alt="MaPa-Aur-Hum childcare app logo for Indian parents and families" className="h-10 w-10 rounded-lg object-cover" width="40" height="40" />
          <div>
            <h2 className="text-xl font-bold text-foreground">MaPa-Aur-Hum</h2>
            <p className="text-xs text-muted-foreground">Building trust for better childcare</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="hidden md:flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-background z-50">
            <DropdownMenuItem onClick={() => scrollToSection('about')}>
              About Us
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('why-mapa')}>
              Why MaPa-Aur-Hum
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('features')}>
              How We Help
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('downloads')}>
              Download
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('tutorials')}>
              Tutorials
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('champions')}>
              Champions
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => scrollToSection('contact')}>
              Contact Us
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/founder">Founder</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/jobs">Careers</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};