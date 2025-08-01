
import { Heart, MapPin, Phone, Mail, Instagram, Cross } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre a Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/@artigosaugustarainha', '_blank');
  };

  const handleEmail = () => {
    const email = "artigosreligiososaugustarainha@gmail.com";
    window.open(`mailto:${email}`, '_self');
  };

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

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-white">
      {/* Main Footer - enhanced text visibility */}
      <div className="container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/lovable-uploads/08b68b12-98ba-4e65-8e95-5eead742f40e.png"
                alt="Augusta Rainha"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-white">Augusta Rainha</h3>
                <p className="text-white/90 text-sm font-medium">Artigos Religiosos Católico</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed max-w-md font-medium">
              Mais que artigos, instrumentos de oração, onde a Fé se torna inspiração! 
              Servindo a comunidade católica com amor e dedicação em Paulínia/SP.
            </p>

            <div className="flex items-center space-x-1 text-accent mb-4">
              <Heart size={16} />
              <span className="text-sm font-semibold text-white">Instrumentos de Oração e Fé</span>
            </div>
          </div>

          {/* Quick Links - enhanced visibility */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 flex items-center text-white">
              <Cross size={16} className="mr-2 text-accent" />
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "inicio" },
                { label: "Sobre Nós", href: "sobre" },
                { label: "Nossos Artigos", href: "servicos" },
                { label: "Depoimentos", href: "depoimentos" },
                { label: "Localização", href: "localizacao" },
                { label: "Contato", href: "contato" }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/90 hover:text-accent transition-colors text-sm font-medium hover:font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - enhanced visibility */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 flex items-center text-white">
              <Phone size={16} className="mr-2 text-accent" />
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={16} />
                <div className="text-sm text-white/90 font-medium">
                  <p>Av. Pedro Antonio Bordignon, 494</p>
                  <p>Bairro São José 1 - Galeria Arcanjo</p>
                  <p>Paulínia / SP</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <button
                  onClick={() => window.open('tel:+5519971476970')}
                  className="text-sm text-white/90 hover:text-accent transition-colors font-medium"
                >
                  (19) 97147-6970
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <button
                  onClick={handleEmail}
                  className="text-sm text-white/90 hover:text-accent transition-colors break-all font-medium"
                >
                  artigosreligiososaugustarainha@gmail.com
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Instagram className="text-accent flex-shrink-0" size={16} />
                <button
                  onClick={handleInstagram}
                  className="text-sm text-white/90 hover:text-accent transition-colors font-medium"
                >
                  @artigosaugustarainha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - enhanced visibility */}
      <div className="border-t border-white/30">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-white/90 font-medium">
                © 2024 Augusta Rainha Artigos Religiosos Católico. Todos os direitos reservados.
              </p>
              <p className="text-xs text-white/70 mt-1 font-medium">
                Desenvolvido com <Heart size={12} className="inline text-accent" /> para servir a comunidade católica
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="WhatsApp"
              >
                <Phone size={18} className="text-white" />
              </button>
              
              <button
                onClick={handleInstagram}
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </button>

              <button
                onClick={handleEmail}
                className="bg-accent hover:bg-accent/90 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                title="E-mail"
              >
                <Mail size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
