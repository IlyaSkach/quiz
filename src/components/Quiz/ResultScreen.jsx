// import React from "react";

// const ResultScreen = ({ answers, questions }) => {
//   const correctAnswersCount = questions.reduce((count, question) => {
//     const userAnswer = answers[question.id];
//     const correctAnswer = question.correctAnswer;
//     if (question.type === "matching") {
//       const isCorrect = Object.keys(correctAnswer).every(
//         (key) => correctAnswer[key] === userAnswer[key]
//       );
//       return isCorrect ? count + 1 : count;
//     }
//     return userAnswer === correctAnswer ? count + 1 : count;
//   }, 0);

//   return (
//     <div className="result-screen">
//       <h2>Результаты</h2>
//       <p>Вы правильно ответили на {correctAnswersCount} из {questions.length} вопросов.</p>
//     </div>
//   );
// };

// export default ResultScreen;

import React from "react";
import "./ResultScreen.scss";

// import CupSvg from './cup.svg'
import { ReactComponent as CupSvg } from "./cup.svg";
import { ReactComponent as MissSvg } from "./one.svg";

const ResultScreen = ({ answers, questions }) => {
  const correctAnswersCount = questions.reduce((count, question) => {
    const userAnswer = answers[question.id];
    const correctAnswer = question.correctAnswer;

    if (question.type === "multi-choice") {
      const isCorrect =
        Array.isArray(userAnswer) &&
        userAnswer.length === correctAnswer.length &&
        userAnswer.every((ans) => correctAnswer.includes(ans));
      return isCorrect ? count + 1 : count;
    }

    if (question.type === "matching") {
      const isCorrect = Object.entries(correctAnswer).every(
        ([key, value]) => userAnswer[key] === value
      );
      return isCorrect ? count + 1 : count;
    }

    return userAnswer === correctAnswer ? count + 1 : count;
  }, 0);

  const totalQuestions = questions.length;
  const scorePercentage = Math.round(
    (correctAnswersCount / totalQuestions) * 100
  );

  const isHighScore = correctAnswersCount >= Math.ceil(totalQuestions * 0.7);

  return (
    <>
      <div className="conteiner">
        <header className="header-result">
          <svg
            width="222"
            height="62"
            viewBox="0 0 222 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_164)">
              <path
                d="M87.7615 8.7981H89.6299V21.8181H87.7615V8.7981ZM92.4325 19.4562L89.6299 8.7981H91.4691L94.2718 19.4562H92.4325ZM97.2496 8.7981H99.0596L96.111 19.4562H94.2718L97.2496 8.7981ZM99.0596 8.7981H101.016V21.8181H99.0596V8.7981Z"
                fill="white"
              />
              <path
                d="M106.767 8.7981H108.84L106.563 16.0905H111.117L108.84 8.7981H110.942L115 21.8181H112.898L111.672 17.921H105.979L104.782 21.8181H102.738L106.767 8.7981Z"
                fill="white"
              />
              <path
                d="M115.321 15.3228C115.321 11.219 118.211 8.56189 121.715 8.56189C124.43 8.56189 126.765 10.1562 127.583 12.7543H125.422C124.751 11.3371 123.408 10.4514 121.715 10.4514C119.204 10.4514 117.335 12.4295 117.335 15.3228C117.335 18.2162 119.204 20.1943 121.715 20.1943C123.466 20.1943 124.868 19.2495 125.51 17.7143H127.641C126.882 20.4009 124.488 22.0838 121.715 22.0838C118.211 22.0838 115.321 19.4267 115.321 15.3228Z"
                fill="white"
              />
              <path
                d="M131.728 10.6581H128.458V8.82761H136.983V10.6581H133.713V21.8476H131.757V10.6581H131.728Z"
                fill="white"
              />
              <path
                d="M138.968 8.7981H145.449V10.6286H140.895V14.0238H144.895V15.8543H140.895V19.9876H145.625V21.8181H138.939V8.7981H138.968Z"
                fill="white"
              />
              <path
                d="M147.96 8.7981H151.609C154.003 8.7981 155.754 10.4219 155.754 12.9019C155.754 15.3524 154.003 17.0057 151.609 17.0057H149.916V21.8476H147.96V8.7981ZM151.609 15.1457C152.893 15.1457 153.711 14.2305 153.711 12.9019C153.711 11.5733 152.893 10.6581 151.609 10.6581H149.916V15.1457H151.609Z"
                fill="white"
              />
              <path
                d="M157.069 15.3228C157.069 11.219 159.959 8.56189 163.462 8.56189C166.177 8.56189 168.513 10.1562 169.33 12.7543H167.17C166.498 11.3371 165.156 10.4514 163.462 10.4514C160.952 10.4514 159.083 12.4295 159.083 15.3228C159.083 18.2162 160.952 20.1943 163.462 20.1943C165.214 20.1943 166.615 19.2495 167.257 17.7143H169.389C168.63 20.4009 166.236 22.0838 163.462 22.0838C159.959 22.0838 157.069 19.4267 157.069 15.3228Z"
                fill="white"
              />
              <path
                d="M171.637 8.7981H173.593V21.8181H171.637V8.7981ZM173.593 14.7914L177.797 8.7981H179.957L175.841 14.6733L180.833 21.8476H178.526L173.593 14.7914Z"
                fill="white"
              />
              <path
                d="M185.562 8.7981H187.635L185.358 16.0905H189.912L187.635 8.7981H189.737L193.795 21.8181H191.693L190.467 17.921H184.774L183.577 21.8181H181.504L185.562 8.7981Z"
                fill="white"
              />
              <path
                d="M200.859 21.8181V10.6286H198.991C197.677 10.6286 196.86 11.3667 196.86 12.5772C196.86 13.8172 197.677 14.5553 198.991 14.5553H200.859L196.451 21.8181H194.232L197.706 16.061C195.984 15.6772 194.787 14.4962 194.787 12.5772C194.787 10.2448 196.539 8.76859 198.962 8.76859H202.786V21.7886H200.859V21.8181Z"
                fill="white"
              />
              <path
                d="M87.7615 31.1181H89.7175V36.3438H96.4905V31.1181H98.4465V44.1381H96.4905V38.1743H89.7175V44.1381H87.7615V31.1181Z"
                fill="white"
              />
              <path
                d="M100.724 37.6428C100.724 33.539 103.673 30.8819 107.322 30.8819C110.971 30.8819 113.92 33.539 113.92 37.6428C113.92 41.7467 110.971 44.4038 107.322 44.4038C103.673 44.4038 100.724 41.7467 100.724 37.6428ZM107.293 42.5143C109.891 42.5143 111.847 40.5362 111.847 37.6428C111.847 34.7495 109.891 32.7714 107.293 32.7714C104.694 32.7714 102.738 34.7495 102.738 37.6428C102.738 40.5362 104.694 42.5143 107.293 42.5143Z"
                fill="white"
              />
              <path
                d="M116.168 31.1181H119.7C122.065 31.1181 123.641 32.4467 123.641 34.5724C123.641 35.8124 123.145 36.6686 122.299 37.1705C123.495 37.6724 124.284 38.6467 124.284 40.2705C124.284 42.7505 122.444 44.1676 120.051 44.1676H116.168V31.1181ZM119.7 36.4619C121.043 36.4619 121.685 35.7829 121.685 34.6905C121.685 33.5981 121.043 32.9191 119.7 32.9191H118.124V36.4619H119.7ZM120.08 42.3667C121.539 42.3667 122.328 41.481 122.328 40.241C122.328 38.9714 121.539 38.1152 120.08 38.1152H118.124V42.3962H120.08V42.3667Z"
                fill="white"
              />
              <path
                d="M126.502 31.1181H128.458V36.3438H130.677C133.1 36.3438 134.822 37.9381 134.822 40.241C134.822 42.5733 133.071 44.1381 130.677 44.1381H126.502V31.1181ZM130.677 42.3076C131.99 42.3076 132.808 41.481 132.808 40.2705C132.808 39.0305 131.99 38.2038 130.677 38.2038H128.458V42.3076H130.677ZM136.311 31.1181H138.267V44.1381H136.311V31.1181Z"
                fill="white"
              />
              <path
                d="M144.077 37.2295L140.516 31.1181H142.764L145.187 35.3991L147.668 31.1181H149.829L146.267 37.141L150.383 44.1676H148.135L145.128 38.9714L142.15 44.1676H139.99L144.077 37.2295Z"
                fill="white"
              />
              <path
                d="M157.653 31.1181H159.521V44.1381H157.653V31.1181ZM162.324 41.7762L159.521 31.1181H161.36L164.163 41.7762H162.324ZM167.111 31.1181H168.922L165.973 41.7762H164.163L167.111 31.1181ZM168.951 31.1181H170.907V44.1381H168.951V31.1181Z"
                fill="white"
              />
              <path
                d="M173.797 31.1181H180.278V32.9486H175.723V36.3438H179.723V38.1743H175.723V42.2781H180.453V44.1086H173.767V31.1181H173.797Z"
                fill="white"
              />
              <path
                d="M181.709 42.3076H182.38C183.489 42.3076 184.103 41.7762 184.19 40.4181L184.716 31.1181H193.007V42.3076H194.321V46.5591H192.715V44.1381H183.314V46.5591H181.709V42.3076ZM191.08 42.3076V32.9781H186.613L186.146 40.4476C186.088 41.2743 185.883 41.8943 185.533 42.3371H191.08V42.3076Z"
                fill="white"
              />
              <path
                d="M196.51 31.1181H198.378V44.1381H196.51V31.1181ZM198.378 44.1676L203.429 31.1476H205.502L200.451 44.1676H198.378ZM205.502 31.1181H207.37V44.1381H205.502V31.1181Z"
                fill="white"
              />
              <path
                d="M213.121 31.1181H215.194L212.917 38.4105H217.471L215.194 31.1181H217.296L221.354 44.1381H219.252L218.026 40.241H212.333L211.136 44.1381H209.063L213.121 31.1181Z"
                fill="white"
              />
              <path
                d="M44.1456 17.6552V26.4829H26.6874V17.6552H17.9584V44.1676H26.6874V35.34H44.1456V44.1676H52.8746V17.6552H44.1456Z"
                fill="#11CCCC"
              />
              <path
                d="M9.22906 0V8.82762H0.5V26.4829H9.22906V17.6552H17.9581V8.82762H26.6872V0H9.22906Z"
                fill="#11CCCC"
              />
              <path
                d="M61.6034 35.34V44.1676H52.8743V52.9952H44.1453V61.8229H61.6034V52.9952H70.3324V35.34H61.6034Z"
                fill="#11CCCC"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_164">
                <rect
                  width="221"
                  height="62"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          {/* <img src="./logoNew.png" alt="Мастерская новых медиа" className="result-screen__logo" />
        <h2 className="result-screen__title">Мастерская новых медиа</h2> */}
        </header>
        <div className="result-screen">
          <main className="result-screen__content">
            <div className="result-screen__trophy">
              {isHighScore ? <CupSvg /> : <CupSvg />}
            </div>
            <h2 className="score">
              {correctAnswersCount} из {totalQuestions}
            </h2>
            <p className="message">
              {isHighScore ? `Поздравляем! Ты –` : `Неплохо! Ты можешь лучше!`}{" "}
              <span className="highlight">
                {isHighScore ? "МОЛОДЕЦ" : "ПРОБУЙ"}
              </span>
            </p>
            <p className="stat">
              {scorePercentage}% участников ответили так же
            </p>
          </main>

          <footer className="result-screen__footer">
            <button
              className="submit-button"
              onClick={() => alert("Поделиться в сторис")}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_73)">
                  <path
                    d="M20.0083 40.0167C31.0586 40.0167 40.0167 31.0586 40.0167 20.0083C40.0167 8.95803 31.0586 0 20.0083 0C8.95803 0 0 8.95803 0 20.0083C0 31.0586 8.95803 40.0167 20.0083 40.0167Z"
                    fill="url(#paint0_linear_2_73)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.04629 19.7918C14.8772 17.2595 18.7589 15.5768 20.7081 14.7605C26.2558 12.4448 27.422 12.045 28.1716 12.0283C28.3382 12.0283 28.7048 12.0616 28.9547 12.2616C29.1546 12.4282 29.2046 12.6447 29.2379 12.8113C29.2712 12.9779 29.3045 13.3278 29.2712 13.5943C28.9713 16.7597 27.6719 24.4398 27.0055 27.9717C26.7223 29.4711 26.1725 29.9708 25.6394 30.0208C24.4732 30.1208 23.5902 29.2545 22.474 28.5214C20.7081 27.3719 19.7252 26.6556 18.0092 25.5227C16.0267 24.2232 17.3095 23.5069 18.4424 22.3407C18.7422 22.0408 23.8568 17.3761 23.9567 16.9596C23.9734 16.9096 23.9734 16.7097 23.8568 16.6097C23.7402 16.5098 23.5736 16.5431 23.4403 16.5764C23.257 16.6097 20.4582 18.4756 15.0105 22.1574C14.2108 22.7072 13.4944 22.9738 12.8447 22.9571C12.1283 22.9404 10.7622 22.5573 9.72933 22.2241C8.47985 21.8242 7.48027 21.6077 7.56357 20.908C7.61355 20.5414 8.11334 20.1749 9.04629 19.7918Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_73"
                    x1="19.9917"
                    y1="0"
                    x2="19.9917"
                    y2="39.7001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                  <clipPath id="clip0_2_73">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Поделиться в сторис
            </button>
            <button
              className="submit-button"
              onClick={() => alert("Скачать картинку")}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="40"
                  y="40"
                  width="40"
                  height="40"
                  rx="20"
                  transform="rotate(-180 40 40)"
                  fill="#11CCCC"
                />
                <path
                  d="M19.9981 10.9774V29.0225M19.9981 29.0225L12.7801 21.8045M19.9981 29.0225L27.2162 21.8045"
                  stroke="#E0EFFF"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Скачать картинку
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ResultScreen;
