// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';
import './Quiz.css';

const Quiz = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    fetch('/data/topics.json')
      .then(response => response.json())
      .then(data => {
        setTopics(data.topics);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="quiz-container">
      <div className="topics">
        <h1>Menu Quiz</h1>
        {loading ? (
          <div className="loader-container">
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          </div>
        ) : (
          <ul>
            {topics.map(topic => (
              <li key={topic.topic_id}>
                <button onClick={() => handleTopicSelect(topic)}>{topic.description}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="quiz-content zoom-in">
        {!selectedTopic && !loading && <img src="assets/quiz-time.png" alt="Quiz Time" className="quiz-image" />}
        {selectedTopic && <QuizCard topic={selectedTopic} />}
      </div>
    </div>
  );
};

export default Quiz;