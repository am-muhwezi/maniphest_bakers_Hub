import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import router from './routes';

const App = () => (
  <div className="app" >
    <RouterProvider router={router} />
  </div>
);

export default App;