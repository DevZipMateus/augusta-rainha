
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

      {/* Background decorative elements - responsive positioning */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 text-white/40">
          <Cross size={24} className="sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 text-white/30">
          <Heart size={20} className="sm:w-8 sm:h-8" />
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 text-white/40">
          <Book size={24} className="sm:w-9 sm:h-9" />
        </div>
        <div className="absolute bottom-16 sm:bottom-20 right-6 sm:right-16 text-white/30">
          <Cross size={18} className="sm:w-7 sm:h-7" />
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 text-center z-30 relative">
        <div className="max-w-4xl mx-auto animate-on-scroll opacity-100 translate-y-0">
          {/* Logo - responsive sizing */}
          <div className="mb-6 sm:mb-8">
            <img
              src="/lovable-uploads/08b68b12-98ba-4e65-8e95-5eead742f40e.png"
              alt="Augusta Rainha Artigos Religiosos Católico"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mx-auto mb-4 sm:mb-6"
            />
          </div>

          {/* Main heading - responsive typography */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2" 
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
            Augusta Rainha
            <span className="block text-primary mt-1 sm:mt-2" 
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)' }}>
              Artigos Religiosos
            </span>
          </h1>

          {/* Slogan - responsive sizing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-medium px-4" 
             style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
            Mais que artigos, instrumentos de oração,
            <span className="block text-accent font-semibold mt-1" 
                  style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
              onde a Fé se torna inspiração!
            </span>
          </p>

          {/* Description - responsive text */}
          <p className="text-sm sm:text-base lg:text-lg text-white mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed px-4" 
             style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            Livros, Bíblias, imagens de santos, terços, vestuário religioso e muito mais. 
            Um espaço de bênçãos em Paulinia/SP.
          </p>

          {/* CTA Buttons - responsive layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 lg:mb-16 px-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Heart className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Conheça Nossos Artigos
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 backdrop-blur-sm"
            >
              Nossa História
            </Button>
          </div>

          {/* Features - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Book className="text-primary mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" />
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-secondary mb-2">
                Livros & Bíblias
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Seleção especial de livros religiosos e Bíblias para fortalecer sua fé
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Cross className="text-accent mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" />
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-secondary mb-2">
                Imagens de Santos
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Belas imagens e estátuas dos santos para sua devoção diária
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <Heart className="text-primary mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-12 sm:h-12" />
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-secondary mb-2">
                Artigos Diversos
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
