import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(5);
  useEffect(() => {
    document.title = count;
  });

  function handleSetCount() {
    // console.log(reset);
    setCount(count + 1);

    // setTimeout(() => {
    //   setCount(0);
    // }, 2000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleSetCount}>Click me</button>
      {/* <button onClick={handleSetCount}>Clear</button> */}
    </div>
  );
}

export default Example;
