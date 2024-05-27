import React from 'react';
import './Footer.css';
import instagramLogo from '../../assets/icons/socials/instagram.png';
import githubLogo from '../../assets/icons/socials/github.png';
import linkedinLogo from '../../assets/icons/socials/linkedin.png';
import emailIcon from '../../assets/icons/socials/email.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='copyright'>
                <p>&copy; {new Date().getFullYear()} Mamour Dieng. All rights reserved.</p>
            </div>
            <div className="social-media">
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="mailto:your.email@example.com">
                    <img src={emailIcon} alt="Email" className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
