import { useState } from "react";
import "./CSS/Faq.css";

// eslint-disable-next-line react/prop-types
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq__item">
      <div className="faq__question" onClick={toggleOpen}>
        {question}
        <span className={isOpen ? "rotate" : ""}>▼</span>
      </div>
      {isOpen && <div className="faq__answer">{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Is the store official?",
      answer:
        "No, the store is not official from Valve, the store belongs to the TPB community.",
    },
    {
      question: "If I have skins to sell, can you offer them in the store?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
    {
      question: "Can I sell my skins?",
      answer:
        "Yes, to find out more about how to sell your skins, go to the about us section.",
    },
  ];

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <hr />
      <div className="faq__container">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
