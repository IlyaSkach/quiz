import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import QuestionWrapper from "./QuestionWrapper";
import StartScreen from "./StartScreen";
import ResultScreen from "./ResultScreen";
import questions from "../../utils/questionData";
import "./Quiz.scss";

const Quiz = () => {
  const [currentScreen, setCurrentScreen] = useState("start"); // Экран: start, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleStart = () => setCurrentScreen("quiz");
  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen("result");
    }
  };

  return (
    <div className="quiz-container">
      {currentScreen === "start" && <StartScreen onStart={handleStart} />}
      {currentScreen === "quiz" && (
        <>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={questions.length}
          />
          <QuestionWrapper
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      )}
      {currentScreen === "result" && <ResultScreen answers={answers} questions={questions} />}
    </div>
  );
};

export default Quiz;


