
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageCircle, ArrowLeft, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CartProvider, useCart } from "@/contexts/CartContext";
import QuantityModal from "@/components/QuantityModal";
import CartDrawer from "@/components/CartDrawer";

const CatalogoContent = () => {
  const { addItem } = useCart();
  const [quantityModal, setQuantityModal] = useState<{
    isOpen: boolean;
    productId: string;
    productTitle: string;
  }>({
    isOpen: false,
    productId: '',
    productTitle: ''
  });

  // Lista das imagens da pasta galeria
  const galleryImages = [
    { filename: "D_NQ_NP_875302-MLM49484157753_032022-W.webp", title: "Artigo Religioso" },
    { filename: "Deixe a mae descansar.jpeg", title: "Deixe a Mãe Descansar" },
    { filename: "Imaculado coracao de maria.jpg", title: "Imaculado Coração de Maria" },
    { filename: "InShot_20220602_174106088.jpg", title: "Artigo Religioso" },
    { filename: "Nsa Senhora Aparecida Perolada.jpeg", title: "Nossa Senhora Aparecida Perolada" },
    { filename: "Nsa Senhora Aparecida.jpeg", title: "Nossa Senhora Aparecida" },
    { filename: "Nsa Senhora Desatadora dos Nos.jpg", title: "Nossa Senhora Desatadora dos Nós" },
    { filename: "Nsa Senhora das Graças.jpeg", title: "Nossa Senhora das Graças" },
    { filename: "Nsa Senhora das Lágrimas.jpeg", title: "Nossa Senhora das Lágrimas" },
    { filename: "OIP (1).webp", title: "Artigo Religioso" },
    { filename: "SagradaFamilia.jpg", title: "Sagrada Família" },
    { filename: "SagradoCoracaoJesus.jpg", title: "Sagrado Coração de Jesus" },
    { filename: "SaoPadrePio.jpg", title: "São Padre Pio" },
    { filename: "StaTerezinha.jpg", title: "Santa Terezinha" },
    { filename: "imagem-de-sao-gabriel-em-resina-20cm-64d14b3b2c1df.png", title: "São Gabriel" },
    { filename: "imagem-de-sao-jose-dormindo-imagem.webp", title: "São José Dormindo" },
    { filename: "imagem-de-sao-jose-operario-em-resina-14-7cm-8504.jpg", title: "São José Operário" },
    { filename: "imagem-de-sao-rafael-em-resina-20cm-9113.jpg", title: "São Rafael" },
    { filename: "imagem-sao-bento-resina-20-arte-sacra.webp", title: "São Bento" },
    { filename: "imagem-sao-jose-sentado-com-menino-jesus-no-colo-21cm-19886.jpg", title: "São José Sentado" },
    { filename: "imagem_sao_miguel_arcanjo_grande_resina_30_cm_11299_1_20191211084240.webp", title: "São Miguel Arcanjo" },
    { filename: "nossa_senhora_de_fatima_pintura_classica_com_musica_olhos_cristal_38_cm.jpg", title: "Nossa Senhora de Fátima" },
    { filename: "sao-jose-afetuoso-sao-jose-com-menino-jesus-30cm-santo.webp", title: "São José Afetuoso" },
    { filename: "sao_miguel_monte_gargano_resina_55cm_1411_1_d2b8600f9f9ca685a876e30e9bddbbf1.webp", title: "São Miguel Monte Gargano" }
  ];

  const handleAddToCart = (productTitle: string, index: number) => {
    setQuantityModal({
      isOpen: true,
      productId: `product-${index}`,
      productTitle
    });
  };

  const handleQuantityConfirm = (quantity: number) => {
    addItem(quantityModal.productId, quantityModal.productTitle, quantity);
  };

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

            {/* Grid completo de produtos com responsividade melhorada */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20"
                >
                  <div className="relative">
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
                    
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleAddToCart(image.title, index)}
                        className="w-full bg-primary hover:bg-primary/90 text-white transition-colors text-xs md:text-sm"
                        size="sm"
                      >
                        <Plus className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Adicionar
                      </Button>
                      
                      <Button
                        onClick={() => handleProductWhatsApp(image.title)}
                        variant="outline"
                        size="sm"
                        className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200 hover:border-green-300 transition-colors text-xs md:text-sm"
                      >
                        <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Mais Informações
                      </Button>
                    </div>
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
      <CartDrawer />
      
      <QuantityModal
        isOpen={quantityModal.isOpen}
        onClose={() => setQuantityModal(prev => ({ ...prev, isOpen: false }))}
        onConfirm={handleQuantityConfirm}
        productTitle={quantityModal.productTitle}
      />
    </div>
  );
};

const Catalogo = () => {
  return (
    <CartProvider>
      <CatalogoContent />
    </CartProvider>
  );
};

export default Catalogo;
