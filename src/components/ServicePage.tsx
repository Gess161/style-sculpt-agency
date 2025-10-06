import React from "react";

interface ServicePageProps {
  title: string;
  content: React.ReactNode;
}

const ServicePage: React.FC<ServicePageProps> = ({ title, content }) => (
  <section className="section-spacing bg-background">
    <div className="max-w-4xl mx-auto container-padding">
      <h1 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-6">
        {title}
      </h1>
      <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
      <div className="text-text-secondary text-lg space-y-4">{content}</div>
    </div>
  </section>
);

export default ServicePage;
