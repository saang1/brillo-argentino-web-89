
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
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dRWTgaQzuU17R8&q=place_id:ChIJN1t_tDeuEmsRUsoyG83frY4&zoom=15&maptype=roadmap"
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
