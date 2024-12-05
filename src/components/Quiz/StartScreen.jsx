import React from "react";
import "./StartScreen.scss";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1 className="start-screen__title">
        Кто ты <br></br> в медиа?
      </h1>
      <button className="start-screen__button" onClick={onStart}>
        Начать{" "}
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40.5"
            width="40"
            height="40"
            rx="20"
            transform="rotate(90 40.5 0)"
            fill="#11CCCC"
          />
          <path
            d="M11.4774 20.0019L29.5225 20.0019M29.5225 20.0019L22.3044 27.2199M29.5225 20.0019L22.3044 12.7838"
            stroke="#E0EFFF"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {/* <span className="start-screen__icon">➔</span> */}
      </button>
    </div>
  );
};

export default StartScreen;
