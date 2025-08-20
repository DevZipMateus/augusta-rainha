
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Shirt, Cross, Heart, Flame, Sparkles } from "lucide-react";

const ServicesSection = () => {
  const handleWhatsApp = (category: string) => {
    const message = `Olá! Gostaria de ver imagens dos produtos da categoria "${category}" da Augusta Rainha. Podem me enviar algumas fotos dos produtos disponíveis?`;
    const phone = "5519971476970";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const categories = [
    {
      icon: Book,
      title: "Livros & Bíblias",
      description: "Seleção especial de livros católicos, Bíblias e material de estudo religioso para aprofundar sua fé.",
      items: ["Bíblias Católicas", "Livros de Santos", "Catecismo", "Livros de Oração", "Literatura Católica"],
      color: "primary",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Shirt,
      title: "Vestuário Religioso",
      description: "Camisetas, bonés e véus com designs católicos para expressar sua fé no dia a dia.",
      items: ["Camisetas Religiosas", "Bonés Católicos", "Véus e Mantilhas", "Acessórios", "Roupas Litúrgicas"],
      color: "accent",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: Cross,
      title: "Imagens de Santos",
      description: "Belas imagens e estátuas dos santos católicos para sua casa, escritório ou capela.",
      items: ["Imagens em Resina", "Estátuas de Gesso", "Quadros de Santos", "Imagens para Carro", "Santos Padroeiros"],
      color: "secondary",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Heart,
      title: "Artigos de Oração",
      description: "Terços, pulseiras, chaveiros e outros artigos para acompanhar seus momentos de oração.",
      items: ["Terços Diversos", "Pulseiras Religiosas", "Chaveiros Santos", "Medalhas", "Escapulários"],
      color: "primary",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Flame,
      title: "Velas & Incensos",
      description: "Velas, porta velas e incensos para criar um ambiente sagrado em suas orações.",
      items: ["Velas Votivas", "Porta Velas", "Incensos Variados", "Velas Aromáticas", "Círios"],
      color: "accent",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: Sparkles,
      title: "Adornos & Decoração",
      description: "Correntes, cheirinhos e adornos religiosos para decorar e perfumar seu ambiente.",
      items: ["Correntes Religiosas", "Aromatizadores", "Quadros Decorativos", "Adornos para Casa", "Presépios"],
      color: "secondary",
      gradient: "from-secondary/10 to-secondary/5"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-primary/5 to-white">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Cross className="text-accent" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Nossos Artigos Religiosos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção cuidadosa de artigos católicos para fortalecer sua fé e enriquecer sua vida espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-to-br ${category.gradient} border-2 border-${category.color}/20 hover:border-${category.color}/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll`}
            >
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${category.color}/10 rounded-full mb-6 group-hover:bg-${category.color}/20 transition-colors`}>
                  <category.icon className={`text-${category.color}`} size={32} />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-secondary mb-4">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 bg-${category.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsApp(category.title)}
                  className={`w-full bg-${category.color} hover:bg-${category.color}/90 text-white`}
                >
                  Ver Imagens - {category.title}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-primary/10 via-white to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato conosco! Temos uma ampla variedade de artigos religiosos e 
              podemos enviar imagens dos produtos que você procura.
            </p>
            <Button
              onClick={() => handleWhatsApp("informações e imagens de produtos disponíveis")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full"
            >
              <Heart className="mr-2" size={20} />
              Solicitar Imagens no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
