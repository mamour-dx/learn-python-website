// src/components/Header/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import python from '../../assets/python.png';
import homeIcon from '../../assets/icons/home.png';
import quizIcon from '../../assets/icons/quiz.png';
import communityIcon from '../../assets/icons/community.png';
import supportIcon from '../../assets/icons/supportMe.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className='logo-container'>
                <a href='https://mxr.codes' rel="noreferrer" target='_blank'><img src={logo} alt="Logo" className="logo" /></a>
            </div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={isOpen ? "nav-list active" : "nav-list"}>
                <Link to="/" onClick={() => setIsOpen(false)}><li className="nav-item">
                    <img src={homeIcon} alt="Home" className="icon" />Home
                </li></Link>
                <Link to="/quiz" onClick={() => setIsOpen(false)}><li className="nav-item">
                    <img src={quizIcon} alt="Quiz" className="icon" />Quiz
                </li></Link>
                <Link to="/community" onClick={() => setIsOpen(false)}><li className="nav-item">
                    <img src={communityIcon} alt="Community" className="icon" />Community
                </li></Link>
                <Link to="/support-me" onClick={() => setIsOpen(false)}><li className="nav-item">
                    <img src={supportIcon} alt="Support" className="icon" />Support Me
                </li></Link>
            </nav>
            <img src={python} alt="Python" className="python"/>
        </header>
    );
};

export default Header;
