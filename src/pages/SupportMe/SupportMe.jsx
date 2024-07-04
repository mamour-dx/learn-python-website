import React from 'react';
import './SupportMe.css';

const SupportMe = () => {
  return (
    <div className='support-me'>
      <h1 className='glass'>Merci d'avoir utilisé mon application⭐️</h1>
      <div className='support-content'>
        <div className='Share'>
          <h2 className='share'>Partages à un ami</h2>
          <h3>Envoie le site à un ami qui pourrait être intéressé par apprendre python ?</h3>
          <img src="src/assets/share.svg" alt="share" />
        
          
        </div>
        <div className='donate'>
          <h2 className='donation-cta'>Vous pouvez aussi faire un <a href='https://ko-fi.com/mxrcodes' className='kofi-profile' target='_blank' rel="noopener noreferrer">don</a></h2>
          <iframe
            id="kofiframe"
            src="https://ko-fi.com/mxrcodes/?hidefeed=true&widget=true&embed=true&preview=true"
            title="mxrcodes"
            height="712"
            className='zoom-in'
          />
          <h2 className='donation-info'>Vos contributions sont directement investies dans la création de meilleurs contenus et l'amélioration des ressources pour la communauté. </h2>
        </div>
      </div>
      <p className='avis'>Pour toute suggestion ou idée d'amélioration, écris-moi sur <a href="mailto:contact@mxr.codes">contact@mxr.codes</a>📩</p>
    </div>
  );
};

export default SupportMe;

