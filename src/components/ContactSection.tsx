import React, { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "../hooks/useInView"; // Asegúrate de que la ruta sea correcta

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const services = [
    "Limpieza de tapizados de autos e interiores",
    "Autos inundados",
    "Pulidos y abrillantados Autos/Motos",
    "Tratamientos para el cuidado",
    "Tratamientos cerámicos y vidrios líquido",
    "Lavados a vapor de motos",
    "Reparación de tapizados de autos/motos",
    "Trabajos de pintura para motos",
    "Limpieza de cascos de motos",
  ];

  // Refs para animación
  const animatedBlocksRef = useRef<Set<string>>(new Set());

  // Formulario
  const [formRef, formInView] = useInView({ threshold: 0.15 });
  const alreadyAnimatedForm = animatedBlocksRef.current.has("form");
  if (formInView && !alreadyAnimatedForm) {
    animatedBlocksRef.current.add("form");
  }

  // Info de contacto
  const [infoRef, infoInView] = useInView({ threshold: 0.15 });
  const alreadyAnimatedInfo = animatedBlocksRef.current.has("info");
  if (infoInView && !alreadyAnimatedInfo) {
    animatedBlocksRef.current.add("info");
  }

  // Mapa
  const [mapRef, mapInView] = useInView({ threshold: 0.15 });
  const alreadyAnimatedMap = animatedBlocksRef.current.has("map");
  if (mapInView && !alreadyAnimatedMap) {
    animatedBlocksRef.current.add("map");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear mensaje para WhatsApp
    const message = `Hola! Me llamo ${formData.name}
    
Teléfono: ${formData.phone}
Email: ${formData.email}
Servicio de interés: ${formData.service}

${formData.message}

Enviado desde la web de Elite Garaje Spa`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491169122284?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Consulta enviada!",
      description: "Te redirigimos a WhatsApp para completar tu consulta.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contacto" className="py-24 bg-neutral-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white lg:text-5xl">
            Contacto <span className="text-gradient">y Ubicación</span>
          </h2>
          <p className="text-xl text-support-gray max-w-3xl mx-auto">
            Estamos ubicados en Barracas CABA para brindarte el mejor servicio.
            Contactanos para agendar tu turno o hacer una consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div
            ref={formRef}
            className={`
              bg-support-brown/20 backdrop-blur-sm rounded-2xl border border-accent-yellow/30 px-8 pt-8 pb-6
              transition-all duration-700
              ${!alreadyAnimatedForm && formInView ? "animate-fade-in-up" : ""}
              ${alreadyAnimatedForm ? "" : "opacity-0 translate-y-8"}
            `}
          >
            {" "}
            <h3 className="text-2xl font-bold text-white mb-6">
              Envianos tu Consulta
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-6">
                <div>
                  <label className="block text-support-gray text-sm font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-3 text-white placeholder-support-gray focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-support-gray text-sm font-semibold mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-3 text-white placeholder-support-gray focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="11 1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-support-gray text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-3 text-white placeholder-support-gray focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-support-gray text-sm font-semibold mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-yellow transition-colors"
                  >
                    <option value="">Seleccionar servicio...</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-neutral-black"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-support-gray text-sm font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-black/50 border border-accent-yellow/30 rounded-lg px-4 py-3 text-white placeholder-support-gray focus:outline-none focus:border-accent-yellow transition-colors"
                    placeholder="Contanos más detalles sobre tu auto/moto o el servicio que necesitás..."
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full py-3">
                Enviar Consulta por WhatsApp
              </button>
            </form>
          </div>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info de Contacto */}
            <div
              ref={infoRef}
              className={`
                bg-support-brown/20 backdrop-blur-sm rounded-2xl p-8 border border-accent-yellow/30
                transition-all duration-700
                ${!alreadyAnimatedInfo && infoInView ? "animate-fade-in-up delay-100" : ""}
                ${alreadyAnimatedInfo ? "" : "opacity-0 translate-y-8"}
              `}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-accent-yellow font-semibold mb-1">
                    Elite Garaje Spa
                  </h4>
                  <p className="text-white">Luzuriaga 395</p>
                  <p className="text-support-gray text-sm">
                    Barracas, CABA Buenos Aires
                  </p>
                </div>

                <div>
                  <h4 className="text-accent-yellow font-semibold mb-1">
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/5491169122284"
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    +54 11 6912-2284
                  </a>
                </div>

                <div>
                  <h4 className="text-accent-yellow font-semibold mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:elitegarajespa@gmail.com"
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    elitegarajespa@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-accent-yellow font-semibold mb-1">
                    Horarios
                  </h4>
                  <p className="text-white">
                    Lunes a Viernes: 9:00 a.m - 19:00 p.m
                  </p>
                  <p className="text-white">Sábados: 9:00 a.m - 18:00 p.m</p>
                  <p className="text-support-gray text-sm">Domingos cerrado</p>
                </div>

                <div>
                  <h4 className="text-accent-yellow font-semibold mb-1">
                    Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/elitegarajespa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-yellow transition-colors"
                  >
                    @elitegarajespa
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div
              ref={mapRef}
              className={`
                bg-support-brown/20 backdrop-blur-sm rounded-2xl p-8 border border-accent-yellow/30
                transition-all duration-700
                ${!alreadyAnimatedMap && mapInView ? "animate-fade-in-up delay-200" : ""}
                ${alreadyAnimatedMap ? "" : "opacity-0 translate-y-8"}
              `}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Nuestra Ubicación
              </h3>
              <div className="aspect-video bg-support-brown/30 rounded-lg overflow-hidden border border-accent-yellow/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.6269359286603!2d-58.39103392348192!3d-34.63886675935662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb6b0adbedc9%3A0x5015b28ba90c57b9!2sElite%20garaje%20spa!5e0!3m2!1ses!2sar!4v1750445723043!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Car Detailing"
                />
              </div>
              <p className="text-support-gray text-sm mt-4">
                Luzuriaga 395, Barracas CABA - Atendemos en nuestro local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
