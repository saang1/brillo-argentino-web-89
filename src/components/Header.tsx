
import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Premium</h1>
              <p className="text-xs text-gray-400 -mt-1">Car Detailing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Testimonios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left py-2"
              >
                Testimonios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-primary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 text-center mt-2"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
