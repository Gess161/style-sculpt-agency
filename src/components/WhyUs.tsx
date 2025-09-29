import { Card } from '@/components/ui/card';
import { 
  Clock, 
  Shield, 
  HandHeart, 
  Users, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Багаторічна експертиза",
      description: "За плечима нашої команди — роки реальної практики, десятки кейсів і глибоке розуміння аудиту, податків і бізнесу."
    },
    {
      icon: CheckCircle2,
      title: "Гарантований результат",
      description: "Ми не просто виконуємо завдання — ми досягаємо чітко визначеного результату, який має практичну цінність для вашого бізнесу."
    },
    {
      icon: HandHeart,
      title: "Надійне партнерство",
      description: "Ми будуємо співпрацю не на один проєкт, а на роки — як стратегічний партнер, а не тимчасовий підрядник."
    },
    {
      icon: Users,
      title: "Індивідуальний підхід",
      description: "Кожен клієнт отримує персоналізоване рішення: від комплексної перевірки до точкових аудитів окремих напрямків діяльності."
    },
    {
      icon: Lock,
      title: "Конфіденційність і безпека",
      description: "Ми гарантуємо повну конфіденційність усіх даних та дотримуємось високих стандартів аудиторської етики."
    },
    {
      icon: Shield,
      title: "Професійна відповідальність",
      description: "Ми гарантуємо повну прозорість та точність у роботі. Кожен наш висновок і кожна рекомендація базуються на ретельному аналізі."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Чому варто звернутися саме до нас?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ми пропонуємо не просто послуги, а комплексні рішення для вашого бізнесу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover-lift group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-primary mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <div className="text-center">
              <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-primary mb-6">
                Готові довірити нам свій бізнес?
              </h3>
              <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                Зв'яжіться з нами сьогодні для безкоштовної консультації. Наші експерти 
                оцінять ваші потреби та запропонують оптимальні рішення.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-medium">Швидкий відгук протягом 24 годин</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium">Безкоштовна первинна консультація</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;