
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Heart, Eye, MessageCircle, Share2 } from "lucide-react";

const InstagramSection = () => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/p/DENqZANyxBA/', '_blank');
  };

  const handleInstagramProfile = () => {
    window.open('https://instagram.com/@artigosaugustarainha', '_blank');
  };

  return (
    <section className="section-padding bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
            <Instagram className="text-white" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Siga Nossas Novidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe diariamente nossos produtos, promoções especiais e 
            inspirações para fortalecer sua fé através do nosso Instagram
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Instagram Preview - Enlarged */}
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-3xl">
                <div className="bg-white rounded-3xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Instagram className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary text-lg">artigosaugustarainha</p>
                      <p className="text-sm text-muted-foreground">Paulínia, SP</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 text-center mb-6">
                    <Instagram className="mx-auto mb-6 text-primary" size={64} />
                    <h4 className="font-serif text-2xl font-bold text-secondary mb-4">
                      Novidades Diárias
                    </h4>
                    <p className="text-lg text-muted-foreground mb-6">
                      Produtos, promoções e inspirações católicas para sua vida
                    </p>
                    <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Heart size={16} className="text-pink-500" />
                        <span>Curtir</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MessageCircle size={16} className="text-blue-500" />
                        <span>Comentar</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Share2 size={16} className="text-green-500" />
                        <span>Compartilhar</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-8">
                    <strong>artigosaugustarainha</strong> Venha conhecer nossos novos artigos religiosos! 
                    Instrumentos de oração para fortalecer sua fé ✨🙏
                  </p>

                  {/* Instagram Button */}
                  <Button
                    onClick={handleInstagramProfile}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    size="lg"
                  >
                    <Instagram className="mr-3" size={24} />
                    Seguir @artigosaugustarainha
                  </Button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-400 rounded-full opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-pink-100 via-white to-purple-100 rounded-3xl p-8 border border-pink-200/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4">
              Não Perca Nenhuma Novidade!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Seja o primeiro a conhecer nossos novos produtos, promoções especiais e 
              conteúdos inspiradores. Junte-se à nossa comunidade de fé no Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-pink-600">
                <Instagram size={20} />
                <span className="font-semibold">@artigosaugustarainha</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-pink-300"></div>
              <p className="text-sm text-muted-foreground">
                Acompanhe, curta, comente e compartilhe!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
