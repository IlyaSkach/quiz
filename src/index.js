import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let tg = window.Telegram;

if (tg !== undefined) {
  if (tg.WebApp !== undefined && tg.WebApp.initData !== "") {
    tg.WebApp.requestFullscreen();
  }
}

(function() {
  var { retrieveLaunchParams, postEvent } = window.telegramApps.sdk;
  var lp = retrieveLaunchParams();

  // Некоторые версии Telegram не требуют классов выше.
  if (['macos', 'tdesktop', 'weba', 'web', 'webk'].includes(lp.platform)) {
    return;
  }

  // Расширить приложение.
  postEvent('web_app_expand');

  document.body.classList.add('mobile-body');
  document.getElementById('wrap').classList.add('mobile-wrap');
  document.getElementById('content').classList.add('mobile-content');
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
