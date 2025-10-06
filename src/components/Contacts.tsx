import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Повідомлення надіслано",
      description: "Ми зв'яжемося з вами найближчим часом",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефони",
      details: ["+38(067)610-40-47", "+38(067)263-05-64"],
      action: "tel:+380676104047",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["af.concept.audit@gmail.com"],
      action: "mailto:af.concept.audit@gmail.com",
    },
    {
      icon: MapPin,
      title: "Адреса",
      details: [
        "79054, Україна, Львівська обл.,",
        "м. Львів, вул. Яворницького Д., 8, кв. 72",
      ],
      action: null,
    },
    {
      icon: Clock,
      title: "Графік роботи",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб-Нд: за домовленістю"],
      action: null,
    },
  ];

  return (
    <section id="contacts" className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
            Контакти
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Зв'яжіться з нами для отримання професійної консультації
          </p>
        </div>

        <div className="grid gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-text-secondary text-sm"
                          >
                            {info.action && detailIndex === 0 ? (
                              <a
                                href={info.action}
                                className="hover:text-accent transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary to-primary-dark text-white">
              <p className="text-white/90 mb-4">
                Отримайте професійну консультацію з будь-яких питань аудиту та
                оподаткування
              </p>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Оцінка поточного стану фінансової звітності</li>
                <li>• Рекомендації щодо оптимізації податків</li>
                <li>• Планування аудиторських процедур</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
