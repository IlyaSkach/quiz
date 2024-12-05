import React, { useState } from "react";
import "./MatchingQuestion.scss";

const MatchQuestion = ({ question = {}, onAnswer = () => {} }) => {
  console.log("Rendering MatchQuestion with question:", question);

  const [topItems, setTopItems] = useState(question.pairs.top || []);
  const [bottomItems, setBottomItems] = useState(question.pairs.bottom || []);
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

  const allPairsSelected = Object.keys(selectedPairs).length === topItems.length;

  return (
    <div className="match-question">
      <h2 className="match-question__text">{question.text}</h2>
      <div className="match-question__lists">
        <ul className="match-question__list">
          {topItems.map((item, index) => (
            <li
              key={index}
              className={`match-question__item ${selectedTop === index ? "selected" : ""} ${selectedPairs.hasOwnProperty(index) ? "paired" : ""}`}
              onClick={() => handleTopClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="match-question__list">
          {bottomItems.map((item, index) => (
            <li
              key={index}
              className={`match-question__item ${Object.values(selectedPairs).includes(index) ? "selected" : ""}`}
              onClick={() => handleBottomClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="submit-button" onClick={handleSubmit} disabled={!allPairsSelected}>
        Ответить
      </button>
    </div>
  );
};

export default MatchQuestion;

