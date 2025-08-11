import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductGallerySection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Lista completa das imagens na galeria
  const galleryImages = [
    { filename: "bones com diversas estampas.jpg", title: "Bonés com Diversas Estampas" },
    { filename: "camisetas com diversas estampas.jpg", title: "Camisetas com Diversas Estampas" },
    { filename: "crusifiquiço de ferro.jpg", title: "Crucifixo de Ferro" },
    { filename: "crusifiquiços.jpg", title: "Crucifixos" },
    { filename: "escapulario oval.jpg", title: "Escapulário Oval" },
    { filename: "escapularios.jpg", title: "Escapulários" },
    { filename: "insenso.jpg", title: "Incenso" },
    { filename: "medalhas.jpg", title: "Medalhas" },
    { filename: "presepios.jpg", title: "Presépios" },
    { filename: "terço.jpg", title: "Terço" },
    { filename: "vela quaresma.jpg", title: "Vela Quaresma" },
    { filename: "vela votiva.jpg", title: "Vela Votiva" },
    { filename: "veus cons.jpg", title: "Véus" },
    { filename: "Deixa a mãe descansar.png", title: "Deixa a Mãe Descansar" },
    { filename: "NSA Aparecida .png", title: "Nossa Senhora Aparecida" },
    { filename: "NSA Aparecida Pérola Branca Rosa.png", title: "Nossa Senhora Aparecida Pérola Branca Rosa" },
    { filename: "NSA Desatadora dos nós.png", title: "Nossa Senhora Desatadora dos Nós" },
    { filename: "NSA Fátima.png", title: "Nossa Senhora de Fátima" },
    { filename: "NSA Imaculado Coração de Maria.png", title: "Nossa Senhora do Imaculado Coração de Maria" },
    { filename: "NSA das Graças.png", title: "Nossa Senhora das Graças" },
    { filename: "NSA das Lágrimas.png", title: "Nossa Senhora das Lágrimas" },
    { filename: "Padre Pio.png", title: "Padre Pio" },
    { filename: "Sagrada Familia.png", title: "Sagrada Família" },
    { filename: "Sagrado Coração Jesus.png", title: "Sagrado Coração de Jesus" },
    { filename: "Santa Terezinha.png", title: "Santa Terezinha" },
    { filename: "São Bento.png", title: "São Bento" },
    { filename: "São Francisco de Assis.png", title: "São Francisco de Assis" },
    { filename: "São Gabriel.png", title: "São Gabriel" },
    { filename: "São José Afetuoso.png", title: "São José Afetuoso" },
    { filename: "São José Dormindo.png", title: "São José Dormindo" },
    { filename: "São José Operário.png", title: "São José Operário" },
    { filename: "São José Sentado.png", title: "São José Sentado" },
    { filename: "São José.png", title: "São José" },
    { filename: "São Miguel réplica Monte Gargano.png", title: "São Miguel Réplica Monte Gargano" },
    { filename: "São Miguel.png", title: "São Miguel" },
    { filename: "São Rafael.png", title: "São Rafael" },
    { filename: "Virgem de Guadalupe.png", title: "Virgem de Guadalupe" }
  ];

  // Auto-play do carrossel a cada 3 segundos
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Atualizar o índice atual
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleProductWhatsApp = (productTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${productTitle} na Augusta Rainha.`;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de ver todos os modelos disponíveis na Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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

        {/* Carrossel principal */}
        <div className="mb-12 animate-on-scroll">
          <Carousel 
            setApi={setApi} 
            className="w-full max-w-5xl mx-auto"
            opts={{
              loop: true
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video md:aspect-[16/10] relative overflow-hidden rounded-lg bg-gray-50 flex items-center justify-center">
                    <img
                      src={`/lovable-uploads/galeria/${image.filename}`}
                      alt={image.title}
                      className="w-full h-full object-contain p-4 md:p-8"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 md:p-6">
                      <h3 className="text-white font-serif text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                        {image.title}
                      </h3>
                      <Button
                        onClick={() => handleProductWhatsApp(image.title)}
                        variant="outline"
                        size="sm"
                        className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300 text-xs md:text-sm"
                      >
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Veja todos os modelos
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Indicadores do carrossel */}
          <div className="flex justify-center mt-4 gap-2 flex-wrap">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                  index === current ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid de produtos menor */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-12">
          {galleryImages.slice(0, 6).map((image, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll border-primary/20"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={`/lovable-uploads/galeria/${image.filename}`}
                  alt={image.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-2 md:p-3">
                <h3 className="font-serif text-xs md:text-sm font-semibold text-secondary text-center leading-tight min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                  {image.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <p className="text-muted-foreground mb-6">
            Esta é apenas uma pequena amostra dos nossos produtos. Temos muito mais disponível em nossa loja!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold"
            >
              Veja todos os modelos
            </Button>
            <Link to="/catalogo">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-full font-semibold"
              >
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
