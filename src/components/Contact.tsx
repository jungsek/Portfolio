import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div id="contact">
      <div className="contact-parallax-section">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <div className="social_icons">
            <a href="https://github.com/jungsek" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon className="icon" /> 
              <span>jungsek</span>
            </a>
            <a href="https://www.linkedin.com/in/jungsek1234/" target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon className="icon" />
              <span>Lee Jung Sek</span>
            </a>
            <a href="mailto:jungsek1704@gmail.com" className="social-link">
              <EmailIcon className="icon" />
              <span>jungsek1704@gmail.com</span>
            </a>
          </div>
          <div className="mobile_social_icons">
            <a href="https://github.com/jungsek" target="_blank" rel="noreferrer" className="social-link">
              <GitHubIcon className="icon" /> 
              <span>jungsek</span>
            </a>
            <a href="https://www.linkedin.com/in/jungsek1234/" target="_blank" rel="noreferrer" className="social-link">
              <LinkedInIcon className="icon" />
              <span>Lee Jung Sek</span>
            </a>
            <a href="mailto:jungsek1704@gmail.com" className="social-link">
              <EmailIcon className="icon" />
              <span>jungsek1704@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;