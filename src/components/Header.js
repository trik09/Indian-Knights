import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKnight, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../css/style.css";

const Header = ({ onToggleDarkMode, isDarkMode }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src="/img/IK-logo.jpeg" alt="Indian Knights Logo" className="nav-logo" />
        <span className="logo-text">Indian Knights</span>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button className="nav-toggle" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faChessKnight} />
      </button>

      {/* Dark Mode Toggle Button */}
      <button className="dark-mode-toggle" onClick={onToggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>

      {/* Navigation Menu */}
      <nav className={`navbar ${isMobileMenuOpen ? "mobile show" : "mobile hide"}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/tournaments">Tournaments</a>
        <a href="/puzzles">Puzzles</a>
        <a href="https://wa.link/gx6v7x">
          <img
            src="/img/about/wp.jpg"
            alt="Contact"
            className="contact-img"
            height={30}
          />
        </a>
      </nav>

      {/* Inline Styles */}
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          color: white;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background-color: #ffffff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
        }
                    .dark-mode .header {
   background-color: #000000;
}

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .nav-logo {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .logo:hover .nav-logo {
          transform: scale(1.1);
          box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.4);
        }

        .logo-text {
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .logo:hover .logo-text {
          color: #ff5757;
          transform: scale(1.1);
        }

        .dark-mode-toggle {
          color: #000000;
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
          .dark-mode  .dark-mode-toggle {
          color: white;
      }

        .dark-mode-toggle:hover {
          transform: scale(1.1);
        }

        .nav-toggle {
          display: none;
          color: #ff5757;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 5px;
          background: transparent;
          font-size: 30px;
        }

        .navbar {
          display: flex;
          gap: 15px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .navbar a {
          color: #000000;
          text-decoration: none;
          font-size: 1rem;
          padding: 10px 0;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

         .dark-mode .navbar a {
          color: #ffffff;
          }

        .navbar a:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .navbar img {
          border-radius: 50%;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-toggle {
            display: block;
          }

          .navbar {
            display: flex;
            flex-direction: column;
            background-color: #ff565a;
            padding: 15px;
            position: absolute;
            top: 60px;
            right: 0px;
            width: 200px;
            border-radius: 5px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
            align-items: start;
          }

          .navbar.mobile.hide {
            transform: translateX(100%);
            opacity: 0;
            pointer-events: none;
          }

          .navbar.mobile.show {
            transform: translateX(0);
            opacity: 1;
          }

          .navbar a {
            margin: 0px 0;
          }

          .dark-mode .navbar {
            background-color: #000000;
          }
  

        }
      `}</style>
    </header>
  );
};

export default Header;
