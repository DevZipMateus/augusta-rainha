
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Se não estamos na página inicial, navegue para ela primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Aguarde um pequeno delay para a página carregar antes de fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Se já estamos na página inicial, faça o scroll diretamente
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleCatalogClick = () => {
    navigate('/catalogo');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection('inicio');
    }
  };

  const navItems = [
    { label: "Início", href: "inicio", isRoute: false },
    { label: "Sobre", href: "sobre", isRoute: false },
    { label: "Serviços", href: "servicos", isRoute: false },
    { label: "Catálogo", href: "/catalogo", isRoute: true },
    { label: "Depoimentos", href: "depoimentos", isRoute: false },
    { label: "Localização", href: "localizacao", isRoute: false },
    { label: "Contato", href: "contato", isRoute: false },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xl border-b border-primary/10"
      style={{ backgroundColor: '#8bd9f8' }}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0"
            onClick={handleLogoClick}
          >
            <img
              src="/lovable-uploads/a3bb7af3-129c-49c5-a730-fd70feb5e8f1.png"
              alt="Augusta Rainha Artigos Religiosos Católico"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-lg sm:text-xl md:text-2xl leading-tight text-black">
                Augusta Rainha
              </h1>
              <p className="text-sm sm:text-base font-medium text-black">
                Artigos Religiosos
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => item.isRoute ? handleCatalogClick() : scrollToSection(item.href)}
                className="text-base font-semibold transition-colors hover:text-secondary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-black hover:text-secondary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg"
              size="default"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-3 hover:bg-black/10 text-black hover:text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-primary/20 shadow-2xl">
            <nav className="flex flex-col p-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => item.isRoute ? handleCatalogClick() : scrollToSection(item.href)}
                  className="text-left text-secondary hover:text-primary transition-colors py-4 px-2 text-lg font-semibold border-b border-gray-200 last:border-b-0 hover:bg-primary/5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-primary hover:bg-primary/90 text-white mt-6 w-full py-4 text-lg rounded-full font-semibold shadow-lg"
                size="lg"
              >
                Entre em Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
