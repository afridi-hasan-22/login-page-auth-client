import { createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServiceLayout from '../layouts/ServiceLayout';
import Services from '../pages/Services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Home from '../pages/Home/Home';
import PrivateRoute from './PrivateRoute';
import React from 'react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path : '/services',
    element : <ServiceLayout></ServiceLayout>,
    children : [
      {
        path : '/services',
        element : <Services></Services>,
        // loader : () => fetch(`/api/alldata`)
      },
      {
        path : ':id',
        element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader : ({params}) => fetch(`/api/alldata/${params.id}`)
      }
    ]
  }
]);

export default router;
