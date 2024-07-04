import React from 'react';
import './Home.css';
import HomeImg from '../../assets/home.png';

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-section glass">
        <h1>Welcome to the <span className='python-text'>Python</span> Quiz Website!</h1>
        <img src={HomeImg} alt="Python Quiz" />
        <p>Testes tes connaissances avec des quizs interactifs</p>
        <div className="cta-buttons">
          <button className="cta-button"><a href="https://python.mxr.codes/quiz">Get Started</a></button>
          <button className="cta-button"><a href="https://python.mxr.codes/community">Learn More</a></button>
        </div>
      </section>
    
      <section className="section video-section">
        <h2>Featured Video</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/O4NCjpvBBNw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="section">
        <h2>Top Quizzes</h2>
        <p>Check out our most popular quizzes to test and improve your Python skills.</p>
        <button className="cta-button"><a href="https://python.mxr.codes/quiz">Start Quiz</a></button>
      </section>
      <section className="section community-section">
        <h2>Join the Community</h2>
        <p>Connect with other Python enthusiasts, share knowledge, and get support.</p>
        <button className="cta-button"><a href='https://discord.com/invite/ZSGzxgDrkP' target='_blank'>Join Now</a></button>
      </section>
      <section className="section">
        <h2>Resources</h2>
        <p>Explore our resources including articles, tutorials, and free downloadable content.</p>
        <button className="cta-button"><a href="https://store.mxr.codes" target='_blank'>Cheat Sheets</a></button>
      </section>
    </div>
  );
};

export default Home;