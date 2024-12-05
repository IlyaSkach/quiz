import React from "react";

const ResultScreen = ({ answers, questions }) => {
  const correctAnswersCount = questions.reduce((count, question) => {
    const userAnswer = answers[question.id];
    const correctAnswer = question.correctAnswer;
    if (question.type === "matching") {
      const isCorrect = Object.keys(correctAnswer).every(
        (key) => correctAnswer[key] === userAnswer[key]
      );
      return isCorrect ? count + 1 : count;
    }
    return userAnswer === correctAnswer ? count + 1 : count;
  }, 0);

  return (
    <div className="result-screen">
      <h2>Результаты</h2>
      <p>Вы правильно ответили на {correctAnswersCount} из {questions.length} вопросов.</p>
    </div>
  );
};

export default ResultScreen;