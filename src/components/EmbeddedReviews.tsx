
import React from 'react';

const EmbeddedReviews = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Reviews en Google Maps
          </h3>
          <p className="text-gray-600 text-sm">
            Ve lo que dicen nuestros clientes en Google Maps
          </p>
        </div>
        <div className="relative w-full" style={{ height: '400px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.990866804896!2d-58.38415568477176!3d-34.60371808045684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf4af4f273%3A0x8b7e43cf5fb1e95c!2sBuenos%20Aires%2C%20CABA%2C%20Argentina!5e0!3m2!1ses!2sar!4v1735575000000!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Reviews"
          />
        </div>
        <div className="p-6 bg-gray-50 text-center">
          <p className="text-gray-600 text-sm mb-4">
            ¿No podés ver el mapa? Visitá directamente nuestro perfil en Google Maps
          </p>
          <a 
            href="https://maps.app.goo.gl/E7tpbgHghBP62yz16"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmbeddedReviews;
