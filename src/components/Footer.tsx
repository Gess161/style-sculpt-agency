import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Концепт-Аудит" className="w-10 h-10" />
              <div>
                <h3 className="font-playfair font-bold text-xl">
                  КОНЦЕПТ-АУДИТ
                </h3>
                <p className="text-white/80 text-sm">Аудиторська фірма</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6 max-w-md">
              Надійний партнер Вашого бізнесу. Ми перетворюємо складні цифри у
              зрозумілі рішення, а вимоги закону – у переваги для вашої
              компанії.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <div className="text-sm space-y-1">
                  <div>+38(067)610-40-47</div>
                  <div>+38(067)263-05-64</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:af.concept.audit@gmail.com"
                  className="text-sm hover:text-accent transition-colors"
                >
                  af.concept.audit@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm">
                  <div>79054, Україна, Львівська обл.,</div>
                  <div>м. Львів, вул. Яворницького Д., 8, кв. 72</div>
                </div>
              </div>
              <div className="mt-4">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps?q=79054,+Україна,+Львівська+обл.,+м.+Львів,+вул.+Яворницького+Д.,+8,+кв.+72&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">
              Навігація
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Про нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Послуги
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Команда
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("certificates")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Сертифікати
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacts")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Контакти
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "/news")}
                  className="text-white/80 hover:text-accent transition-colors text-sm"
                >
                  Новини
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-6">
              Послуги
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Аудит фінансової звітності</li>
              <li>Аналіз діяльності</li>
              <li>Примітки до звітності</li>
              <li>Трансфертне ціноутворення</li>
              <li>Податкові консультації</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} ТОВ АФ «КОНЦЕПТ-АУДИТ». Усі права захищені.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
