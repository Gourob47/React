import React from 'react';

function Map() {
  return (
    <div className="map">
      <h2>Location</h2>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-122.084267!3d37.421999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858078b2be38db%3A0x33000b7a9f54b54d!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%"
        height="300"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
