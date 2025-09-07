import React, { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = ({ onGoToDescription }) => {
  const [displayText, setDisplayText] = useState("");
  const [showSurprise, setShowSurprise] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showBook, setShowBook] = useState(false);

  const [loadingMemories, setLoadingMemories] = useState(false); // loader state
  const [showSlider, setShowSlider] = useState(false);

  const message = "🎉 Happy Birthday! 🎂";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(message.slice(0, i + 1));
      i++;
      if (i === message.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Handle surprise button
  const handleSurprise = () => {
    setShowSurprise(true);
    setIsOpening(true);
    setTimeout(() => {
      setIsOpening(false);
      setShowBook(true);
    }, 1500);
  };

  // Handle memories button → show loader first
  const handleMemories = () => {
    setLoadingMemories(true);
    setTimeout(() => {
      setLoadingMemories(false);
      setShowSlider(true);
    }, 2000); // Loader for 2s
  };

  return (
    <div className="home-background">
      <div className="corner2 top-left2"></div>
      <div className="corner2 top-right2"></div>
      <div className="corner"></div>

      <div className="home-container">
        {/* LEFT SIDE */}
        <div className="left-side">
          <h1 className="typing-text">{displayText}</h1>
          <p className="fade-in-text">
            Wishing you lots of happiness and surprises today💖
          </p>
          <button className="celebrate-btn" onClick={handleSurprise}>
            🎁 Open Your Surprise
          </button>
          <button className="celebrate-btn" onClick={handleMemories}>
            📸 Open Memories
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
          <img
            src="./images/image.png"
            className="birthday-image"
            alt="Birthday Celebration"
          />
        </div>
      </div>

      {/* Loader popup */}
      {loadingMemories && (
        <div className="popup-overlay1">
          <div className="loader-popup">
            <div className="memory-loader"></div>
            <p>Loading Memories... 💭</p>
          </div>
        </div>
      )}

      {/* Surprise Modal */}
      {showSurprise && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button
              className="close-btn"
              onClick={() => {
                setShowSurprise(false);
                setShowBook(false);
                setIsOpening(false);
              }}
            >
              ❌
            </button>

            {!showBook ? (
              <div className={`gift-box ${isOpening ? "opening" : ""}`}>🎁</div>
            ) : (
              <div className="book open">
                <div className="cover">
                  <img src="./images/image.png" alt="Cover" />
                  <h2>Happy Birthday 💖</h2>
                </div>
                <div className="page">
                  <p>
                    <pre><h2>To My Wonderful Sister 💖</h2></pre>
                    To my dearest didi, I pray to God that your journey in life will always be filled with joy, love, and endless smiles — just like today.
                    May every moment bring you closer to your dreams, and may happiness always find its way to you.
                    You are not just my sister, but also my best friend and a blessing in my life.
                    On this special day, I wish you strength to face every challenge and the courage to chase your passions.
                    May your heart always remain as pure and kind as it is today.
                    Happy Birthday, with all my love! 💐💖
                    <pre><h4>— From your brother 💕</h4></pre>
                  </p>
                </div>
              </div>
            )}

            {!showBook && <p className="popup-text">Opening your surprise...</p>}
          </div>
        </div>
      )}

      {/* Slider Popup */}
      {showSlider && (
        <div className="popup-overlay1">
          <div className="popup-content1 slider-popup">
            <button className="close-btn1" onClick={() => setShowSlider(false)}>
              ❌
            </button>
            <h2 className="slider-title">📸 Beautiful Memories</h2>

            <div
              id="memoryCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2500"
            >
              <div className="carousel-inner">
                {[16, 2, 3, 4, 5, 7, 8, 13, 14, 15, 17].map((num, idx) => (
                  <div
                    key={num}
                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`./images/image${num}.jpg`}
                      className="d-block w-100 carousel-img"
                      alt={`Memory ${num}`}
                    />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#memoryCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#memoryCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="corner2 bottom-left2"></div>
      <div className="corner2 bottom-right2"></div>
    </div>
  );
};

export default Home;
