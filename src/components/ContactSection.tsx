
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
    'Lavado Premium Completo',
    'Restauración de Pintura',
    'Coating Cerámico',
    'Paint Protection Film',
    'Detailing Interior',
    'Paquete Completo VIP',
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

Enviado desde la web de Premium Car Detailing.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "¡Consulta enviada!",
      description: "Te redirigimos a WhatsApp para completar tu consulta.",
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contacto <span className="text-gradient">y Ubicación</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos ubicados en zona norte para brindarte el mejor servicio. 
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
                  <h4 className="text-blue-400 font-semibold mb-1">📍 Ubicación</h4>
                  <p className="text-gray-300">Zona Norte, CABA</p>
                  <p className="text-gray-400 text-sm">San Isidro - Vicente López - Martínez</p>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">📱 WhatsApp</h4>
                  <a 
                    href="https://wa.me/5491123456789"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +54 9 11 2345-6789
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">📧 Email</h4>
                  <a 
                    href="mailto:info@premiumcardetailing.com.ar"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    info@premiumcardetailing.com.ar
                  </a>
                </div>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-1">🕒 Horarios</h4>
                  <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-gray-300">Sábados: 8:00 - 16:00</p>
                  <p className="text-gray-400 text-sm">Domingos cerrado</p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Nuestra Ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.567889447327!2d-58.5099!3d-34.5219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb02e3e85f10b%3A0x4b3b3b3b3b3b3b3b!2sSan%20Isidro%2C%20Buenos%20Aires%20Province%2C%20Argentina!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Premium Car Detailing"
                />
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Trabajamos a domicilio en toda la zona norte de CABA y GBA Norte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
