// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';

const Quiz = () => {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);

  useEffect(() => {
    fetch('/data/topics.json')
      .then(response => response.json())
      .then(data => setTopics(data.topics))
      .catch(error => console.error('Error fetching topics:', error));
  }, []);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div>
      <h1>Quiz Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.topic_id}>
            <button onClick={() => handleTopicSelect(topic)}>{topic.description}</button>
          </li>
        ))}
      </ul>
      {selectedTopic && <QuizCard topic={selectedTopic} />}
    </div>
  );
};

export default Quiz;
