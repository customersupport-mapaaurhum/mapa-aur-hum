import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logoImg from "@/assets/mapa-aur-hum-logo.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
    setHoverTimeout(timeout);
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
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('why')}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              className="font-medium"
            >
              Why MaPa-Aur-Hum
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'why' && (
              <div className="absolute top-full left-0 mt-0 flex gap-2 bg-background border border-border rounded-md shadow-lg p-3 whitespace-nowrap">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/why-mapa">Why MaPa-Aur-Hum</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/features">Key Features</Link>
                </Button>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              className="font-medium"
            >
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'resources' && (
              <div className="absolute top-full left-0 mt-0 flex gap-2 bg-background border border-border rounded-md shadow-lg p-3 whitespace-nowrap">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/downloads">Downloads</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/tutorials">Video Tutorials</Link>
                </Button>
              </div>
            )}
          </div>

          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <Button
              variant="ghost"
              className="font-medium"
            >
              About Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            {activeMenu === 'about' && (
              <div className="absolute top-full left-0 mt-0 flex gap-2 bg-background border border-border rounded-md shadow-lg p-3 whitespace-nowrap">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <Link to="/about">About</Link>
                </Button>
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
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            className="font-medium"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm text-muted-foreground px-2">Why MaPa-Aur-Hum</p>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/why-mapa">Why MaPa-Aur-Hum</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/features">Key Features</Link>
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm text-muted-foreground px-2">Resources</p>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/downloads">Downloads</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/tutorials">Video Tutorials</Link>
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm text-muted-foreground px-2">About Us</p>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/about">About</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/founder">Founder</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                >
                  <Link to="/jobs">Careers</Link>
                </Button>
              </div>

              <Button
                variant="ghost"
                className="justify-start"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};