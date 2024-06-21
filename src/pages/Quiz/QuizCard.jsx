// src/pages/QuizCard/QuizCard.jsx
import React, { useState, useEffect } from 'react';
import './QuizCard.css';

const QuizCard = ({ topic, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [questions]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === questions[currentQuestionIndex].correct_option) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-card">
      <h2>Quiz on {topic.name}</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <p>{questions[currentQuestionIndex].question_text}</p>
      <div className="options">
        {['option1', 'option2', 'option3'].map((optionKey) => (
          <button
            key={optionKey}
            className={`option-button ${showAnswer ? 
              (questions[currentQuestionIndex].correct_option === optionKey ? 'correct' : 
              (selectedOption === optionKey ? 'wrong' : '')) : ''}`}
            onClick={() => handleOptionClick(optionKey)}
            disabled={showAnswer}
          >
            {questions[currentQuestionIndex][optionKey]}
          </button>
        ))}
        <p>Score: {score}</p>
      </div>
      {showAnswer && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
};

export default QuizCard;
