
import { useState, useEffect } from 'react';

interface UseAssetLoaderReturn {
  isLoading: boolean;
  progress: number;
  error: string | null;
}

export const useAssetLoader = (): UseAssetLoaderReturn => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const assets = [
      // Critical images
      '/lovable-uploads/hero-section.jpeg',
      '/lovable-uploads/elitegarage-logo.svg',
      '/lovable-uploads/aboutUs-moto.jpeg',
      '/lovable-uploads/huella-background.png',
      
      // Gallery images
      '/lovable-uploads/antes-auto1.JPG',
      '/lovable-uploads/despues-auto1.JPG',
      '/lovable-uploads/antes-auto2.JPG',
      '/lovable-uploads/despues-auto2.JPG',
      '/lovable-uploads/antes-moto1.JPG',
      '/lovable-uploads/despues-moto1.JPG',
      '/lovable-uploads/antes-moto2.JPG',
      '/lovable-uploads/despues-moto2.JPG',
      
      // Course images
      '/lovable-uploads/curso.jpg',
      
      // Gallery videos
      '/lovable-uploads/antesDespues-auto1.mp4',
      '/lovable-uploads/antesDespues-auto2.mp4',
      '/lovable-uploads/antesDespues-moto1.mp4',
      '/lovable-uploads/antesDespues-moto2.mp4',
      
      // Service videos
      '/lovable-uploads/limpieza.mp4',
      '/lovable-uploads/pulido.mp4',
      '/lovable-uploads/ceramico.mp4',
      '/lovable-uploads/lavado-motor.mp4',
      '/lovable-uploads/pintura-moto.mp4',
      '/lovable-uploads/limpieza-casco.mp4',
      '/lovable-uploads/escapepintura.mp4',
    ];

    const loadAsset = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (src.endsWith('.mp4')) {
          // Preload video
          const video = document.createElement('video');
          video.onloadeddata = () => resolve();
          video.onerror = () => reject(new Error(`Failed to load video: ${src}`));
          video.src = src;
          video.preload = 'metadata';
        } else {
          // Preload image/svg
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
          img.src = src;
        }
      });
    };

    const loadAllAssets = async () => {
      let loadedCount = 0;
      const totalAssets = assets.length;

      try {
        for (const asset of assets) {
          try {
            await loadAsset(asset);
            loadedCount++;
            setProgress(Math.round((loadedCount / totalAssets) * 100));
          } catch (err) {
            console.warn(`Failed to load asset: ${asset}`, err);
            loadedCount++;
            setProgress(Math.round((loadedCount / totalAssets) * 100));
          }
        }

        // Minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load some assets');
        setIsLoading(false);
      }
    };

    loadAllAssets();
  }, []);

  return { isLoading, progress, error };
};
