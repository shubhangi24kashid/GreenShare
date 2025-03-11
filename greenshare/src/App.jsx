// src/App.jsx
import React from "react";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/Category";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Register from "./components/Register";
import GreenShareIntro from "./components/GreenShareIntro";
import { AuthProvider } from "./contexts/authContext"; // Import AuthProvider
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <CategoriesSection />
                <HowItWorks />
                <FAQ />
                <GreenShareIntro />
              </>
            }
          />
          {/* Register Page */}
          <Route path="/register" element={<Register />} />
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
