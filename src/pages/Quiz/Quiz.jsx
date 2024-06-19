// src/pages/Quiz.jsx
import React, { useEffect, useState } from 'react';
import { fetchQuizzes } from '../../supabaseClient';
import './Quiz.css';

function Quiz() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopics = async () => {
      try {
        const quizData = await fetchQuizzes();
        console.log('Fetched quiz data:', quizData); // Log fetched data

        // Extract unique topics from the fetched quiz data
        const uniqueTopics = [
          ...new Set(quizData.map(quiz => quiz.topics.name))
        ];

        setTopics(uniqueTopics);
      } catch (err) {
        console.error('Error fetching quizzes:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getTopics();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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