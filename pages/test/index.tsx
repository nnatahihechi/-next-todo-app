import React, { useState, useEffect } from "react";

const index = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const setter = () => setCount((count) => count + 1);
    const timerId = setInterval(setter, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleAdd = () => {
    setCount((count) => count + 1);
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const handleReset = () => {
    setCount((count) => (count = 0));
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>{count}</div>

      <>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDecrease}>decrease</button>
        <button onClick={handleReset}>Reset</button>
      </>
    </div>
  );
};

export default index;
