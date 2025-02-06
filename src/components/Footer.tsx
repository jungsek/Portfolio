import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-parallax-section">
        <div className="footer-content">
          <div>
            <a href="https://github.com/jungsek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jungsek1234/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <p>A portfolio designed & built by <a href="https://github.com/jungsek" target="_blank" rel="noreferrer">Jung Sek</a> with 💜</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;