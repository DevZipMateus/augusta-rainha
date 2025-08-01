
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
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MapPin className="text-primary" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Onde Nos Encontrar
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar em nossa loja física em Paulínia/SP. 
            Um espaço acolhedor cheio de artigos religiosos especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="animate-on-scroll">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8962094586887!2d-47.15847662410788!3d-22.761438323779374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8813c1b4b7e8b%3A0x7e9f7b3a1a2b3c4d!2sAv.%20Pedro%20Antonio%20Bordignon%2C%20494%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Paul%C3%ADnia%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Augusta Rainha Artigos Religiosos"
                  className="w-full"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    onClick={handleDirections}
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg"
                    size="sm"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Abrir no Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-8 animate-on-scroll">
            <Card className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Avenida Pedro Antonio Bordignon, 494<br />
                    Bairro São José 1 - Galeria Arcanjo<br />
                    Paulínia / SP
                  </p>
                </div>
              </div>

              <Button
                onClick={handleDirections}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                <Navigation className="mr-2" size={20} />
                Como Chegar
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-white to-accent/5 border-2 border-accent/20 p-8 shadow-xl">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between items-center">
                      <span>Segunda a Sexta:</span>
                      <span className="font-medium">9h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sábado:</span>
                      <span className="font-medium">9h às 16h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Domingo:</span>
                      <span className="font-medium text-accent">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleWhatsApp}
                variant="outline"
                className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-white"
              >
                <Phone className="mr-2" size={20} />
                Confirmar Horário
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-white to-secondary/5 border-2 border-secondary/20 p-8 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-secondary mb-4 text-center">
                Facilidades do Local
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="text-secondary" size={20} />
                  </div>
                  <p className="text-sm text-muted-foreground">Fácil Acesso</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Navigation className="text-secondary" size={20} />
                  </div>
                  <p className="text-sm text-muted-foreground">Estacionamento</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-secondary/5 rounded-xl border border-secondary/10">
                <p className="text-sm text-muted-foreground text-center">
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
