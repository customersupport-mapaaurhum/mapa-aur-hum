import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WhyMaPaPage from "./pages/WhyMaPaPage";
import JobsPage from "./pages/JobsPage";
import AuthPage from "./pages/AuthPage";
import AdminApplicationsPage from "./pages/AdminApplicationsPage";
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
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/applications" element={<AdminApplicationsPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
