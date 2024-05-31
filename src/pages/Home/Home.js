// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-section">
        <h1>Welcome to the Python Quiz Website!</h1>
        <p>Your Gateway to Mastering Python</p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
      <section className="section">
        <h2>What We Offer</h2>
        <p>Interactive quizzes, community support, and resources to help you master Python.</p>
      </section>
      <section className="section video-section">
        <h2>Featured Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/your-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="section">
        <h2>Top Quizzes</h2>
        <p>Check out our most popular quizzes to test and improve your Python skills.</p>
      </section>
      <section className="section community-section">
        <h2>Join the Community</h2>
        <p>Connect with other Python enthusiasts, share knowledge, and get support.</p>
        <button className="cta-button">Join Now</button>
      </section>
      <section className="section">
        <h2>Resources</h2>
        <p>Explore our resources including articles, tutorials, and downloadable content.</p>
      </section>
    </div>
  );
};
export default Home;