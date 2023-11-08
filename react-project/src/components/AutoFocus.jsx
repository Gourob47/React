import React, { useEffect, useRef } from 'react';

function AutoFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const autoFocusStyle = {
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={autoFocusStyle}>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default AutoFocus;
