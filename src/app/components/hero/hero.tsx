import styles from './hero.module.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

interface HeroProps {
  onContactClick: () => void;
  onPortfolioClick: () => void;
  onSkillsClick: () => void;
  showContactForm: boolean;
  showPortfolio: boolean;
  showSkills: boolean;
}

const Hero: React.FC<HeroProps> = ({
  onContactClick,
  onPortfolioClick,
  onSkillsClick,
  showContactForm,
  showPortfolio,
  showSkills,
}) => {
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
            PRESENTED BY <Link href="https://www.linkedin.com/in/francis-jones-498423297/" className="text-white underline">FRANCIS JONES</Link> <FontAwesomeIcon className='text-white' icon={faLinkedin} />
          </h1>

        <div className='w-full mt-10'>
        <style jsx global>
        {`
          @font-face {
            font-family: 'Trap';
            src: url('../app/assets/fonts/Trap_V1.1/Trap-Black.otf') format('opentype');
            font-weight: normal;
          }
        `}
      </style>
      <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
        <rect width="100%" height="100%" fill="#121417" />
        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="white"  font-size="85">
          FULLSTACK
        </text>
      </svg>
    </div>


      <div className="mt-14 flex flex-col lg:flex-row pr-6">
        <div className="flex flex-col lg:justify-between mb-6">

          <div
            className={`font-mono ${
              showPortfolio ? 'text-white' : 'text-white/30'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onPortfolioClick}
          >
            PORTFOLIO {showPortfolio && <span className="ml-1">▼</span>}
          </div>

          <div
            className={`font-mono ${
              showContactForm ? 'text-white' : 'text-white/30'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onContactClick}
          >
            CONTACT {showContactForm && <span className="ml-1">▼</span>}
          </div>

          <div
            className={`font-mono ${
              showSkills ? 'text-white' : 'text-white/30'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onSkillsClick}
          >
              SKILLS {showSkills && <span className="ml-1">▼</span>}
          </div>

          {/* DOWNLOAD CV USIG GOOGLE DRIVE FOR NOW */}
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
        {showPortfolio && <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono md:flex-col md:text-left">
          Stockholm based. Pivoting from a career in healthcare and entrepreneurship
          to pursue a career in tech and problem-solving. Humble, curious and quick to
          learn. <br /> Looking for opportunities for an internship autumn 2024.
        </div> }
        
        {showContactForm && <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono md:flex-col md:text-left">
            {`I'm eager to learn more about internships for autumn 2024. 
        Open to working on-site in Stockholm, or remote. Don't hesitate to contact me with any questions. 
        Also open to collaborations and freelance work.`}
        </div> }

        {showSkills &&
        <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono md:flex-col md:text-left">
                    Constantly looking to learn new technologies and frameworks to broaden my skillset, with focus currently on backend and serverside development in Node and PHP. <br/> 
                    Something which I am particularly interested in diving into more is the implementation of LLMs within web apps for improving UX and the exciting possibilities they will bring. 
        </div>
        }
      </div>
    </header>
  );
};

export default Hero;
