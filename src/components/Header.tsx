import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're on the main page, just scroll
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    } else {
      // If we're on a service page, navigate to main page with hash
      navigate(`/#${sectionId}`);
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
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
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
              <DropdownMenuContent className="w-72 bg-white border border-gray-300 shadow-2xl rounded-lg mt-2 z-50">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer px-6 py-4 text-base font-semibold border-b border-gray-100"
                >
                  Ver todos los servicios
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-300" />
                {servicesData.map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="text-gray-700 hover:text-red-600 hover:bg-red-50 cursor-pointer px-6 py-4 text-base transition-colors duration-200"
                  >
                    <div className="font-medium">{service.title}</div>
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
          <div className="md:hidden bg-white border border-gray-300 rounded-lg mt-2 p-4 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-red-50 rounded-lg px-3">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-red-50 rounded-lg px-3">
                Nosotros
              </button>
              
              {/* Mobile Services Submenu */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-red-50 rounded-lg px-3 flex items-center justify-between"
                >
                  Servicios
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-red-200 pl-4">
                    <button 
                      onClick={() => scrollToSection('servicios')}
                      className="block w-full text-left text-gray-600 hover:text-red-600 transition-colors duration-200 py-3 text-base font-semibold hover:bg-red-50 rounded px-3"
                    >
                      Ver todos los servicios
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left text-gray-600 hover:text-red-600 transition-colors duration-200 py-3 text-base hover:bg-red-50 rounded px-3"
                      >
                        <div className="font-medium">{service.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-red-50 rounded-lg px-3">
                Galería
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-gray-700 hover:text-red-600 transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-red-50 rounded-lg px-3">
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
