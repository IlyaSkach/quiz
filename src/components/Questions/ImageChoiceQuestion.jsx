import React, { useState } from "react";
import "./ImageChoiceQuestion.scss";

const ImageChoiceQuestion = ({ question, onAnswer }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setTimeout(() => {
      onAnswer(question.id, index); // Передаем выбранный индекс как ответ
    }, 300); // Добавляем задержку для отображения микроанимации
  };

  return (
    <div className="image-choice-question">
      <h2 className="image-choice-question__text">{question.text}</h2>
      <div className="image-choice-question__optionsi">
        {question.options.map((image, index) => (
          <div
            key={index}
            className={`image-choice-question__optioni ${
              selectedImage === index ? "selected" : ""
            }`}
            onClick={() => handleImageClick(index)}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageChoiceQuestion;
