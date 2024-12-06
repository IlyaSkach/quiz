import React from "react";
import "./SingleChoiceQuestion.scss";

const SingleChoiceQuestion = ({ question, onAnswer }) => {
  return (
    <div className="question single-choice">
      <h2 className="title">{question.text}</h2>
      <p className="text">Выберите вариант:</p>
      <div className="optionssg">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="optionsg"
            onClick={() => onAnswer(question.id, index)} // Передаем id вопроса и индекс варианта
          >
            <div className="circlesg">{index + 1}</div>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleChoiceQuestion;

