
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos Rodríguez',
      location: 'Zona Norte, CABA',
      text: 'Excelente servicio! Mi BMW quedó como nuevo después del coating cerámico. La atención es muy profesional y el resultado superó mis expectativas. Totalmente recomendable.',
      rating: 5,
      service: 'Coating Cerámico'
    },
    {
      name: 'María González',
      location: 'San Isidro',
      text: 'Increíble el trabajo que hicieron con mi Audi. El pulido eliminó todos los rayones y el auto brilla como el primer día. Definitivamente van a ser mi taller de confianza.',
      rating: 5,
      service: 'Restauración de Pintura'
    },
    {
      name: 'Alejandro Fernández',
      location: 'Vicente López',
      text: 'El servicio de PPF es lo mejor que le pude hacer a mi auto nuevo. La protección es invisible y me da tranquilidad para el día a día. Muy profesionales en todo momento.',
      rating: 5,
      service: 'Paint Protection Film'
    },
    {
      name: 'Laura Martínez',
      location: 'Olivos',
      text: 'Llevé mi auto para un lavado premium y quedé sorprendida con la calidad del trabajo. Cada detalle impecable, desde el exterior hasta el interior. Vale cada peso.',
      rating: 5,
      service: 'Lavado Premium'
    },
    {
      name: 'Roberto Silva',
      location: 'Martínez',
      text: 'Después de años de uso, mi auto parecía viejo. Con el paquete VIP lo transformaron completamente. Parece 0km otra vez. Servicio de primera calidad.',
      rating: 5,
      service: 'Paquete VIP'
    },
    {
      name: 'Ana Patricia López',
      location: 'San Fernando',
      text: 'El detailing interior que le hicieron a mi auto fue espectacular. Los cueros quedaron como nuevos y el aroma es increíble. Muy contentos con el resultado.',
      rating: 5,
      service: 'Detailing Interior'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor motivación. 
            Leé las experiencias de quienes ya confiaron en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover-lift"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Querés ser el próximo en dejar tu testimonio?
            </h3>
            <p className="text-gray-300 mb-6">
              Experimentá la diferencia de un servicio premium de car detailing. 
              Tu auto se lo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Agendá tu Turno
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Ver Servicios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
