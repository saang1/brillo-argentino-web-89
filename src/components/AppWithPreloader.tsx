
import React from 'react';
import { useAssetLoader } from '@/hooks/useAssetLoader';
import Preloader from '@/components/Preloader';
import App from '@/App';

const AppWithPreloader: React.FC = () => {
  const { isLoading, progress, error } = useAssetLoader();

  if (error) {
    console.warn('Asset loading error:', error);
    // Continue to app even with errors
  }

  if (isLoading) {
    return <Preloader progress={progress} />;
  }

  return (
    <div className="animate-fade-in">
      <App />
    </div>
  );
};

export default AppWithPreloader;
