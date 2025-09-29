import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Концепт-Аудит" className="w-10 h-10" />
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-primary">
                КОНЦЕПТ-АУДИТ
              </h1>
              <p className="text-sm text-text-secondary">Аудиторська фірма</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Про нас
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Послуги
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Команда
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Сертифікати
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Контакти
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-text-secondary">+38(067)610-40-47</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-dark"
            >
              Зв'язатися
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-text-secondary hover:text-primary py-2"
              >
                Про нас
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-text-secondary hover:text-primary py-2"
              >
                Послуги
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-text-secondary hover:text-primary py-2"
              >
                Команда
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="text-left text-text-secondary hover:text-primary py-2"
              >
                Сертифікати
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-left text-text-secondary hover:text-primary py-2"
              >
                Контакти
              </button>
              <div className="pt-3 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-text-secondary">+38(067)610-40-47</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contacts')}
                  variant="default"
                  size="sm"
                  className="w-full bg-primary hover:bg-primary-dark"
                >
                  Зв'язатися
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;