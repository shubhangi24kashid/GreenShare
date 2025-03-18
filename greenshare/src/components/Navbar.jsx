import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/authContext.jsx";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">GreenShare</Link>
      </div>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/listings" className={isActive("/listings") ? "active" : ""}>Listings</Link>
        <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
        <Link to="/support" className={isActive("/support") ? "active" : ""}>Support</Link>
      </div>

      <div className="auth-buttons">
        {!user ? (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="get-started-btn">Get Started</Link>
          </>
        ) : (
          <button onClick={logout} className="logout-btn">Logout</button>
        )}
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
