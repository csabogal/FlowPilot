import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto border border-white/10 bg-surface/30 backdrop-blur-sm rounded-[2rem] p-12 md:p-20 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent glow in CTA */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Start building clarity today.
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join hundreds of teams already moving faster with FlowPilot. Stop managing tools and start building products.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-shimmer w-full sm:w-auto px-10 py-5 bg-white text-dark font-bold rounded-full flex items-center justify-center gap-2 shadow-xl"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <p className="text-sm text-white/40">No credit card required</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
