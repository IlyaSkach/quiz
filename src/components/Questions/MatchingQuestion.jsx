import React, { useState } from "react";
import "./MatchingQuestion.scss";

const MatchQuestion = ({ question = {}, onAnswer = () => {} }) => {
  console.log("Rendering MatchQuestion with question:", question);

  const [topItems] = useState(question.pairs.top || []);
  const [bottomItems] = useState(question.pairs.bottom || []);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedPairs, setSelectedPairs] = useState({});

  const handleTopClick = (index) => {
    setSelectedTop(index);
  };

  const handleBottomClick = (index) => {
    if (selectedTop !== null) {
      setSelectedPairs({ ...selectedPairs, [selectedTop]: index });
      setSelectedTop(null);
    }
  };

  const handleSubmit = () => {
    onAnswer(question.id, selectedPairs);
  };

  const allPairsSelected =
    Object.keys(selectedPairs).length === topItems.length;

  return (
    <div className="match-question">
      <h2 className="match-question__text">{question.text}</h2>
      <div className="match-question__lists">
        <ul className="match-question__list">
          {topItems.map((item, index) => (
            <li
              key={index}
              className={`match-question__item ${
                selectedTop === index ? "selected" : ""
              } ${selectedPairs.hasOwnProperty(index) ? "paired" : ""}`}
              onClick={() => handleTopClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <svg
          className="svg"
          width="330"
          height="1"
          viewBox="0 0 330 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="330"
            height="1"
            transform="matrix(1 0 0 -1 0 1)"
            fill="url(#paint0_linear_10_7)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_7"
              x1="330"
              y1="0.5"
              x2="0"
              y2="0.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00FFFF" stop-opacity="0" />
              <stop offset="0.455" stop-color="#00FFFF" />
              <stop offset="1" stop-color="#00FFFF" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <ul className="match-question__list">
          {bottomItems.map((item, index) => (
            <li
              key={index}
              className={`match-question__item ${
                Object.values(selectedPairs).includes(index) ? "selected" : ""
              }`}
              onClick={() => handleBottomClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!allPairsSelected}
      >
        Ответить
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40"
            width="40"
            height="40"
            rx="20"
            transform="rotate(90 40 0)"
            fill="#11CCCC"
          />
          <path
            d="M10.9774 20.0019L29.0225 20.0019M29.0225 20.0019L21.8045 27.2199M29.0225 20.0019L21.8045 12.7838"
            stroke="#E0EFFF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MatchQuestion;
