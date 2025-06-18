
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Zap, Star, Wrench } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Tratamientos Sonax certificado',
    'Limpieza de interior', 
    'Service de pintura/Pulidos',
    'Restauración de ópticas',
    'Sacabollos',
    'Ploteos',
    'Consulta Personalizada'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const message = `Hola! Me llamo ${formData.name}
    
📱 Teléfono: ${formData.phone}
📧 Email: ${formData.email}
🚗 Servicio de interés: ${formData.service}

Mensaje: ${formData.message}

Enviado desde la web de Elite Garage Detailing.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/541167336300?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "¡Consulta enviada!",
      description: "Te redirigimos a WhatsApp para completar tu consulta."
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-20"></div>
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-20 left-10 text-yellow-400 lightning-glow animate-pulse">
        <Zap className="h-12 w-12 transform rotate-45" />
      </div>
      <div className="absolute bottom-32 right-16 text-red-500 lightning-glow animate-pulse delay-1000">
        <Zap className="h-16 w-16 transform -rotate-12" />
      </div>
      <div className="absolute top-1/3 right-20 text-yellow-400 lightning-glow animate-pulse delay-500">
        <Zap className="h-10 w-10 transform rotate-90" />
      </div>

      {/* Stars */}
      <div className="absolute top-16 right-32 text-yellow-400 animate-pulse">
        <Star className="h-8 w-8 fill-current" />
      </div>
      <div className="absolute bottom-20 left-32 text-red-500 animate-pulse delay-700">
        <Star className="h-6 w-6 fill-current" />
      </div>
      <div className="absolute top-2/3 left-16 text-yellow-400 animate-pulse delay-300">
        <Star className="h-10 w-10 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-red-500 lg:text-5xl text-vintage">
            Contacto <span className="text-gradient">y Ubicación</span>
          </h2>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <Wrench className="h-8 w-8 mx-4 text-yellow-400 lightning-glow" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Estamos ubicados en tu ciudad para brindarte el <span className="text-red-500">mejor servicio premium</span>. 
            Contactanos para <span className="text-yellow-400">agendar tu turno</span> o hacer una consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 grunge-texture">
            <h3 className="text-2xl font-bold text-white mb-6 text-racing">Envianos tu Consulta</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2 text-racing uppercase tracking-wide">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors vintage-border"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2 text-racing uppercase tracking-wide">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors vintage-border"
                  placeholder="11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2 text-racing uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors vintage-border"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2 text-racing uppercase tracking-wide">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-400 transition-colors vintage-border"
                >
                  <option value="">Seleccionar servicio...</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2 text-racing uppercase tracking-wide">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border-2 border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors vintage-border"
                  placeholder="Contanos más detalles sobre tu auto o el servicio que necesitás..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-elite py-4"
              >
                ⚡ ENVIAR CONSULTA POR WHATSAPP ⚡
              </button>
            </form>
          </div>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info de Contacto */}
            <div className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 grunge-texture">
              <h3 className="text-2xl font-bold text-white mb-6 text-racing">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-red-500 font-bold mb-1 text-racing">🏢 ELITE GARAGE DETAILING</h4>
                  <p className="text-gray-300 font-semibold">Calle Principal 123</p>
                  <p className="text-gray-400 text-sm">Tu Ciudad, Tu Provincia</p>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 font-bold mb-1 text-racing">📱 WHATSAPP</h4>
                  <a href="https://wa.me/541167336300" className="text-gray-300 hover:text-red-400 transition-colors font-semibold">
                    +54 11 6733-6300
                  </a>
                </div>
                
                <div>
                  <h4 className="text-red-500 font-bold mb-1 text-racing">📧 EMAIL</h4>
                  <a href="mailto:info@cardetailing.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    info@elitegaragedetailing.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-yellow-400 font-bold mb-1 text-racing">🕒 HORARIOS</h4>
                  <p className="text-gray-300 font-semibold">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300 font-semibold">Sábados: 10:00 - 15:00</p>
                  <p className="text-gray-400 text-sm">Domingos cerrado</p>
                </div>

                <div>
                  <h4 className="text-red-500 font-bold mb-1 text-racing">📸 INSTAGRAM</h4>
                  <a href="https://instagram.com/elitegaragedetailing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    @elitegaragedetailing
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 grunge-texture">
              <h3 className="text-2xl font-bold text-white mb-6 text-racing">Nuestra Ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden vintage-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2657944668447!2d-58.64765222456908!3d-34.653229859297836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7b1aa1f4f77%3A0x8b8b8b8b8b8b8b8b!2sCalle%20Principal%20123%2C%20Tu%20Ciudad!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Elite Garage Detailing"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4 font-semibold">
                Calle Principal 123, Tu Ciudad - <span className="text-red-500">Atendemos en nuestro local premium</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
