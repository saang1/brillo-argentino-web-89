/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { Star, Award, Users, Clock } from "lucide-react";
import { useInView } from "../hooks/useInView"; // Ajusta la ruta si es necesario

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "8000+",
      label: "Clientes Satisfechos",
    },
    {
      icon: Award,
      number: "7",
      label: "Años de Experiencia",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Calificación Promedio",
    },
    {
      icon: Clock,
      number: "24h",
      label: "Tiempo de Respuesta",
    },
  ];

  const animatedStatsRef = useRef<Set<number>>(new Set());

  // Hooks para los bloques principales
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="nosotros"
      className="py-24 bg-neutral-black relative overflow-hidden"
    >
      {/* Decorative Backgrounds */}
      <img
        src="/lovable-uploads/huella-background.png"
        alt=""
        aria-hidden="true"
        loading="lazy" // Lazy load
        className="pointer-events-none select-none absolute opacity-20 lg:opacity-30 -top-20 -right-24 w-96 lg:w-[600px] h-48 lg:h-[1200px] -rotate-12 -scale-x-100 z-0"
      />
      <img
        src="/lovable-uploads/huella-background.png"
        alt=""
        aria-hidden="true"
        loading="lazy" // Lazy load
        className="pointer-events-none select-none absolute opacity-20 lg:opacity-30 -top-20 -left-55 w-96 lg:w-[600px] -rotate-12 z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div
            ref={leftRef}
            className={`
              transition-all duration-700
              ${
                leftInView
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {/* Logo + Brand */}
            <div className="flex flex-col items-start lg:items-start mb-6 animate-fade-in-up">
              <img
                src="/lovable-uploads/elitegarage-logo.svg"
                alt="Elite Garaje Logo"
                loading="lazy" // Lazy load
                className="w-45 h-auto mb-2"
              />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in-up delay-100">
              Quiénes <span className="text-gradient">Somos</span>
            </h2>

            <p className="text-xl text-support-gray mb-6 leading-relaxed animate-fade-in-up delay-200">
              Esta es la historia de Elite Garaje Spa: un emprendimiento que nació en un rincón de un
              estacionamiento y creció hasta convertirse en una marca con identidad propia.
              Pasión por el detalle, amor por las motos y trabajo constante transformaron un hobby
              en un proyecto rentable.
              Más que un servicio, una forma de vivir: pulir, cuidar y entender que detrás de cada
              vehículo hay una historia que merece ser contada.
            </p>

            <p className="text-lg text-support-gray mb-8 leading-relaxed animate-fade-in-up delay-300">
              En Elite Garaje Spa, nos especializamos en el cuidado y detailing de autos y motos,
              ofreciendo un servicio profesional que transforma cada vehículo en una obra maestra.
              Nuestro equipo está comprometido con la excelencia, utilizando productos certificados
              y técnicas avanzadas para garantizar resultados excepcionales.
            </p>

            <div className="space-y-4 mb-8 animate-fade-in-up delay-400">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Productos certificados</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">
                  Técnicas profesionales de detailing
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">Atención personalizada</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-accent-yellow rounded-full mr-4"></div>
                <span className="text-white">
                  Garantía en todos nuestros trabajos
                </span>
              </div>
            </div>

            <a
              href="https://www.instagram.com/elitegarajespa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center animate-fade-in-up delay-400"
            >
              Conocé más sobre nosotros
            </a>
          </div>

          {/* Right: Image + Stats */}
          <div
            ref={rightRef}
            className={`
              transition-all duration-700
              ${
                rightInView
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            <div className="relative mb-8">
              <div className="aspect-square bg-support-brown/20 rounded-2xl overflow-hidden border border-accent-yellow/30">
                <img
                  src="/lovable-uploads/aboutUs-moto.jpeg"
                  alt="Equipo de Car Detailing trabajando"
                  loading="lazy" // Lazy load
                  className="w-full h-full lg:h-[850px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-support-brown to-primary-red text-white p-6 rounded-2xl shadow-2xl border border-accent-yellow/50">
                <div className="text-3xl font-bold">+8000</div>
                <div className="text-sm opacity-90">
                  Motos y Autos Transformados
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const [statRef, statInView] = useInView({ threshold: 0.15 });
                const alreadyAnimated = animatedStatsRef.current.has(index);

                if (statInView && !alreadyAnimated) {
                  animatedStatsRef.current.add(index);
                }

                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    ref={statRef}
                    className={`
                      bg-support-brown/20 backdrop-blur-sm rounded-2xl p-6 border border-accent-yellow/30 text-center hover-lift
                      transition-all duration-700
                      ${!alreadyAnimated && statInView ? `animate-fade-in-up delay-${index * 100}` : ""}
                      ${alreadyAnimated ? "" : "opacity-0 translate-y-8"}
                    `}
                  >
                    <div className="icon-container-alt inline-flex mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-accent-yellow mb-1">
                      {stat.number}
                    </div>
                    <div className="text-support-gray text-sm">
                      {stat.label}
                    </div>
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
