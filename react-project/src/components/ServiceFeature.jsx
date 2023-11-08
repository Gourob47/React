import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function ServiceFeature({  title, description }) {
  return (
    <div className="service-feature">
      <div className="icon">

      <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
      <h3>This is our Website</h3>
      <p>Please join with us</p>
    </div>
  );
}

export default ServiceFeature;
