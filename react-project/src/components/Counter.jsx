import React, { useRef } from 'react';

function Counter() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log('Count:', count.current);
  };

  const counterStyle = {
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
  };

  return (
    <div style={counterStyle}>
      <p>Count: {count.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
