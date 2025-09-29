import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Team from '@/components/Team';
import Certificates from '@/components/Certificates';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Certificates />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
