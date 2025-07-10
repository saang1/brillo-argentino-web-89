
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface PreloaderProps {
  progress: number;
}

const Preloader: React.FC<PreloaderProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-neutral-black flex items-center justify-center z-50">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src="/lovable-uploads/elitegarage-logo.svg"
            alt="Elite Garage Spa"
            className="w-32 h-32 mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-3xl font-bold text-white mb-2">
            Elite <span className="text-gradient">Garage Spa</span>
          </h1>
          <p className="text-support-gray text-lg">
            Preparando tu experiencia premium...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <Progress 
            value={progress} 
            className="w-full h-2 bg-support-brown/30"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-support-gray text-sm">Cargando recursos</span>
            <span className="text-accent-yellow font-semibold">{progress}%</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-accent-yellow rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary-red rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-accent-yellow rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-support-gray text-sm">
          <div className="animate-pulse">
            Optimizando imágenes y videos...
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/huella-background.png)',
          backgroundSize: '200px 200px'
        }}
      ></div>
    </div>
  );
};

export default Preloader;
