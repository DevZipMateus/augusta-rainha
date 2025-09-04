import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/fedff7e4-7c45-4505-a6f1-2533a4c7af86.png",
      alt: "Crucifixos - Símbolos cristãos que representam o sacrifício de Jesus Cristo"
    },
    {
      src: "/lovable-uploads/93ff2689-e505-4e3c-9f3e-86c17c84c4f7.png", 
      alt: "A Fé que Ilumina o Lar - Imagens religiosas para devoção"
    },
    {
      src: "/lovable-uploads/fedff7e4-7c45-4505-a6f1-2533a4c7af86.png",
      alt: "Cruz Sagrada - Símbolos de proteção e fé"
    },
    {
      src: "/lovable-uploads/b496f1a5-b21a-4d9e-87c0-1c303f84bcfc.png",
      alt: "Decorativos - Artigos religiosos decorativos para o lar"
    },
    {
      src: "/lovable-uploads/4c01976d-1d2e-49c1-9931-faf1bc189dc1.png",
      alt: "São José - Patrono das Famílias, artigos devocionais"
    },
    {
      src: "/lovable-uploads/147d8e3c-e49d-4345-bc14-6680f505c484.png",
      alt: "São Miguel Arcanjo - Defensor no combate, produtos devocionais"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container animate-on-scroll">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Coleção Especial
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra nossa seleção de artigos religiosos cuidadosamente escolhidos para fortalecer sua fé e devoção
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted/30">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <svg 
                          className="w-6 h-6 text-primary" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;