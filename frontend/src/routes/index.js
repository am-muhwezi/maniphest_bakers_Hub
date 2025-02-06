import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Auth from '../pages/Auth';
import AddProduct from '../pages/AddProduct';
import PrivateRoutes from '../PrivateRoutes';


const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/authentication',
          element: <Auth />,
        },
        {
          path: '/addproduct',
          element: (
            <PrivateRoutes>
              <AddProduct />
            </PrivateRoutes>
          ),
        },
    ],
  },
]);

export default router;