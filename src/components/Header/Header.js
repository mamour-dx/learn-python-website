import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import python from '../../assets/python.png';
import homeIcon from '../../assets/icons/home.png';
import quizIcon from '../../assets/icons/quiz.png';
import communityIcon from '../../assets/icons/community.png';
import supportIcon from '../../assets/icons/supportMe.png';

const Header = ({ setCurrentPage }) => {
    const [isOpen, setIsOpen] = useState(false);  
    
    return (
        <header className="header">
            <div className='logo-container'>
            <a href='https://mxr.codes' target='_blank'><img src={logo} alt="Logo" className="logo" /></a>
            </div>

            <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>  
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <nav className={isOpen ? "nav-list active" : "nav-list"}>  
                <a href='#home'><li className="nav-item" onClick={() => setCurrentPage('Home')}>
                    <img src={homeIcon} alt="Home" className="icon" />Home
                </li></a>
                <a href='#quiz'><li className="nav-item" onClick={() => setCurrentPage('Quiz')}>
                    <img src={quizIcon} alt="Quiz" className="icon" />Quiz
                </li></a>
                <a href='#community'><li className="nav-item" onClick={() => setCurrentPage('Community')}>
                    <img src={communityIcon} alt="Community" className="icon" />Community
                </li></a>
                <a href="#support-me"><li className="nav-item" onClick={() => setCurrentPage('SupportMe')}>
                    <img src={supportIcon} alt="Support" className="icon" />Support Me
                </li></a>
            </nav>
            <img src={python} alt="Python" className="python"/>
        </header>
    );
};

export default Header;
