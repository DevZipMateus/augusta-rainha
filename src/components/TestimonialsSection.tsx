
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Paulínia, SP",
      text: "A Augusta Rainha tem os artigos religiosos mais bonitos da região. Comprei uma imagem de Nossa Senhora que é simplesmente perfeita. O atendimento é excepcional!",
      rating: 5,
      product: "Imagem de Nossa Senhora"
    },
    {
      name: "João Carlos",
      location: "Campinas, SP", 
      text: "Encontrei a Bíblia que procurava há muito tempo. A qualidade é excelente e o preço justo. Recomendo para todos os católicos da região!",
      rating: 5,
      product: "Bíblia Católica"
    },
    {
      name: "Ana Paula",
      location: "Sumaré, SP",
      text: "Comprei terços para toda a família. São lindos e bem feitos. A loja tem uma energia muito especial, você sente a presença de Deus ali.",
      rating: 5,
      product: "Terços"
    },
    {
      name: "Carlos Mendes",
      location: "Hortolândia, SP",
      text: "Excelente variedade de livros católicos. Sempre encontro material para meus estudos bíblicos. A Augusta Rainha é uma bênção em nossas vidas!",
      rating: 5,
      product: "Livros Religiosos"
    },
    {
      name: "Luiza Ferreira",
      location: "Americana, SP",
      text: "As velas e incensos são de primeira qualidade. Criam um ambiente perfeito para a oração. Atendimento personalizado e produtos abençoados!",
      rating: 5,
      product: "Velas e Incensos"
    },
    {
      name: "Roberto Silva",
      location: "Valinhos, SP",
      text: "Comprei uma camiseta religiosa linda para minha filha. A qualidade do tecido é ótima e a estampa muito bem feita. Voltarei sempre!",
      rating: 5,
      product: "Vestuário Religioso"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Star className="text-accent" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos de pessoas que encontraram na Augusta Rainha mais que produtos, 
            encontraram instrumentos para fortalecer sua fé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-on-scroll group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="text-primary/30 group-hover:text-primary/50 transition-colors" size={32} />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-secondary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">
                        {testimonial.product}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-accent/10 via-white to-primary/10 rounded-3xl p-12 border border-accent/20">
            <Star className="text-accent mx-auto mb-6" size={48} />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-secondary mb-4">
              Sua opinião é muito importante!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Após conhecer nossos artigos, compartilhe sua experiência conosco. 
              Seu depoimento ajuda outros fiéis a encontrarem o que procuram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Card className="bg-white/50 p-4 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-2">Avalie-nos no Google</p>
                <div className="flex space-x-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={20} />
                  ))}
                </div>
              </Card>
              
              <Card className="bg-white/50 p-4 border border-accent/20">
                <p className="text-sm text-muted-foreground mb-2">Siga no Instagram</p>
                <p className="text-accent font-semibold">@artigosaugustarainha</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
