import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count:{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
