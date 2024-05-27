// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item" onClick={() => setCurrentPage('Home')}>Home</li>
          <li className="nav-item" onClick={() => setCurrentPage('Quiz')}>Quiz</li>
          <li className="nav-item" onClick={() => setCurrentPage('Community')}>Community</li>
          <li className="nav-item" onClick={() => setCurrentPage('SupportMe')}>Support Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
