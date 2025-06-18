
import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

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
    <section id="nosotros" className="py-20 bg-neutral-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Quiénes <span className="text-gradient">Somos</span>
            </h2>
            
            <p className="text-xl text-support-gray mb-6 leading-relaxed">
              Somos especialistas en car detailing con más de 5 años de experiencia 
              transformando vehículos en zona oeste. Nuestra pasión por la perfección 
              y el detalle nos distingue en el mercado.
            </p>
            
            <p className="text-lg text-support-gray mb-8 leading-relaxed">
              Utilizamos productos de primera calidad como Sonax certificado y técnicas 
              profesionales para devolver a tu auto el brillo y cuidado que se merece. 
              Cada trabajo es único y personalizado según las necesidades de tu vehículo.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Productos certificados Sonax</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Técnicas profesionales de detailing</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Atención personalizada</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Garantía en todos nuestros trabajos</span>
              </div>
            </div>

            <a 
              href="https://wa.me/541167336300?text=Hola%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:bg-secondary-blue transition-all duration-300"
            >
              Conocé más sobre nosotros
            </a>
          </div>

          {/* Imagen y estadísticas */}
          <div>
            <div className="relative mb-8">
              <div className="aspect-square bg-support-brown/20 rounded-2xl overflow-hidden border border-accent-yellow/30">
                <img 
                  src="/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png" 
                  alt="Equipo de Car Detailing trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-primary text-white p-6 rounded-2xl shadow-2xl border border-accent-yellow/50">
                <div className="text-3xl font-bold">+500</div>
                <div className="text-sm opacity-90">Autos Transformados</div>
              </div>
            </div>

            {/* Grid de estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-support-brown/20 backdrop-blur-sm rounded-2xl p-6 border border-accent-yellow/30 text-center hover-lift">
                    <div className="bg-gradient-primary p-3 rounded-lg inline-flex mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-accent-yellow mb-1">{stat.number}</div>
                    <div className="text-support-gray text-sm">{stat.label}</div>
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
