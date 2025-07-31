/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from "react";
import { useInView } from "../hooks/useInView"; // Ajusta la ruta si es necesario

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"cars" | "bikes">("bikes");
  const [loading, setLoading] = useState(true);
  // Estado para recordar qué tarjetas ya se animaron por categoría
  const animatedIndexesRef = useRef<{ [tab: string]: Set<number> }>({
    cars: new Set(),
    bikes: new Set(),
  });
  const loadedAssetsRef = useRef<{ [src: string]: boolean }>({});

  const galleryCars = [
    {
      type: "image",
      before: "/lovable-uploads/antes-auto1.JPG",
      after: "/lovable-uploads/despues-auto1.JPG",
      title: "Pullido de opticas",
      service: "Restauración + Protección UV",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-auto1.mp4",
      title: "Limpieza de Interior",
      service: "Restauración + Protección UV",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-auto2.mp4",
      title: "Limpieza Tapizado Completo",
      service: "Limpieza + Pintura + Protección",
    },
    {
      type: "image",
      before: "/lovable-uploads/antes-auto2.JPG",
      after: "/lovable-uploads/despues-auto2.JPG",
      title: "Pullido Completo de Auto",
      service: "Limpieza + Pulido + Protección",
    },
  ];

  const galleryBikes = [
    {
      type: "image",
      before: "/lovable-uploads/antes-moto1.JPG",
      after: "/lovable-uploads/despues-moto1.JPG",
      title: "Detailing",
      service: "Lavado + Protección",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-moto1.mp4",
      title: "Lavado Completo de Moto y Detailing",
      service: "Pulido + Restauración Acrílico",
    },
    {
      type: "video",
      video: "/lovable-uploads/antesDespues-moto2.mp4",
      title: "Detailing Harley Davidson",
      service: "Limpieza + Cera",
    },
    {
      type: "video", // Cambio de "image" a "video"
      video: "/lovable-uploads/antesDespues-moto3.mp4", // Nueva propiedad video
      title: "Restauración Moto",
      service: "Desarme + Limpieza + Protección",
    },
  ];

  const activeGallery = activeTab === "bikes" ? galleryBikes : galleryCars;

  // Cuando cambias de tab, no reseteas el ref, solo el render
  const handleTabChange = (tab: "bikes" | "cars") => {
    setActiveTab(tab);
    // Vacía el set de animados de la categoría seleccionada para que siempre se animen al cambiar
    animatedIndexesRef.current[tab] = new Set();
  };

  const preloadAsset = (src: string, type: "image" | "video") => {
    if (loadedAssetsRef.current[src]) return Promise.resolve();
    return new Promise((resolve) => {
      if (type === "image") {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedAssetsRef.current[src] = true;
          resolve(null);
        };
        img.onerror = resolve;
      } else {
        const video = document.createElement("video");
        video.src = src;
        video.onloadedmetadata = () => {
          loadedAssetsRef.current[src] = true;
          resolve(null);
        };
        video.onerror = resolve;
      }
    });
  };

  useEffect(() => {
    const assets = [];
    activeGallery.forEach((item) => {
      if (item.type === "image") {
        assets.push(preloadAsset(item.before, "image"));
        assets.push(preloadAsset(item.after, "image"));
      } else if (item.type === "video") {
        assets.push(preloadAsset(item.video, "video"));
      }
    });
    Promise.all(assets).then(() => setLoading(false));
  }, [activeTab]);

  return (
    <section id="galeria" className="py-24 bg-neutral-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Galería <span className="text-gradient">Antes y Después</span>
          </h2>
          <p className="text-xl text-support-gray max-w-3xl mx-auto">
            En Elite Garaje Spa, especialistas en detailing de autos y motos en
            Buenos Aires, cada vehículo cuenta una historia de transformación
            única. Nuestra galería de antes y después muestra el poder de
            nuestros tratamientos profesionales de detailing
          </p>
        </div>

        <div className="mb-10 flex justify-center gap-4">
          <button
            onClick={() => handleTabChange("bikes")}
            className={`px-6 py-2 rounded-full font-semibold border ${
              activeTab === "bikes"
                ? "bg-accent-yellow text-neutral-black border-accent-yellow"
                : "bg-transparent text-support-gray border-support-gray hover:text-white"
            } transition-colors`}
          >
            Motos
          </button>
          <button
            onClick={() => handleTabChange("cars")}
            className={`px-6 py-2 rounded-full font-semibold border ${
              activeTab === "cars"
                ? "bg-primary-red text-white border-primary-red"
                : "bg-transparent text-support-gray border-support-gray hover:text-white"
            } transition-colors`}
          >
            Autos
          </button>
        </div>

        <div
          key={activeTab} // <-- Esto fuerza el remount al cambiar de categoría
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {activeGallery.map((item, index) => {
            const [cardRef, cardInView] = useInView({ threshold: 0.15 });
            const alreadyAnimated =
              animatedIndexesRef.current[activeTab].has(index);

            // Si entra en vista y nunca se animó, lo marcamos como animado
            if (cardInView && !alreadyAnimated) {
              animatedIndexesRef.current[activeTab].add(index);
            }

            return (
              <div
                key={index}
                ref={cardRef}
                className={`
                  group cursor-pointer
                  transition-all duration-700
                  ${
                    !alreadyAnimated && cardInView
                      ? `animate-fade-in-up delay-${index * 100}`
                      : ""
                  }
                  ${alreadyAnimated ? "" : "opacity-0 translate-y-8"}
                `}
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
                            loading="lazy"
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
            );
          })}
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
          <a
            href="https://wa.me/5491169122284?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20car%20detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary block w-[200px] text-center flex items-center justify-center mx-auto"
          >
            Consultar Precio
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
