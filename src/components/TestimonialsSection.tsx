
import React from 'react';
import { Zap, Star, Wrench } from 'lucide-react';

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
    }, (_, index) => <span key={index} className={`text-2xl ${index < rating ? 'text-yellow-400 lightning-glow' : 'text-gray-400'}`}>
        ★
      </span>);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <section id="testimonios" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-15"></div>
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-16 left-16 text-red-500 lightning-glow animate-pulse">
        <Zap className="h-10 w-10 transform rotate-45" />
      </div>
      <div className="absolute bottom-20 right-12 text-yellow-400 lightning-glow animate-pulse delay-600">
        <Zap className="h-8 w-8 transform -rotate-12" />
      </div>

      {/* Stars */}
      <div className="absolute top-24 right-20 text-yellow-400 animate-pulse delay-400">
        <Star className="h-6 w-6 fill-current" />
      </div>
      <div className="absolute bottom-32 left-20 text-red-500 animate-pulse delay-900">
        <Star className="h-8 w-8 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vintage">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <Wrench className="h-8 w-8 mx-4 text-yellow-400 lightning-glow" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            <span className="text-red-500">Reviews reales</span> de nuestros clientes en Google Maps
          </p>
        </div>

        {/* Reviews destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <div key={index} className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover-lift grunge-texture">
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>
              
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>
              
              <div className="border-t border-gray-600 pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-elite text-black font-bold rounded-full flex items-center justify-center lightning-glow">
                      {getInitials(review.author_name)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg text-racing">{review.author_name}</h4>
                      <p className="text-gray-400 text-sm">{review.relative_time_description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold text-racing border border-red-500/30">
                      Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto grunge-texture">
            <h3 className="text-2xl font-bold text-white mb-4 text-racing">
              ¿Querés ser el próximo en dejar tu testimonio?
            </h3>
            <p className="text-gray-200 mb-6">
              Experimentá la diferencia de un servicio <span className="text-red-500">premium de car detailing</span>. 
              Tu máquina se lo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5401164790993?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-elite"
              >
                ⚡ AGENDÁ TU TURNO ⚡
              </a>
              <a 
                href="https://maps.app.goo.gl/E7tpbgHghBP62yz16" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-3 border-red-500 text-red-500 bg-gray-900/80 backdrop-blur-sm px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-red-500 hover:text-black transition-all duration-300 vintage-border text-racing"
              >
                🏁 VER MÁS REVIEWS 🏁
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
