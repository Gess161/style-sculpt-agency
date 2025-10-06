import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            Надійний партнер Вашого бізнесу.
            <br />
            <span className="block text-center">
              Ми перетворюємо складні цифри у зрозумілі рішення, а вимоги закону
              – у переваги для вашої компанії.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-light font-semibold px-8"
            >
              Наші послуги
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
