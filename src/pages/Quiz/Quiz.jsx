// src/pages/Quiz.jsx
import React, { useEffect, useState } from 'react';
import { fetchTopics, fetchQuestionsByTopic } from '../../supabaseClient';
import QuizCard from './QuizCard';
import './Quiz.css';

function Quiz() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const topicsData = await fetchTopics();
        setTopics(topicsData);
      } catch (err) {
        console.error('Error fetching topics:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getTopics();
  }, []);

  const handleTopicClick = async (topic) => {
    setSelectedTopic(topic);
    try {
      const questionsData = await fetchQuestionsByTopic(topic.id);
      setQuestions(questionsData);
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="quiz-container">
      <div className="menu-container glass">
        <h2 className="menu-title">Quiz Topics</h2>
        <ul className="menu-list">
          {topics.map((topic) => (
            <li key={topic.id} className="menu-item">
              <button onClick={() => handleTopicClick(topic)}>{topic.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="quiz-card-container">
        {selectedTopic && questions.length > 0 ? (
          <QuizCard topic={selectedTopic} questions={questions} />
        ) : (
          <div className="quiz-card">
            <h2>Select a topic to start the quiz</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
