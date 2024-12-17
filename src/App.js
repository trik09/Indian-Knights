import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Tournaments from "./Pages/Tournaments";
import Puzzles from "./Pages/Puzzles";


const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 2 seconds loading

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
        <style>{`
          /* Loader Wrapper */
          .loader-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999; /* Ensure it's above all content */
          }

          /* Spinner */
          .spinner {
            width: 60px;
            height: 60px;
            border: 6px solid #ff8c00; /* Outer border color */
            border-top: 6px solid #fff; /* Spinner color */
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          /* Keyframes for Spinner Animation */
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/puzzles" element={<Puzzles />} />
      </Routes>
    </Router>
  );
};

export default App;
