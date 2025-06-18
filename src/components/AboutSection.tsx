
import React from 'react';
import { Star, Award, Users, Clock, Zap, Wrench } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfechos"
    },
    {
      icon: Award,
      number: "5",
      label: "Años de Experiencia"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Calificación Promedio"
    },
    {
      icon: Clock,
      number: "24h",
      label: "Tiempo de Respuesta"
    }
  ];

  return (
    <section id="nosotros" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-10"></div>
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-10 right-10 text-yellow-400 lightning-glow animate-pulse">
        <Zap className="h-8 w-8 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 left-16 text-red-500 lightning-glow animate-pulse delay-500">
        <Zap className="h-6 w-6 transform -rotate-45" />
      </div>

      {/* Stars */}
      <div className="absolute top-32 left-20 text-yellow-400 animate-pulse delay-200">
        <Star className="h-6 w-6 fill-current" />
      </div>
      <div className="absolute bottom-40 right-32 text-red-500 animate-pulse delay-700">
        <Star className="h-8 w-8 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vintage">
              Quiénes <span className="text-gradient">Somos</span>
            </h2>
            
            <div className="flex items-center justify-center my-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-red-500"></div>
              <Wrench className="h-6 w-6 mx-4 text-yellow-400 lightning-glow" />
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-red-500"></div>
            </div>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed font-semibold">
              Somos especialistas en <span className="text-red-500">car detailing premium</span> con más de 5 años de experiencia 
              transformando máquinas en zona oeste. Nuestra <span className="text-yellow-400">pasión por la perfección</span> 
              y el detalle nos distingue en el mercado.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Utilizamos productos de primera calidad como <span className="text-red-500">Sonax certificado</span> y técnicas 
              profesionales para devolver a tu auto el brillo y cuidado que se merece. 
              Cada trabajo es único y personalizado según las necesidades de tu vehículo.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-4 lightning-glow"></div>
                <span className="text-gray-300 font-semibold">Productos certificados Sonax</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 lightning-glow"></div>
                <span className="text-gray-300 font-semibold">Técnicas profesionales de detailing</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-4 lightning-glow"></div>
                <span className="text-gray-300 font-semibold">Atención personalizada</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 lightning-glow"></div>
                <span className="text-gray-300 font-semibold">Garantía en todos nuestros trabajos</span>
              </div>
            </div>

            <a 
              href="https://wa.me/541167336300?text=Hola%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-elite"
            >
              ⚡ CONOCÉ MÁS ⚡
            </a>
          </div>

          {/* Imagen y estadísticas */}
          <div>
            <div className="relative mb-8">
              <div className="aspect-square vintage-border bg-gray-800 rounded-2xl overflow-hidden grunge-texture">
                <img 
                  src="/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png" 
                  alt="Equipo de Car Detailing trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-6 vintage-border bg-red-600 text-white p-6 rounded-2xl shadow-2xl elite-glow grunge-texture">
                <div className="text-3xl font-bold text-vintage">+500</div>
                <div className="text-sm opacity-90 text-racing">Autos Transformados</div>
              </div>
            </div>

            {/* Grid de estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift grunge-texture">
                    <div className="bg-gradient-elite p-3 rounded-lg inline-flex mb-4 lightning-glow">
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <div className="text-2xl font-bold text-gradient text-vintage mb-1">{stat.number}</div>
                    <div className="text-yellow-400 text-sm text-racing uppercase tracking-wide">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
