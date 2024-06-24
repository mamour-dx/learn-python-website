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

  const handleOptionClick = (optionKey) => {
    setSelectedOption(optionKey);
    setShowAnswer(true);
    if (questions[currentQuestionIndex].correct_option === optionKey) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextClick = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.correct_option;

  return (
    <div className="quiz-card glass">
      <h2>Quiz on {topic.name}</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <p>{currentQuestion.question_text}</p>
      <div className="options">
        {['option1', 'option2', 'option3'].map((optionKey) => (
          <button
            key={optionKey}
            className={`option-button ${showAnswer && currentQuestion.correct_option === optionKey ? 'correct' : ''} ${showAnswer && selectedOption === optionKey && currentQuestion.correct_option !== optionKey ? 'wrong' : ''}`}
            onClick={() => handleOptionClick(optionKey)}
            disabled={showAnswer}
          >
            {currentQuestion[optionKey]}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
      {showAnswer && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
};

export default QuizCard;