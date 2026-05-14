import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found - MaPa Aur Hum</title>
        <meta name="description" content="The page you are looking for does not exist. Return to MaPa Aur Hum homepage to explore our parenting and caregiver management app." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8">
                Sorry, the page <code className="bg-muted px-2 py-1 rounded text-sm">{location.pathname}</code> doesn't exist or has been moved.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/">
                    <Home className="h-4 w-4" />
                    Go to Homepage
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2" onClick={() => window.history.back()}>
                  <button type="button" onClick={() => window.history.back()}>
                    <ArrowLeft className="h-4 w-4" />
                    Go Back
                  </button>
                </Button>
              </div>

              <div className="pt-8 border-t border-border mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for something specific? Try these popular pages:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/key-features">Key Features</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/articles">Articles</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/faq">FAQ</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-xs text-muted-foreground">
                  If you believe this is an error, please{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    contact our support team
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
