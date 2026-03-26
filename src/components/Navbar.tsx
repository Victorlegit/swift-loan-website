import { motion } from 'motion/react';
import { Landmark } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 text-emerald-600">
        <Landmark className="w-8 h-8" />
        <span className="text-xl font-bold tracking-tight text-slate-900">SwiftLoan</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
        <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
      </div>
      <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
        Apply Now
      </button>
    </nav>
  );
}
