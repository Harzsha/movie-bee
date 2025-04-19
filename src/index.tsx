import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginLayout from './components/LoginLayout';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout />, // This is your layout component
  },
  {
    path: '/login',
    element: <LoginLayout />
  },
  {
    path: '/home',
    element: <Home /> // This route bypasses the layout
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
