import styles from './hero.module.css';
import React, { useState, useEffect } from 'react';

interface ContactProps {
  onContactClick: () => void;
  showContactForm: boolean;
}

const Hero: React.FC<ContactProps> = ({ onContactClick, showContactForm }) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 350;
      const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-0 sticky top-0`} style={{ opacity: scrollOpacity }}>
      <h1 className="mb-1 w-full text-left font-mono text-white/30 lg:text-right 2xl:text-lg pt-6 z-0">
        PRESENTED BY <span className="text-white underline">FRANCIS JONES</span>
      </h1>
      <div className="flex justify-between">
        <h1 className="text-10xl px-2 pt-0 mt-0">FULLSTACK</h1>
      </div>

      <div className="mt-14 flex">
        <div className="ml-6 flex flex-col lg:justify-between">
          {/* PORTFOLIO Link */}
          <div
            className={`font-mono ${
              showContactForm ? 'text-white/30' : 'text-white'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onContactClick}
          >
            PORTFOLIO {!showContactForm && <span className="ml-1">▼</span>}
          </div>
          {/* CONTACT Link */}
          <div
            className={`font-mono ${
              showContactForm ? 'text-white' : 'text-white/30'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onContactClick}
          >
            CONTACT {showContactForm && <span className="ml-1">▼</span>}
          </div>
          {/* DOWNLOAD CV Link */}
          <div className="font-mono text-white/30 cursor-pointer transition duration-300 ease-in-out">
            <a
              href="https://drive.google.com/drive/folders/1pFhS2y59YHkBtUkeUvBTtNZfbewKzcao?usp=sharing" 
              download="FrancisJonesCV.pdf" 
              className="font-mono text-white/30 cursor-pointer transition duration-300 ease-in-out"
            >
              DOWNLOAD CV
          </a>

          </div>
        </div>
        <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono">
          Stockholm based. Pivoting from a career in healthcare and entrepenurship
          to pursue a career in tech and problem-solving. Humble, curious and quick to
          learn. <br /> Looking for opportunities for an internship autumn 2024.
        </div>
      </div>
    </header>
  );
};

export default Hero;
