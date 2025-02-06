import React, { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    // Check if we're on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (!isIOS) {
      // Parallax effect for the background
      gsap.to(section, {
        backgroundPosition: `50% ${window.innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Subtle parallax for content
      gsap.to(content, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Different parallax speed for image
      gsap.to(image, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
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
    <div className="container">
      <div className="about-section" ref={sectionRef}>
        <div className="image-wrapper" ref={imageRef}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content" ref={contentRef}>
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