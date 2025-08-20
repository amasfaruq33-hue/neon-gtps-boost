import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apakah ini benar-benar gratis?",
      answer: "Ya, 100% gratis tanpa syarat apapun! Tidak ada biaya tersembunyi, tidak perlu bayar, dan tidak ada catch. Ini murni untuk membantu komunitas GTPS Indonesia berkembang."
    },
    {
      question: "Bagaimana cara mengirim link GTPS saya?",
      answer: "Sangat mudah! Cukup klik tombol 'Kirim GTPS Sekarang' di atas, nanti akan langsung terhubung ke WhatsApp saya. Kirim link server kamu dan saya akan segera mempromosikannya."
    },
    {
      question: "Berapa lama proses promosi berlangsung?",
      answer: "Biasanya dalam 1-24 jam setelah kamu kirim link, server kamu sudah akan dipromosikan ke berbagai channel dan grup komunitas GTPS. Prosesnya sangat cepat!"
    },
    {
      question: "Dimana saja server saya akan dipromosikan?",
      answer: "Server kamu akan dipromosikan di Discord communities, Telegram groups, Instagram stories, dan berbagai platform media sosial dimana komunitas GTPS aktif berkumpul."
    },
    {
      question: "Apakah ada syarat khusus untuk server yang dipromosikan?",
      answer: "Tidak ada syarat khusus! Server besar, kecil, baru, lama - semua welcome. Yang penting servernya aktif dan tidak melanggar terms of service Growtopia."
    },
    {
      question: "Kenapa kamu memberikan layanan ini gratis?",
      answer: "Karena saya ingin melihat komunitas GTPS Indonesia semakin berkembang. Setiap server punya keunikan sendiri dan layak untuk dikenal. Mari kita dukung satu sama lain! 🚀"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Pertanyaan yang sering ditanyakan tentang layanan promote gratis ini
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`fade-in fade-in-delay-${Math.min(index + 1, 4)} glass rounded-xl overflow-hidden neon-glow transition-all duration-300 ${
                openFAQ === index ? 'bg-primary/5' : ''
              }`}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className={`text-primary text-2xl transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-45' : ''
                }`}>
                  +
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-6 pt-0 border-t border-primary/20">
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in fade-in-delay-4 text-center mt-12">
          <div className="glass p-8 rounded-xl neon-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Masih ada pertanyaan lain? 🤔
            </h3>
            <p className="text-foreground/80 mb-6">
              Jangan ragu untuk menghubungi saya langsung via WhatsApp!
            </p>
            <button 
              onClick={() => {
                const message = "Halo, saya ada pertanyaan tentang layanan promote GTPS";
                const whatsappUrl = `https://wa.me/6282335769274?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              💬 Chat Langsung di WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;