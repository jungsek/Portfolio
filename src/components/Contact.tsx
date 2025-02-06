import React, { useEffect, useRef } from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    // Check if we're on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (!isIOS) {
      // Parallax effect for the background
      gsap.to(section, {
        backgroundPosition: `50% ${window.innerHeight / 3}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Subtle parallax for content
      gsap.to(content, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="contact">
      <div className="contact-parallax-section" ref={sectionRef}>
        <div className="contact_wrapper" ref={contentRef}>
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