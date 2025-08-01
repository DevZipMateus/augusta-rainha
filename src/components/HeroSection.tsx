
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Book, Cross } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de conhecer os artigos religiosos da Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      style={{
        backgroundImage: `url('/lovable-uploads/928163ad-3011-4700-9d10-56627a8655ac.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Reduced dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-20 left-10 text-white/40">
          <Cross size={40} />
        </div>
        <div className="absolute top-40 right-20 text-white/30">
          <Heart size={32} />
        </div>
        <div className="absolute bottom-32 left-20 text-white/40">
          <Book size={36} />
        </div>
        <div className="absolute bottom-20 right-16 text-white/30">
          <Cross size={28} />
        </div>
      </div>

      <div className="container text-center z-30 relative">
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-100 translate-y-0">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/lovable-uploads/08b68b12-98ba-4e65-8e95-5eead742f40e.png"
              alt="Augusta Rainha Artigos Religiosos Católico"
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main heading with enhanced contrast */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" 
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
            Augusta Rainha
            <span className="block text-primary" 
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
              Artigos Religiosos
            </span>
          </h1>

          {/* Slogan with enhanced visibility */}
          <p className="text-xl md:text-2xl text-white mb-8 font-medium" 
             style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
            Mais que artigos, instrumentos de oração,
            <span className="block text-accent font-semibold" 
                  style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
              onde a Fé se torna inspiração!
            </span>
          </p>

          {/* Description with better contrast */}
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed" 
             style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Livros, Bíblias, imagens de santos, terços, vestuário religioso e muito mais. 
            Um espaço de bênçãos em Paulinia/SP.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Heart className="mr-2" size={20} />
              Conheça Nossos Artigos
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 backdrop-blur-sm"
            >
              Nossa História
            </Button>
          </div>

          {/* Features with improved backdrop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Book className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                Livros & Bíblias
              </h3>
              <p className="text-muted-foreground">
                Seleção especial de livros religiosos e Bíblias para fortalecer sua fé
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Cross className="text-accent mx-auto mb-4" size={48} />
              <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                Imagens de Santos
              </h3>
              <p className="text-muted-foreground">
                Belas imagens e estátuas dos santos para sua devoção diária
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Heart className="text-primary mx-auto mb-4" size={48} />
              <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                Artigos Diversos
              </h3>
              <p className="text-muted-foreground">
                Terços, pulseiras, velas, incensos e muito mais para sua oração
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
