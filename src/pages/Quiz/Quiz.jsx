// src/pages/Quizzes.js
import React from 'react';
import './Quiz.css';


function Quiz() {
  
  const topics = [
    'Variables',
    'Data Types',
    'Control Flow',
    'Loops',
    'Functions',
    'Modules',
    'Classes'
  ];

  return (

    <div className="welcome-section menu-container">
      <h2 className="menu-title">Quiz Topics</h2>
      <ul className="menu-list">
        {topics.map((topic, index) => (
          <li key={index} className="menu-item">{topic}</li>
        ))}
      </ul>
    </div>
    
  );
}


export default Quiz;