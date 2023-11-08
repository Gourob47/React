import React, { useRef, useState } from 'react';

function TextChange() {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');

  const handleChange = () => {
    setDisplayText(textRef.current.value);
  };

  const textChangeStyle = {
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={textChangeStyle}>
      <input ref={textRef} type="text" placeholder="Type something..." onChange={handleChange} />
      <p>Text: {displayText}</p>
    </div>
  );
}

export default TextChange;
