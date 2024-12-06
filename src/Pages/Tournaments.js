import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/tmt.css";

function Tournaments() {
  return (



    <div className='tmt-page'>
      <Header />
      

      
      <section className="tournaments">
        <h2>Upcoming Tournaments</h2>
        <div className="tournament-images">
          <div className="image-box">
            <img src="/img/tournaments/ut1.png" alt="Tournament 1" />
            <a href='https://wa.link/gx6v7x' className="btn" > Participate </a>
           
           
          </div>
          <div className="image-box">
            <img src="/img/tournaments/ut2.png" alt="Tournament 2" />
            <a href='https://wa.link/gx6v7x'  className="btn"> Participate </a>

          </div>
        
        </div>
      </section>
      <section className="tournaments">
        <h2>Previous Tournaments</h2>
        <div className="tournament-images">
          <div className="image-box">
            <img src="/img/tournaments/tmt1.jpg" alt="Tournament 1" />
            <a href="https://lichess.org/swiss/EgJ8FDsz" className="btn">
              View Result
            </a>
           
          </div>
          <div className="image-box">
            <img src="/img/tournaments/tmt2.jpg" alt="Tournament 2" />
            <a href="https://lichess.org/swiss/iEs2z2X5" className="btn">
              View Result
            </a>

          </div>
        
        </div>
      </section>

        {/* Rules & Regulations */}
        <section className="tournaments rules-section">
          <h2 >♟️Rules & Regulations ♟️</h2>
          <ul className="rules-list">
            <li>

              <strong>🚫 No Cheating : </strong>  Any player caught cheating will lose prize eligibility and may be banned from future tournaments.</li>
            <li> <strong>🤝 Respect and Sportsmanship : </strong>  Show respect to all players and maintain good sportsmanship.</li>
            <li> <strong> 🙏 Trust and Integrity : </strong>  We trust everyone to play fair. Karma is watching 👀, so honor the game.</li>
            <li> <strong>✅ Honest Results : </strong> Submit results truthfully. Disputes will be settled by the organizers, and their decision is final.</li>
          </ul>
        </section>

      <Footer />
    </div>
  );
}

export default Tournaments;
