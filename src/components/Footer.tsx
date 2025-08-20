const Footer = () => {
  const hashtags = [
    "#GTPSIndonesia",
    "#FreePromoteGTPS", 
    "#GrowtopiaPrivateServer",
    "#GTPSNoLag",
    "#GTPSGratis",
    "#CommunityGTPS",
    "#ServerGTPS",
    "#PromoteGratis",
    "#GTIndonesia",
    "#GrowtopiaCommunity"
  ];

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
      
      {/* Marquee Hashtags */}
      <div className="relative mb-8">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee inline-block">
            <span className="text-2xl md:text-3xl font-bold text-primary/60 mx-8">
              {hashtags.join(' • ')} • {hashtags.join(' • ')}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="glass p-8 rounded-2xl mb-8 neon-glow">
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-2">
                🚀 Free Promote GTPS
              </h3>
              <p className="text-muted-foreground">
                Membantu komunitas GTPS Indonesia berkembang bersama
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a 
                href="https://wa.me/6282335769274" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:neon-glow transition-all duration-300 hover:scale-105"
              >
                <span className="text-2xl">💬</span>
                <span className="text-primary font-semibold">WhatsApp</span>
              </a>
              
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg opacity-60">
                <span className="text-2xl">📺</span>
                <span className="text-muted-foreground">YouTube (Soon)</span>
              </div>
              
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg opacity-60">
                <span className="text-2xl">🎮</span>
                <span className="text-muted-foreground">Discord (Soon)</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Server Promoted</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Players Reached</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Free Service</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © 2024 Free Promote GTPS. Made with 💙 for GTPS Community
            </p>
            <div className="flex items-center gap-4">
              <span className="text-primary">•</span>
              <span>No Hidden Fees</span>
              <span className="text-primary">•</span>
              <span>No Registration Required</span>
              <span className="text-primary">•</span>
              <span>100% Free Forever</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-64 h-32 rounded-full opacity-10 animate-pulse"
           style={{ background: 'radial-gradient(circle, hsl(var(--neon-glow) / 0.3), transparent 70%)' }}></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-24 rounded-full opacity-20 animate-pulse"
           style={{ background: 'radial-gradient(circle, hsl(var(--neon-glow) / 0.2), transparent 70%)', animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;