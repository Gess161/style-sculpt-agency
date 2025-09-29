import { Card } from '@/components/ui/card';
import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
  // Placeholder certificate data since we don't have the actual certificate images
  const certificates = [
    {
      title: "Сертифікат аудитора",
      number: "№007542",
      description: "Державний сертифікат аудиторської діяльності",
      issuedBy: "Аудиторська палата України"
    },
    {
      title: "CAP Сертифікат",
      number: "CAP-2023",
      description: "Сертифікований бухгалтер-практик",
      issuedBy: "Федерація професійних бухгалтерів"
    },
    {
      title: "Ліцензія аудиторської фірми",
      number: "№AF-101062",
      description: "Ліцензія на надання аудиторських послуг",
      issuedBy: "Державний реєстр аудиторів"
    },
    {
      title: "ISO 9001:2015",
      number: "ISO-2023",
      description: "Система управління якістю",
      issuedBy: "Міжнародна організація зі стандартизації"
    },
    {
      title: "Членство в АПУ",
      number: "Member-2023",
      description: "Член Аудиторської палати України",
      issuedBy: "Аудиторська палата України"
    },
    {
      title: "Сертифікат підвищення кваліфікації",
      number: "№PK-2023",
      description: "Підвищення кваліфікації з міжнародних стандартів",
      issuedBy: "Інститут аудиторів України"
    }
  ];

  return (
    <section id="certificates" className="section-spacing bg-background-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Наші сертифікати
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Офіційні документи, що підтверджують нашу кваліфікацію та право надавати аудиторські послуги
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Card 
              key={index}
              className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Certificate Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-accent/30 group-hover:to-accent/40 transition-all">
                  <Award className="w-10 h-10 text-accent" />
                </div>

                {/* Certificate Details */}
                <h3 className="font-playfair font-semibold text-lg text-primary mb-2">
                  {certificate.title}
                </h3>
                
                <div className="bg-accent/10 rounded-lg px-3 py-1 mb-3 inline-block">
                  <span className="text-accent font-medium text-sm">
                    {certificate.number}
                  </span>
                </div>

                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-center text-xs text-text-muted">
                  <CheckCircle className="w-3 h-3 text-accent mr-1" />
                  <span>{certificate.issuedBy}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-card shadow-medium max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-primary mb-4">
              Сертифікована якість послуг
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Усі наші співробітники мають відповідні сертифікати та ліцензії, що дозволяє нам 
              надавати послуги найвищої якості відповідно до міжнародних стандартів аудиту та 
              вимог українського законодавства.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;