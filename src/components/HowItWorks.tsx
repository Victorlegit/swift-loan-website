import { motion } from 'motion/react';
import { FileText, Zap, DollarSign } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: '1. Apply Online',
      description: 'Connect your business bank account and fill out a simple 5-minute application. No endless paperwork.',
    },
    {
      icon: Zap,
      title: '2. AI Underwriting',
      description: 'Our proprietary AI analyzes your cash flow in seconds to provide an instant approval decision.',
    },
    {
      icon: DollarSign,
      title: '3. Get Funded',
      description: 'Once approved, funds are wired directly to your account within 24 hours. Put the capital to work immediately.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How SwiftLoan Works</h2>
          <p className="text-lg text-slate-600">We've completely rebuilt the lending process to be fast, transparent, and built for modern businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-emerald-50 border-8 border-white flex items-center justify-center mb-6 shadow-sm">
                <step.icon className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
