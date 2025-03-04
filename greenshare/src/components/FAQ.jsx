import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does GreenShare work?",
      answer:
        "GreenShare is a platform that allows users to swap eco-friendly and sustainable items with others. Simply create a profile, browse listings, initiate a swap, and complete the exchange in person. It's a convenient way to live a more sustainable lifestyle.",
    },
    {
      question: "Is GreenShare only for individuals, or can businesses participate?",
      answer:
        "GreenShare welcomes both individuals and businesses to participate, encouraging a broader community of sustainable sharing.",
    },
    {
      question: "How do I ensure the quality of items being swapped?",
      answer:
        "We encourage users to provide detailed descriptions and images. You can also communicate with the other party before confirming a swap.",
    },
    {
      question: "How do I communicate with other users on GreenShare?",
      answer:
        "GreenShare provides an in-platform messaging system to connect and coordinate with other users securely.",
    },
    {
      question: "Is there a fee for using GreenShare?",
      answer:
        "GreenShare is free to use for basic swaps. Premium features and business accounts may incur a small fee.",
    },
  ];

  return (
    <section className="faq-section">
      {/* Left Side - Title */}
      <div className="faq-title">
        <h2>Frequently Asked Questions</h2>
      </div>

      {/* Right Side - FAQ Items */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
