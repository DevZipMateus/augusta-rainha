
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Catalogo = () => {
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
    { filename: "veus cons.jpg", title: "Véus" }
  ];

  const handleProductWhatsApp = (productTitle: string) => {
    const message = `Olá! Gostaria de saber mais sobre ${productTitle} na Augusta Rainha.`;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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

            {/* Grid completo de produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`/lovable-uploads/galeria/${image.filename}`}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-serif text-lg font-semibold text-secondary text-center leading-tight">
                      {image.title}
                    </h3>
                    <Button
                      onClick={() => handleProductWhatsApp(image.title)}
                      variant="outline"
                      size="sm"
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
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
