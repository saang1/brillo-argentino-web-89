/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, PaintBucket, Eye, Hammer, Palette, ArrowRight, Droplet, Sparkle, Shield, CloudRain, RefreshCw, Scissors, HardHat, ShieldCheck, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView'; // Asegúrate de que la ruta sea correcta
const ServicesSection = () => {
  const services = [{
    id: 'limpieza-tapizados',
    title: 'Limpieza y Restauración de Interiores',
    description: 'Tratamientos profesionales especializados para todo tipo de situaciones: desde limpieza de mantenimiento hasta restauración completa de autos inundados.',
    price: 'Consultar',
    features: ['Restauración profunda de tapizados', 'Limpieza integral del interior', 'Productos profesionales y seguros', 'Extracción total de agua y humedad','Desinfección y eliminación de olores', 'Cambio de aislantes de piso en autos inundados'],
    icon: Car
  }, {
    id: 'pulido-abrillantado',
    title: 'Pulidos y abrillantados Autos y Motos',
    description: 'Dejá tu vehículo con un acabado impecable y brillante, eliminando imperfecciones y restaurando su color original.',
    price: 'Consultar',
    features: ['Pulido en varias etapas', 'Brillo espejo y acabado premium', ' Servicio para autos y motos', 'Corrección de rayones y marcas'],
    icon: Sparkle
  }, {
    id: 'tratamientos-cuidado',
    title: 'Tratamientos para el cuidado',
    description: 'Protegé la pintura de tu vehículo con nuestros servicios de PPF (Paint Protection Film), ploteos personalizados y polarizados de alta calidad para vidrios.',
    price: 'Consultar',
    features: ['Protección de pintura y superficies', 'Tratamientos para cuero, plásticos y telas', 'Defensa contra rayos UV y clima', 'Productos profesionales y seguros'],
    icon: Eye
  }, {
    id: 'ceramicos-vidrios',
    title: 'Tratamientos cerámicos y vidrios líquido',
    description: 'Aplicación de recubrimientos cerámicos para una protección duradera y un acabado brillante en la pintura y vidrios de tu vehículo.',
    price: 'Consultar',
    features: ['Protección Cerámica Duradera', 'Efecto hidrofóbico', 'Brillo profesional', 'Resistencia extrema'],
    icon: Shield
  }, {
    id: 'lavado-motor-motos',
    title: 'Lavados a vapor de motos',
    description: 'Mantené tu moto impecable con nuestro servicio de lavado a vapor, eliminando suciedad y grasa sin dañar componentes eléctricos ni mecánicos.',
    price: 'Consultar',
    features: ['Aplicación de vapor', 'Desengrasa profundo', 'Seguro para electrónicos', 'Resultados inmediatos'],
    icon: CloudRain
  }, {
    id: 'tapizados-motos-autos',
    title: 'Reparación de tapizados de autos y motos',
    description: 'Reparación y restauración de tapizados de autos y motos, utilizando técnicas avanzadas para devolverles su aspecto original.',
    price: 'Consultar',
    features: ['Reparación de roturas y rasgaduras', 'Restauración de quemaduras y agujeros', 'Retoque y igualación de colores', 'Costura profesional y parches invisibles'],
    icon: Scissors
  }, {
    id: 'pintura-motos',
    title: 'Trabajos de pintura para motos y restauraciones',
    description: 'Devolvé el brillo y color original a tu moto con nuestros servicios de pintura profesional, incluyendo reparaciones y restauraciones completas.',
    price: 'Consultar',
    features: ['Preparación completa', 'Pintura multicapa', 'Diseños personalizados', 'Acabado profesional',],
    icon: PaintBucket
  }, {
    id: 'limpieza-cascos-motos',
    title: 'Limpieza de cascos de motos',
    description: 'Mantené tu casco de moto limpio y seguro con nuestro servicio especializado, eliminando suciedad, insectos y olores.',
    price: 'Consultar',
    features: ['Limpieza exterior completa', 'Desinfección interior profunda', 'Limpieza de visera y anti-fog', 'Tratamiento antibacteriano y desodorante'],
    icon: ShieldCheck
  }, {
    id: 'pulido-escape-motos',
    title: 'Pullido de escapes y pintura de escapes de motos',
    description: 'Devolvé el brillo y la estética a los escapes de tu moto con nuestro servicio de pulido y pintura especializada, eliminando óxido y manchas.',
    price: 'Consultar',
    features: ['Limpieza de escapes y tratamiento anti-óxido', 'Pintura resistente al calor', 'Acabado brillante y duradero', ],
    icon: RefreshCw
  },];

  // Ref para recordar qué cards ya se animaron
  const animatedCardsRef = useRef<Set<number>>(new Set());

  return <section id="servicios" className="py-24 bg-support-brown/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-neutral-black max-w-3xl mx-auto">
            Ofrecemos una gama completa de servicios de detailing profesional para autos y motos, desde limpieza integral hasta restauración especializada que devuelve el brillo y protección original a tu vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          const [cardRef, cardInView] = useInView({ threshold: 0.15 });
          const alreadyAnimated = animatedCardsRef.current.has(index);

          if (cardInView && !alreadyAnimated) {
            animatedCardsRef.current.add(index);
          }

          return (
            <div
              key={index}
              ref={cardRef}
              className={`
                bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-8 shadow-lg hover-lift group backdrop-blur-sm flex flex-col
                transition-all duration-700
                ${!alreadyAnimated && cardInView ? `animate-fade-in-up delay-${index * 100}` : ""}
                ${alreadyAnimated ? "" : "opacity-0 translate-y-8"}
              `}
            >
              <div className="flex items-center min-h-[56px] mb-6">
                <div className="mr-4 flex-shrink-0">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-accent-yellow font-semibold">{service.price}</p>
                </div>
              </div>
              
              <p className="text-support-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white">
                    <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3 mt-auto">
                <Link to={`/servicios/${service.id}`} className="flex items-center justify-center w-full bg-support-brown/20 text-white rounded-full font-semibold hover:bg-support-brown/40 transition-all duration-300 py-3 group border border-accent-yellow/20">
                  Ver más
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <a href="https://wa.me/5491169122284?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing" target="_blank" rel="noopener noreferrer" className="btn-primary block w-full text-center">
                  Consultar Precio
                </a>
              </div>
            </div>
          );
        })}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-black mb-6">
            ¿No encontrás lo que buscás? Consultanos por servicios personalizados.
          </p>
          <a href="https://wa.me/5491169122284?text=Hola%2C%20necesito%20un%20servicio%20personalizado" target="_blank" rel="noopener noreferrer" className="border-2 border-accent-yellow text-black px-6 py-3 rounded-full font-semibold hover:bg-accent-yellow hover:text-neutral-black transition-all duration-300 text-center">
            Consultar Servicio Personalizado
          </a>
        </div>
      </div>
    </section>;
};
export default ServicesSection;