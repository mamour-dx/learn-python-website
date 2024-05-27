// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1em 0', background: '#333', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
