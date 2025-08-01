
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
          {/* Logo - improved responsive sizing */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('inicio')}
          >
            <img
              src="/lovable-uploads/a3bb7af3-129c-49c5-a730-fd70feb5e8f1.png"
              alt="Augusta Rainha Artigos Religiosos Católico"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className={`font-serif font-semibold text-lg sm:text-xl md:text-2xl leading-tight ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
                Augusta Rainha
              </h1>
              <p className={`text-sm sm:text-base ${
                isScrolled ? 'text-muted-foreground' : 'text-white/80'
              }`}>
                Artigos Religiosos
              </p>
            </div>
          </div>

          {/* Desktop Navigation - improved spacing */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-base font-medium transition-colors hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - improved responsive behavior */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              size="default"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button - improved touch target */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden p-3 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu - enhanced mobile experience */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t shadow-2xl">
            <nav className="flex flex-col p-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors py-4 px-2 text-lg font-medium border-b border-gray-100 last:border-b-0"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contato')}
                className="bg-primary hover:bg-primary/90 text-white mt-6 w-full py-4 text-lg rounded-full"
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
