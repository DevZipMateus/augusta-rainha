
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const ProductGallerySection = () => {
  return (
    <section id="produtos" className="section-padding bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <ShoppingBag className="text-primary" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Um Pouco Sobre Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça alguns dos nossos artigos religiosos católicos cuidadosamente selecionados para fortalecer sua fé
          </p>
        </div>

        <div className="text-center animate-on-scroll relative">
          {/* Top arrows */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden md:block">
            <ArrowDown className="text-primary animate-bounce" size={32} />
          </div>
          
          {/* Side arrows */}
          <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 rotate-90 hidden lg:block">
            <ArrowDown className="text-primary animate-pulse" size={28} />
          </div>
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 -rotate-90 hidden lg:block">
            <ArrowDown className="text-primary animate-pulse" size={28} />
          </div>

          <div className="bg-primary rounded-3xl p-12 md:p-16 max-w-4xl mx-auto text-white relative overflow-hidden">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Eye className="text-white" size={40} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Explore Nossa Coleção Completa
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Descubra todos os nossos artigos religiosos católicos disponíveis em nossa loja. 
                Imagens de santos, terços, velas, livros e muito mais para enriquecer sua vida espiritual.
              </p>
            </div>
            
            <Link to="/catalogo">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary px-12 py-6 text-xl md:text-2xl rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-pulse"
              >
                <Eye className="w-6 h-6 md:w-8 md:h-8 mr-3" />
                Confira Nosso Catálogo
              </Button>
            </Link>

            {/* Corner arrows inside the blue box */}
            <div className="absolute top-4 left-4">
              <ArrowDown className="text-white/60 animate-ping transform rotate-45" size={20} />
            </div>
            <div className="absolute top-4 right-4">
              <ArrowDown className="text-white/60 animate-ping transform -rotate-45" size={20} />
            </div>
            <div className="absolute bottom-4 left-4">
              <ArrowDown className="text-white/60 animate-ping transform rotate-135" size={20} />
            </div>
            <div className="absolute bottom-4 right-4">
              <ArrowDown className="text-white/60 animate-ping transform -rotate-135" size={20} />
            </div>
          </div>

          {/* Bottom arrows */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 rotate-180 hidden md:block">
            <ArrowDown className="text-primary animate-bounce" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
