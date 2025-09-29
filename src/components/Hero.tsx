import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            АУДИТОРСЬКА ФІРМА
            <span className="block text-accent mt-2">«КОНЦЕПТ-АУДИТ»</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Надійний партнер Вашого бізнесу. Ми перетворюємо складні цифри у зрозумілі рішення, 
            а вимоги закону – у переваги для вашої компанії.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold px-8"
            >
              Наші послуги
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contacts')}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
            >
              Консультація
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-white mb-2">15+ років</h3>
              <p className="text-white/80">досвіду роботи</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-white mb-2">200+</h3>
              <p className="text-white/80">задоволених клієнтів</p>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-playfair font-semibold text-2xl text-white mb-2">100%</h3>
              <p className="text-white/80">гарантія якості</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;