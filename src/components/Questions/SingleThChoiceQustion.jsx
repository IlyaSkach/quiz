import React from "react";
import "./SingleThChoiceQustion.scss";

const SingleThChoiceQuestion = ({ question, onAnswer }) => {
  console.log("Rendering SingleChoiceQuestion with question:", question);

  return (
    <div className="question single-choice">
      <h2>{question.text}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} className="option" onClick={() => onAnswer(question.id, index)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleThChoiceQuestion;