import React from "react";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";  // ✅ Import new Home page
import Login from "./components/login";
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
