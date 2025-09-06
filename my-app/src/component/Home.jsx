import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);
  const message = "🎉 Happy Birthday! 🎂";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 120); // speed of typing
    return () => clearInterval(interval);
  }, []);

    const handleSurprise = () => {
    setShowSurprise(true);
    // after 2.5 seconds → go to Description page
    setTimeout(() => {
      onGoToDescription();
    }, 2500);
  };

  return (
    <div className="home-background">
      <div className="corner2 top-left2"></div>
      <div className="corner2 top-right2"></div>
      {/* Confetti overlay */}
      <div className="corner"></div>

      <div className="home-container">
        {/* LEFT SIDE - text + button */}
        <div className="left-side">
          <h1 className="typing-text">{displayText}</h1>
          <p className="fade-in-text">
            Wishing you lots of happiness and surprises today💖
          </p>
          <button className="celebrate-btn" onClick={handleSurprise}>🎁 Open Your Surprise</button>
        </div>

        {/* RIGHT SIDE - image */}
        <div className="right-side">
          <img
            src="./images/image4.png"
            className="birthday-image"
            alt="Birthday Celebration"
          />
        </div>
      </div>

      {/* Surprise Modal */}
      {showSurprise && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="gift-box animate-bounce">
            🎁
          </div>
          <p className="text-white text-xl mt-4 absolute bottom-20">
            Opening your surprise...
          </p>
        </div>
      )}
      <div className="corner2 bottom-left2"></div>
      <div className="corner2 bottom-right2"></div>
    </div>
  );
};

export default Home;

