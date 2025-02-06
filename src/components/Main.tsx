import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons" style={{ justifyContent: 'flex-start' }}>
            <a href="https://github.com/jungsek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jungsek1234/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Lee Jung Sek</h1>
          <p>Full Stack Developer - Software & AI</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jungsek" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jungsek1234/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;