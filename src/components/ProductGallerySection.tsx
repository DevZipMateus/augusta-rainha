
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

const ProductGallerySection = () => {
  // Lista das imagens na galeria com seus nomes
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll border-primary/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={`/lovable-uploads/galeria/${image.filename}`}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-serif text-lg font-semibold text-secondary text-center leading-tight">
                  {image.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-muted-foreground mb-6">
            Esta é apenas uma pequena amostra dos nossos produtos. Temos muito mais disponível em nossa loja!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGallerySection;
