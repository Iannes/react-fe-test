import React from 'react';
import { BeerProvider } from 'Lib/contexts/GlobalBeerContext';
import App from './app';

const AppContainer = () => {
  return (
    <BeerProvider>
      <App />
    </BeerProvider>
  );
};

export default AppContainer;
