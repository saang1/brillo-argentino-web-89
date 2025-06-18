
import React from 'react';
import { Zap, Star, Wrench } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-20"></div>
      
      {/* Grunge Texture Overlay */}
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-20 left-10 text-yellow-400 lightning-glow animate-pulse">
        <Zap className="h-12 w-12 transform rotate-45" />
      </div>
      <div className="absolute bottom-32 right-16 text-yellow-400 lightning-glow animate-pulse delay-1000">
        <Zap className="h-16 w-16 transform -rotate-12" />
      </div>
      <div className="absolute top-1/3 right-20 text-yellow-400 lightning-glow animate-pulse delay-500">
        <Zap className="h-10 w-10 transform rotate-90" />
      </div>

      {/* Stars */}
      <div className="absolute top-16 right-32 text-yellow-400 animate-pulse">
        <Star className="h-8 w-8 fill-current" />
      </div>
      <div className="absolute bottom-20 left-32 text-red-500 animate-pulse delay-700">
        <Star className="h-6 w-6 fill-current" />
      </div>
      <div className="absolute top-2/3 left-16 text-yellow-400 animate-pulse delay-300">
        <Star className="h-10 w-10 fill-current" />
      </div>

      {/* Main Logo/Helmet Effect */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-32 bg-gradient-to-b from-red-500 to-red-700 rounded-full elite-glow relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-blue-600 rounded-lg opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-16 bg-white opacity-90 rounded"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-vintage">
            <span className="text-red-500">ELITE</span>
            <span className="block text-gradient text-racing">GARAGE</span>
            <span className="text-yellow-400">DETAILING</span>
          </h1>
          
          {/* Separator with tools */}
          <div className="flex items-center justify-center my-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <Wrench className="h-8 w-8 mx-4 text-yellow-400 lightning-glow" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-semibold">
            <span className="text-red-500">PREMIUM DETAILING</span> con actitud rebelde. 
            Transformamos tu máquina con <span className="text-yellow-400">técnicas artesanales</span> y productos de primera.
          </p>
          
          {/* Phone Number Display */}
          <div className="vintage-border bg-gray-900 p-4 mb-8 inline-block">
            <p className="text-racing text-2xl text-yellow-400">📞 11-6912-2284</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button onClick={scrollToContact} className="btn-elite">
              ⚡ RESERVÁ TU TURNO ⚡
            </button>
            
            <a 
              href="https://wa.me/541169122284?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20car%20detailing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-3 border-red-500 text-red-500 bg-gray-900/80 backdrop-blur-sm px-8 py-4 font-bold uppercase tracking-wide hover:bg-red-500 hover:text-black transition-all duration-300 vintage-border text-racing"
            >
              🏁 WHATSAPP 🏁
            </a>
          </div>
          
          {/* Stats with Vintage Style */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="vintage-border bg-gray-900/50 p-6 grunge-texture">
              <div className="text-4xl font-bold text-gradient text-vintage">+500</div>
              <div className="text-yellow-400 mt-2 font-semibold uppercase tracking-wide">Máquinas Atendidas</div>
            </div>
            <div className="vintage-border bg-gray-900/50 p-6 grunge-texture">
              <div className="text-4xl font-bold text-gradient text-vintage">100%</div>
              <div className="text-yellow-400 mt-2 font-semibold uppercase tracking-wide">Satisfacción Total</div>
            </div>
            <div className="vintage-border bg-gray-900/50 p-6 grunge-texture">
              <div className="text-4xl font-bold text-gradient text-vintage">5★</div>
              <div className="text-yellow-400 mt-2 font-semibold uppercase tracking-wide">Elite Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Lightning Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-900/20 to-transparent">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-4">
            <Zap className="h-6 w-6 text-yellow-400 lightning-glow animate-pulse" />
            <Zap className="h-8 w-8 text-red-500 lightning-glow animate-pulse delay-200" />
            <Zap className="h-6 w-6 text-yellow-400 lightning-glow animate-pulse delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
