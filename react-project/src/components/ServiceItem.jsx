import React from 'react';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood ,  faUtensils} from '@fortawesome/free-solid-svg-icons';

function ServiceItem({ title, description, icon }) {
  return (
    <div className="service-item">
      <div className="service-icon">
        <FontAwesomeIcon icon={icon} size="2x" /> {/* Use the FontAwesome icon */}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

function ServiceList() {
  const services = [
    {
      title: 'Catering',
      description: 'We provide catering services for all types of events.',
      icon: faBowlFood, // Use the imported FontAwesome icon
    },
    {
      title: 'Home Delivery',
      description: 'Enjoy our delicious food delivered to your doorstep.',
      icon: faUtensils, // Replace with the actual image file
      
    },
  ];

  return (

    <div className='container pt-4'>
        <h4 style={{borderBottom:"1px solid black"}}>Services</h4>
    <div className="service-list">
        
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
    </div>

  );
}

export default ServiceList;
