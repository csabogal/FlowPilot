import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid">
      {/* Dynamic Mouse Glow Backdrop (Ambient) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full delay-1000 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Meet FlowPilot AI Workspace v1.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-balance mx-auto leading-[0.9] mb-8"
        >
          Productivity <br /> at <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">lightspeed</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
        >
          FlowPilot connects conversations, tasks, and team insights so you move faster with absolute clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="animate-shimmer w-full sm:w-auto px-10 py-5 bg-white text-dark font-semibold rounded-full flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white font-semibold rounded-full transition-colors"
          >
            Book a Demo
          </motion.button>
        </motion.div>

        {/* Image Mockup with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 w-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-5xl rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-surfaceSubtle p-1 md:p-3"
          >
            {/* The actual generated UI image */}
            <img 
              src="/dashboard-mockup.png" 
              alt="FlowPilot intelligent workspace dashboard interface" 
              className="w-full h-auto rounded-xl md:rounded-[24px] object-cover"
            />
            {/* Subtle glow overlay over the image to blend it nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent pointer-events-none rounded-[32px]" />
          </motion.div>
        </motion.div>
      </div>
  </section>
  );
}
