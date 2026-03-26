import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
