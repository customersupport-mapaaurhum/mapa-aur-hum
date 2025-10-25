import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logoImg from "@/assets/logo.jpg";
import { cn } from "@/lib/utils";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Why MaPa-Aur-Hum</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-1 p-2 bg-background border border-border rounded-md shadow-lg flex flex-col">
                  <li>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      onClick={() => scrollToSection('why-mapa')}
                    >
                      Why MaPa-Aur-Hum
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      onClick={() => scrollToSection('features')}
                    >
                      Key Features
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-1 p-2 bg-background border border-border rounded-md shadow-lg flex flex-col">
                  <li>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      onClick={() => scrollToSection('downloads')}
                    >
                      Downloads
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      onClick={() => scrollToSection('tutorials')}
                    >
                      Video Tutorials
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-1 p-2 bg-background border border-border rounded-md shadow-lg flex flex-col">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/founder"
                        className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      >
                        Founder
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/jobs"
                        className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      >
                        Careers
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "w-full cursor-pointer justify-start")}
                      onClick={() => scrollToSection('champions')}
                    >
                      Contributors
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};