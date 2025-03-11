// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Swap. Share. Sustain.</h1>
        <p>Join GreenShare to swap items, reduce waste, and build a sustainable future.</p>
        <div className="hero-buttons">
          <a href="/Register" className="cta-btn get-started">Get Started</a>
          <a href="/listings" className="cta-btn explore">Explore Items</a>
        </div>
       
      </div>
    </section>
  );
};

export default Hero;
