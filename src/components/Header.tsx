
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from '@/data/servicesData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

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
      setIsMobileServicesOpen(false);
    }
  };

  const navigateToService = (serviceId: string) => {
    navigate(`/servicios/${serviceId}`);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Use isScrolled for text color changes to match navbar background changes
  const textColorClass = isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg shadow-black/50';
  const logoTextColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl' : 'bg-gradient-to-b from-black/30 to-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-lg ${logoTextColor} drop-shadow-md`}>Detailing</h1>
              <p className={`text-sm ${logoTextColor} drop-shadow-md opacity-90`}></p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Nosotros
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`font-medium text-lg hover:text-red-500 transition-all duration-200 ${textColorClass} hover:scale-105 flex items-center gap-1`}>
                  Servicios
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white/98 backdrop-blur-md border border-gray-200 shadow-xl rounded-lg mt-2">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-700 hover:text-red-600 hover:bg-gray-50 cursor-pointer px-4 py-3 text-sm font-medium"
                >
                  Ver todos los servicios
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-200" />
                {servicesData.map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="text-gray-700 hover:text-red-600 hover:bg-gray-50 cursor-pointer px-4 py-3 text-sm"
                  >
                    <div>
                      <div className="font-medium">{service.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{service.price}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-200 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2">
                Nosotros
              </button>
              
              {/* Mobile Services Submenu */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-gray-50 rounded-lg px-2 flex items-center justify-between"
                >
                  Servicios
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                    <button 
                      onClick={() => scrollToSection('servicios')}
                      className="block w-full text-left text-gray-600 hover:text-red-600 transition-colors duration-200 py-2 text-sm font-medium hover:bg-gray-50 rounded px-2"
                    >
                      Ver todos los servicios
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left text-gray-600 hover:text-red-600 transition-colors duration-200 py-2 text-sm hover:bg-gray-50 rounded px-2"
                      >
                        <div className="font-medium">{service.title}</div>
                        <div className="text-xs text-gray-500">{service.price}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
