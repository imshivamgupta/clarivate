import { createBrowserRouter, Route } from 'react-router-dom';
import Dashboard from '@/content/pages/Dashboard';
import Listing from '@/content/pages/Listing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/list',
    element: <Listing />,
  },
]);
