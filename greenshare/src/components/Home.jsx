import React from "react";
import Hero from "./Hero";
import CategoriesSection from "./Category";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import GreenShareIntro from "./GreenShareIntro";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await doSignOut();
    navigate("/login");
  };

  return (
    <div>
      {/* Sections */}
      <Hero />
      <CategoriesSection />
      <HowItWorks />
      <FAQ />
      <GreenShareIntro />

      {/* Logout Button */}
      {userLoggedIn && (
        <div className="flex justify-center my-6">
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
