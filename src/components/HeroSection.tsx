import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    const message = "Halo, saya ingin promote GTPS saya. Berikut linknya:";
    const whatsappUrl = `https://wa.me/6282335769274?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
             style={{ background: 'radial-gradient(circle, hsl(var(--neon-glow) / 0.3), transparent 70%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-30 animate-pulse"
             style={{ background: 'radial-gradient(circle, hsl(var(--neon-glow) / 0.2), transparent 70%)', animationDelay: '1s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl font-black mb-6 gradient-text leading-tight">
            🚀 Free Promote GTPS 
            <span className="block text-neon">Tanpa Ribet!</span>
          </h1>
        </div>
        
        <div className="fade-in fade-in-delay-1 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">100% GRATIS</span> • 
            <span className="text-primary font-semibold"> TIDAK PERLU DAFTAR</span> • 
            <span className="text-primary font-semibold"> TANPA SYARAT</span>
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mt-4">
            Cukup kirim link GTPS kamu dan langsung dipromosikan ke komunitas!
          </p>
        </div>

        <div className="fade-in fade-in-delay-2">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handleWhatsAppClick}
            className="text-2xl py-8 px-12 mb-8"
          >
            📱 Kirim GTPS Sekarang
          </Button>
        </div>

        <div className="fade-in fade-in-delay-3">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              ✅ Tanpa Biaya Tersembunyi
            </span>
            <span className="flex items-center gap-2">
              ✅ Proses Instan
            </span>
            <span className="flex items-center gap-2">
              ✅ Reach Ribuan Player
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;