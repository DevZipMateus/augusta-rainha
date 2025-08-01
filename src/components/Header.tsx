
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Início", href: "inicio" },
    { label: "Sobre", href: "sobre" },
    { label: "Serviços", href: "servicos" },
    { label: "Depoimentos", href: "depoimentos" },
    { label: "Localização", href: "localizacao" },
    { label: "Contato", href: "contato" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - responsive sizing */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => scrollToSection('inicio')}
          >
            <img
              src="/lovable-uploads/a3bb7af3-129c-49c5-a730-fd70feb5e8f1.png"
              alt="Augusta Rainha Artigos Religiosos Católico"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <div className="hidden xs:block">
              <h1 className={`font-serif font-semibold text-base sm:text-lg md:text-xl ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
                Augusta Rainha
              </h1>
              <p className={`text-xs sm:text-sm ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Artigos Religiosos
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - hidden on small screens */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary/90 text-white text-sm px-4 py-2"
              size="sm"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Menu - improved responsiveness */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t shadow-lg">
            <nav className="flex flex-col space-y-1 p-4 sm:p-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors py-3 px-2 text-base"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-primary hover:bg-primary/90 text-white mt-4 w-full"
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
