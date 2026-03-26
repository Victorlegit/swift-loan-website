import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <Landmark className="w-6 h-6 text-emerald-500" />
          <span className="text-xl font-bold tracking-tight">SwiftLoan</span>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SwiftLoan Financial. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
