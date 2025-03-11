import React from "react";
import "./GreenShareIntro.css";
import { Link } from 'react-router-dom';

const GreenShareIntro = () => {
  return (
    <section className="greenshare-section">
      {/* Sun Glow Effect */}
      <div className="sun-glow"></div>

      {/* Intro Text */}
      <div className="intro-text">
        <h1>Start Swapping For A Greener World</h1>
       

<Link to="/register">
  <button className="intro-btn">Get Started</button>
</Link>
      </div>

      {/* Cloud Overlay */}
      <div className="cloud-container">
        <svg
          className="clouds"
          width="100%"
          height="150"
          viewBox="0 0 1200 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C300,100 300,0 600,40 C900,80 900,20 1200,60 L1200,150 L0,150 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default GreenShareIntro;
