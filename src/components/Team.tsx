import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Плутицька Катерина Миколаївна",
      position: "Директор",
      certifications: [
        "Сертифікований аудитор – сертифікат №007542",
        "Номер реєстрації у Реєстрі аудиторів - 101062",
        "Сертифікований бухгалтер-практик CAP"
      ],
      avatar: "КП"
    },
    {
      name: "Чік Марія Юріївна",
      position: "Аудитор",
      certifications: [
        "Сертифікований аудитор – сертифікат №007542",
        "Номер реєстрації у Реєстрі аудиторів - 101062",
        "Сертифікований бухгалтер-практик CAP"
      ],
      avatar: "ЧМ"
    },
    {
      name: "Колобердянко Євген Вікторович",
      position: "Аудитор",
      certifications: [
        "Сертифікований аудитор – сертифікат №007542",
        "Номер реєстрації у Реєстрі аудиторів - 101062",
        "Сертифікований бухгалтер-практик CAP"
      ],
      avatar: "КЄ"
    }
  ];

  return (
    <section id="team" className="section-spacing bg-background-muted">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Наша команда
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Досвідчені професіонали з високою кваліфікацією та багаторічним досвідом
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-playfair font-semibold text-xl">
                    {member.avatar}
                  </span>
                </div>

                {/* Name and Position */}
                <h3 className="font-playfair font-semibold text-xl text-primary mb-2">
                  {member.name}
                </h3>
                <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent font-medium">
                  {member.position}
                </Badge>

                {/* Certifications */}
                <div className="space-y-3">
                  {member.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-start text-sm text-text-secondary">
                      <Award className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-left">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 md:p-12 bg-card shadow-medium max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
            </div>
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-primary mb-4">
              Експертиза, якій довіряють
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Наша команда складається з сертифікованих аудиторів та бухгалтерів з багаторічним досвідом. 
              Ми постійно підвищуємо кваліфікацію та слідкуємо за змінами в законодавстві, щоб надавати 
              вам найактуальніші та якісні послуги.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;