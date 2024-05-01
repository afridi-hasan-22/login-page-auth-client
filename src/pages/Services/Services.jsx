import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
  const services = useLoaderData();
  return (
    <div className=''>
      <h1 className='text-3xl text-center'>OuerSrvices</h1>
      <div className='grid grid-cols-3 gap-4 py-10'>
        {services.map((service) => (
          <div key={service.id}>
            <div className='card w-full border border-gray-500  text-black'>
              <div className='card-body'>
                <h2 className='card-title'>{service.name}</h2>
                <p>{service.description.slice(0, 100)}...</p>
                <p>Price : ${service.price}</p>
                <p>Duration : {service.duration}</p>
                <div className='card-actions justify-end'>
                  <Link to={`/services/${service.id}`}><button className='btn'>Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
