// src/pages/SupportMe.jsx
import React, { useState } from 'react';
import './SupportMe.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SupportMe = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
  };

  return (
    <div className='support-me'>
      <h1 className='glass'>Merci d'avoir utilisé mon application⭐️</h1>
      <div className='support-content'>
        <div className='Share zoom-in'>
          <h2 className='share'><span className='kofi-profile'>Partages</span> à un ami</h2>
          <h3>Envoie le site à un ami qui pourrait être intéressé par apprendre python ?</h3>
          <img src="assets/share.svg" alt="share-img" className='share-img' />
          <div className="share-url-container">
            <textarea
              value="https://python.mxr.codes"
              readOnly
              className="share-url-textarea"
            />
            <CopyToClipboard text="https://python.mxr.codes" onCopy={handleCopy}>
              <button className="copy-button">
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          </div>
          <img src="/assets/socials.png" className='socials' />
        </div>
        <div className='donate zoom-in'>
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
