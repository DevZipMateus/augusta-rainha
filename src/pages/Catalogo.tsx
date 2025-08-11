
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag, MessageCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Catalogo = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

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

  const handleProductWhatsApp = (productTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${productTitle} na Augusta Rainha.`;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleProductSelection = (productTitle: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts(prev => [...prev, productTitle]);
    } else {
      setSelectedProducts(prev => prev.filter(item => item !== productTitle));
    }
  };

  const handleSendSelectedProducts = () => {
    if (selectedProducts.length === 0) {
      alert("Selecione pelo menos um produto para enviar!");
      return;
    }

    const productList = selectedProducts.map((product, index) => `${index + 1}. ${product}`).join('\n');
    const message = `Olá! Gostaria de solicitar informações sobre os seguintes produtos da Augusta Rainha:\n\n${productList}\n\nObrigado!`;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-b from-white to-primary/5">
          <div className="container">
            {/* Header da página */}
            <div className="flex items-center gap-4 mb-8">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>

            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <ShoppingBag className="text-primary" size={32} />
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
                Catálogo de Produtos
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Confira todos os nossos artigos religiosos católicos disponíveis na Augusta Rainha
              </p>
            </div>

            {/* Barra de seleção fixa */}
            {selectedProducts.length > 0 && (
              <div className="fixed bottom-20 left-4 right-4 bg-white shadow-lg border rounded-lg p-4 z-40 mx-auto max-w-md">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">
                    {selectedProducts.length} produto(s) selecionado(s)
                  </span>
                  <div className="flex gap-2">
                    <Button
                      onClick={clearSelection}
                      variant="outline"
                      size="sm"
                    >
                      Limpar
                    </Button>
                    <Button
                      onClick={handleSendSelectedProducts}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Enviar Lista
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Grid completo de produtos com responsividade melhorada */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20"
                >
                  <div className="relative">
                    {/* Checkbox de seleção */}
                    <div className="absolute top-2 left-2 z-10">
                      <Checkbox
                        id={`product-${index}`}
                        checked={selectedProducts.includes(image.title)}
                        onCheckedChange={(checked) => handleProductSelection(image.title, checked as boolean)}
                        className="bg-white border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                    </div>
                    
                    <div className="aspect-[3/4] overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img
                        src={`/lovable-uploads/galeria/${image.filename}`}
                        alt={image.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <CardContent className="p-3 md:p-4 space-y-2 md:space-y-3">
                    <h3 className="font-serif text-sm md:text-base font-semibold text-secondary text-center leading-tight min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                      {image.title}
                    </h3>
                    <Button
                      onClick={() => handleProductWhatsApp(image.title)}
                      variant="outline"
                      size="sm"
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300 transition-colors text-xs md:text-sm"
                    >
                      <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      Veja todos os modelos
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="mt-16 text-center">
              <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
                  Não encontrou o que procurava?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco pelo WhatsApp! Temos muito mais produtos disponíveis em nossa loja física.
                </p>
                <Button
                  onClick={() => {
                    const message = "Olá! Gostaria de conhecer todos os produtos disponíveis na Augusta Rainha.";
                    const phone = "5519971476970";
                    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                    window.open(url, '_blank');
                  }}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Catalogo;
