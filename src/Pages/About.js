import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/style.css";
import "../css/about.css";
import Join from "../components/Join";

const About = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Check local storage for dark mode preference
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true'; // Default to false if not set
  });

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode); // Save preference to local storage
    document.body.classList.toggle("dark-mode", newMode); // Apply global class
  };

  useEffect(() => {
    // Apply the dark mode class on initial render if stored mode is true
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, [isDarkMode]);
  // Toggle dark mode and save preference


  return (
    <div className={`about-page ${isDarkMode ? "dark" : ""}`}>
      {/* Header Component */}
      <div className="app">
        <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        {/* Add the rest of your content here */}
      </div>

      {/* About Section */}
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
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="about">
        <div className="about-layout">
          <div className="about-content our-aim">
            <h2>Our Aim</h2>
            <p>
              At Indian Knights, our aim is to promote the game of chess and
              provide a platform where players can grow and improve. We strive
              to:
            </p>
            <ul>
              <li>Share tournament information and keep players updated.</li>
              <li>Spread awareness about chess and foster its growth in India.</li>
              <li>Offer opportunities to solve puzzles and enhance analytical skills.</li>
              <li>Organize practice tournaments for competitive preparation.</li>
              <li>
                Build a community where players can connect and play with each other.
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img src="/img/theaim.png" alt="Our Aim" className="about-img" />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <Join />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
