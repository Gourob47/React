import React, { useRef, useState } from 'react';

function ServiceRating({ title }) {
  const ratingRef = useRef();
  const [rating, setRating] = useState(0);

  const handleRatingChange = () => {
    setRating(ratingRef.current.value);
  };

  return (
    <div className="service-rating">
      <h3>{title}</h3>
      <input
        ref={ratingRef}
        type="number"
        min="0"
        max="5"
        step="0.1"
        value={rating}
        onChange={handleRatingChange}
      />
      <p>Rating: {rating}</p>
    </div>
  );
}

export default ServiceRating;
