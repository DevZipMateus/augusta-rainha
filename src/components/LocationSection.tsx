
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const handleDirections = () => {
    window.open('https://maps.app.goo.gl/hRZxatkz3d5eW9K99', '_blank');
  };

  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de saber sobre o horário de funcionamento da Augusta Rainha.";
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="localizacao" className="section-padding bg-gradient-to-b from-primary/5 to-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-6 sm:mb-8">
            <MapPin className="text-primary w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 sm:mb-6">
            Onde Nos Encontrar
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Venha nos visitar em nossa loja física em Paulínia/SP. 
            Um espaço acolhedor cheio de artigos religiosos especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Map - improved mobile responsiveness */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8962094586887!2d-47.15847662410788!3d-22.761438323779374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8813c1b4b7e8b%3A0x7e9f7b3a1a2b3c4d!2sAv.%20Pedro%20Antonio%20Bordignon%2C%20494%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Paul%C3%ADnia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="320"
                  className="sm:h-96 lg:h-[400px] xl:h-[450px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Augusta Rainha Artigos Religiosos"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    onClick={handleDirections}
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                    size="sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span className="hidden sm:inline">Abrir no Maps</span>
                    <span className="sm:hidden">Maps</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Info - enhanced mobile layout */}
          <div className="space-y-6 sm:space-y-8 animate-on-scroll order-1 lg:order-2">
            <Card className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                <div className="bg-primary/10 p-3 sm:p-4 rounded-full flex-shrink-0">
                  <MapPin className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">
                    Endereço
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    Avenida Pedro Antonio Bordignon, 494<br />
                    Bairro São José 1 - Galeria Arcanjo<br />
                    Paulínia / SP
                  </p>
                </div>
              </div>

              <Button
                onClick={handleDirections}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 text-lg rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                size="lg"
              >
                <Navigation className="mr-3 w-5 h-5" />
                Como Chegar
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 p-6 sm:p-8 lg:p-10 shadow-xl">
              <div className="flex items-start space-x-4 sm:space-x-6 mb-6 sm:mb-8">
                <div className="bg-accent/10 p-3 sm:p-4 rounded-full flex-shrink-0">
                  <Clock className="text-accent w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-4 sm:mb-6">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl text-muted-foreground">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold text-secondary">9h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span>Sábado:</span>
                      <span className="font-semibold text-secondary">9h às 16h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Domingo:</span>
                      <span className="font-semibold text-accent">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white py-4 text-lg rounded-full transition-all duration-300"
                size="lg"
              >
                <Phone className="mr-3 w-5 h-5" />
                Confirmar Horário
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 p-6 sm:p-8 lg:p-10 shadow-xl">
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-6 sm:mb-8 text-center">
                Facilidades do Local
              </h3>
              
              <div className="grid grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="bg-secondary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="text-secondary w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Fácil Acesso</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Navigation className="text-secondary w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-medium">Estacionamento</p>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 bg-secondary/5 rounded-xl border border-secondary/10">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center leading-relaxed">
                  <strong className="text-secondary">Galeria Arcanjo</strong> - Um espaço dedicado 
                  ao comércio religioso em Paulínia
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
