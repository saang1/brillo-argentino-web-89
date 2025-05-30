
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168438!2d-58.3815591!3d-34.6037181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf4af4f273%3A0x8b7e43cf5fb1e95!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar&maptype=roadmap&zoom=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Reviews"
          />
        </div>
      </div>
    </div>
  );
};

export default EmbeddedReviews;
