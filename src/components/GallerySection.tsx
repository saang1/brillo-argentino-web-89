
import React, { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: '/lovable-uploads/c29b6a2c-b3e5-40a4-8f42-ac7731cb416e.png',
      after: '/lovable-uploads/162c40ce-2b22-4327-9dc4-32d07d352d7e.png',
      title: 'Detailing Interior Alfa Romeo',
      service: 'Limpieza Profunda + Acondicionamiento'
    },
    {
      before: '/lovable-uploads/3ae9cb9b-c524-45e3-9f2d-23dc5342cb4c.png',
      after: '/lovable-uploads/0b8e6a58-97a7-4faf-b08d-145b176ca126.png',
      title: 'Pulido de Faros Profesional',
      service: 'Restauración + Protección UV'
    },
    {
      before: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Audi A4 Restauración',
      service: 'Detailing Completo'
    },
    {
      before: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      after: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Volkswagen Golf GTI',
      service: 'Pulido + Protección'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Galería <span className="text-gradient">Antes y Después</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mirá la transformación que logramos en cada vehículo. 
            Estos resultados hablan por sí solos de la calidad de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="bg-white rounded-2xl overflow-hidden hover-lift shadow-lg border border-gray-200">
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.before} 
                        alt={`${item.title} - Antes`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ANTES
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.after} 
                        alt={`${item.title} - Después`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-red-600 font-semibold">{item.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].before} 
                      alt="Antes"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].after} 
                      alt="Después"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-red-600 font-semibold">
                    {galleryItems[selectedImage].service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/5491123456789?text=Hola%2C%20quiero%20ver%20más%20trabajos%20realizados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Ver Más Trabajos
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
