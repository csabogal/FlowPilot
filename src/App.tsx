import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-dark text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <BenefitsSection />
        <SocialProofSection />
        <PricingSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
