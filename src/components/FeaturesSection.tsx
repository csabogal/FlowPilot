import { motion } from 'framer-motion';
import { Brain, Users, Compass } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    title: 'AI-powered organization',
    description: 'Auto-categorize ideas, tasks, and notes instantly based on context.',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Real-time collaboration',
    description: 'Work seamlessly with live cursors, context-aware comments, and presence.',
  },
  {
    icon: <Compass className="w-6 h-6 text-purple-400" />,
    title: 'Decision tracking',
    description: 'Automatically log decisions and link them directly to the surrounding context.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 md:py-48 relative z-10 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-balance">
            A smarter way to work
          </h2>
          <p className="text-white/50 text-xl font-light">
            Everything your team needs to move fast and stay aligned, packed into one fluid interface.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-white/10 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-medium mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary transition-all">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-balance">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
