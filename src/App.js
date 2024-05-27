// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Quiz from './pages/Quiz/Quiz.js';
import Community from './pages/Community/Community.js';
import SupportMe from './pages/SupportMe/SupportMe.js';
import './App.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Quiz':
        return <Quiz />;
      case 'Community':
        return <Community />;
      case 'SupportMe':
        return <SupportMe />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    <footer className="footer">
      <Footer />
    </footer>
    </div>
  );
};

export default App;

