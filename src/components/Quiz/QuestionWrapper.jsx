import React from "react";
import SingleChoiceQuestion from "../Questions/SingleChoiceQuestion";
import MultiChoiceQuestion from "../Questions/MultiChoiceQuestion";
import MatchQuestion from "../Questions/MatchingQuestion";
import ImageChoiceQuestion from "../Questions/ImageChoiceQuestion";
import SingleThChoiceQuestion from "../Questions/SingleThChoiceQustion";
import SingleImageQuestion from "../Questions/SingleImageQuestion";

const QuestionWrapper = ({ question, onAnswer }) => {
  console.log("Rendering QuestionWrapper with question:", question); // Добавьте отладочное сообщение

  switch (question.type) {
    case "single-choice":
      return <SingleChoiceQuestion question={question} onAnswer={onAnswer} />;
    case "multi-choice":
      return <MultiChoiceQuestion question={question} onAnswer={onAnswer} />;
    case "singleth-choice":
      return <SingleThChoiceQuestion question={question} onAnswer={onAnswer} />;
    case "matching":
      return <MatchQuestion question={question} onAnswer={onAnswer} />;
    case "single-image":
      return <SingleImageQuestion question={question} onAnswer={onAnswer} />;
    case "image-choice":
      return <ImageChoiceQuestion question={question} onAnswer={onAnswer} />;
    default:
      return null;
  }
};

export default QuestionWrapper;
