// src/pages/Contact.js
import React from 'react';
import './SupportMe.css';

const SupportMe = () => {
  return <div>
  <h1>Merci d'avoir utilisé mon site web</h1>
  <iframe
  id="kofiframe"
  src="https://ko-fi.com/mxrcodes/?hidefeed=true&widget=true&embed=true&preview=true"
  title="mxrcodes"
  height="712"
/>
<p className='avis'>Pour toute suggestion ou idée d'amélioration, écris-moi sur <a href="mailto:contact@mxr.codes">contact@mxr.codes</a></p>
</div>;
};

export default SupportMe;
