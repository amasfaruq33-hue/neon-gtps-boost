const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="fade-in fade-in-delay-1">
          <div className="glass p-8 md:p-12 rounded-2xl neon-glow">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-foreground">🎮</span>
              </div>
              <h3 className="text-2xl font-bold text-neon mb-2">Content Creator GTPS</h3>
              <p className="text-muted-foreground">Membantu Komunitas Berkembang</p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-center text-foreground/90">
                Halo fellow GTers! 👋 Saya seorang content creator yang fokus di dunia 
                <span className="text-primary font-semibold"> Growtopia Private Server</span>. 
                Sudah bertahun-tahun berkecimpung di komunitas ini dan melihat betapa sulitnya 
                server kecil untuk mendapat eksposur.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">🎯 Misi Saya</h4>
                  <p className="text-foreground/80">
                    Memberikan platform gratis untuk mempromosikan GTPS agar server kecil 
                    bisa dikenal dan berkembang bersama komunitas.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">💝 Kenapa Gratis?</h4>
                  <p className="text-foreground/80">
                    Karena saya percaya setiap server punya potensi unik. 
                    Mari dukung komunitas GTPS Indonesia agar semakin besar!
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-primary font-semibold text-xl">
                  "Bersama kita membangun komunitas GTPS Indonesia yang lebih kuat! 🚀"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;