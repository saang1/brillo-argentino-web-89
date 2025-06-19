import React, { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"cars" | "bikes">("cars");

  const galleryCars = [
    {
      type: "image",
      before: "/lovable-uploads/c29b6a2c-b3e5-40a4-8f42-ac7731cb416e.png",
      after: "/lovable-uploads/162c40ce-2b22-4327-9dc4-32d07d352d7e.png",
      title: "Detailing Interior Alfa Romeo",
      service: "Limpieza Profunda + Acondicionamiento",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-auto1.mp4",
      title: "Pulido de Faros Profesional",
      service: "Restauración + Protección UV",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-auto2.mp4",
      title: "Restauración Sistema de Frenos",
      service: "Limpieza + Pintura + Protección",
    },
    {
      type: "image",
      before: "/lovable-uploads/e115b780-9bf3-42dc-a809-be9861d90858.png",
      after: "/lovable-uploads/443218b2-6ff0-42c7-87e4-5de93e81623c.png",
      title: "Restauración de Llantas Volkswagen",
      service: "Limpieza + Pulido + Protección",
    },
  ];

  const galleryBikes = [
    {
      type: "image",
      before: "/lovable-uploads/placeholder-moto.jpeg",
      after: "/lovable-uploads/placeholder-moto.jpeg",
      title: "Detailing Moto Yamaha",
      service: "Lavado + Protección",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-moto1.mp4",
      title: "Restauración Completa Moto",
      service: "Pulido + Restauración Acrílico",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-moto2.mp4",
      title: "Detailing Harley Davidson",
      service: "Limpieza + Cera",
    },
    {
      type: "image",
      before: "/lovable-uploads/placeholder-moto.jpeg",
      after: "/lovable-uploads/placeholder-moto.jpeg",
      title: "Restauración Moto Cross",
      service: "Desarme + Limpieza + Protección",
    },
  ];

  const activeGallery = activeTab === "cars" ? galleryCars : galleryBikes;

  return (
    <section id="galeria" className="py-24 bg-neutral-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Galería <span className="text-gradient">Antes y Después</span>
          </h2>
          <p className="text-xl text-support-gray max-w-3xl mx-auto">
            En Elite Garage Spa, especialistas en detailing de autos y motos en Buenos Aires, cada vehículo cuenta una historia de transformación única. Nuestra galería de antes y después muestra el poder de nuestros tratamientos profesionales de detailing
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-4">
          <button
            onClick={() => setActiveTab("cars")}
            className={`px-6 py-2 rounded-full font-semibold border ${
              activeTab === "cars"
                ? "bg-primary-red text-white border-primary-red"
                : "bg-transparent text-support-gray border-support-gray hover:text-white"
            } transition-colors`}
          >
            Autos
          </button>
          <button
            onClick={() => setActiveTab("bikes")}
            className={`px-6 py-2 rounded-full font-semibold border ${
              activeTab === "bikes"
                ? "bg-accent-yellow text-neutral-black border-accent-yellow"
                : "bg-transparent text-support-gray border-support-gray hover:text-white"
            } transition-colors`}
          >
            Motos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {activeGallery.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => item.type !== "video" && setSelectedImage(index)}
            >
              <div className="bg-support-brown/20 rounded-2xl overflow-hidden hover-lift shadow-lg border border-accent-yellow/30 backdrop-blur-sm relative">
                {item.type === "video" ? (
                  <div className="relative h-[364px] w-full overflow-hidden">
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                    <div className="absolute top-4 left-4 bg-accent-yellow text-neutral-black px-3 py-1 rounded-full text-sm font-semibold">
                      VIDEO
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <h3 className="text-white text-lg font-semibold px-4 text-center">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 h-64">
                      <div className="relative overflow-hidden">
                        <img
                          src={item.before}
                          alt={`${item.title} - Antes`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute top-4 left-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        <div className="absolute top-4 right-4 bg-accent-yellow text-neutral-black px-3 py-1 rounded-full text-sm font-semibold">
                          DESPUÉS
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-accent-yellow font-semibold">
                        {item.service}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="bg-support-brown/20 rounded-2xl overflow-hidden border border-accent-yellow/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={activeGallery[selectedImage].before}
                      alt="Antes"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-red text-white px-4 py-2 rounded-full font-semibold">
                      ANTES
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={activeGallery[selectedImage].after}
                      alt="Después"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent-yellow text-neutral-black px-4 py-2 rounded-full font-semibold">
                      DESPUÉS
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {activeGallery[selectedImage].title}
                  </h3>
                  <p className="text-accent-yellow font-semibold">
                    {activeGallery[selectedImage].service}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:bg-secondary-blue transition-all duration-300">
            Ver Más Trabajos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
