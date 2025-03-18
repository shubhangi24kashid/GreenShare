// src/components/Dashboard.jsx
import React from "react";
import { useAuth } from "../contexts/authContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      <div className="dashboard-section">
        <h2>Embark on Your Green Journey</h2>
        <p>Access all your eco-friendly resources and manage your profile.</p>
      </div>

      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
