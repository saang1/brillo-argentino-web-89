import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, CheckCircle, MessageCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { getServiceById } from '@/data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : null;

  // Scroll to top whenever the component mounts or serviceId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h1>
          <Link to="/" className="text-red-600 hover:text-red-700">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              to="/#servicios" 
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a servicios
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gray-800/50 rounded-lg px-4 py-2">
                  <Clock className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-300">{service.duration}</span>
                </div>
                <div className="flex items-center bg-gray-800/50 rounded-lg px-4 py-2">
                  <Shield className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-300">Garantía {service.warranty}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/541167336300?text=Hola%2C%20quiero%20consultar%20por%20${encodeURIComponent(service.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Consultar Precio
                </a>
                <a 
                  href={`https://wa.me/541167336300?text=Hola%2C%20quiero%20agendar%20una%20cita%20para%20${encodeURIComponent(service.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                >
                  Agendar Cita
                </a>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src={service.images[0]} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestro Proceso</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Beneficios</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué incluye?</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 text-red-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para transformar tu vehículo?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactanos ahora y obtené un presupuesto personalizado para tu {service.title.toLowerCase()}.
          </p>
          <a 
            href={`https://wa.me/541167336300?text=Hola%2C%20quiero%20un%20presupuesto%20para%20${encodeURIComponent(service.title)}`}
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
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
