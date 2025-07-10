import React, { useState } from 'react';
import Preloader from './Preloader';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloadComplete} />}
      {!isLoading && children}
    </>
  );
};

export default AppLoader;