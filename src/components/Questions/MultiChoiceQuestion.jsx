import React, { useState } from "react";
import "./MultiChoiceQuestion.scss";

const MultiChoiceQuestion = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState([]);

  const toggleOption = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index)); // Убираем, если уже выбран
    } else {
      setSelected([...selected, index]); // Добавляем в массив выбранных
    }
  };

  const handleSubmit = () => {
    onAnswer(question.id, selected); // Передаем id вопроса и выбранные индексы
  };

  return (
    <div className="question multiple-choice">
      <h2 className="title">{question.text}</h2>
      <p className="text">Выберите правильные варианты:</p>
      <div className="optionsml">
        {question.options.map((option, index) => (
          <label key={index} className="optionml">
            <input
              type="checkbox"
              checked={selected.includes(index)} // Отображаем, если индекс выбран
              onChange={() => toggleOption(index)} // Обработчик изменения
            />
            <span className="custom-checkbox"></span>
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
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
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default MultiChoiceQuestion;

