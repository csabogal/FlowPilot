import { motion } from 'framer-motion';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-y border-white/5 relative z-10 overflow-hidden">
      {/* Subtle pulse behind the contact form */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            We'd love to hear from you
          </h2>
          <p className="text-white/60 text-lg mb-12 text-balance">
            Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
          </p>

          <form className="space-y-4 text-left max-w-md mx-auto group" onSubmit={(e) => e.preventDefault()}>
            <motion.div whileFocus={{ scale: 1.01 }} className="relative transition-all">
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="hello@yourcompany.com" 
                className="w-full px-5 py-4 bg-surface/50 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all hover:bg-surface/80"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.01 }} className="relative transition-all">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                rows={4}
                placeholder="How can we help?" 
                className="w-full px-5 py-4 bg-surface/50 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all hover:bg-surface/80 resize-none"
              />
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-white text-dark font-bold rounded-xl hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
