"use client"
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio/portfolio";
import Container from "./components/container/container";
import Footer from "./components/footer/page";
import Contact from "./components/contact/contact";
import { useState } from "react";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(!showContactForm);
  };
  return (
    <>
      <Container>

        <Hero 
          onContactClick={handleContactClick} 
          showContactForm={showContactForm}
        />
        {showContactForm ? (
          <Contact onCloseContactForm={() => setShowContactForm(false)} />
        ) : (
          <Portfolio />
        )}
          <Footer />
      </Container>
    </>
  );
}
