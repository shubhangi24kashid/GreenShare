import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/Category";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import GreenShareIntro from "./components/GreenShareIntro";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoriesSection />
      <HowItWorks />
      <FAQ />
      <GreenShareIntro />
    </div>
  );
}

export default App;
