import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';

import Home from './Page/HomePage/Home';
import AuthProvider from './Provider/AuthProvider';
import Login from './Auth/Login';
import ErrorPage from './Share/ErrorPage/ErrorPage';
import Register from './Auth/Register';
import { HelmetProvider } from 'react-helmet-async';
import AddBatch from './Page/HomePage/Dyeing/Batch/AddBatch';
import Order from './Component/Orde';
import AddOrder from './Page/Order/AddOrder';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/add-order',
        element:<AddOrder></AddOrder>,
      },
      {
        path: '/add-knitting',
        element:<Home></Home>,
      },
      {
        path: '/add-batch',
        element:<AddBatch></AddBatch>,
      },
      {
        path: '/add-dyeing',
        element:<Home></Home>,
      },
      {
        path: '/add-slitting',
        element:<Home></Home>,
      },
      {
        path: '/add-dryer',
        element:<Home></Home>,
      },
      {
        path: '/add-stenter',
        element:<Home></Home>,
      },
      {
        path: '/add-compacting-1',
        element:<Home></Home>,
      },
      {
        path: '/add-compacting-2',
        element:<Home></Home>,
      },
      {
        path: '/add-poly',
        element:<Home></Home>,
      },
      {
        path: '/add-delivery',
        element:<Home></Home>,
      },
      {
        path: '/add-cutting',
        element:<Home></Home>,
      },
      {
        path: '/return-cutting',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/register',
        element:<Register></Register>,
      },
      // {
      //   path: '/settings',
      //   element: <PrivateRoute><Settings></Settings></PrivateRoute>,
      // },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <HelmetProvider>
          <div className='w-full mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
        </AuthProvider>
  </React.StrictMode>,
)