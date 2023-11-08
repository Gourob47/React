import React, { useRef, useState } from 'react';
import '../assets/css/style.css'
function ServiceElement({ title, description }) {
  const descriptionRef = useRef();
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
    descriptionRef.current.style.display = isDescriptionVisible ? 'none' : 'block';
  };

  return (
    <div className="service-item1">
      <h3>Hello Gourob</h3>
      <button onClick={toggleDescription}>Toggle Description</button>
      <p ref={descriptionRef} style={{ display: 'none' }}>
        This is Good Website
      </p>
    </div>
  );
}

export default ServiceElement;
