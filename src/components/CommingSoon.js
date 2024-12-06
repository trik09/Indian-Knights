import React from "react";

const ComingSoon = ({ onClose }) => {
  return (
    <div className="coming-soon-card">
      <div className="card-content">
        <h3>🚧 Coming Soon 🚧</h3>
        <p>We are working hard to bring this feature to you. Stay tuned!</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
      <style>{`
        .coming-soon-card {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
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

export default ComingSoon;
