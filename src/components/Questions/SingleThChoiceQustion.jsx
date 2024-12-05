import React from "react";
import "./SingleThChoiceQustion.scss";

const SingleThChoiceQuestion = ({ question, onAnswer }) => {
  console.log("Rendering SingleChoiceQuestion with question:", question);

  return (
    <div className="question single-choice">
      <h2 className="title">{question.text}</h2>
      <p className="text">Выберите вариант:</p>
      <div className="optionstd">
        {question.options.map((option, index) => (
          <button key={index} className="optiontd" onClick={() => onAnswer(question.id, index)}>
               <div className="circle">{index + 1}</div>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleThChoiceQuestion;