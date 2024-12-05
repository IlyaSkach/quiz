import React, { useState } from "react";
import "./MultiChoiceQuestion.scss";

const MultiChoiceQuestion = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleSubmit = () => {
    onAnswer(selected);
  };

  return (
    <div className="question multiple-choice">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selected.includes(index) ? "selected" : ""}`}
            onClick={() => toggleOption(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Ответить
      </button>
    </div>
  );
};

export default MultiChoiceQuestion;


