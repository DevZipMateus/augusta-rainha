
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
          ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-primary/10' 
          : 'bg-black/40 backdrop-blur-md'
      }`}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - enhanced text shadows when not scrolled */}
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
              <h1 className={`font-serif font-bold text-lg sm:text-xl md:text-2xl leading-tight ${
                isScrolled 
                  ? 'text-secondary' 
                  : 'text-white'
              }`}
                style={!isScrolled ? { textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' } : {}}
              >
                Augusta Rainha
              </h1>
              <p className={`text-sm sm:text-base font-medium ${
                isScrolled 
                  ? 'text-muted-foreground' 
                  : 'text-white/90'
              }`}
                style={!isScrolled ? { textShadow: '1px 1px 6px rgba(0,0,0,0.8)' } : {}}
              >
                Artigos Religiosos
              </p>
            </div>
          </div>

          {/* Desktop Navigation - enhanced text visibility */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-base font-semibold transition-colors hover:text-primary relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  isScrolled 
                    ? 'text-secondary hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
                style={!isScrolled ? { textShadow: '1px 1px 6px rgba(0,0,0,0.8)' } : {}}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button - enhanced visibility */}
          <div className="hidden lg:block flex-shrink-0">
            <Button
              onClick={() => scrollToSection('contato')}
              className={`px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl font-semibold ${
                isScrolled 
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-lg'
                  : 'bg-primary hover:bg-primary/80 text-white shadow-2xl border-2 border-white/20'
              }`}
              size="default"
            >
              Entre em Contato
            </Button>
          </div>

          {/* Mobile Menu Button - enhanced visibility */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden p-3 hover:bg-white/20 ${
              isScrolled 
                ? 'text-secondary hover:text-primary' 
                : 'text-white hover:text-primary bg-white/10 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu - enhanced contrast */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-primary/20 shadow-2xl">
            <nav className="flex flex-col p-6">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
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
