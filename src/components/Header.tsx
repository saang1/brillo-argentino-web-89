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
import { cursosData } from '@/data/cursosData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
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
        setIsMobileCoursesOpen(false);
      }
    } else {
      // If we're on a service page, navigate to main page with hash
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      setIsMobileServicesOpen(false);
      setIsMobileCoursesOpen(false);
    }
  };

  const navigateToService = (serviceId: string) => {
    navigate(`/servicios/${serviceId}`);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCoursesOpen(false);
  };

  const navigateToCourse = (courseId: string) => {
    navigate(`/cursos/${courseId}`);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCoursesOpen(false);
  };

  // Use isScrolled for text color changes to match navbar background changes
  const textColorClass = isScrolled ? 'text-white' : 'text-white drop-shadow-lg shadow-black/50';
  const logoTextColor = isScrolled ? 'text-white' : 'text-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1 ${isScrolled ? 'bg-neutral-black backdrop-blur-md shadow-2xl' : 'bg-gradient-to-b from-neutral-black/50 to-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img 
              src="/lovable-uploads/elitegarage-logo.svg" 
              alt="Elite Garage Spa Logo" 
              className="h-16 w-16 lg:h-24 lg:w-24 object-contain hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105 scroll-mt-20 lg:scroll-mt-40`}>
              Nosotros
            </button>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105 flex items-center gap-1`}>
                  Servicios
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-neutral-black border border-support-gray shadow-2xl rounded-lg mt-2 z-50">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('servicios')}
                  className="text-white hover:text-white hover:bg-accent-yellow/10 cursor-pointer px-6 py-4 text-base font-semibold"
                >
                  Ver todos los servicios
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-support-gray" />
                {servicesData.map((service) => (
                  <DropdownMenuItem
                    key={service.id}
                    onClick={() => navigateToService(service.id)}
                    className="text-white hover:text-white hover:bg-accent-yellow/10 cursor-pointer px-6 py-4 text-base transition-colors duration-200"
                  >
                    <div className="font-medium">{service.title}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105 flex items-center gap-1`}>
                  Cursos
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-neutral-black border border-support-gray shadow-2xl rounded-lg mt-2 z-50">
                <DropdownMenuItem 
                  onClick={() => scrollToSection('cursos')}
                  className="text-white hover:text-white hover:bg-accent-yellow/10 cursor-pointer px-6 py-4 text-base font-semibold"
                >
                  Ver todos los cursos
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-support-gray" />
                {cursosData.map((course) => (
                  <DropdownMenuItem
                    key={course.id}
                    onClick={() => navigateToCourse(course.id)}
                    className="text-white hover:text-white hover:bg-accent-yellow/10 cursor-pointer px-6 py-4 text-base transition-colors duration-200"
                  >
                    <div className="font-medium">{course.title}</div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={() => scrollToSection('galeria')} className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Galería
            </button>
            <button onClick={() => scrollToSection('testimonios')} className={`font-medium text-lg hover:text-primary-red transition-all duration-200 ${textColorClass} hover:scale-105`}>
              Testimonios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-gradient-primary text-white px-6 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200 font-semibold border-2 border-accent-yellow/20">
              Contacto
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`h-0.5 w-full transition-all duration-300 bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 bg-white ${isMobileMenuOpen ? 'opacity-0' : ''} drop-shadow-md`} />
              <div className={`h-0.5 w-full transition-all duration-300 bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} drop-shadow-md`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border border-support-gray rounded-lg mt-2 p-4 shadow-2xl">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('inicio')} className="text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3">
                Inicio
              </button>
              <button onClick={() => scrollToSection('nosotros')} className="text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3">
                Nosotros
              </button>
              
              {/* Mobile Services Submenu */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3 flex items-center justify-between"
                >
                  Servicios
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-accent-yellow pl-4">
                    <button 
                      onClick={() => scrollToSection('servicios')}
                      className="block w-full text-left text-neutral-black hover:text-primary-red transition-colors duration-200 py-3 text-base font-semibold hover:bg-accent-yellow/10 rounded px-3"
                    >
                      Ver todos los servicios
                    </button>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="block w-full text-left text-neutral-black hover:text-primary-red transition-colors duration-200 py-3 text-base hover:bg-accent-yellow/10 rounded px-3"
                      >
                        <div className="font-medium">{service.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Courses Submenu */}
              <div>
                <button 
                  onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                  className="w-full text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3 flex items-center justify-between"
                >
                  Cursos
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileCoursesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-accent-yellow pl-4">
                    <button 
                      onClick={() => scrollToSection('cursos')}
                      className="block w-full text-left text-neutral-black hover:text-primary-red transition-colors duration-200 py-3 text-base font-semibold hover:bg-accent-yellow/10 rounded px-3"
                    >
                      Ver todos los cursos
                    </button>
                    {cursosData.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => navigateToCourse(course.id)}
                        className="block w-full text-left text-neutral-black hover:text-primary-red transition-colors duration-200 py-3 text-base hover:bg-accent-yellow/10 rounded px-3"
                      >
                        <div className="font-medium">{course.title}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={() => scrollToSection('galeria')} className="text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3">
                Galería
              </button>
              <button onClick={() => scrollToSection('testimonios')} className="text-neutral-black hover:text-primary-red transition-colors duration-200 text-left py-3 font-medium text-lg hover:bg-accent-yellow/10 rounded-lg px-3">
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
