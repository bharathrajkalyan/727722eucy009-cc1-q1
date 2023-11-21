import React, { useState } from 'react';
function CounterApp() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <center>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      </center>
    </div>
  );
}
export default CounterApp;