import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "FlowPilot eliminated 80% of our internal status meetings. The clarity it brings to our remote team is simply unmatched.",
    author: "Sarah Jenkins",
    role: "VP of Product, TechFlow",
    avatar: "S"
  },
  {
    quote: "We used to lose context constantly when switching between chat and tasks. Now, everything just makes sense.",
    author: "David Chen",
    role: "Engineering Manager, StartupX",
    avatar: "D"
  },
  {
    quote: "The AI categorizations feel like magic. It's the first workspace tool that actually saves me time instead of demanding it.",
    author: "Elena Rodriguez",
    role: "Design Lead, Creativ",
    avatar: "E"
  }
];

export function SocialProofSection() {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative overflow-hidden">
          <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-8">
            Trusted by forward-thinking teams
          </p>
          
          {/* Infinite Marquee Logos */}
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex gap-16 md:gap-32 items-center opacity-50 grayscale animate-marquee pl-16 md:pl-32">
              <div className="text-2xl font-bold tracking-tighter shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Acme Corp</div>
              <div className="text-2xl font-serif italic shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">GlobalTech</div>
              <div className="text-2xl font-mono tracking-widest shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">NEXUS</div>
              <div className="text-2xl font-medium shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Vertex</div>
              <div className="text-2xl font-black shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">OMNI</div>
              {/* Duplicated for seamless loop */}
              <div className="text-2xl font-bold tracking-tighter shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Acme Corp</div>
              <div className="text-2xl font-serif italic shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">GlobalTech</div>
              <div className="text-2xl font-mono tracking-widest shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">NEXUS</div>
              <div className="text-2xl font-medium shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">Vertex</div>
              <div className="text-2xl font-black shrink-0 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">OMNI</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20 relative">
          {/* Ambient glow behind testimonials */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative z-10 p-8 rounded-2xl bg-surface/50 border border-white/5 flex flex-col justify-between hover:bg-surface transition-all hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-default"
            >
              <p className="text-white/80 text-lg leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white/70">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
