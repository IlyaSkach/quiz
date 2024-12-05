import React from "react";
import "./SingleImageQuestion.scss";

const SingleImageQuestion = ({ question, onAnswer }) => {
  console.log("Rendering SingleThChoiceQuestion with question:", question);

  return (
    <div className="question single-choice">
      <h2 className="title">{question.text}</h2>
   
      {question.image && (
        <div className="question-image">
          <img src={question.image} alt="Question" />
        </div>
      )}
         <p className="text">Что на картинке:</p>
      <div className="optionsim">
        {question.options.map((option, index) => (
          <button key={index} className="optionim" onClick={() => onAnswer(question.id, index)}>
                <div className="circle">{index + 1}</div>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SingleImageQuestion;