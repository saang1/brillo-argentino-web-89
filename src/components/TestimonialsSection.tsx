
import React from 'react';
const TestimonialsSection = () => {
  // Reviews de ejemplo para mostrar
  const featuredReviews = [{
    author_name: 'Carlos Rodríguez',
    rating: 5,
    relative_time_description: 'hace 2 semanas',
    text: 'Excelente servicio! Mi BMW quedó como nuevo después del coating cerámico. La atención es muy profesional y el resultado superó mis expectativas. Totalmente recomendable.'
  }, {
    author_name: 'María González',
    rating: 5,
    relative_time_description: 'hace 1 mes',
    text: 'Increíble el trabajo que hicieron con mi Audi. El pulido eliminó todos los rayones y el auto brilla como el primer día. Definitivamente van a ser mi taller de confianza.'
  }, {
    author_name: 'Alejandro Fernández',
    rating: 5,
    relative_time_description: 'hace 3 semanas',
    text: 'El servicio de PPF es lo mejor que le pude hacer a mi auto nuevo. La protección es invisible y me da tranquilidad para el día a día. Muy profesionales en todo momento.'
  }];
  const renderStars = (rating: number) => {
    return Array.from({
      length: 5
    }, (_, index) => <span key={index} className={`text-2xl ${index < rating ? 'text-accent-yellow' : 'text-support-gray'}`}>
        ★
      </span>);
  };
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };
  return <section id="testimonios" className="py-24 bg-support-brown/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-support-gray max-w-3xl mx-auto">Reviews de nuestros clientes en Google Maps</p>
        </div>

        {/* Reviews destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => <div key={index} className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-8 shadow-lg hover-lift backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-support-gray text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>
              
              <div className="border-t border-accent-yellow/30 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-support-brown to-primary-red text-white font-semibold rounded-full flex items-center justify-center">
                      {getInitials(review.author_name)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{review.author_name}</h4>
                      <p className="text-support-gray text-sm">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-support-brown/20 text-accent-yellow px-3 py-1 rounded-full text-xs font-semibold border border-accent-yellow/30">
                      Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <div className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Querés ser el próximo en dejar tu testimonio?
            </h3>
            <p className="text-support-gray mb-6">
              Experimentá la diferencia de un servicio premium de car detailing. 
              Tu auto se lo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5401164790993?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Agendá tu Turno
              </a>
              <a href="https://maps.app.goo.gl/E7tpbgHghBP62yz16" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ver Más Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;
