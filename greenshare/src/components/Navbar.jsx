// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="/">GreenShare</a>
      </div>

      {/* Navigation Links (Using <div> Instead of <ul>) */}
      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="/">Home</a>
        <a href="/listings">Listings</a>
        <a href="/about">About</a>
        <a href="/support">Support</a>
      </div>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <a href="/login" className="login-btn">Login</a>
        <a href="/Register" className="get-started-btn">Get Started</a>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
