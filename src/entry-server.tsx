import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';

// Import all page components directly for SSR (no lazy loading)
import Index from './pages/Index';

import FounderPage from './pages/FounderPage';
import ContributorsPage from './pages/ContributorsPage';
import ContactUsPage from './pages/ContactUsPage';
import CaregiverGamePage from './pages/CaregiverGamePage';
import FAQPage from './pages/FAQPage';
import TutorialsPage from './pages/TutorialsPage';
import ChampionsPage from './pages/ChampionsPage';
import DownloadPage from './pages/DownloadPage';
import WhyMaPaPage from './pages/WhyMaPaPage';
import KeyFeaturesPage from './pages/KeyFeaturesPage';
import ArticlesPage from './pages/ArticlesPage';
import PricingPage from './pages/PricingPage';
import NotFound from './pages/NotFound';

// Route to component mapping for SSR
const routeComponents: Record<string, React.ComponentType> = {
  '/': Index,
  
  '/founder': FounderPage,
  '/contributors': ContributorsPage,
  '/contact': ContactUsPage,
  '/caregiver-game': CaregiverGamePage,
  '/faq': FAQPage,
  '/tutorials': TutorialsPage,
  '/champions': ChampionsPage,
  '/download': DownloadPage,
  '/why-mapa': WhyMaPaPage,
  '/key-features': KeyFeaturesPage,
  '/articles': ArticlesPage,
  '/pricing': PricingPage,
};

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  });

  // Get the component for this route
  const PageComponent = routeComponents[url] || NotFound;

  const html = ReactDOMServer.renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={url}>
          <PageComponent />
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
  
  return html;
}
