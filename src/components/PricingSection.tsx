import { motion } from 'framer-motion';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-dark relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-white/60 text-lg">
            Start for free, upgrade when your team scales. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Ambient Pricing Glow */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[150px] rounded-full pointer-events-none" 
          />

          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative z-10 p-8 rounded-3xl bg-surface/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all flex flex-col"
          >
            <h3 className="text-2xl font-medium mb-2">Starter</h3>
            <p className="text-white/50 text-sm mb-6">Perfect for trying out FlowPilot.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-white/40">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-white/70 text-sm">
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Up to 3 members
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Basic AI categorization
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> 1 workspace
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all font-medium">
              Start Free
            </button>
          </motion.div>

          {/* Pro Tier (Accent) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative z-20 p-8 rounded-3xl bg-gradient-to-b from-surfaceSubtle to-surface border border-primary/30 flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(26,102,255,0.15)] hover:shadow-[0_0_60px_rgba(26,102,255,0.25)] transition-all"
          >
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary px-3 py-1 text-xs font-bold rounded-full text-white">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-medium mb-2 text-white">Pro</h3>
            <p className="text-white/50 text-sm mb-6">For scaling startup teams.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-white/40">/user/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-white/90 text-sm">
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Unlimited members
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Advanced AI insights
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Unlimited workspaces
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Priority support
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-white text-dark hover:bg-white/90 transition-colors font-bold">
              Get Started
            </button>
          </motion.div>

          {/* Enterprise Tier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="relative z-10 p-8 rounded-3xl bg-surface/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all flex flex-col"
          >
            <h3 className="text-2xl font-medium mb-2">Enterprise</h3>
            <p className="text-white/50 text-sm mb-6">Custom limits and deep security.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-white/70 text-sm">
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> SSO & SAML
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Dedicated success manager
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Custom integrations
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Audit logs
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all font-medium">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
