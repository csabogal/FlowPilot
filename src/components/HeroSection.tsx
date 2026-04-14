import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden bg-grid">
      {/* Dynamic Mouse Glow Backdrop (Ambient) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full delay-1000 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-12 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <span>Meet FlowPilot v1.0</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-balance mx-auto leading-[0.95] mb-10"
        >
          Clarity for modern teams. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Powered by AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto mb-16 text-balance leading-relaxed font-light"
        >
          FlowPilot connects ideas, tasks, and decisions in one intelligent workspace.
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
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           className="relative mt-16 w-full flex justify-center"
        >
          {/* Subtle Ambient Glow behind the mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

          <div
            className="relative w-full max-w-5xl rounded-2xl md:rounded-[32px] overflow-hidden bg-surfaceSubtle p-1 md:p-3 animate-[float-mockup_4s_ease-in-out_infinite]"
          >
            {/* The actual generated UI image */}
            <img 
              src="/dashboard-mockup.png" 
              alt="FlowPilot intelligent workspace dashboard interface" 
              className="w-full h-auto rounded-xl md:rounded-[24px] object-cover"
            />
            {/* Subtle glow overlay over the image to blend it nicely */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent pointer-events-none rounded-[32px]" />
          </div>
        </motion.div>
      </div>
  </section>
  );
}
