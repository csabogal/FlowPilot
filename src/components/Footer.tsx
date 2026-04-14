export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent to-primary flex items-center justify-center">
                <div className="w-2 h-2 bg-dark rounded-full" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">FlowPilot</span>
            </div>
            <p className="text-white/40 text-sm text-balance">
              The intelligent workspace for teams that move fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#benefits" className="hover:text-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-white/30">
          <p>© {new Date().getFullYear()} FlowPilot. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
