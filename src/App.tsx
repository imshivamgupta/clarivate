import React from 'react';
import { AppContextProvider } from './Context';
import { AppRouter } from './router'; // Assuming 'router' is defined elsewhere
import '@/stylesheet/config.scss'; // Import stylesheet

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  );
};

export default App;
