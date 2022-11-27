import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather React App</h1>

    <App />

    <p>
      <a href="https://github.com/lacanella/weather-react-app">
        Open-source code{" "}
      </a>{" "}
      by{" "}
      <a href="https://www.shecodesfoundation.org/candidates/karina-agakhanova-ukrainian">
        Karina Agakhanova
      </a>{" "}
      from <a href="https://www.shecodes.io/">Shecodes</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
