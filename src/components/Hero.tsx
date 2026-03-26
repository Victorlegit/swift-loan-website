import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32 lg:pb-40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-200">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Funding up to $250k
              </span>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Stop waiting for the bank. <span className="text-emerald-600">Get funded today.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Traditional loans take weeks of paperwork. SwiftLoan uses AI to approve and fund your business in minutes, so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
                  Check Eligibility <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors">
                  View Rates
                </button>
              </div>
              <div className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-500 flex-wrap">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> No impact on credit score</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> 5-minute application</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
