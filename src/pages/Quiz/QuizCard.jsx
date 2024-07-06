// src/components/QuizCard.jsx
import React, { useState, useEffect } from 'react';
import './QuizCard.css';
import { randomArray } from '../../utils/random'; // Import the shuffle function

const QuizCard = ({ topic }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    setLoading(true);
    fetch('/data/quizzes.json')
      .then(response => response.json())
      .then(data => {
        const quiz = data.quizzes.find(quiz => quiz.topic.toLowerCase() === topic.description.toLowerCase());
        if (quiz) {
          setQuestions(randomArray(quiz.questions)); // Shuffle questions
        } else {
          setQuestions([]); // No questions found for the selected topic
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching quizzes:', error);
        setLoading(false);
      });
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

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="zoom-in quiz-card glass">
      <h2>Quiz sur {topic.description}</h2>
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
      <p>Score: {score}/{questions.length}</p>
      {showAnswer && <button onClick={handleNextClick}>Next</button>}
    </div>
  );
};

export default QuizCard;
