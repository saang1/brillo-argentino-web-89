
import React, { useState } from 'react';
import { Zap, Star, Wrench } from 'lucide-react';

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
      before: '/lovable-uploads/a3110208-cdf4-47e1-8636-91506b11e4fc.png',
      after: '/lovable-uploads/d9c595b3-fe94-427a-b456-19d29233d409.png',
      title: 'Restauración Sistema de Frenos',
      service: 'Limpieza + Pintura + Protección'
    },
    {
      before: '/lovable-uploads/e115b780-9bf3-42dc-a809-be9861d90858.png',
      after: '/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png',
      title: 'Restauración de Llantas Volkswagen',
      service: 'Limpieza + Pulido + Protección'
    }
  ];

  return (
    <section id="galeria" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 star-pattern opacity-20"></div>
      <div className="absolute inset-0 grunge-texture"></div>
      
      {/* Lightning Effects */}
      <div className="absolute top-20 right-12 text-yellow-400 lightning-glow animate-pulse">
        <Zap className="h-12 w-12 transform rotate-12" />
      </div>
      <div className="absolute bottom-16 left-20 text-red-500 lightning-glow animate-pulse delay-500">
        <Zap className="h-8 w-8 transform -rotate-45" />
      </div>

      {/* Stars */}
      <div className="absolute top-32 left-16 text-red-500 animate-pulse delay-200">
        <Star className="h-8 w-8 fill-current" />
      </div>
      <div className="absolute bottom-24 right-24 text-yellow-400 animate-pulse delay-800">
        <Star className="h-6 w-6 fill-current" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vintage">
            Galería <span className="text-gradient">Antes y Después</span>
          </h2>
          
          <div className="flex items-center justify-center my-8">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <Wrench className="h-8 w-8 mx-4 text-yellow-400 lightning-glow" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Mirá la <span className="text-red-500">transformación épica</span> que logramos en cada máquina. 
            Estos resultados hablan por sí solos de la <span className="text-yellow-400">calidad artesanal</span> de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="vintage-border bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover-lift shadow-lg grunge-texture">
                <div className="relative">
                  <div className="grid grid-cols-2 h-64">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.before} 
                        alt={`${item.title} - Antes`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold text-racing lightning-glow">
                        ANTES
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.after} 
                        alt={`${item.title} - Después`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold text-racing lightning-glow">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 text-racing">{item.title}</h3>
                  <p className="text-red-500 font-bold text-vintage">{item.service}</p>
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
              <div className="vintage-border bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden grunge-texture">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].before} 
                      alt="Antes"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-racing lightning-glow">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={galleryItems[selectedImage].after} 
                      alt="Después"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-racing lightning-glow">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 text-racing">
                    {galleryItems[selectedImage].title}
                  </h3>
                  <p className="text-red-500 font-bold text-vintage">
                    {galleryItems[selectedImage].service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="btn-elite">
            ⚡ VER MÁS TRABAJOS ⚡
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
