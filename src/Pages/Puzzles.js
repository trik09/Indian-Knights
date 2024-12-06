import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "../css/pzl.css";

const Puzzles = () => {
  const [showCard, setShowCard] = useState(false); // State to control the card visibility
  const [showCard2, setShowCard2] = useState(false); // State to control the card visibility

  const [currentPuzzle, setCurrentPuzzle] = useState(null); // State to store the current puzzle's details

  // Puzzle data with custom lengths
  const puzzles = [
    // Puzzle of the Day
    { id: 'puzzle-day', difficulty: 'easy', image: '/img/puzzle/p1.jpg', length: 10 },

    // Easy Puzzles
    { id: 'puzzle-1', difficulty: 'easy', image: '/img/puzzle/pe1.jpg', length: 5 },
    { id: 'puzzle-2', difficulty: 'easy', image: '/img/puzzle/pe2.jpg', length: 5 },
    { id: 'puzzle-3', difficulty: 'easy', image: '/img/puzzle/pe3.jpg', length: 5 },

    // Medium Puzzles
    { id: 'puzzle-4', difficulty: 'medium', image: '/img/puzzle/pm1.jpg', length: 10 },
    { id: 'puzzle-5', difficulty: 'medium', image: '/img/puzzle/pm2.jpg', length: 10 },
    { id: 'puzzle-6', difficulty: 'medium', image: '/img/puzzle/pm3.jpg', length: 10 },

    // Hard Puzzles
    { id: 'puzzle-7', difficulty: 'hard', image: '/img/puzzle/ph1.jpg', length: 15 },
    { id: 'puzzle-8', difficulty: 'hard', image: '/img/puzzle/ph2.jpg', length: 15 },
  ];

  // Handler to show the card and pass the puzzle's length
  const handleButtonClick = (id) => {
    const selectedPuzzle = puzzles.find(puzzle => puzzle.id === id);
    setCurrentPuzzle(selectedPuzzle); // Set the puzzle details dynamically
    setShowCard(true); // Show the card
  };

    // Handler to show the card and pass the puzzle's length
    const handleAnalysisClick = (id) => {
        const selectedPuzzle = puzzles.find(puzzle => puzzle.id === id);
        setCurrentPuzzle(selectedPuzzle); // Set the puzzle details dynamically
        setShowCard2(true); // Show the card
      };
    

  // Handler to close the card
  const handleCloseCard = () => {
    setShowCard(false);
    setCurrentPuzzle(null); // Clear the puzzle details
  };

  return (
    <div className="pzl-page">
      <Header />

      {/* Puzzle of the Day */}
      <section className="puzzle-day">
        <h2>🔑 Puzzle of the Day</h2>
        <div className="puzzle-highlight">
        <div className='puzzle-box'>
        <p>White to play and win</p>
          <img src="/img/puzzle/pd1.jpg" alt="Puzzle of the Day" />
        </div>
        
          <button id="puzzle-day" onClick={() => handleButtonClick('puzzle-day')}>
            View Solution
          </button>
        </div>
      </section>

      {/* Puzzle Collection */}
      <section className="puzzle-collection">
        <h2>Puzzle Collection</h2>
        <div className="puzzle-list">
          {puzzles.map((puzzle, index) => puzzle.id !== 'puzzle-day' && (  // Exclude Puzzle of the Day
            <div className="puzzle-card" key={index}>
              <img src={puzzle.image} alt={`Puzzle ${index + 1}`} />
              <div>
              <p className={`difficulty ${puzzle.difficulty}`}>
                {puzzle.difficulty.charAt(0).toUpperCase() + puzzle.difficulty.slice(1)}
              </p>
              <button
                id={puzzle.id}
                onClick={() => handleButtonClick(puzzle.id)}
              >
                View Solution
              </button>
              </div>
              <button
                id={puzzle.id}
                onClick={() => handleAnalysisClick(puzzle.id)}
                className='analysis-btn'
              >
               Analysis
              </button>
             
              
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Card */}
      {showCard && currentPuzzle && (
        <div className={`coming-soon-card ${showCard ? 'show' : ''}`}>
          <div className="card-content">
            <h3>🚧 Solution Coming Soon 🚧</h3>
            <p>Solution for: {currentPuzzle.id}</p>
            <p><strong>Estimated Puzzle Length:</strong> {currentPuzzle.length} minutes</p> {/* Displaying the custom length */}
            <button className="close-btn" onClick={handleCloseCard}>
              Close
            </button>
          </div>
        </div>
      )}
       {showCard2 && currentPuzzle && (
        <div className={`coming-soon-card ${showCard2 ? 'show' : ''}`}>
          <div className="card-content">
            <h3>🚧 The Feature is Coming Soon 🚧</h3>
            <p>Analysis for: {currentPuzzle.id}</p>
            <p><strong>Estimated Puzzle Length:</strong> {currentPuzzle.length} minutes</p> {/* Displaying the custom length */}
            <button className="close-btn" onClick={handleCloseCard}>
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />

      {/* Inline Styles for the Card */}
      <style>{`
        .coming-soon-card {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          opacity: 0;
          transform: scale(0.5); /* Starts smaller */
          transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transitions */
        }

        .coming-soon-card.show {
          opacity: 1;
          transform: scale(1); /* Grows to full size */
        }

        .card-content {
          background: #fff;
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .card-content h3 {
          font-size: 1.8rem;
          color: #ff8c00;
          margin-bottom: 10px;
        }

        .card-content p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 20px;
        }

        .close-btn {
          background-color: #ff8c00;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .close-btn:hover {
          background-color: #e67e00;
        }
      `}</style>
    </div>
  );
};

export default Puzzles;
