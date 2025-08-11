
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16 sm:pt-20"
      style={{
        backgroundImage: `url('/lovable-uploads/0e364294-c987-4391-bca8-69af452964b7.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
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
          {/* Main heading - maximum contrast and readability */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2" 
              style={{ 
                textShadow: '4px 4px 16px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1), -2px -2px 8px rgba(0,0,0,0.8)',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,1))'
              }}>
            Augusta Rainha
            <span className="block text-primary mt-2 sm:mt-3" 
                  style={{ 
                    textShadow: '4px 4px 16px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1), -2px -2px 8px rgba(0,0,0,0.8)',
                    filter: 'drop-shadow(0 0 10px rgba(0,0,0,1))'
                  }}>
              Artigos Religiosos
            </span>
          </h1>

          {/* Slogan - maximum contrast and visibility */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 sm:mb-10 font-medium px-4 leading-relaxed" 
             style={{ 
               textShadow: '3px 3px 12px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,1), -2px -2px 6px rgba(0,0,0,0.8)',
               filter: 'drop-shadow(0 0 8px rgba(0,0,0,1))'
             }}>
            Mais que artigos, instrumentos de oração,
            <span className="block text-accent font-semibold mt-2" 
                  style={{ 
                    textShadow: '3px 3px 12px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 2px 2px 6px rgba(0,0,0,1), -2px -2px 6px rgba(0,0,0,0.8)',
                    filter: 'drop-shadow(0 0 8px rgba(0,0,0,1))'
                  }}>
              onde a Fé se torna inspiração!
            </span>
          </p>

          {/* Description - enhanced contrast */}
          <p className="text-base sm:text-lg lg:text-xl text-white mb-10 sm:mb-12 lg:mb-14 max-w-3xl mx-auto leading-relaxed px-4" 
             style={{ 
               textShadow: '2px 2px 10px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 1px 1px 4px rgba(0,0,0,1), -1px -1px 4px rgba(0,0,0,0.8)',
               filter: 'drop-shadow(0 0 6px rgba(0,0,0,1))'
             }}>
            Livros, Bíblias, imagens de santos, terços, vestuário religioso e muito mais. 
            Um espaço de bênçãos em Paulinia/SP.
          </p>

          {/* CTA Buttons - enhanced visibility with solid backgrounds */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-14 sm:mb-16 lg:mb-20 px-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[56px] font-semibold border-2 border-white/20"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)'
              }}
            >
              <Heart className="mr-2 w-5 h-5" />
              Conheça Nossos Artigos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 rounded-full border-3 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 backdrop-blur-sm min-h-[56px] font-semibold shadow-2xl bg-black/50"
              style={{
                textShadow: '1px 1px 3px rgba(0,0,0,1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)'
              }}
            >
              Nossa História
            </Button>
          </div>

          {/* Features - maximum card contrast */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 max-w-5xl mx-auto">
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <Book className="text-primary mx-auto mb-4 w-12 h-12 sm:w-14 sm:h-14" />
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-secondary mb-3">
                Livros & Bíblias
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                Seleção especial de livros religiosos e Bíblias para fortalecer sua fé
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">
              <Cross className="text-accent mx-auto mb-4 w-12 h-12 sm:w-14 sm:h-14" />
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-secondary mb-3">
                Imagens de Santos
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                Belas imagens e estátuas dos santos para sua devoção diária
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 lg:col-span-1 border border-gray-200">
              <Heart className="text-primary mx-auto mb-4 w-12 h-12 sm:w-14 sm:h-14" />
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-secondary mb-3">
                Artigos Diversos
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
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
