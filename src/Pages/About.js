import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/style.css";
import "../css/about.css";
import Join from "../components/Join";


const About = () => {
  return (
    <div className="about-page">
      {/* Header Component */}
      <Header />

      {/* About Section */}
      <section className="about">
        <div className="about-layout">
          {/* Left Side: Image */}
          <div className="about-image">
            <img src="/img/about.jpg" alt="About Indian Knights" className="about-img" />
          </div>

          {/* Right Side: Content */}
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Indian Knights is a dedicated chess community that aims to bring
              together chess enthusiasts from all walks of life. Our mission is to
              foster learning, growth, and sportsmanship through the art of chess.
              Join us in exploring the universe of chess strategies and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="about">
  <div className="about-layout">
    {/* Left Side: Image */}
   

    {/* Right Side: Content */}
    <div className="about-content our-aim">
      <h2>Our Aim</h2>
      <p>
        At Indian Knights, our aim is to promote the game of chess and provide a
        platform where players can grow and improve. We strive to:
      </p>
      <ul>
        <li>Share tournament information and keep players updated.</li>
        <li>Spread awareness about chess and foster its growth in India.</li>
        <li>Offer opportunities to solve puzzles and enhance analytical skills.</li>
        <li>Organize practice tournaments for competitive preparation.</li>
        <li>Build a community where players can connect and play with each other.</li>
      </ul>
    </div>
    <div className="about-image">
      <img src="/img/theaim.png" alt="Our Aim" className="about-img" />
    </div>
  </div>
</section>


      {/* Join Us Section */}
    <Join/>


      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
