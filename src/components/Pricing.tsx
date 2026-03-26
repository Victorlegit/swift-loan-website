import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      amount: 'Up to $25k',
      rate: 'From 5.9% APR',
      features: ['Instant AI Approval', '6-12 month terms', 'No prepayment penalties', 'Basic support'],
      popular: false,
    },
    {
      name: 'Growth',
      amount: 'Up to $100k',
      rate: 'From 4.5% APR',
      features: ['Instant AI Approval', '12-24 month terms', 'No prepayment penalties', 'Priority support', 'Dedicated account manager'],
      popular: true,
    },
    {
      name: 'Scale',
      amount: 'Up to $250k',
      rate: 'From 3.9% APR',
      features: ['24-hour manual review', '24-36 month terms', 'No prepayment penalties', '24/7 Priority support', 'Custom repayment schedules'],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Transparent Pricing</h2>
          <p className="text-lg text-slate-600">No hidden fees, no compounding interest. Just clear, straightforward terms designed to help you grow.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl bg-white p-8 shadow-sm border ${plan.popular ? 'border-emerald-500 shadow-emerald-100 shadow-xl scale-105 z-10' : 'border-slate-200'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">{plan.amount}</div>
                <div className="text-emerald-600 font-medium">{plan.rate}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Apply for {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
