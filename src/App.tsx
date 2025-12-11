import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhyMaPaPage from "./pages/WhyMaPaPage";
import JobsPage from "./pages/JobsPage";
import FounderPage from "./pages/FounderPage";
import ContributorsPage from "./pages/ContributorsPage";
import ContactUsPage from "./pages/ContactUsPage";
import CaregiverGamePage from "./pages/CaregiverGamePage";
import DownloadsPage from "./pages/DownloadsPage";
import FAQPage from "./pages/FAQPage";
import TutorialsPage from "./pages/TutorialsPage";
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
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/caregiver-game" element={<CaregiverGamePage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
