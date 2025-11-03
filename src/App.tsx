import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhyMaPaPage from "./pages/WhyMaPaPage";
import FeaturesPage from "./pages/FeaturesPage";
import DownloadsPage from "./pages/DownloadsPage";
import TutorialsPage from "./pages/TutorialsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import JobsPage from "./pages/JobsPage";
import FounderPage from "./pages/FounderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/why-mapa" element={<WhyMaPaPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/founder" element={<FounderPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
