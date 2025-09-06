import React, { useState, useEffect } from "react";
import Loader from "./component/Loader";
import Home from "./component/Home";
import "./App.css";
// import Description from "./component/Description";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading (e.g. 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
