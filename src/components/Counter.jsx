import React, { useState } from 'react';

function Counter() {

  const [count, setCount] = useState();

  const handleChange = event => setCount(Number(event.target.value))

  return (
    <div>
      <input type='number' value={count} onChange={handleChange} />
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;