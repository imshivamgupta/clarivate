import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './content/pages/Dashboard';
import Listing from './content/pages/Listing';

// Define type for route configuration
interface MyRoute {
  path: string;
  element: React.ComponentType<any>; // Use React.ComponentType for element
}

// Define route configuration
const routes: MyRoute[] = [
  {
    path: '/',
    element: Dashboard, // Pass component without JSX syntax
  },
  {
    path: '/list',
    element: Listing, // Pass component without JSX syntax
  },
];

// Create a function to render routes
const renderRoutes = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.element />} />
    ))}
  </Routes>
);

// Export BrowserRouter wrapped with routes
export const AppRouter = () => <BrowserRouter>{renderRoutes()}</BrowserRouter>;
