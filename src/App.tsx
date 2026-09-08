import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getServiceBySlug } from './data/servicesData';

function AppContent() {
  const { currentPath } = useRouter();

  // Normalize path by stripping leading and trailing slashes
  const cleanPath = currentPath.replace(/^\/+|\/+$/g, '');

  const renderContent = () => {
    if (cleanPath === '' || cleanPath === 'index.html') {
      return <HomePage />;
    }
    if (cleanPath === 'about') {
      return <AboutPage />;
    }
    if (cleanPath === 'services') {
      return <ServicesIndexPage />;
    }
    if (cleanPath === 'reviews') {
      return <ReviewsPage />;
    }
    if (cleanPath === 'contact') {
      return <ContactPage />;
    }
    if (cleanPath === 'disclaimer') {
      return <DisclaimerPage />;
    }
    if (cleanPath === 'privacy-policy') {
      return <PrivacyPolicyPage />;
    }
    if (cleanPath === 'terms-and-conditions') {
      return <TermsPage />;
    }

    // Check if the path matches one of the 21 unique service slugs
    const service = getServiceBySlug(cleanPath);
    if (service) {
      return <ServiceDetailPage slug={cleanPath} />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2937] font-sans antialiased selection:bg-[#C59B48]/30 selection:text-[#111D42]">
      <Navbar />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer />
      <StickyMobileBar />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
