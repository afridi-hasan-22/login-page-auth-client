import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';

const ServiceLayout = () => {
  return (
    <div className='my-container'>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default ServiceLayout;