import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count === 0) {
      onFinish();
      return;
    }
    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, onFinish]);

  return (
    <div className="loader-container">
      <div className="loader">
        🎁
      </div>
      <h2 className="loader-text">🎉 Get Ready for Something Special!...</h2>

      {count === 0 && <h2 className="special-text"> Just wait for it... 🎂</h2>}
    </div>
  );
};

export default Loader;
