import React, { useEffect, useRef } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
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
        backgroundPosition: `50% ${window.innerHeight / 4}px`,
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
        y: 30,
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
    <footer>
      <div className="footer-parallax-section" ref={sectionRef}>
        <div className="footer-content" ref={contentRef}>
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