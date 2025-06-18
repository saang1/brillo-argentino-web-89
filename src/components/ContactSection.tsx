import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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

Enviado desde la web de Car Detailing.`;

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
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-red-600 lg:text-5xl">
            Contacto <span className="text-gradient text-red-600">y Ubicación</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos ubicados en tu ciudad para brindarte el mejor servicio. 
            Contactanos para agendar tu turno o hacer una consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Envianos tu Consulta</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="11 1234-5678"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors"
                >
                  <option value="">Seleccionar servicio...</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Contanos más detalles sobre tu auto o el servicio que necesitás..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enviar Consulta por WhatsApp
              </button>
            </form>
          </div>

          {/* Información de Contacto y Mapa */}
          <div className="space-y-8">
            {/* Info de Contacto */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">🏢 Car Detailing</h4>
                  <p className="text-gray-300">Calle Principal 123</p>
                  <p className="text-gray-400 text-sm">Tu Ciudad, Tu Provincia</p>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">📱 WhatsApp</h4>
                  <a href="https://wa.me/541167336300" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +54 11 6733-6300
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">📧 Email</h4>
                  <a href="mailto:info@cardetailing.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    info@cardetailing.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">🕒 Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300">Sábados: 10:00 - 15:00</p>
                  <p className="text-gray-400 text-sm">Domingos cerrado</p>
                </div>

                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">📸 Instagram</h4>
                  <a href="https://instagram.com/cardetailing" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                    @cardetailing
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.2657944668447!2d-58.64765222456908!3d-34.653229859297836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7b1aa1f4f77%3A0x8b8b8b8b8b8b8b8b!2sCalle%20Principal%20123%2C%20Tu%20Ciudad!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Car Detailing"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Calle Principal 123, Tu Ciudad - Atendemos en nuestro local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
