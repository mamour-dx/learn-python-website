// src/components/QuizCard.jsx
import React, { useState, useEffect } from 'react';
import './QuizCard.css';

const QuizCard = ({ topic }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch('/data/quizzes.json')
      .then(response => response.json())
      .then(data => {
        const topicQuestions = data.quizzes.find(quiz => quiz.topic === topic.description).questions;
        setQuestions(topicQuestions);
      })
      .catch(error => console.error('Error fetching quizzes:', error));
  }, [topic]);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
  }, [questions]);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    if (questions[currentQuestionIndex].correct_answer === optionIndex) {
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

  return (
    <div className="quiz-card glass">
      <h2>Quiz on {topic.description}</h2>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <p>{currentQuestion.question}</p>
      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${showAnswer && currentQuestion.correct_answer === index ? 'correct' : ''} ${showAnswer && selectedOption === index && currentQuestion.correct_answer !== index ? 'wrong' : ''}`}
            onClick={() => handleOptionClick(index)}
            disabled={showAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
      {showAnswer && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
};

export default QuizCard;
