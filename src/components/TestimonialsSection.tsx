import React from 'react';
const TestimonialsSection = () => {
  // Reviews de ejemplo para mostrar
  const featuredReviews = [{
    author_name: 'Mauro Sosa',
    rating: 5,
    text: 'Quiero agradecer a Sebastián por el trato y la amabilidad desde el primer día. Me parece que además de su trabajo excelente junto a su equipo, demuestran un compromiso para que el cliente este a gusto e informado del servicio que desea realizar a su vehículo.'
  }, {
    author_name: 'Martin Farías',
    rating: 5,
    text: 'Sebastián hace un maravilloso trabajo, se nota que realmente hace lo que le gusta y cuando eso sucede los resultados son los mejores!  Muy servicial y responsable.  Totalmente recomendable'
  }, {
    author_name: 'Gustavo Ibarra',
    rating: 5,
    text: 'Todo excelente!. Fuí con la moto recién llegada de un viaje de 4500 kms, llena de bichos, engrasada, tierra.. quedó impecable!!. Gracias Seba y equipo!!'
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-black">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-neutral-black max-w-3xl mx-auto">Reviews de nuestros clientes en Google Maps</p>
        </div>

        {/* Reviews destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredReviews.map((review, index) => (
            <div
              key={index}
              className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-8 shadow-lg hover-lift backdrop-blur-sm flex flex-col"
            >
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              <blockquote className="text-support-gray text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </blockquote>

              {/* Bloque inferior siempre al fondo */}
              <div className="border-t border-accent-yellow/30 pt-6 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-support-brown to-primary-red text-white font-semibold rounded-full flex items-center justify-center">
                      {getInitials(review.author_name)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{review.author_name}</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-support-brown/20 text-accent-yellow px-3 py-1 rounded-full text-xs font-semibold border border-accent-yellow/30">
                      Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Querés ser el próximo en dejar tu testimonio?
            </h3>
            <p className="text-support-gray mb-6">
              Experimentá la diferencia de un servicio elite de detailing.
              Tu vehículo se lo merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5491169122284?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20mi%20auto" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary-red to-support-brown text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                Agendá tu Turno
              </a>
              <a href="https://maps.app.goo.gl/2bzHin6AcZW9EWpKA" target="_blank" rel="noopener noreferrer" className="border-2 border-accent-yellow text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-yellow hover:text-neutral-black transition-all duration-300 text-center">
                Ver Más Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;
// btn-primary w-full sm:w-auto