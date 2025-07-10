import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);

  // List of all assets to preload
  const assets = [
    // Images
    '/lovable-uploads/hero-section.jpeg',
    '/lovable-uploads/elitegarage-logo.svg',
    '/lovable-uploads/huella-background.png',
    '/lovable-uploads/aboutUs-moto.jpeg',
    '/lovable-uploads/curso.jpg',
    '/lovable-uploads/antes-auto1.JPG',
    '/lovable-uploads/despues-auto1.JPG',
    '/lovable-uploads/antes-auto2.JPG',
    '/lovable-uploads/despues-auto2.JPG',
    '/lovable-uploads/antes-moto1.JPG',
    '/lovable-uploads/despues-moto1.JPG',
    '/lovable-uploads/antes-moto2.JPG',
    '/lovable-uploads/despues-moto2.JPG',
    '/lovable-uploads/limpieza-interior.jpg',
    '/lovable-uploads/tratamiento.jpg',
    '/lovable-uploads/reparacion-tapizado.jpg',
    // Videos
    '/lovable-uploads/limpieza.mp4',
    '/lovable-uploads/pulido.mp4',
    '/lovable-uploads/ceramico.mp4',
    '/lovable-uploads/lavado-motor.mp4',
    '/lovable-uploads/pintura-moto.mp4',
    '/lovable-uploads/limpieza-casco.mp4',
    '/lovable-uploads/escapepintura.mp4',
    '/lovable-uploads/antesDespues-auto1.mp4',
    '/lovable-uploads/antesDespues-auto2.mp4',
    '/lovable-uploads/antesDespues-moto1.mp4',
    '/lovable-uploads/antesDespues-moto2.mp4',
  ];

  useEffect(() => {
    const preloadAssets = async () => {
      let completed = 0;

      const loadPromises = assets.map(
        (src) =>
          new Promise<void>((resolve, reject) => {
            const isVideo = src.endsWith('.mp4');

            if (isVideo) {
              const video = document.createElement('video');
              video.preload = 'metadata';
              video.onloadedmetadata = () => {
                completed++;
                setLoadedAssets(completed);
                setProgress((completed / assets.length) * 100);
                resolve();
              };
              video.onerror = () => {
                completed++;
                setLoadedAssets(completed);
                setProgress((completed / assets.length) * 100);
                resolve(); // Continue even if an asset fails
              };
              video.src = src;
            } else {
              const img = new Image();
              img.onload = () => {
                completed++;
                setLoadedAssets(completed);
                setProgress((completed / assets.length) * 100);
                resolve();
              };
              img.onerror = () => {
                completed++;
                setLoadedAssets(completed);
                setProgress((completed / assets.length) * 100);
                resolve(); // Continue even if an asset fails
              };
              img.src = src;
            }
          })
      );

      await Promise.all(loadPromises);
      
      // Small delay to show 100% completion
      setTimeout(() => {
        onComplete();
      }, 500);
    };

    preloadAssets();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-6">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/elitegarage-logo.svg"
            alt="Elite Garage Spa"
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* Loading Animation */}
        <div className="relative">
          <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
        </div>

        {/* Progress */}
        <div className="space-y-3 max-w-sm mx-auto">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-sm text-muted-foreground">
            Cargando recursos... {Math.round(progress)}%
          </div>
          
          <div className="text-xs text-muted-foreground">
            {loadedAssets} de {assets.length} archivos
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-lg font-medium text-foreground">
          Preparando Elite Garage Spa
        </div>
      </div>
    </div>
  );
};

export default Preloader;