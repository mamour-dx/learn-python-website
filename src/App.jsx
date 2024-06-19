// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import Community from './pages/Community/Community.jsx';
import SupportMe from './pages/SupportMe/SupportMe.jsx';
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/*" element={<Quiz />} />
            <Route path="/community" element={<Community />} />
            <Route path="/support-me" element={<SupportMe />} />
          </Routes>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
