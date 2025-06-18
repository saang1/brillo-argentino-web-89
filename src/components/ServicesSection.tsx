
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Wrench, PaintBucket, Eye, Hammer, Palette, ArrowRight, Zap, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'tratamientos-sonax',
      title: 'Tratamientos Sonax Certificado',
      description: 'Productos profesionales Sonax para el cuidado integral de tu vehículo con certificación oficial.',
      price: 'Consultar',
      features: ['Productos certificados Sonax', 'Tratamientos profesionales', 'Garantía de calidad', 'Resultados duraderos'],
      icon: Car
    },
    {
      id: 'limpieza-interior',
      title: 'Limpieza de Interior',
      description: 'Limpieza profunda y detallada del interior de tu vehículo, tapizados, cueros y plásticos.',
      price: 'Desde $12.000',
      features: ['Aspirado completo', 'Limpieza de tapizados', 'Acondicionamiento de cueros', 'Desinfección'],
      icon: Wrench
    },
    {
      id: 'service-pintura',
      title: 'Service de Pintura/Pulidos',
      description: 'Corrección de pintura profesional para eliminar rayones y devolver el brillo original.',
      price: 'Desde $25.000',
      features: ['Pulido profesional', 'Corrección de defectos', 'Eliminación de rayones', 'Restauración del brillo'],
      icon: PaintBucket
    },
    {
      id: 'restauracion-opticas',
      title: 'Restauración de Ópticas',
      description: 'Recuperá la transparencia y claridad de las ópticas de tu auto para mayor seguridad.',
      price: 'Desde $8.000',
      features: ['Lijado progresivo', 'Pulido especializado', 'Protección UV', 'Mayor visibilidad'],
      icon: Eye
    },
    {
      id: 'sacabollos',
      title: 'Sacabollos',
      description: 'Reparación de abolladuras sin pintura, manteniendo el acabado original de fábrica.',
      price: 'Desde $5.000',
      features: ['Sin pintura', 'Técnica PDR', 'Mantiene valor original', 'Reparación invisible'],
      icon: Hammer
    },
    {
      id: 'ploteos',
      title: 'Ploteos',
      description: 'Personalización y protección de tu vehículo con ploteos de alta calidad y diseños únicos.',
      price: 'Consultar',
      features: ['Diseños personalizados', 'Materiales premium', 'Protección de pintura', 'Acabado profesional'],
      icon: Palette
    }
  ];

  return (
    <section id="servicios" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-15"></div>
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-16 left-10 text-red-500 lightning-glow animate-pulse">
        <Zap className="h-10 w-10 transform rotate-45" />
      </div>
      <div className="absolute bottom-24 right-20 text-yellow-400 lightning-glow animate-pulse delay-700">
        <Zap className="h-8 w-8 transform -rotate-12" />
      </div>

      {/* Stars */}
      <div className="absolute top-24 right-16 text-yellow-400 animate-pulse delay-300">
        <Star className="h-6 w-6 fill-current" />
      </div>
      <div className="absolute bottom-32 left-24 text-red-500 animate-pulse delay-1000">
        <Star className="h-8 w-8 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vintage">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <Wrench className="h-8 w-8 mx-4 text-yellow-400 lightning-glow" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Ofrecemos una gama completa de <span className="text-red-500">servicios premium</span> de car detailing, 
            desde limpieza integral hasta <span className="text-yellow-400">restauración especializada</span> de tu máquina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift group grunge-texture">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-elite p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300 lightning-glow">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white text-racing">{service.title}</h3>
                    <p className="text-red-500 font-semibold text-vintage">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0 lightning-glow"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="flex items-center justify-center w-full vintage-border bg-gray-700/50 text-gray-200 rounded-full font-semibold hover:bg-gray-600/50 transition-all duration-300 py-3 group text-racing uppercase tracking-wide"
                  >
                    🔧 VER MÁS 🔧
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a 
                    href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full btn-elite text-center py-3"
                  >
                    ⚡ CONSULTAR PRECIO ⚡
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="vintage-border bg-gray-800/50 p-8 max-w-2xl mx-auto grunge-texture">
            <p className="text-gray-300 mb-6 font-semibold">
              ¿No encontrás lo que buscás? <span className="text-red-500">Consultanos por servicios personalizados.</span>
            </p>
            <a 
              href="https://wa.me/5491123456789?text=Hola%2C%20necesito%20un%20servicio%20personalizado" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-3 border-red-500 text-red-500 bg-gray-900/80 backdrop-blur-sm px-8 py-4 font-bold uppercase tracking-wide hover:bg-red-500 hover:text-black transition-all duration-300 vintage-border text-racing"
            >
              🏁 SERVICIO PERSONALIZADO 🏁
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
