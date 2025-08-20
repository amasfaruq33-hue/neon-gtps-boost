import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Update document title and meta description for SEO
    document.title = "🚀 Free Promote GTPS Tanpa Ribet - Gratis 100% Tanpa Syarat";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Promosikan GTPS Anda secara GRATIS tanpa syarat! Tidak perlu daftar, langsung kirim link dan server Anda akan dipromosikan ke ribuan player. 100% gratis selamanya!');
    }

    // Add canonical URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Free Promote GTPS",
      "description": "Layanan promosi gratis untuk Growtopia Private Server tanpa syarat apapun",
      "provider": {
        "@type": "Person",
        "name": "Content Creator GTPS"
      },
      "areaServed": "Indonesia",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GTPS Promotion Services",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free GTPS Promotion",
            "description": "Promosi server GTPS gratis ke komunitas"
          },
          "price": "0",
          "priceCurrency": "IDR"
        }]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
