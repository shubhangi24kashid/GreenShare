import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      image: "/images/profile.png", // Replace with your image path
      title: "Create Your Profile",
      description:
        "Rooted in Green Living: Join EcoSwap's Eco-Conscious Community",
    },
    {
      id: 2,
      image: "/images/match.png", // Replace with your image path
      title: "Find Your Match",
      description:
        "Discover, Swap, Thrive: Sustainable Treasures Await on EcoSwap",
    },
    {
      id: 3,
      image: "/images/swap.png", // Replace with your image path
      title: "Initiate a Swap",
      description:
        "Connect, Swap, Sustain: Your EcoSwap Adventure Begins Here",
    },
  ];

  return (
    <section className="how-it-works">
      <h2>Embark on Your Green Journey</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <img src={step.image} alt={step.title} />
            <h3 className="step">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
