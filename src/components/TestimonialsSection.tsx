const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "ServerOwner123",
      server: "PixelWorld GTPS",
      message: "Mantap banget! Server saya yang tadinya sepi jadi rame setelah dipromote disini. Gratis pula! 🔥",
      rating: 5
    },
    {
      name: "GTPlayer_Pro",
      server: "MegaWorld GTPS", 
      message: "Prosesnya cepet banget, cuma kirim link langsung dipromote. Recommended deh buat owner GTPS! ⚡",
      rating: 5
    },
    {
      name: "NewbieMaster",
      server: "FreshStart GTPS",
      message: "Server baru saya langsung dapet player banyak. Makasih banyak gan, service terbaik! 🙏",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Dukungan Komunitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ribuan server GTPS sudah merasakan manfaatnya. Bergabunglah dengan komunitas yang terus berkembang!
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`fade-in fade-in-delay-${index + 1} glass p-6 rounded-xl neon-glow hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.server}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-foreground/80 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>

        <div className="fade-in fade-in-delay-4 text-center mt-12">
          <div className="inline-flex items-center gap-4 glass p-6 rounded-xl">
            <div className="text-3xl">🎉</div>
            <div>
              <p className="text-2xl font-bold text-primary">1000+</p>
              <p className="text-muted-foreground">Server Terpromote</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-2xl font-bold text-primary">50K+</p>
              <p className="text-muted-foreground">Player Terjangkau</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-muted-foreground">Support Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;