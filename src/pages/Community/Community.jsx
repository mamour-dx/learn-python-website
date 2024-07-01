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
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="community-container">
      <div className="cta-section">
        <h1>Join Our Community</h1>
        <p>Learn together, share knowledge, and grow with our amazing community.</p>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="discord-button">Join our Discord</a>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          <div className="slide">
            <img src="https://via.placeholder.com/800x400" alt="Testimonial 1" />
          </div>
          <div className="slide">
            <img src="https://via.placeholder.com/800x400" alt="Testimonial 2" />
          </div>
          <div className="slide">
            <img src="https://via.placeholder.com/800x400" alt="Testimonial 3" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Community;
