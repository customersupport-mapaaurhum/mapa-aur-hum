import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

// Load Index eagerly - it's the critical landing page
import Index from "./pages/Index";

// Lazy load other pages for code splitting
const JobsPage = lazy(() => import("./pages/JobsPage"));
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
const KeyFeatures2Page = lazy(() => import("./pages/KeyFeatures2Page"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticleDetailPage = lazy(() => import("./pages/ArticleDetailPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage"));
const AdminPremiumRequestsPage = lazy(() => import("./pages/AdminPremiumRequestsPage"));
const ManageLoginPage = lazy(() => import("./pages/ManageLoginPage"));
const ManagePaymentsPage = lazy(() => import("./pages/ManagePaymentsPage"));
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
          
          <Route path="/jobs" element={<JobsPage />} />
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
          <Route path="/key-features-2" element={<KeyFeatures2Page />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/premium-requests" element={<AdminPremiumRequestsPage />} />
          <Route path="/manage/auth" element={<ManageLoginPage />} />
          <Route path="/manage/payments" element={<ManagePaymentsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
