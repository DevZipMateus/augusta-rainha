
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle, Instagram, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = (message?: string) => {
    const defaultMessage = "Olá! Gostaria de saber mais sobre os artigos religiosos da Augusta Rainha.";
    const finalMessage = message || defaultMessage;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const email = "artigosreligiososaugustarainha@gmail.com";
    const subject = "Contato - Augusta Rainha Artigos Religiosos";
    const body = "Olá! Gostaria de saber mais informações sobre os artigos religiosos.";
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/@artigosaugustarainha', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida e atendimento personalizado",
      value: "(19) 97147-6970",
      action: () => handleWhatsApp(),
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Ligue para tirar suas dúvidas",
      value: "(19) 97147-6970",
      action: () => window.open('tel:+5519971476970'),
      color: "bg-primary",
      hoverColor: "hover:bg-primary/90"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie sua mensagem detalhada",
      value: "artigosreligiososaugustarainha@gmail.com",
      action: handleEmail,
      color: "bg-accent",
      hoverColor: "hover:bg-accent/90"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <MessageCircle className="text-accent" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudá-lo a encontrar os artigos religiosos perfeitos 
            para fortalecer sua fé e devoção
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="group bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll"
            >
              <div className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${method.color} rounded-full mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="text-white" size={32} />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-secondary mb-3">
                  {method.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {method.description}
                </p>
                
                <p className="text-secondary font-medium mb-6 break-all">
                  {method.value}
                </p>

                <Button
                  onClick={method.action}
                  className={`w-full ${method.color} ${method.hoverColor} text-white`}
                >
                  Entrar em Contato
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid lg:grid-cols-2 gap-12 animate-on-scroll">
          {/* Quick Contact */}
          <Card className="bg-gradient-to-br from-primary/10 via-white to-primary/5 border-2 border-primary/20 p-8 shadow-xl">
            <h3 className="font-serif text-2xl font-bold text-secondary mb-6 text-center">
              Contato Rápido via WhatsApp
            </h3>
            
            <div className="space-y-4">
              <Button
                onClick={() => handleWhatsApp("Gostaria de saber mais sobre livros e Bíblias.")}
                variant="outline"
                className="w-full justify-start border-primary/30 hover:bg-primary/10"
              >
                <MessageCircle className="mr-3 text-primary" size={20} />
                Livros e Bíblias
              </Button>
              
              <Button
                onClick={() => handleWhatsApp("Tenho interesse em imagens de santos.")}
                variant="outline"
                className="w-full justify-start border-primary/30 hover:bg-primary/10"
              >
                <MessageCircle className="mr-3 text-primary" size={20} />
                Imagens de Santos
              </Button>
              
              <Button
                onClick={() => handleWhatsApp("Gostaria de ver terços e artigos de oração.")}
                variant="outline"
                className="w-full justify-start border-primary/30 hover:bg-primary/10"
              >
                <MessageCircle className="mr-3 text-primary" size={20} />
                Terços e Artigos de Oração
              </Button>
              
              <Button
                onClick={() => handleWhatsApp("Quero saber sobre vestuário religioso.")}
                variant="outline"
                className="w-full justify-start border-primary/30 hover:bg-primary/10"
              >
                <MessageCircle className="mr-3 text-primary" size={20} />
                Vestuário Religioso
              </Button>
            </div>
          </Card>

          {/* Store Info */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-accent/10 via-white to-accent/5 border-2 border-accent/20 p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-accent" size={24} />
                <h4 className="font-serif text-lg font-semibold text-secondary">
                  Horários de Atendimento
                </h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">9h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">9h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-accent">Fechado</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 via-white to-secondary/5 border-2 border-secondary/20 p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="text-secondary" size={24} />
                <h4 className="font-serif text-lg font-semibold text-secondary">
                  Localização
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Avenida Pedro Antonio Bordignon, 494<br />
                Bairro São José 1 - Galeria Arcanjo<br />
                Paulínia / SP
              </p>
              <Button
                onClick={() => window.open('https://maps.app.goo.gl/hRZxatkz3d5eW9K99', '_blank')}
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white"
                size="sm"
              >
                Ver no Google Maps
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-pink-100 via-white to-pink-50 border-2 border-pink-200 p-6 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Instagram className="text-pink-500" size={24} />
                <h4 className="font-serif text-lg font-semibold text-secondary">
                  Redes Sociais
                </h4>
              </div>
              <p className="text-muted-foreground mb-4">
                Acompanhe nossas novidades, promoções e inspirações diárias no Instagram!
              </p>
              <Button
                onClick={handleInstagram}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                size="sm"
              >
                @artigosaugustarainha
              </Button>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20 p-12 shadow-xl">
            <MessageCircle className="text-primary mx-auto mb-6" size={48} />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4">
              Pronto para Fortalecer sua Fé?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato conosco hoje mesmo e descubra como nossos artigos religiosos 
              podem enriquecer sua vida espiritual e sua devoção.
            </p>
            <Button
              onClick={() => handleWhatsApp()}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <MessageCircle className="mr-3" size={24} />
              Fale Conosco Agora
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
