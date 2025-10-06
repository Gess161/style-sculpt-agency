import { Card } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-spacing bg-background-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Про нас
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="mb-16 animate-slide-up">
          <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-primary mb-6 leading-tight text-center">
            Ми – не просто аудитори. <br />
            Ми – ті, хто стоїть між Вашим бізнесом і фінансовими ризиками.
          </h3>
          <div className="text-center">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              ТОВ АФ «КОНЦЕПТ-АУДИТ» – це команда сертифікованих фахівців, яка
              перетворює складні цифри у зрозумілі рішення, а вимоги закону – у
              переваги для вашої компанії.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Нас не лякають перевірки, великі обсяги звітності чи нестандартні
              ситуації – ми на них дивимось як на задачі, які мають чітке,
              ефективне й законне рішення.
            </p>
          </div>
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl mb-6">
              Коли Ви працюєте з «КОНЦЕПТ-АУДИТ», Ви отримуєте не просто
              послугу. Ви отримуєте партнера, який думає про Ваш бізнес, як про
              свій.
            </h3>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
