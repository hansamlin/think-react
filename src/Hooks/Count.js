import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
  }

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    setCount(count - 1);
  }
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
