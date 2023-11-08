import React from 'react';
import ServiceItem from './ServiceItem';


const services = [
  {
    title: 'Web Development',
    description: 'We create responsive and user-friendly websites.',
  },
  {
    title: 'Graphic Design',
    description: 'Our team designs stunning visuals for your brand.',
  },
  {
    title: 'Digital Marketing',
    description: 'We help promote your business online.',
  },
];

function ServiceDetails() {
  return (
    <div className="servicedetails">
      {services.map((service, index) => {
         return(
              <>
              <h1>{service.title}</h1>
              <p>{service.description}</p>
              </>
         )
         })}
    </div>
  );
}

export default ServiceDetails;
