"use client"
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Container from "./components/container/container";
import Footer from "./components/footer/page";
import Contact from "./components/contact/contact";
import { useState } from "react";
import SKills from "./components/skills/skills";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
    setShowPortfolio(false);
    setShowSkills(false);
  };

  const handlePortfolioClick = () => {
    setShowContactForm(false);
    setShowPortfolio(true);
    setShowSkills(false);
  };

  const handleSkillsClick = () => {
    setShowContactForm(false);
    setShowPortfolio(false);
    setShowSkills(true);
  };


  return (
    <>
      <Container>
      <Hero
          onContactClick={handleContactClick}
          onPortfolioClick={handlePortfolioClick}
          onSkillsClick={handleSkillsClick}
          showContactForm={showContactForm}
          showPortfolio={showPortfolio}
          showSkills={showSkills}
        />
        {showContactForm ? (
          <Contact />
        ) : showPortfolio ? (
          <Portfolio />
        ) : (
          <SKills />
        )}
        <Footer />
      </Container>
    </>
  );
}