import React from "react";
import "./SingleImageQuestion.scss";

const SingleImageQuestion = ({ question, onAnswer }) => {
  console.log("Rendering SingleThChoiceQuestion with question:", question);

  return (
    <div className="question single-choice">
      <h2>{question.text}</h2>
      {question.image && (
        <div className="question-image">
          <img src={question.image} alt="Question" />
        </div>
      )}
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

export default SingleImageQuestion;