
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Zap, ChevronDown, Star } from 'lucide-react';
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

  const headerBg = isScrolled 
    ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-2 border-red-500' 
    : 'bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="relative">
              <div className="bg-gradient-to-b from-red-500 to-red-700 p-3 rounded-full elite-glow group-hover:scale-110 transition-transform duration-300">
                <div className="relative">
                  <Zap className="h-6 w-6 text-yellow-400 lightning-glow" />
                  <Star className="h-3 w-3 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-lg text-vintage text-red-500 drop-shadow-md">
                ELITE
              </h1>
              <p className="text-sm text-yellow-400 font-semibold uppercase tracking-wider drop-shadow-md">
                GARAGE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="font-bold text-lg hover:text-red-400 transition-all duration-200 text-yellow-400 hover:scale-105 uppercase tracking-wide text-racing"
            >
              INICIO
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')} 
              className="font-bold text-lg hover:text-red-400 transition-all duration-200 text-yellow-400 hover:scale-105 uppercase tracking-wide text-racing"
            >
              NOSOTROS
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="font-bold text-lg hover:text-red-400 transition-all duration-200 text-yellow-400 hover:scale-105 flex items-center gap-1 uppercase tracking-wide text-racing">
                  SERVICIOS
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-gray-900 border-2 border-red-500 shadow-2xl rounded-none mt-2 z-50 elite-glow">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('servicios')}
                  className="text-yellow-400 hover:text-red-400 hover:bg-red-500/20 cursor-pointer px-6 py-4 text-base font-bold border-b border-red-500/30 uppercase tracking-wide text-racing"
                >
                  VER TODOS LOS SERVICIOS ⚡
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-red-500" />
                {servicesData.map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="text-gray-300 hover:text-yellow-400 hover:bg-red-500/20 cursor-pointer px-6 py-4 text-base transition-colors duration-200 font-semibold"
                  >
                    <div className="font-medium uppercase">{service.title}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              onClick={() => scrollToSection('galeria')} 
              className="font-bold text-lg hover:text-red-400 transition-all duration-200 text-yellow-400 hover:scale-105 uppercase tracking-wide text-racing"
            >
              GALERÍA
            </button>
            <button 
              onClick={() => scrollToSection('testimonios')} 
              className="font-bold text-lg hover:text-red-400 transition-all duration-200 text-yellow-400 hover:scale-105 uppercase tracking-wide text-racing"
            >
              TESTIMONIOS
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="btn-elite text-sm"
            >
              🏁 CONTACTO 🏁
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-red-500/20 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 w-full transition-all duration-300 bg-yellow-400 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 bg-yellow-400 ${isMobileMenuOpen ? 'opacity-0' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 bg-yellow-400 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} drop-shadow-md`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-2 border-red-500 rounded-none mt-2 p-4 shadow-2xl elite-glow">
            <nav className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-yellow-400 hover:text-red-400 transition-colors duration-200 text-left py-3 font-bold text-lg hover:bg-red-500/20 rounded px-3 uppercase tracking-wide text-racing"
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')} 
                className="text-yellow-400 hover:text-red-400 transition-colors duration-200 text-left py-3 font-bold text-lg hover:bg-red-500/20 rounded px-3 uppercase tracking-wide text-racing"
              >
                NOSOTROS
              </button>
              
              {/* Mobile Services Submenu */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-yellow-400 hover:text-red-400 transition-colors duration-200 text-left py-3 font-bold text-lg hover:bg-red-500/20 rounded px-3 flex items-center justify-between uppercase tracking-wide text-racing"
                >
                  SERVICIOS
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-red-500 pl-4">
                    <button 
                      onClick={() => scrollToSection('servicios')}
                      className="block w-full text-left text-yellow-400 hover:text-red-400 transition-colors duration-200 py-3 text-base font-bold hover:bg-red-500/20 rounded px-3 uppercase"
                    >
                      VER TODOS ⚡
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors duration-200 py-3 text-base hover:bg-red-500/20 rounded px-3 font-semibold"
                      >
                        <div className="font-medium uppercase">{service.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('galeria')} 
                className="text-yellow-400 hover:text-red-400 transition-colors duration-200 text-left py-3 font-bold text-lg hover:bg-red-500/20 rounded px-3 uppercase tracking-wide text-racing"
              >
                GALERÍA
              </button>
              <button 
                onClick={() => scrollToSection('testimonios')} 
                className="text-yellow-400 hover:text-red-400 transition-colors duration-200 text-left py-3 font-bold text-lg hover:bg-red-500/20 rounded px-3 uppercase tracking-wide text-racing"
              >
                TESTIMONIOS
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="btn-elite text-center mt-2 text-sm"
              >
                🏁 CONTACTO 🏁
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
