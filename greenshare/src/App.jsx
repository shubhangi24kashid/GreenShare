import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoriesSection from "./components/Category";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Register from "./components/Register";
import GreenShareIntro from "./components/GreenShareIntro";
import Login from "./components/login";
import { AuthProvider } from "./contexts/authContext"; // Import AuthProvider
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <CategoriesSection />
              <HowItWorks />
              <FAQ />
              <GreenShareIntro />
            </main>
          }
        />
        {/* Register Page */}
        <Route path="/register" element={<Register />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
