import React from "react";
import "./ProgressBar.scss";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar__text">
        Вопрос {current} из {total}
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;


