import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Shield,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getServiceById } from "@/data/servicesData";
import { useInView } from "../hooks/useInView";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [serviceId]);

  // Para animar los bloques principales SOLO UNA VEZ
  const animatedBlocksRef = useRef<Set<string>>(new Set());
  const [processRef, processInView] = useInView({ threshold: 0.15 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.15 });
  const [faqRef, faqInView] = useInView({ threshold: 0.15 });

  // Animación para el hero (solo una vez)
  const [heroRef, heroInView] = useInView({ threshold: 0.15 });

  if (!service) {
    return (
      <div className="min-h-screen bg-support-brown/10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-black mb-4">
            Servicio no encontrado
          </h1>
          <Link to="/" className="text-primary-red hover:text-support-brown">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-neutral-black relative overflow-hidden">
        <img
          src="/lovable-uploads/huella-background.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute opacity-20 lg:opacity-30 -top-40 -left-55 w-72 lg:w-[600px] -rotate-12 z-0"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/#servicios"
              className="flex items-center text-support-gray hover:text-white transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a servicios
            </Link>
          </div>

          <div
            ref={heroRef}
            className={`
              grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
              transition-all duration-700
              ${heroInView ? 'animate-fade-in-up delay-100' : 'opacity-0 translate-y-8'}
            `}
          >
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-support-gray mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5 text-accent-yellow mr-2" />
                  <span className="text-support-gray">{service.duration}</span>
                </div>
                <div className="flex items-center bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-accent-yellow mr-2" />
                  <span className="text-support-gray">
                    Garantía {service.warranty}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5491169122284?text=Hola%2C%20quiero%20consultar%20por%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-red to-support-brown text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Consultar Precio
                </a>
                <a
                  href={`https://wa.me/5491169122284?text=Hola%2C%20quiero%20agendar%20un%20turno%20para%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-accent-yellow text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-yellow hover:text-neutral-black transition-all duration-300 text-center"
                >
                  Agendar Turno
                </a>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="aspect-square bg-neutral-black/50 border border-accent-yellow/30 rounded-2xl overflow-hidden">
                {service.video ? (
                  <div className="relative w-full h-full">
                    <video
                      src={service.video}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                    <div className="absolute top-4 left-4 bg-accent-yellow text-neutral-black px-3 py-1 rounded-full text-sm font-semibold z-10">
                      VIDEO
                    </div>
                  </div>
                ) : (
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Proceso */}
            {(() => {
              const alreadyAnimated = animatedBlocksRef.current.has("process");
              if (processInView && !alreadyAnimated) {
                animatedBlocksRef.current.add("process");
              }
              return (
                <div
                  ref={processRef}
                  className={`
                    transition-all duration-700
                    ${!alreadyAnimated && processInView ? 'animate-fade-in-up delay-100' : ''}
                    ${alreadyAnimated ? '' : 'opacity-0 translate-y-8'}
                  `}
                >
                  <h2 className="text-3xl font-bold text-neutral-black mb-8">
                    Nuestro Proceso
                  </h2>
                  <div className="space-y-6">
                    {service.process.map((step, index) => (
                      <div
                        key={index}
                        className={`
                          flex items-start bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-6 backdrop-blur-sm
                          transition-all duration-700
                          ${!alreadyAnimated && processInView ? `animate-fade-in-up delay-${index * 100}` : ""}
                          ${alreadyAnimated ? "" : "opacity-0 translate-y-8"}
                        `}
                      >
                        <div className="bg-gradient-to-r from-primary-red to-support-brown text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-support-gray text-lg">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Beneficios */}
            {(() => {
              const alreadyAnimated = animatedBlocksRef.current.has("benefits");
              if (benefitsInView && !alreadyAnimated) {
                animatedBlocksRef.current.add("benefits");
              }
              return (
                <div
                  ref={benefitsRef}
                  className={`
                    transition-all duration-700
                    ${!alreadyAnimated && benefitsInView ? 'animate-fade-in-up delay-200' : ''}
                    ${alreadyAnimated ? '' : 'opacity-0 translate-y-8'}
                  `}
                >
                  <h2 className="text-3xl font-bold text-neutral-black mb-8">
                    Beneficios
                  </h2>
                  <div className="space-y-4 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={`
                          flex items-center bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-6 backdrop-blur-sm
                          transition-all duration-700
                          ${!alreadyAnimated && benefitsInView ? `animate-fade-in-up delay-${index * 100}` : ""}
                          ${alreadyAnimated ? "" : "opacity-0 translate-y-8"}
                        `}
                      >
                        <CheckCircle className="h-6 w-6 text-accent-yellow mr-3 flex-shrink-0" />
                        <p className="text-support-gray text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4">
                      ¿Qué incluye?
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-support-gray"
                        >
                          <div className="w-2 h-2 bg-accent-yellow rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-black text-center mb-12">
            Preguntas Frecuentes
          </h2>
          {(() => {
            const alreadyAnimated = animatedBlocksRef.current.has("faq");
            if (faqInView && !alreadyAnimated) {
              animatedBlocksRef.current.add("faq");
            }
            return (
              <div
                ref={faqRef}
                className={`
                  max-w-3xl mx-auto space-y-6
                  transition-all duration-700
                  ${!alreadyAnimated && faqInView ? 'animate-fade-in-up delay-100' : ''}
                  ${alreadyAnimated ? '' : 'opacity-0 translate-y-8'}
                `}
              >
                {service.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-neutral-black/80 border border-accent-yellow/30 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <MessageCircle className="h-5 w-5 text-accent-yellow mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-support-gray leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-black relative">
        <img
          src="/lovable-uploads/huella-background.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute opacity-20 -bottom-10 -right-20 w-96 lg:w-[600px] -rotate-12 z-0"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para transformar tu vehículo?
          </h2>
          <p className="text-xl text-support-gray mb-8 max-w-2xl mx-auto">
            Contactanos ahora y obtené un presupuesto personalizado para tu{" "}
            {service.title.toLowerCase()}.
          </p>
          <a
            href={`https://wa.me/5491169122284?text=Hola%2C%20quiero%20un%20presupuesto%20para%20${encodeURIComponent(
              service.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-[250px] text-center flex items-center justify-center mx-auto"
          >
            Obtener Presupuesto
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
