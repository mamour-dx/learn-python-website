// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './pages/Home/Home.js';
import Quiz from './pages/Quiz/Quiz.js';
import Community from './pages/Community/Community.js';
import SupportMe from './pages/SupportMe/SupportMe.js';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    console.log('Current Page:', currentPage);
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
    <div>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;

