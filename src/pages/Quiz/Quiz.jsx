// src/pages/Quizzes.js
import React from 'react';
import './Quiz.css';

function Quiz() {
  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Test Your <span className="highlight">Python</span> Skills!</h1>
      <div className="quiz-box">
        <p className="quiz-instruction">Attempt these questions to assess your understanding of Python.</p>
        <div className="question-box">
          <p className="question">What is the output of print(2 * 3 + 5)?</p>
          <ul className="options">
            <li className="option">11</li>
            <li className="option">6</li>
            <li className="option">None of the above</li>
          </ul>
        </div>
        <button className="submit-btn">Submit Answers</button>
      </div>
    </div>
  );
}

export default Quiz;
