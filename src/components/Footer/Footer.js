import React from 'react';
import './Footer.css';
import instagramLogo from '../../assets/icons/socials/instagram.png';
import githubLogo from '../../assets/icons/socials/github.png';
import linkedinLogo from '../../assets/icons/socials/linkedin.png';
import emailIcon from '../../assets/icons/socials/email.png';
import youtubeIcon from '../../assets/icons/socials/youtube.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='copyright'>
                <p>&copy; {new Date().getFullYear()} Mamour Dieng. All rights reserved.</p>
            </div>
            <div className="social-media">
                <a href="https://instagram.com/mxr.codes" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://github.com/mamour-dx" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/mamour-dieng-394237261/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@mxr_codes">
                    <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                </a>
                <a href="mailto:me@mxr.codes">
                    <img src={emailIcon} alt="Email" className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
