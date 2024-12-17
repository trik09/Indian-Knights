import React, { useRef, useState, useEffect } from "react";
import "../css/style.css";
import "../css/home.css";
import "../css/dark.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Join from "../components/Join";

const Home = () => {
  // Initialize dark mode state based on localStorage
  const [isDarkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Effect to apply the dark mode class when the component loads
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Function to toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    const newMode = !isDarkMode; // Flip the current state
    setDarkMode(newMode); // Update state
    localStorage.setItem("darkMode", newMode); // Save preference to localStorage
    document.body.classList.toggle("dark-mode", newMode); // Update the body class
  };

  // Create a ref for the Join Us section
  const joinRef = useRef(null);

  // Function to handle scrolling
  const handleScrollToJoin = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the end of the page
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div className={`home ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="app">
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* Add the rest of your content here */}
      </div>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-layout">
          <div className="banner-content">
            <h1 className="title gradient-text">Indian Knights</h1>
            <p className="tagline">Chess Community</p>
            <button
              style={{ border: "none" }}
              className="btn"
              onClick={handleScrollToJoin}
            >
              Join now
            </button>
          </div>
          <div className="banner-image">
            <img
              src="/img/IK-logo.jpeg"
              alt="Indian Knights Logo"
              className="banner-logo"
            />
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-layout">
          {/* Left Side: Image */}
          <div className="about-image">
            <img
              src="/img/about.jpg"
              alt="About Indian Knights"
              className="about-img"
            />
          </div>

          {/* Right Side: Content */}
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Indian Knights is a dedicated chess community that aims to bring
              together chess enthusiasts from all walks of life. Our mission is
              to foster learning, growth, and sportsmanship through the art of
              chess. Join us in exploring the universe of chess strategies and
              challenges.
            </p>
            <a href="/about" className="btn">
              View More
            </a>
          </div>
        </div>
      </section>

      <section className="tournaments">
        <h2>Tournaments</h2>
        <div className="tournament-container">
          <div className="tournament-images">
            <div className="image-box">
              <img src="/img/tournaments/tmt1.jpg" alt="Tournament 1" />
            </div>
            <div className="image-box">
              <img src="/img/tournaments/tmt2.jpg" alt="Tournament 2" />
            </div>
          </div>
          <a href="/tournaments" className="btn">
            View More
          </a>
        </div>
      </section>

      {/* Puzzles Section */}
      <section className="puzzles">
        <h2>Puzzles</h2>
        <div className="puzzle-container">
          <div className="puzzle-images">
            <div className="image-box">
              <img src="/img/puzzle/pe1.jpg" alt="Puzzle 1" />
            </div>
            <div className="image-box">
              <img src="/img/puzzle/pm2.jpg" alt="Puzzle 2" />
            </div>
            <div className="image-box">
              <img src="/img/puzzle/ph1.jpg" alt="Puzzle 3" />
            </div>
          </div>
          <a href="/puzzles" className="btn">
            View More
          </a>
        </div>
      </section>

      <Join />

      <Footer />
    </div>
  );
};

export default Home;
