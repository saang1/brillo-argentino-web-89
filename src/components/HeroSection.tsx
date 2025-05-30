
import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/ccd71cd9-1c75-4e87-aea7-99ab0cf45a35.png')`
        }}
      >
        <div className="absolute inset-0 bg-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Tu Auto
            <span className="block text-gradient">Como Nuevo</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Servicio premium de car detailing en zona norte. Restauramos el brillo original de tu vehículo con técnicas profesionales y productos de primera calidad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Reservá tu Turno Ahora
            </button>
            
            <a 
              href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20car%20detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-500 text-red-500 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Consultanos por WhatsApp
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">+500</div>
              <div className="text-gray-300 mt-1">Autos Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">98%</div>
              <div className="text-gray-300 mt-1">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500">5★</div>
              <div className="text-gray-300 mt-1">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
