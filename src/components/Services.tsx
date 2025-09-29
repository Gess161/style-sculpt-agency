import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  TrendingUp, 
  Calculator, 
  DollarSign, 
  MessageCircle, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Аудит",
      description: "Комплексний аудит фінансової звітності відповідно до міжнародних стандартів",
      features: ["Зовнішній аудит", "Внутрішній аудит", "Аудит державних установ"]
    },
    {
      icon: TrendingUp,
      title: "Аналіз фінансово-господарської діяльності",
      description: "Глибокий аналіз фінансового стану та ефективності діяльності підприємства",
      features: ["Фінансовий аналіз", "Оцінка ефективності", "Бізнес-планування"]
    },
    {
      icon: Calculator,
      title: "Примітки до фінансової звітності",
      description: "Професійна підготовка приміток та роз'яснень до фінансової звітності",
      features: ["Підготовка приміток", "Консультації", "Супровід звітності"]
    },
    {
      icon: DollarSign,
      title: "Трансфертне ціноутворення",
      description: "Консультації з питань трансфертного ціноутворення та міжнародного оподаткування",
      features: ["Аналіз цін", "Документування", "Оптимізація податків"]
    },
    {
      icon: MessageCircle,
      title: "Консультації з податкового законодавства",
      description: "Експертні консультації з усіх питань податкового планування та оптимізації",
      features: ["Податкове планування", "Оптимізація", "Супровід перевірок"]
    }
  ];

  return (
    <section id="services" className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Наші послуги
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ми надаємо повний спектр аудиторських та консультаційних послуг для вашого бізнесу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover-lift group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                >
                  Дізнатися більше
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary to-primary-dark text-white max-w-4xl mx-auto">
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-4">
              Потрібна індивідуальна консультація?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Наші експерти готові обговорити специфіку вашого бізнесу та запропонувати оптимальні рішення
            </p>
            <Button 
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold"
              onClick={() => {
                const element = document.getElementById('contacts');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Отримати консультацію
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;