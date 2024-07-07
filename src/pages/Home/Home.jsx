import React from 'react';
import './Home.css';
import HomeImg from '/assets/home.png';

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-section glass">
        <h1>Welcome to the <span className='python-text'>Python</span> Quiz Website!</h1>
        <img src={HomeImg} alt="Python Quiz" />
        <p>Testes tes connaissances avec des quizs interactifs</p>
        <div className="cta-buttons">
          <button className="cta-button"><a href="https://python.mxr.codes/quiz">Commencer!</a></button>
          <button className="cta-button"><a href="https://python.mxr.codes/community">En savoir plus</a></button>
        </div>
      </section>
    
      <section className="section video-section">
        <h2>Vidéo YouTube</h2>
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
        <p>Découvrez des quizs pour tester et améliorer vos compétences en Python.</p>
        <button className="cta-button"><a href="https://python.mxr.codes/quiz">Start Quiz</a></button>
      </section>
      <section className="section community-section">
        <h2>Rejoignez la communauté</h2>
        <p>Connectez-vous avec d'autres "Python Enthusiast", partagez vos connaissances et obtenez du soutien.</p>
        <button className="cta-button"><a href='https://discord.com/invite/ZSGzxgDrkP' target='_blank'>Rejoignez maintenant!</a></button>
      </section>
      <section className="section">
        <h2>Resources</h2>
        <p>Explorez nos ressources comprenant des tutoriels et des contenus téléchargeables gratuitement.</p>
        <button className="cta-button"><a href="https://store.mxr.codes" target='_blank'>Voir ressources</a></button>
      </section>
    </div>
  );
};

export default Home;