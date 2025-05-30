
import React from 'react';

const TestimonialsSection = () => {
  // Reviews de ejemplo para mostrar
  const featuredReviews = [
    {
      author_name: 'Carlos Rodríguez',
      rating: 5,
      relative_time_description: 'hace 2 semanas',
      text: 'Excelente servicio! Mi BMW quedó como nuevo después del coating cerámico. La atención es muy profesional y el resultado superó mis expectativas. Totalmente recomendable.',
    },
    {
      author_name: 'María González',
      rating: 5,
      relative_time_description: 'hace 1 mes',
      text: 'Increíble el trabajo que hicieron con mi Audi. El pulido eliminó todos los rayones y el auto brilla como el primer día. Definitivamente van a ser mi taller de confianza.',
    },
    {
      author_name: 'Alejandro Fernández',
      rating: 5,
      relative_time_description: 'hace 3 semanas',
      text: 'El servicio de PPF es lo mejor que le pude hacer a mi auto nuevo. La protección es invisible y me da tranquilidad para el día a día. Muy profesionales en todo momento.',
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
      >
        ★
      </span>
    ));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reviews reales de nuestros clientes en Google Maps
          </p>
        </div>

        {/* Reviews destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover-lift"
            >
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 text-red-600 font-semibold rounded-full flex items-center justify-center">
                      {getInitials(review.author_name)}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg">{review.author_name}</h4>
                      <p className="text-gray-600 text-sm">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-500/20 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                      Google Maps
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
            <p className="text-gray-200 mb-6">
              Experimentá la diferencia de un servicio premium de car detailing. 
              Tu auto se lo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5401164790993?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Agendá tu Turno
              </a>
              <a 
                href="https://maps.app.goo.gl/E7tpbgHghBP62yz16"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-red-500 text-red-500 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Ver Más Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
