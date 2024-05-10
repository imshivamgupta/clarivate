import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import '@/stylesheet/config.scss';
import { AppContextProvider, useMyContext } from './Context';

function App() {
  return (
    <>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </>
  );
}

export default App;
