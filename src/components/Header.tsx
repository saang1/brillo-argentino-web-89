import React, { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Use isScrolled for text color changes to match navbar background changes
  const textColorClass = isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg shadow-black/50';
  const logoTextColor = isScrolled ? 'text-gray-900' : 'text-white';
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-b from-black/30 to-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-lg ${logoTextColor} drop-shadow-md`}>Samurai Detail</h1>
              <p className={`text-sm ${logoTextColor} drop-shadow-md opacity-90`}></p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Servicios
            </button>
            <button onClick={() => scrollToSection('galeria')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Galería
            </button>
            <button onClick={() => scrollToSection('testimonios')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-gradient-primary text-white px-6 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold border-2 border-white/20">
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} drop-shadow-md`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-white/98 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-200 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Servicios
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Galería
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Testimonios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="bg-gradient-primary text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 text-center mt-2 font-semibold">
                Contacto
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;