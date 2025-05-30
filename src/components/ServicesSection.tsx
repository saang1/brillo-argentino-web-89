import React from 'react';
import { Car } from 'lucide-react';
const ServicesSection = () => {
  const services = [{
    title: 'Lavado Premium Completo',
    description: 'Lavado exterior e interior profundo con productos de primera calidad y acabado impecable.',
    price: 'Desde $15.000',
    features: ['Lavado a mano', 'Aspirado completo', 'Limpieza de tapizados', 'Abrillantado de neumaticos']
  }, {
    title: 'Restauración de Pintura',
    description: 'Pulido profesional para eliminar rayones y devolver el brillo original a la pintura.',
    price: 'Desde $35.000',
    features: ['Pulido en 3 etapas', 'Corrección de pintura', 'Eliminación de rayones', 'Protección UV']
  }, {
    title: 'Coating Cerámico',
    description: 'Protección duradera de 2-5 años con tecnología de recubrimiento cerámico.',
    price: 'Desde $80.000',
    features: ['Protección por 5 años', 'Repelente al agua', 'Anti-rayones', 'Brillo permanente']
  }, {
    title: 'Paint Protection Film',
    description: 'Película transparente que protege la pintura de piedras, rayones e insectos.',
    price: 'Desde $120.000',
    features: ['Protección invisible', 'Auto-reparación', 'Garantía 10 años', 'Mantiene valor del auto']
  }, {
    title: 'Detailing Interior',
    description: 'Limpieza profunda y acondicionamiento de cueros, plásticos y tapizados.',
    price: 'Desde $20.000',
    features: ['Limpieza de cueros', 'Hidratación', 'Anti-bacteriano', 'Perfumado profesional']
  }, {
    title: 'Paquete Completo VIP',
    description: 'El servicio más completo con todo incluido para dejar tu auto como nuevo.',
    price: 'Desde $150.000',
    features: ['Todo incluido', 'Servicio premium', 'Garantía extendida', 'Mantenimiento gratuito']
  }];
  return <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de car detailing profesional, 
            desde lavado básico hasta protecciones avanzadas con tecnología de última generación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover-lift group">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-red-600 font-semibold">{service.price}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>)}
              </ul>
              
              <a href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing" target="_blank" rel="noopener noreferrer" className="block w-full bg-gradient-primary text-white text-center rounded-full font-semibold hover:shadow-lg transition-all duration-300 py-[12px] my-0">
                Consultar Precio
              </a>
            </div>)}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿No encontrás lo que buscás? Consultanos por servicios personalizados.
          </p>
          <a href="https://wa.me/5491123456789?text=Hola%2C%20necesito%20un%20servicio%20personalizado" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-transparent border-2 border-red-500 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
            Consultar Servicio Personalizado
          </a>
        </div>
      </div>
    </section>;
};
export default ServicesSection;