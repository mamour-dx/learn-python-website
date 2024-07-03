// src/pages/Community.js
import React from 'react';
import Slider from 'react-slick';
import './Community.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Community = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="community-container">
      <div className="cta-section glass">
        <h1>Rejoins nous sur Discord</h1>
        <p>Sessions de codage en direct, Q&A, et une communauté de soutien vous attendent pour <span style={{color: '#ffd700'}}>apprendre ensemble!</span></p>
        <a href="https://discord.gg/ZSGzxgDrkP" target="_blank" rel="noopener noreferrer" className="discord-button">Join our Discord</a>
      </div>
      <div className="testimonial-slider glass zoom-in">
        <Slider {...settings}>
          <div className="slide">
            <img src="src/assets/discordimg1.png" alt="Discord Conversation 1" />
          </div>
          <div className="slide">
            <img src="src/assets/discordimg2.png" alt="Discord Conversation 2" />
          </div>
          <div className="slide">
            <img src="src/assets/discordimg3.png" alt="Discord Conversation 3" />
          </div>
          <div className="slide">
            <img src="src/assets/discordimg4.png" alt="Discord Conversation 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Community;
