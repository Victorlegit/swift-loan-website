import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can I get funded?",
      answer: "Once approved, funds are typically wired to your business bank account within 24 hours. In many cases, if you apply before 10 AM EST, you can receive same-day funding."
    },
    {
      question: "Will applying affect my credit score?",
      answer: "No. We perform a soft credit pull during the initial application process to check your eligibility, which has zero impact on your credit score. A hard pull is only performed after you accept a loan offer."
    },
    {
      question: "What are the minimum requirements to apply?",
      answer: "To be eligible, your business must be based in the US, have been operating for at least 6 months, and generate a minimum of $50,000 in annual revenue."
    },
    {
      question: "Are there any hidden fees or prepayment penalties?",
      answer: "Absolutely not. We believe in 100% transparent pricing. The rate you see is the rate you pay. You can also pay off your loan early at any time without any prepayment penalties."
    },
    {
      question: "How does the AI underwriting work?",
      answer: "Our proprietary AI securely connects to your business bank accounts and accounting software (read-only) to analyze your cash flow, revenue trends, and business health in real-time, allowing us to make instant, accurate lending decisions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
