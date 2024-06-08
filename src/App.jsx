// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import Community from './pages/Community/Community.jsx';
import SupportMe from './pages/SupportMe/SupportMe.jsx';
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
  console.log(currentPage);
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

