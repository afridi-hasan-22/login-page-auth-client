import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData();
  const {id} = useParams()
  return (
    <div className=''>
      <div className='bg-red-200 py-6 px-5 flex flex-col space-y-5'>
        <p>{service.name}</p>
        <p>{service.description}</p>
        <p>Price : {service.price}</p>
        <p>Duration : {service.duration}</p>
       <Link to='/services'> <button className='btn'>Back to Services</button></Link>
      </div>
      
    </div>
  );
};

export default ServiceDetails;