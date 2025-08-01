
import { Card } from "@/components/ui/card";
import { Heart, Star, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-white to-primary/5">
      <div className="container">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Heart className="text-primary" size={32} />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de fé que transformou experiência corporativa em missão divina
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="animate-on-scroll">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Após dedicar <strong className="text-secondary">28 anos</strong> da minha vida ao mundo corporativo como 
                Coordenador de Desenvolvimento de Lojas, senti um chamado para uma nova jornada.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com a saída da empresa, em oração, busquei a Deus por um direcionamento, pedindo 
                que me mostrasse como poderia usar minha experiência para <strong className="text-accent">servi-lo 
                e tocar a vida das pessoas</strong>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Foi Ele quem, em sua infinita sabedoria, me guiou para um caminho surpreendente: 
                <strong className="text-primary"> abrir uma loja de artigos religiosos</strong>.
              </p>

              <div className="bg-primary/10 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-secondary font-medium text-lg italic">
                  "Nossa missão é ser um canal de bênçãos e inspiração, oferecendo artigos religiosos 
                  que fortaleçam a fé e a devoção."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll">
            <Card className="bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 p-8 shadow-xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Star className="text-white" size={40} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Buscamos, em cada produto, levar a mensagem de esperança e as maravilhas de Deus, 
                  honrando a dignidade e a graça que o nome <strong className="text-accent">Augusta Rainha</strong> representa.
                </p>
                <div className="bg-accent/10 rounded-xl p-4">
                  <p className="text-accent font-semibold text-lg">
                    Mais do que um comércio, este é um espaço de bênçãos
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="animate-on-scroll">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="font-serif font-semibold text-secondary mb-2">Fé</h4>
              <p className="text-muted-foreground text-sm">
                Cada produto é escolhido com amor e oração
              </p>
            </Card>

            <Card className="text-center p-6 bg-white border-2 border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Star className="text-accent" size={32} />
              </div>
              <h4 className="font-serif font-semibold text-secondary mb-2">Qualidade</h4>
              <p className="text-muted-foreground text-sm">
                Artigos de excelência para sua devoção
              </p>
            </Card>

            <Card className="text-center p-6 bg-white border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h4 className="font-serif font-semibold text-secondary mb-2">Comunidade</h4>
              <p className="text-muted-foreground text-sm">
                Servindo a comunidade católica com dedicação
              </p>
            </Card>

            <Card className="text-center p-6 bg-white border-2 border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Award className="text-accent" size={32} />
              </div>
              <h4 className="font-serif font-semibold text-secondary mb-2">Excelência</h4>
              <p className="text-muted-foreground text-sm">
                Compromisso com o melhor atendimento
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
