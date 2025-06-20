import React from "react";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-black pt-32 sm:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/hero-section.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-neutral-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-700">
            Somos
            <span className="block text-gradient py-2">Elite Garage Spa</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100">
            Detailing premium en Barracas, CABA. Cuidamos y restauramos el
            brillo de tu auto o moto con técnicas profesionales y productos de
            alta calidad. ¡Viví la experiencia Elite Garage Spa!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="btn-primary w-full sm:w-auto transform transition-transform duration-300 hover:scale-105"
            >
              Reservá tu Turno Ahora
            </button>

            <a
              href="https://wa.me/5491169122284?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20de%20car%20detailing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent-yellow text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-yellow hover:text-neutral-black transition-all duration-300 text-center"
            >
              Consultanos por WhatsApp
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in-up delay-200">
              <div className="text-3xl font-bold text-accent-yellow">+500</div>
              <div className="text-support-gray mt-1">Autos Atendidos</div>
            </div>
            <div className="text-center animate-fade-in-up delay-300">
              <div className="text-3xl font-bold text-accent-yellow">98%</div>
              <div className="text-support-gray mt-1">Clientes Satisfechos</div>
            </div>
            <div className="text-center animate-fade-in-up delay-400">
              <div className="text-3xl font-bold text-accent-yellow">5★</div>
              <div className="text-support-gray mt-1">
                Calificación Promedio
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-yellow/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-yellow/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
