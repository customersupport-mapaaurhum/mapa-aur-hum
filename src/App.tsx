import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";

// Load Index eagerly - it's the critical landing page
import Index from "./pages/Index";

// Lazy load other pages for code splitting

const FounderPage = lazy(() => import("./pages/FounderPage"));
const ContributorsPage = lazy(() => import("./pages/ContributorsPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const CaregiverGamePage = lazy(() => import("./pages/CaregiverGamePage"));

const FAQPage = lazy(() => import("./pages/FAQPage"));
const TutorialsPage = lazy(() => import("./pages/TutorialsPage"));
const ChampionsPage = lazy(() => import("./pages/ChampionsPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const WhyMaPaPage = lazy(() => import("./pages/WhyMaPaPage"));
const KeyFeaturesPage = lazy(() => import("./pages/KeyFeaturesPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const UnsubscribePage = lazy(() => import("./pages/UnsubscribePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          
          
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/caregiver-game" element={<CaregiverGamePage />} />
          
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/champions" element={<ChampionsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/why-mapa" element={<WhyMaPaPage />} />
          <Route path="/key-features" element={<KeyFeaturesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          <Route path="/downloads" element={<Navigate to="/download" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
