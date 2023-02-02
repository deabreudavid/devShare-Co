import React, { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const questions = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is the purpose of React?",
      answer:
        "The purpose of React is to help developers build fast, reusable UI components.",
    },
    {
      question: "What is the difference between React and React Native?",
      answer:
        "React is used for building web-based user interfaces, while React Native is used for building mobile apps for iOS and Android using native components.",
    },
    {
      question: "What are some key features of React?",
      answer:
        "Some key features of React include the ability to build reusable UI components, a virtual DOM that increases app performance, and a developer-friendly syntax.",
    },
  ];

  return (
    <div className="faqBody">
      {questions.map((question, index) => (
        <div key={question.id || index}>
          <button type="button" onClick={() => handleClick(index)}>
            {question.question}
            {activeIndex === index ? " - v" : " +"}
          </button>
          {activeIndex === index && (
            <p className="question">{question.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
