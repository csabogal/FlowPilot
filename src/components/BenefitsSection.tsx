import { motion } from 'framer-motion';
import { Target, Zap, LayoutDashboard } from 'lucide-react';

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Redefine how your team operates.
              </h2>
              <p className="text-white/60 text-lg text-balance">
                We focus on outcomes. Stop switching between 10 different tools to figure out what's happening.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 bg-white/10 p-2 rounded-full hidden sm:block">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Move faster as a team</h3>
                  <p className="text-white/60 text-balance">Automate the busywork. Spend time building products, not managing tools.</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 bg-white/10 p-2 rounded-full hidden sm:block">
                  <LayoutDashboard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Reduce chaos</h3>
                  <p className="text-white/60 text-balance">One single source of truth for every decision, task, and discussion.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 bg-white/10 p-2 rounded-full hidden sm:block">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Keep everyone aligned</h3>
                  <p className="text-white/60 text-balance">Automatic summaries and updates ensure no one is ever left out of the loop.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-tr from-surface to-[#1a1a1a] shadow-2xl flex items-center justify-center p-2"
            >
              {/* Pulsing Vercel-like glowing aura behind the graphic */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 blur-[100px] rounded-full" 
              />
              
              <motion.img 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/benefits-graphic.png" 
                alt="FlowPilot team alignment visualization" 
                className="relative z-10 w-full h-full object-cover rounded-[20px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
