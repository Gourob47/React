import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const inputStyle = {
    padding: '5px',
    margin: '10px',
  };

  return (
    <div>
      <input ref={inputRef} type="text" style={inputStyle} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
