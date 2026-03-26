import { motion } from 'motion/react';
import { Building2, Landmark, ShieldCheck, Wallet, PiggyBank } from 'lucide-react';

export function TrustBadges() {
  const partners = [
    { name: 'Global Bank', icon: Landmark },
    { name: 'SecureTrust', icon: ShieldCheck },
    { name: 'Capital Partners', icon: Building2 },
    { name: 'Vault Finance', icon: PiggyBank },
    { name: 'PayStream', icon: Wallet },
  ];

  return (
    <div className="border-y border-slate-200 bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
          Trusted by leading financial institutions
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-60 grayscale">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-slate-800"
            >
              <partner.icon className="w-6 h-6" />
              <span className="font-semibold text-lg">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
